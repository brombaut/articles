import fs from 'fs';
const util = require('util');
const exec = util.promisify(require('child_process').exec);
import { LocalFile } from "./LocalFile";

export class MdToHtmlConverter {
  private _mdDir: string;
  private _htmlDir: string;
  private _convertedFiles: LocalFile[];

  constructor(mdDir: string, htmlDir: string) {
    this._mdDir = mdDir;
    this._htmlDir = htmlDir;
    this._convertedFiles = [];
  }

  get convertedFiles(): LocalFile[] {
    return this._convertedFiles;
  }

  async convert() {
    console.info('Getting list of article MDs...')
    const toConvert: LocalFile[] = this.getListOfArticleMDs();
    console.info('Converting to HTML files...')
    this._convertedFiles = await this.convertFiles(toConvert);
  }
  
  private getListOfArticleMDs(): LocalFile[] {
    const files = fs.readdirSync(this._mdDir);
    console.info(`MD files found: ${files}`);
    return files.map((fileName: string) => {
      const noExtention = fileName.split('.')[0];
      return new LocalFile(noExtention, this._mdDir, this._htmlDir);
    });
  }

  private async convertFiles(toConvert: LocalFile[]): Promise<LocalFile[]> {
    for (const lf of toConvert) {
      await this.convertFile(lf);
    }
    return toConvert;
  }

  private async convertFile(lf: LocalFile) {
    const command: string = `pandoc ${lf.mdPath} -o ${lf.htmlPath};`
    console.info(`Running: ${command}`)
    const { stdout, stderr } = await exec(command);
    if (stderr) {
      console.error('stderr:', stderr);
    }
  }
}