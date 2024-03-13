# アプリケーションについて

## 使用技術

### 言語

![Node.js](https://img.shields.io/badge/Node-v20.9.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-v5.2.2-blue)

### パッケージマネージャー

![npm](https://img.shields.io/badge/npm-v10.1.0-blue)

### ライブラリ

![Angular](https://img.shields.io/badge/Angular-v17.0.3-blue)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v3.4.1-blue)

### リンター・フォーマッター

![ESLint](https://img.shields.io/badge/ESLint-v8.56.0-blue)
![Prettier](https://img.shields.io/badge/Prettier-v3.2.5-blue)

### ホスティング

![GithubPages](https://img.shields.io/badge/Vercel-Supported-blue)

## セットアップ

1. `git clone`
2. `cd`コマンドでプロジェクトへ移動
3. `npm install`
4. `ng serve --open`

## ESLint / Prettier のセットアップ

1. `ng lint`
   - Would you like to add ESLint now? (Y/n) -> Y
   - Would you like to proceed? (Y/n) -> Y
2. `ng lint`（リントが走るか確認）
   - 「All files pass linting.」とログに出力されればOK
3. `npm install -D prettier eslint-config-prettier`
4. eslintrcの`overrides/extends`の末尾に`"prettier"`を追加
5. `.prettierrc.yml`を作成 && 以下をコピペ

```yml
printWidth: 120
singleQuote: true
trailingComma: all
```

6. npm scripts にリンター・フォーマッターのコマンドを追加
   - `"lint-fix": "eslint --cache --fix src/ && prettier --write src/"`
