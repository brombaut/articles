import os
import shutil 


NOTEBOOK_DIR = f"{os.path.dirname(os.path.realpath(__file__))}/../src_notebooks"
MD_DIR = f"{os.path.dirname(os.path.realpath(__file__))}/../src_md"
ASSETS_IMAGES_DIR = f"{os.path.dirname(os.path.realpath(__file__))}/../assets/images"
GH_IMAGES_PREFIX = "https://raw.githubusercontent.com/brombaut/articles-authored/main/assets/images"

def main():
    nb_dirs = get_list_of_notebook_directories()
    for nb_dir in nb_dirs:
        copy_notebook(nb_dir)


def get_list_of_notebook_directories():
    result = list()
    for file in os.listdir(NOTEBOOK_DIR):
        d = os.path.join(NOTEBOOK_DIR, file)
        if os.path.isdir(d):
            result.append(d)
    return result


def copy_notebook(nb_dir):
    def article_md_does_not_exist(nb_dir, article_name):
        return not os.path.isfile(f"{nb_dir}/{article_name}.md") 

    article_name = os.path.basename(os.path.normpath(nb_dir))
    
    # There should be 1 <article_name>.ipynb file, 1 <article_name>.md file, and 1 directory with the name <article_name>_files
    # which contains any images (so it might not actually be there)
    if article_md_does_not_exist(nb_dir, article_name):
        return
    copy_notebook_md(nb_dir, article_name)
    copy_notebook_files_directory(nb_dir, article_name)



def copy_notebook_md(nb_dir, article_name):
    def read_file_as_str(path):
        with open(path, "r") as f:
            return f.read()

    def replace_image_paths_with_correct_path(md_str):
        search_str = f"![png]({article_name}_files"
        replace_str = f"![png]({GH_IMAGES_PREFIX}/{article_name}"
        return md_str.replace(search_str, replace_str)
    
    def write_new_md_to_src_md(md_str):
        with open(f"{MD_DIR}/{article_name}.md", "w") as f:
            f.write(md_str)
    
    original_md = read_file_as_str(f"{nb_dir}/{article_name}.md")
    updated_md = replace_image_paths_with_correct_path(original_md)
    write_new_md_to_src_md(updated_md)



def copy_notebook_files_directory(nb_dir, article_name):
    articles_files_src_dir = f"{nb_dir}/{article_name}_files"
    if os.path.isdir(articles_files_src_dir):
        articles_files_dst_dir = f"{ASSETS_IMAGES_DIR}/{article_name}"
        if os.path.exists(articles_files_dst_dir):
            shutil.rmtree(articles_files_dst_dir)
        shutil.copytree(articles_files_src_dir, articles_files_dst_dir) 


if __name__ == "__main__":
    main()
