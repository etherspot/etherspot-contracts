import { main } from './main';

main()
  .catch(err => console.error(err))
  .finally(() => process.exit());
