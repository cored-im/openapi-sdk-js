# Cored IM OpenAPI SDK - JavaScript/TypeScript

[![npm version](https://img.shields.io/npm/v/@cored-im/openapi-sdk.svg)](https://www.npmjs.com/package/@cored-im/openapi-sdk)
[![License](https://img.shields.io/github/license/cored-im/openapi-sdk-js)](LICENSE)

[English](README_en.md) | 中文

Cored 是一个安全、可自托管的团队协作平台，集成了即时通讯、组织架构、音视频会议和文件存储等功能。

本项目是Cored服务端的 JavaScript/TypeScript SDK，用于通过 OpenAPI 与Cored服务端进行交互。使用前需要先自行部署Cored服务端，部署教程请参考[快速部署文档](https://coredim.com/docs/admin/install/quick-install)。

## 环境要求

- **Node.js**：推荐 18+（需支持 `fetch`、`crypto.subtle`、`CompressionStream`）
- **浏览器**：现代浏览器（需支持 Web Crypto API 和 CompressionStream）
- **TypeScript**：5.0+（可选）
- **WebSocket**（可选）：浏览器和 Node.js 22+ 原生支持；Node.js < 22 需安装 [`ws`](https://www.npmjs.com/package/ws) 包

## 安装

```bash
npm install @cored-im/openapi-sdk
```

## 快速开始

```typescript
import { Client } from '@cored-im/openapi-sdk';

// 创建客户端（异步初始化）
const client = await Client.create(
  'https://your-backend-url.com',
  'your-app-id',
  'your-app-secret',
);

// 可选：预热可提前获取访问凭证和同步服务端时间，减少首次调用的延迟
await client.preheat();

// 调用 API
const resp = await client.Im.v1.Message.sendMessage({
  chat_id: 'chat-id',
  msg_type: 'text',
  content: JSON.stringify({ text: 'Cored 新版本发布！' }),
});
console.log(resp);

// 使用完毕后关闭
await client.close();
```

## 认证方式

本 SDK 使用应用级别认证。创建客户端时传入 App ID 和 App Secret，SDK 会自动管理访问凭证的获取与刷新。

## 客户端配置

`Client.create()` 支持通过可选参数配置客户端行为：

```typescript
import { Client, LogLevel } from '@cored-im/openapi-sdk';

const client = await Client.create(
  'https://your-backend-url.com',
  'your-app-id',
  'your-app-secret',
  {
    logLevel: LogLevel.Debug,           // 日志级别（默认: Info）
    timeout: 30_000,                    // 请求超时毫秒数（默认: 60000）
    disableEncryption: true,            // 关闭请求加密（默认: false）
  },
);
```

## 事件订阅

通过 WebSocket 接收实时事件推送：

```typescript
// 注册事件处理函数
const handlerId = client.Im.v1.Message.Event.onMessageReceive((event) => {
  console.log('收到消息:', event);
});

// 取消订阅
client.Im.v1.Message.Event.offMessageReceive(handlerId);
```

## 相关链接

- [官网](https://cored.im/)

## 许可证

[Apache-2.0 License](LICENSE)
