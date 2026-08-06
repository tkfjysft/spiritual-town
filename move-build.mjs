import fs from 'fs';
import path from 'path';

const distDir = path.resolve('dist');

// 再帰的にディレクトリ内のファイルを走査して文字列を置換する関数
function replaceInFiles(dir) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      replaceInFiles(filePath); // フォルダなら中を再帰的に探す
    } else if (stat.isFile() && /\.(html|js|json)$/.test(file)) {
      // HTML、JS、JSONファイルの中身を置換
      let content = fs.readFileSync(filePath, 'utf8');
      
      // "/jp" というプレフィックスを空文字に置換（※必要に応じてクォーテーションの有無や前後のスラッシュに注意）
      if (content.includes('"/jp"')) {
        content = content.replace(/"\/jp"/g, '""');
        fs.writeFileSync(filePath, content, 'utf8');
      }
    }
  });
}

// 1. まず dist/jp の中身を dist 直下に移動する処理（前回の内容）
const jpDir = path.join(distDir, 'jp');
if (fs.existsSync(jpDir)) {
  const items = fs.readdirSync(jpDir);
  items.forEach((item) => {
    const srcPath = path.join(jpDir, item);
    const destPath = path.join(distDir, item);
    if (fs.existsSync(destPath)) {
      fs.rmSync(destPath, { recursive: true, force: true });
    }
    fs.renameSync(srcPath, destPath);
  });
  fs.rmdirSync(jpDir);
  console.log('Successfully moved contents of dist/jp to dist/');
}

// 2. dist 内のファイル全体から "/jp" を "" に置換する
replaceInFiles(distDir);
console.log('Successfully replaced langPrefix "/jp" to "" in dist/');