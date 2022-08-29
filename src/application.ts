import helmet from 'helmet';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';

import * as express from 'express';
import * as compression from 'compression';
import * as morgan from 'morgan';

import * as Mongo from './infra/database';

import Routes from './routes';
import {
  BODY_PARSER_LIMIT,
  MORGAN_FORMAT,
} from './shared/constants/app.constants';

class Application {
  public express: express.Application;

  public constructor() {
    this.initialize()
      .then(() => process.stdout.write('Server started\n'))
      .catch((err) => {
        process.stderr.write(err.message);
        process.exit(1);
      });
  }

  protected async initialize(): Promise<void> {
    this.express = express();
    this.express.use(cors());
    this.express.use(helmet());
    this.express.use(compression());
    this.express.use(bodyParser.json({ limit: BODY_PARSER_LIMIT }));
    this.express.use(
      bodyParser.urlencoded({ limit: BODY_PARSER_LIMIT, extended: true })
    );
    this.express.use(morgan(MORGAN_FORMAT));
    this.express.use(Routes);
    await Mongo;
  }
}

export default new Application().express;
