import { EmojiService } from 'emoji-library';

import type { Request, Response } from 'express';

const emojiService = new EmojiService();

export class EmojiController {
  public async findEmojiList(req: Request, res: Response) {
    void req;
    try {
      const emoji_list = emojiService.getEmojiList();
      if (emoji_list instanceof Error) {
        return Promise.reject(res.status(400).json(emoji_list));
      }
      return Promise.resolve(res.status(200).json(emoji_list));
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
      throw res.status(500).json(error);
    }
  }
  public async findEmojiListByKeyword(req: Request, res: Response) {
    try {
      const query = req.query.q || req.query.query || req.query.keyword;
      const emoji_list = emojiService.getEmojiListByKeyword(String(query));
      return Promise.resolve(res.status(200).json(emoji_list));
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
      throw res.status(500).json(error);
    }
  }
}
export default new EmojiController();
