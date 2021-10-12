https://github.com/antfu/unplugin-icons/issues/94


Reproduction steps:

1. Run `yarn build`
2. Run `yarn build` (warm cache) => OK
<!-- 3. Edit `src/index.js` (for example uncomment the console.log) -->
3. Run  `yarn build` (warm cache again) => ERROR

You can `rm -rf .webpack-cache` to try again.
