// Copyright (c) 2026 Cored Limited
// SPDX-License-Identifier: Apache-2.0

import { LoggerLevel } from './types';
import type { Logger } from './types';

export class DefaultLogger implements Logger {
  private level: LoggerLevel;

  constructor(level: LoggerLevel = LoggerLevel.Info) {
    this.level = level;
  }

  debug(msg: string, ...args: unknown[]): void {
    if (this.level <= LoggerLevel.Debug) {
      console.debug(`[Cored] DEBUG ${msg}`, ...args);
    }
  }

  info(msg: string, ...args: unknown[]): void {
    if (this.level <= LoggerLevel.Info) {
      console.info(`[Cored] INFO ${msg}`, ...args);
    }
  }

  warn(msg: string, ...args: unknown[]): void {
    if (this.level <= LoggerLevel.Warn) {
      console.warn(`[Cored] WARN ${msg}`, ...args);
    }
  }

  error(msg: string, ...args: unknown[]): void {
    if (this.level <= LoggerLevel.Error) {
      console.error(`[Cored] ERROR ${msg}`, ...args);
    }
  }
}
