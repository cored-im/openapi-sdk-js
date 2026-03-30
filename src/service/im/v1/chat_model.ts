// Copyright (c) 2026 Cored Limited
// SPDX-License-Identifier: Apache-2.0


/** Set typing status (Request) */
export interface CreateTypingReq {
  chat_id?: string; // Chat ID
}

/** Set typing status (Response) */
export interface CreateTypingResp {
}

/** Clear typing status (Request) */
export interface DeleteTypingReq {
  chat_id?: string; // Chat ID
}

/** Clear typing status (Response) */
export interface DeleteTypingResp {
}
