const {ngPackagr} = require('ng-packagr');

async function build () {
  await ngPackagr()
  .forProject('./lib/button/package.json')
  .withTsConfig('./lib/tsconfig.json')
  .build();

  await ngPackagr()
  .forProject('./lib/package.json')
  .withTsConfig('./lib/tsconfig-build.json')
  .build();
}

build()
.then(() => console.log('done'))
.catch(e => console.error(e));
