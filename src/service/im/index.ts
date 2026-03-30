// Copyright (c) 2026 Cored Limited
// SPDX-License-Identifier: Apache-2.0

import type { Config } from '@/core/config';
import { V1 } from './v1/index';

export class Service {
  public readonly v1: V1;

  constructor(config: Config) {
    this.v1 = new V1(config);
  }
}
