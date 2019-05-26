# tv-oukoku-iepg 

2019/3/1 をもって iEPG が廃止された[テレビ王国](https://tv.so-net.ne.jp/)に，iEPG ダウンロードを追加する Google Chrome 拡張です．

## 使い方

- 番組表，番組詳細情報，番組検索結果 ページに，「iEPG」リンクを追加します．このリンクをクリックすることで，*.tvpid がダウンロードされます．
- 上記以外のページには iEPG ボタンは追加されません．番組詳細情報 ページに移動する等を行ってください．
- テレビ王国の放送局名と，Service ID (放送局 ID) の対応はプログラム内にテーブルを持っていますが，放送局名が未知の場合 iEPG リンクの代わりに「★Error: (放送局名) の Service ID が不明です」と表示されます．
  - この場合や 放送局名-->Service ID の対応が間違っている場合，[issues](https://github.com/yoshinrt/tv-oukoku-iepg/issues) でご連絡ください．

## 既知の問題

- 番組表形式で最下部に位置する番組の iEPG ボタンは表示されません．
