// Copyright (c) 2026 Cored Limited
// SPDX-License-Identifier: Apache-2.0

import type { Config } from '@/core/config';
import type { CreateTypingReq, CreateTypingResp, DeleteTypingReq, DeleteTypingResp } from './chat_model';

export class Chat {
  private readonly config: Config;

  constructor(config: Config) {
    this.config = config;
  }

  /**
   * Set typing status
   * 
   * Set the typing status, lasts only 5 seconds, direct messages only
   */
  async createTyping(req: CreateTypingReq): Promise<CreateTypingResp> {
    const resp = await this.config.apiClient.request({
      method: 'POST',
      path: `/oapi/im/v1/chats/${req.chat_id ?? ''}/typing`,
      body: req,
      withAppAccessToken: true,
    });
    return await resp.json() as CreateTypingResp;
  }

  /**
   * Clear typing status
   * 
   * Direct messages only
   */
  async deleteTyping(req: DeleteTypingReq): Promise<DeleteTypingResp> {
    const resp = await this.config.apiClient.request({
      method: 'DELETE',
      path: `/oapi/im/v1/chats/${req.chat_id ?? ''}/typing`,
      body: req,
      withAppAccessToken: true,
    });
    return await resp.json() as DeleteTypingResp;
  }
}
