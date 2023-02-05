import { printSchema } from 'graphql/utilities';
import fs from 'node:fs/promises';
import path from 'node:path';

import { schema } from '../src/schema';

(async () => {
  await fs.writeFile(
    path.join(__dirname, `../schema/schema.graphql`),
    printSchema(schema),
  );

  process.exit(0);
})();
