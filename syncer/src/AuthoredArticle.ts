import { RawArticle } from "./RawArticle";
import fs from 'fs';

// TODO: Move this to @brombaut/types
export class AuthoredArticle {

  constructor(
    private _id: string,
    private _title: string,
    private _createdAt: Date,
    private _updatedAt: Date,
    private _description: string,
    private _body: string,
    private _tags: string[],
    private _show: boolean
  ) { }


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

  get aaContents(): AuthoredArticleContent {
    return {
      _id: this._id,
      _body: this._body
    }
  }

  get aaMeta(): AuthoredArticleMeta {
    return {
      _id: this._id,
      _title: this._title,
      _createdAt: this._createdAt,
      _updatedAt: this._updatedAt,
      _description: this._description,
      _tags: this._tags,
      _show: this._show
    }
  }
  
}

interface AuthoredArticleContent {
  _id: string;
  _body: string;
}

interface AuthoredArticleMeta {
  _id: string;
  _title: string,
  _createdAt: Date,
  _updatedAt: Date,
  _description: string,
  _tags: string[],
  _show: boolean
}

export class AuthoredArticlesProxy {
  private _destinationDir: string;
  private _metaFile: string;
  private _contentFile: string;
  private _authoredArticles: AuthoredArticle[];

  constructor(aaDestinationDir: string, metaFile: string, contentFile: string) {
    this._destinationDir = aaDestinationDir;
    this._metaFile = metaFile;
    this._contentFile = contentFile;
    this._authoredArticles = [];
  }

  get authoredArticles(): AuthoredArticle[] {
    return this._authoredArticles;
  }

  get metaFilePath(): string {
    return `${this._destinationDir}/${this._metaFile}`
  }

  get contentFilePath(): string {
    return `${this._destinationDir}/${this._contentFile}`
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
    console.info(`Reading existing authored articles`);
    const aaMetas: AuthoredArticleMeta[] = this.readJsonFile<AuthoredArticleMeta>(this.metaFilePath);
    const aaContents: AuthoredArticleContent[] = this.readJsonFile<AuthoredArticleContent>(this.contentFilePath);
    const merged: (AuthoredArticleMeta | AuthoredArticleContent)[] = [];
    for (const meta of aaMetas) {
      const body: string = aaContents.find((aac: AuthoredArticleContent) => aac._id === meta._id)?._body || '';
      merged.push({
        ...meta,
        _body: body,
      })
    }
    const mapper = (dto: any): AuthoredArticle  => {
      return new AuthoredArticle(
        dto._id,
        dto._title,
        dto._createdAt,
        dto._updatedAt,
        dto._description,
        dto._body,
        dto._tags,
        dto._show
      )
    };
    this._authoredArticles = merged.map(mapper);
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
        '',
        rawArticle.body,
        [],
        false
      )
    );
  }

  writeSyncedAuthoredArticles(): void {
    console.info(`Writing synced authored articles`);
    const aaMetas: AuthoredArticleMeta[] = this._authoredArticles.map((aa: AuthoredArticle) => aa.aaMeta)
    const aaContents: AuthoredArticleContent[] = this._authoredArticles.map((aa: AuthoredArticle) => aa.aaContents)
    this.writeJsonFile<AuthoredArticleMeta>(this.metaFilePath, aaMetas);
    this.writeJsonFile<AuthoredArticleContent>(this.contentFilePath, aaContents);
  }

  private readJsonFile<T>(path: string): T[] {
    console.info(`Reading ${path}`);
    const rawData = fs.readFileSync(path, {encoding:'utf8', flag:'r'});
    const jsonData = JSON.parse(rawData);
    return jsonData.map((d: any) => d as T);
  }

  private writeJsonFile<T>(path: string, data: T[]): void {
    console.info(`Writing ${path}`);
    const rawData = JSON.stringify(data, null, 2);
    fs.writeFileSync(path, rawData);
  }
}