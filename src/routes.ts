import { Router } from 'express';

import DefaultRouter from './domain/default.route';
import EmojiRouter from './domain/emoji/emoji.routes';

const Routes = Router();

Routes.use('/', DefaultRouter);
Routes.use('/emoji', EmojiRouter);

export default Routes;
