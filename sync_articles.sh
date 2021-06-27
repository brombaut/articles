#!/bin/bash

/usr/local/bin/node \
  syncer/build/index.js \
  ./src_md \
  ./src_html \
  /Users/BenRombaut/dev/benrombaut.ca/src/articles \
  authored_articles_meta.json \
  authored_articles_content.json;