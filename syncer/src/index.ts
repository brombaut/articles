import { RawArticleBuilder, RawArticle } from "./RawArticle";
import { MdToHtmlConverter } from "./MdToHtmlConverter";

const MD_DIR = "../src_md"
const HTML_DIR = "../src_html"

async function main() {
  const converter: MdToHtmlConverter = new MdToHtmlConverter(MD_DIR, HTML_DIR);
  await converter.convert();
  const rawArticleBuilder: RawArticleBuilder = new RawArticleBuilder(converter.convertedFiles);
  rawArticleBuilder.build();
  const rawArticles: RawArticle[] = rawArticleBuilder.rawArticles;
  console.log(rawArticles);
  console.log('Done')
}
main();