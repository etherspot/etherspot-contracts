const main = require('./main');

main()
  .catch((err) => console.error(err))
  .finally(() => process.exit());
