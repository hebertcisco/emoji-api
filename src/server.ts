import * as dotenv from 'dotenv';

import application from './application';
import { PORT } from './shared/constants/app.constants';

dotenv.config();

application.listen(PORT, (): boolean =>
  process.stdout.write(`Server running at port http://localhost:${PORT}\n`)
);
