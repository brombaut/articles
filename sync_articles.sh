#!/bin/bash

/Users/BenRombaut/opt/anaconda3/envs/articles/bin/python ./ipynp_to_md_syncer/ipynp_to_md_syncer.py

source $(brew --prefix nvm)/nvm.sh
nvm use 12

node \
  md_to_html_syncer/build/index.js \
  ./src_md \
  ./src_html \
  /Users/BenRombaut/dev/benrombaut.ca/src/articles \
  authored_articles_meta.json \
  authored_articles_content.json;

# /usr/local/bin/node \
#   syncer/build/index.js \
#   ./src_md \
#   ./src_html \
#   /Users/BenRombaut/dev/benrombaut.ca/src/articles \
#   authored_articles_meta.json \
#   authored_articles_content.json;