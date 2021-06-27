import { RawArticleBuilder, RawArticle } from "./RawArticle";
import { MdToHtmlConverter } from "./MdToHtmlConverter";
import { AuthoredArticlesProxy } from "./AuthoredArticle";

async function main() {
  if (process.argv.length !== 5) {
    console.error('Requires MD_DIR, HTML_DIR, and AUTHORED_ARTICLES_FILE as command line args')
    process.exit(1);
  }
  const MD_DIR = process.argv[2];
  const HTML_DIR = process.argv[3];
  const AUTHORED_ARTICLES_FILE = process.argv[4];
  const converter: MdToHtmlConverter = new MdToHtmlConverter(MD_DIR, HTML_DIR);
  await converter.convert();
  const rawArticleBuilder: RawArticleBuilder = new RawArticleBuilder(converter.convertedFiles);
  rawArticleBuilder.build();
  const rawArticles: RawArticle[] = rawArticleBuilder.rawArticles;
  const aaReader: AuthoredArticlesProxy = new AuthoredArticlesProxy(AUTHORED_ARTICLES_FILE);
  aaReader.sync(rawArticles);
  console.log('Done')
}
main();