import { Router } from 'express';

import emojiController from './emoji.controller';

const EmojiRouter = Router();

EmojiRouter.get('/', emojiController.findEmojiList);
EmojiRouter.get('/search', emojiController.findEmojiListByKeyword);

export default EmojiRouter;
