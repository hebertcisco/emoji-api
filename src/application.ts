import helmet from 'helmet';
import cors from 'cors';
import * as bodyParser from 'body-parser';

import express from 'express';
import compression from 'compression';
import morgan from 'morgan';

import Routes from './routes';
import {
  BODY_PARSER_LIMIT,
  MORGAN_FORMAT,
} from './shared/constants/app.constants';

export class Application {
  public app: express.Application;

  public constructor() {
    this.initialize()
      .then(() => process.stdout.write('Server started\n'))
      .catch((err) => {
        process.stderr.write(err.message);
        process.exit(1);
      });
  }

  protected async initialize(): Promise<void> {
    this.app = express();
    this.app.use(cors());
    this.app.use(helmet());
    this.app.use(compression());
    this.app.use(bodyParser.json({ limit: BODY_PARSER_LIMIT }));
    this.app.use(
      bodyParser.urlencoded({ limit: BODY_PARSER_LIMIT, extended: true })
    );
    this.app.use(morgan(MORGAN_FORMAT));
    this.app.use(Routes);
  }
}

export default new Application().app;
