# ノートアプリ

## 仕様

1. ホーム画面に「Welcome to Note App」の文言が欲しい
2. ノートを作成して保存したい
3. ノートにはタイトルと本文が欲しい
4. ノートの一覧も見たい
5. 一覧画面でノートをクリックすると詳細を見たい
6. 詳細画面では更新と削除をしたい

## Visual Studio Code の拡張機能

1. ES Lint
2. Prettier
3. Vetur

## プロジェクトの作成方法

1. `vue create {プロジェクト名}`
2. Manually select features を選択
3. Babel, Router, Vuex, Linter / Formatter を選択
4. Use history mode for router? -> Y
5. ESLint + Prettier を選択
6. Lint on save を選択
7. In dedicated config files を選択
8. Save this as a preset for future projects? -> どちらでも

## 自動フォーマット設定

ソースコードを自動的にフォーマットするための設定を紹介します。

1. .vscode フォルダを作成
2. settings.json ファイルを以下の内容で作成

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.fixAll.stylelint": true
  }
}
```

3. .prettierrc ファイルを以下の内容で作成

```json
{
  "semi": true,
  "singleQuote": false
}
```

## 学習項目

1. Vue インスタンス
   1. data
   2. computed
   3. methods
   4. created
2. テンプレート構文
   1. {{ }}
   2. v-model
   3. v-for
   4. v-if, v-else
   5. @click
3. Vue Router
   1. router-view
   2. router-link
4. Vuex
   1. state
   2. mutations
5. HTML
   1. input
   2. textarea
   3. button
6. CSS
   1. flex
   2. margin

## 回答例

Hosted on Netlify

https://eager-booth-b70cbe.netlify.app/
