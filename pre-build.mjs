import fs from 'fs';
import path from 'path';

const filePath = path.resolve('src/data/jp/siteText.ts');

if (fs.existsSync(filePath)) {
  let content = fs.readFileSync(filePath, 'utf8');
  // langPrefix: "/jp" を langPrefix: "" に書き換える
  content = content.replace(/langPrefix:\s*["']\/jp["']/g, 'langPrefix: ""');
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Pre-build: Updated langPrefix to "" in jp/siteText.ts');
}