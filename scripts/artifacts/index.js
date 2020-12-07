const main = require('./artifacts');

main()
  .catch((err) => console.error(err))
  .finally(() => process.exit());
