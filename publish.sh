#!/bin/bash

PACKAGE_VERSION=$(cat package.json \
  | grep version \
  | head -1 \
  | awk -F: '{ print $2 }' \
  | sed 's/[",]//g')

npm run build

# replace all occurrences of [/index] in 'dist/'
node publish_index_remove.js

git tag $PACKAGE_VERSION
git push
git push --tags

cd dist/

echo
echo "Files, published now ..."
echo
ls
npm publish
