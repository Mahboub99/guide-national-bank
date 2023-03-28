### Creating a build
- `yarn build`
- In index.html, change all `/static` to `./static`
- Move `index.css` and woff files from fonts to build
- Include `index.css` in `index.html`
- Change other `/x` links in index.html head to `./x`
- Change `t.p="/"` or `n.p="/"` to `t.p=""` or `n.p=""` in `static/js/main.<garbage>.js`