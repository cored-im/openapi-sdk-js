// Copyright (c) 2026 Cored Limited
// SPDX-License-Identifier: Apache-2.0

import type {
  ApiClient,
  HttpClient,
  Logger,
  TimeManager,
  Marshaller,
  Unmarshaller,
} from './types';

export interface Config {
  appId: string;
  appSecret: string;
  backendUrl: string;
  httpClient: HttpClient;
  apiClient: ApiClient;
  enableEncryption: boolean;
  requestTimeout: number;
  timeManager: TimeManager;
  logger: Logger;
  jsonMarshal: Marshaller;
  jsonUnmarshal: Unmarshaller;
}
