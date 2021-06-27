import { RawArticle } from "./RawArticle";
import fs from 'fs';

// TODO: Move this to @brombaut/types
export class AuthoredArticle {
  private _id: string;
  private _title: string;
  private _createdAt: Date;
  private _updatedAt: Date;
  private _body: string;
  private _tags: string[];
  private _show: boolean;

  constructor(id: string, title: string, ca: Date, ua: Date, body: string, tags: string[], show: boolean) {
    this._id = id;
    this._title = title;
    this._createdAt = ca;
    this._updatedAt = ua;
    this._body = body;
    this._tags = tags;
    this._show = show;
  }

  get id() {
    return this._id;
  }

  get body() {
    return this._body;
  }

  set body(body: string) {
    this._body = body;
    this._updatedAt = new Date();
  }
  
}

export class AuthoredArticlesProxy {
  private _file: string;
  private _authoredArticles: AuthoredArticle[];

  constructor(aaFile: string) {
    this._file = aaFile;
    this._authoredArticles = [];
  }

  get authoredArticles(): AuthoredArticle[] {
    return this._authoredArticles;
  }

  sync(ras: RawArticle[]): void {
    console.info(`Syncing authored articles with raw articles`);
    this.readExistingAuthoredArticles();
    for (const ra of ras) {
      this.syncRawArticle(ra)
    }
    this.writeSyncedAuthoredArticles();
  }

  private readExistingAuthoredArticles(): void {
    console.info(`Reading existing authored articles from ${this._file}`);
    const rawData = fs.readFileSync(this._file, {encoding:'utf8', flag:'r'});
    const jsonData = JSON.parse(rawData);
    const mapper = (dto: any): AuthoredArticle  => {
      return new AuthoredArticle(
        dto._id,
        dto._title,
        dto._createdAt,
        dto._updatedAt,
        dto._body,
        dto._tags,
        dto._show
      )
    };
    this._authoredArticles = jsonData.authoredArticles.map(mapper);
  }

  private syncRawArticle(rawArticle: RawArticle) {    
    const matchedExistingArticleIndex = this._authoredArticles.findIndex((aa: AuthoredArticle) => {
      // id is the file name of the original md file
      return aa.id === rawArticle.id;
    })
    if (matchedExistingArticleIndex < 0) {
      this.addNewAuthoredArticle(rawArticle)
    } else {
      this.updateExistingAuthoredArticleIfNecessary(rawArticle, matchedExistingArticleIndex);
    }
  }

  private updateExistingAuthoredArticleIfNecessary(rawArticle: RawArticle, matchedExistingArticleIndex: number): void {
    if (rawArticle.body !== this._authoredArticles[matchedExistingArticleIndex].body) {
      console.info(`Updating articled body: ${this._authoredArticles[matchedExistingArticleIndex].id}`)
      this._authoredArticles[matchedExistingArticleIndex].body = rawArticle.body;
    }
  }

  private addNewAuthoredArticle(rawArticle: RawArticle): void {
    console.log(`Adding new article: ${rawArticle.id}`)
    this._authoredArticles.push(
      new AuthoredArticle(
        rawArticle.id,
        '',
        rawArticle.createdAt,
        rawArticle.updatedAt,
        rawArticle.body,
        [],
        false
      )
    );
  }

  writeSyncedAuthoredArticles(): void {
    const jsonDate = {
      authoredArticles: this._authoredArticles
    }
    const rawData = JSON.stringify(jsonDate);
    console.info(`Writing synced authored articles to ${this._file}`);
    fs.writeFileSync(this._file, rawData);
  }
}