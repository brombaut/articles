import fs from 'fs';
import { LocalFile } from "./LocalFile";

export interface RawArticle {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  body: string;
}

export class RawArticleBuilder {
  private _localFiles: LocalFile[];
  private _rawArticles: RawArticle[];

  constructor(lfs: LocalFile[]) {
    this._localFiles = lfs;
    this._rawArticles = [];
  }

  build(): void {
    this._rawArticles = [];
    for (const lf of this._localFiles) {
      this._rawArticles.push(this.buildRawBraf(lf))
    }
  }

  get rawArticles(): RawArticle[] {
    return this._rawArticles
  }

  private buildRawBraf(lf: LocalFile): RawArticle {
    return {
      id: lf.name,
      createdAt: new Date(),
      updatedAt: new Date(),
      body: this.readFile(lf.htmlPath),
    }
  }

  private readFile(f: string): string {
    return fs.readFileSync(f, {encoding:'utf8', flag:'r'});
  }
}