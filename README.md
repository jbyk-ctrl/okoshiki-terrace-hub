# 御輿来 TERRACE — 公式サイト + TERRACE HUB デモ

熊本県宇土市本町4丁目42 カメヤ2階のコワーキング・コミュニティスペース。

## 構成
- `index.html` — 元の公式サイトデザイン、最新のお知らせプレビュー
- `css/style.css` / `js/main.js` — 公式サイトのスタイルと動作
- `assets/` — 元のロゴ、施設完成イメージ、平面図、相談会ビジュアル
- `guide.html` / `privacy.html` / `credits.html` — 各案内ページ
- `app.html` — TERRACE HUBのデモ（施設利用希望、相談、地域募集、支援者、お知らせ投稿）

## デモに関する注意
GitHub Pages上の静的デモです。お知らせ投稿などの記録はブラウザのlocalStorageのみで保持され、別端末・別ユーザーには同期されません。予約確定・決済・電子ロック制御・管理者認証はありません。

正式運用前に、クラウドDB、本人認証、権限管理、個人情報保護、決済・電子ロック連携などを実装してください。

## 公開
Settings → Pages → Deploy from a branch → main → /(root)

https://jbyk-ctrl.github.io/okoshiki-terrace-hub/

地域写真は外部配信のためネット環境で表示確認が必要です。利用条件は `credits.html` を確認してください。
