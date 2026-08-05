// src/middleware.ts
import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware(async (context, next) => {
  const url = new URL(context.request.url);
  const pathname = url.pathname;

  // ルート（'/'）にアクセスがあった場合、裏側で '/jp' のルートに書き換える（リライト）
  if (pathname === '/') {
    // URLを書き換えて内部的に /jp/ のページを処理させる
    url.pathname = '/jp';
    return context.rewrite(url);
  }

  return next();
});