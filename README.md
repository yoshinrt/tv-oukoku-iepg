# tv-oukoku-iepg 

2019/2/28 をもって iEPG が廃止された[テレビ王国](https://www.tvkingdom.jp/)に，iEPG ダウンロードを追加する Google Chrome 拡張です．

## インストール

[Chrome ウェブストア](https://chrome.google.com/webstore/detail/テレビ王国-iepg-ジェネレータ/fpomphhggieemehenfmgjagdeejajafg?hl=ja&gl=JP) にアクセスし，Chrome に拡張機能を追加してください．

## 使い方

- テレビ王国サイト左上の地域名を正しく設定してください．特に北海道では都市レベル (「北海道 (札幌)」等) も正しく設定してください．
- 番組表，番組詳細情報，番組検索結果 ページに，「iEPG」リンクを追加します．このリンクをクリックすることで，*.tvpid がダウンロードされます．
  - 上記以外のページには iEPG ボタンは追加されません．番組詳細情報 ページに移動する等を行ってください．
- テレビ王国の放送局名と，Service ID (放送局 ID) の対応はプログラム内にテーブルを持っていますが，放送局名が未知の場合 iEPG リンクの代わりに「★Error: (放送局名) の Service ID が不明です」と表示されます．
  - この場合や 放送局名-->Service ID の対応が間違っている場合，[issues](https://github.com/yoshinrt/tv-oukoku-iepg/issues?q=) でご連絡ください．

## 既知の問題

- 番組表形式で最下部に位置する番組の iEPG ボタンは表示されません．

## 使用ライブラリのライセンスに関する表示

### encoding.js

```
Copyright (c) 2012 polygonplanet
Released under the MIT license
https://github.com/YukinobuKurata/YouTubeMagicBuyButton/blob/master/MIT-LICENSE.txt
```
