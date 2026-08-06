// src/middleware.ts
import { defineMiddleware } from 'astro:middleware';

const PUBLIC_FILES = /\/\.(.*)|^\/favicon\.ico$|^\/images\/|^\/_astro\//;

export const onRequest = defineMiddleware(async (context, next) => {
  const url = new URL(context.request.url);
  const pathname = url.pathname;

  // ファビコンやアセット類はスルー
  if (PUBLIC_FILES.test(pathname)) {
    return next();
  }

  // ★ ルート直下に置いてあり、言語プレフィックスを付けたくないパスはリライトしない
  if (
    pathname === '/privacy-policy' || pathname === '/privacy-policy/' ||
    pathname === '/terms' || pathname === '/terms/' ||
    pathname === '/about' || pathname === '/about/' ||
    pathname.startsWith('/blog') ||
    pathname.startsWith('/about') // /about/xxx なども対象にする場合
  ) {
    return next();
  }

  // すでに /jp/ または /en/ から始まっている場合はそのまま通す
  if (pathname.startsWith('/jp/') || pathname === '/jp' || pathname.startsWith('/en/') || pathname === '/en') {
    return next();
  }

  // その他の言語プレフィックスがない下層ページは /jp/ にリライト
  url.pathname = `/jp${pathname === '/' ? '' : pathname}`;
  return context.rewrite(url);
});