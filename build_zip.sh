#!/bin/bash

# - `yarn build`
yarn build;

# - In index.html, change all `/static` to `./static`
sed -i' ' 's/"\/static/"\.\/static/g' build/index.html;

# - Move `index.css` and woff files from fonts to build
cp fonts/* build/;

# - Include `index.css` in `index.html`
sed -i' ' 's/<\/head>/<link rel="stylesheet" href="index\.css"><\/head>/g' build/index.html;

# - Change other `/x` links in index.html head to `./x`
sed -i' ' 's/"\//"\.\//g' build/index.html;

# - Change `t.p="/"` or `n.p="/"` to `t.p=""` or `n.p=""` in `static/js/main.<garbage>.js`
sed -i' ' 's/t\.p="\/"/t\.p=""/g' build/static/js/main.*.js;
sed -i' ' 's/n\.p="\/"/n\.p=""/g' build/static/js/main.*.js;

# - Zip the build folder contents into `build.zip`
zip -r build.zip build/*;