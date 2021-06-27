export class LocalFile {
  name: string;
  mdPath: string;
  htmlPath: string;
  
  constructor(name: string, mdDir: string, htmlDir: string) {
    this.name = name;
    this.mdPath = `${mdDir}/${name}.md`;
    this.htmlPath = `${htmlDir}/${name}.html`;
  }
}