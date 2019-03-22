# tv-oukoku-iepg 

2019/3/1 をもって iEPG が廃止された[テレビ王国](https://tv.so-net.ne.jp/)に，iEPG ダウンロードを追加する Google Chrome 拡張です．

## 使い方

- [番組詳細情報](https://tv.so-net.ne.jp/schedule/146080201903032100.action)，[番組検索結果](https://tv.so-net.ne.jp/schedulesBySearch.action?stationPlatformId=0&condition.keyword=%E6%98%A0%E7%94%BB&submit=%E6%A4%9C%E7%B4%A2)に表示される「おまかせ」ボタンを，「iEPG」リンクに変更します．このリンクをクリックすることで，*.tvpid がダウンロードされます．
- 番組表形式のページ等，上記以外のページには iEPG ボタンは追加されません．番組詳細情報 ページに移動する等をしてください．
- テレビ王国の放送局名と，Service ID (放送局 ID) の対応はプログラム内にテーブルを持っていますが，放送局名が未知の場合 iEPG リンクの代わりに「!!!Error!!! (放送局名) の Service ID が不明です」と表示されます．
  - この場合や 放送局名-->Service ID の対応が間違っている場合，[issues](https://github.com/yoshinrt/tv-oukoku-iepg/issues) でご連絡ください．
