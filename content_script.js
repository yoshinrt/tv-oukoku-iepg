/*
●テレビ王国番組サーチの html ソース (検索)

<div class="contBlockNB">
	<div  id="schedule-200101201903032100">
	</div>
	<div class="utileList">
		<h2><a href="/schedule/200101201903032100.action">BS1スペシャル「老いてなお　花となる　第二章～俳優・織本順吉92歳～」[字]</a></h2>
		<p class="utileListProperty">
			3/3 (日) 21:00 ～ 21:50            (50分) 
			ＮＨＫ ＢＳ１(Ch.1)
			<a href="/schedulesBySearch.action?condition.genres[0].id=108000&stationPlatformId=0">ドキュメンタリー／教養</a>
		</p>
		<div class="utileListIcon">
			<span class="iepgBtn">
				<a href="/m/filterAddingOpened.action?filter.keywords%5B0%5D.body=BS1%E3%82%B9%E3%83%9A%E3%82%B7%E3%83%A3%E3%83%AB" title="おまかせ!番組サーチを設定"><img src="/tv/digital/img/btn/btn_omakase_txt.gif" alt="おまかせ" /></a>
			</span>
		</div>
	</div>

●テレビ王国番組サーチの html ソース (1番組)


● .tvpid フォーマット 参考: https://350ml.net/labo/iepg2.html
*/

var ServiceID = MakeServiceIdTbl(( function (){/*
/// BS https://www.yuhisa.com/tv/bs-list/
BSDT101	NHKBS1
BSDT103	NHKBSプレミアム
BSDT141	BS日テレ
BSDT142	BS日テレ2
BSDT143	BS日テレ3
BSDT151	BS朝日
BSDT152	BS朝日2
BSDT153	BS朝日3
BSDT161	BS-TBS
BSDT162	BS-TBS
BSDT163	BS-TBS
BSDT171	BSジャパン	ＢＳテレ東
BSDT172	BSジャパン2
BSDT173	BSジャパン3
BSDT181	BSフジ
BSDT182	BSフジ・182
BSDT183	BSフジ・183
BSDT191	WOWOWプライム
BSDT192	WOWOWライブ
BSDT193	WOWOWシネマ
BSDT200	スター・チャンネル1
BSDT201	スター・チャンネル2
BSDT202	スター・チャンネル3
BSDT211	BS11
BSDT222	TwellV	BS12 トゥエルビ
BSDT231	放送大学BS1
BSDT232	放送大学BS2
BSDT233	放送大学BS3
BSDT234	グリーンチャンネル
BSDT236	BSアニマックス
BSDT238	FOXbs238	FOXスポーツエンタ
BSDT241	BS スカパー!
BSDT242	J SPORTS 1
BSDT243	J SPORTS 2
BSDT244	J SPORTS 3
BSDT245	J SPORTS 4
BSDT251	BS釣りビジョン
BSDT252	IMAGICA BS	シネフィルWOWOW
BSDT255	BS日本映画専門Ch
BSDT256	ディズニーチャンネル
BSDT258	ディーライフ
BSDT291	NHK総合・東京
BSDT292	NHKEテレ東京
BSDT294	日テレ
BSDT295	テレビ朝日
BSDT296	TBS
BSDT297	テレビ東京
BSDT298	フジテレビ
BSDT531	放送大学ラジオ
BSDT700	NHKデータ1
BSDT701	NHKデータ2
BSDT707	707チャンネル
BSDT755	BS朝日データ
BSDT768	Gガイドサービス
BSDT778	BSジャパン778
BSDT791	WOWOW navi
BSDT800	スター・チャンネル データ800
BSDT840	e2ガイド
BSDT841	BS スカパー!データ
BSDT910	WNI・910
BSDT929	Dpaダウンロード

CSDT218	東映チャンネル
CSDT219	衛星劇場
CSDT223	チャンネルＮＥＣＯ
CSDT227	ザ・シネマ
CSDT240	ムービープラス
CSDT250	スカイA
CSDT254	ＧＡＯＲＡ
CSDT257	日テレG+　HD
CSDT262	ゴルフネットワーク
CSDT290	ＴＡＫＡＲＡＺＵＫＡ ＳＫＹ ＳＴＡＧＥ
CSDT292	時代劇専門チャンネル
CSDT293	ファミリー劇場HD
CSDT294	ホームドラマチャンネル
CSDT295	MONDO　TV
CSDT296	ＴＢＳチャンネル１
CSDT297	ＴＢＳチャンネル２
CSDT298	テレ朝チャンネル１ ドラマ・バラエティ・アニメ
CSDT299	テレ朝チャンネル２ ニュース・情報・スポーツ
CSDT300	日テレプラス
CSDT301	エンタメ～テレHD☆シネドラバラエティ	エンタメ〜テレ☆シネドラバラエティ
CSDT305	チャンネル銀河 歴史ドラマ・サスペンス・日本のうた
CSDT307	フジテレビＯＮＥ スポーツ・バラエティ
CSDT308	フジテレビＴＷＯ ドラマ・アニメ
CSDT309	フジテレビＮＥＸＴ ライブ・プレミアム
CSDT310	Super！drama TV　HD	スーパー！ドラマＴＶ
CSDT311	ＡＸＮ
CSDT312	ＦＯＸ
CSDT314	女性チャンネル♪LaLa ＴＶ
CSDT316	ＡＸＮミステリー
CSDT317	ＫＢＳ　Ｗｏｒｌｄ
CSDT318	Ｍnet
CSDT321	100％ヒッツ！スペースシャワーＴＶプラス
CSDT322	スペースシャワーＴＶ
CSDT323	ＭＴＶ
CSDT324	ミュージック・エア
CSDT325	ＭＵＳＩＣ ＯＮ! ＴＶ(エムオン!)HD
CSDT329	歌謡ポップスチャンネル
CSDT330	キッズステーションHD
CSDT331	カートゥーンネットワーク
CSDT333	アニメシアターＸ（ＡＴ-Ｘ）
CSDT339	ディズニージュニア
CSDT340	ディスカバリーチャンネル
CSDT341	アニマルプラネット
CSDT342	ヒストリーチャンネル
CSDT343	ナショナル ジオグラフィック
CSDT349	日テレＮＥＷＳ24
CSDT351	TBS NEWS
CSDT353	ＢＢＣワールドニュース
CSDT354	ＣＮＮｊ
CSDT363	囲碁・将棋チャンネル
CSDT800	スカサカ！
CSDT801	スカチャン １
CSDT821	J SPORTS 1 (4K)
CSDT822	J SPORTS 2 (4K)
CSDT823	J SPORTS 3 (4K)
CSDT824	J SPORTS 4 (4K)
CSDT880	日本映画＋時代劇 4K
CSDT881	スターチャンネル 4K
CSDT882	スカチャン1 4K
CSDT883	スカチャン2 4K

// 地デジ
DFS00400	ＮＨＫ総合・東京
DFS00408	ＮＨＫ教育・東京
DFS00410	日本テレビ
DFS00418	ＴＢＳ
DFS00420	フジテレビジョン
DFS00428	テレビ朝日
DFS00430	テレビ東京
DFS00440	放送大学
DFS00808	ＮＨＫ教育・大阪
DFS00810	ＭＢＳ毎日放送
DFS00818	ＡＢＣテレビ
DFS00820	関西テレビ
DFS00828	読売テレビ	よみうりテレビ
DFS00C08	ＮＨＫ教育・名古屋
DFS00C10	東海テレビ
DFS00C18	ＣＢＣ
DFS00C20	メ～テレ
DFS00C28	中京テレビ
DFS01010	ＨＢＣ北海道放送
DFS01018	ＳＴＶ札幌テレビ
DFS01020	ＨＴＢ北海道テレビ
DFS01028	ＵＨＢ
DFS01030	ＴＶＨ
DFS01410	ＲＮＣ西日本テレビ
DFS01418	ＫＳＢ瀬戸内海放送
DFS01420	ＲＳＫテレビ
DFS01428	ＴＳＣテレビせとうち
DFS01430	ＯＨＫテレビ
DFS01810	山陰中央テレビ
DFS01818	ＢＳＳテレビ
DFS01820	日本海テレビ
DFS02800	ＮＨＫ総合・札幌
DFS02808	ＮＨＫ教育・札幌
DFS02810	ＨＢＣ札幌
DFS02818	ＳＴＶ札幌
DFS02820	ＨＴＢ札幌
DFS02828	ＵＨＢ札幌
DFS02830	ＴＶＨ札幌
DFS02C00	ＮＨＫ総合・函館
DFS02C08	ＮＨＫ教育・函館
DFS02C10	ＨＢＣ函館
DFS02C18	ＳＴＶ函館
DFS02C20	ＨＴＢ函館
DFS02C28	ＵＨＢ函館
DFS02C30	ＴＶＨ函館
DFS03000	ＮＨＫ総合・旭川
DFS03008	ＮＨＫ教育・旭川
DFS03010	ＨＢＣ旭川
DFS03018	ＳＴＶ旭川
DFS03020	ＨＴＢ旭川
DFS03028	ＵＨＢ旭川
DFS03030	ＴＶＨ旭川
DFS03400	ＮＨＫ総合・帯広
DFS03408	ＮＨＫ教育・帯広
DFS03410	ＨＢＣ帯広
DFS03418	ＳＴＶ帯広
DFS03420	ＨＴＢ帯広
DFS03428	ＵＨＢ帯広
DFS03430	ＴＶＨ帯広
DFS03800	ＮＨＫ総合・釧路
DFS03808	ＮＨＫ教育・釧路
DFS03810	ＨＢＣ釧路
DFS03818	ＳＴＶ釧路
DFS03820	ＨＴＢ釧路
DFS03828	ＵＨＢ釧路
DFS03830	ＴＶＨ釧路
DFS03C00	ＮＨＫ総合・北見
DFS03C08	ＮＨＫ教育・北見
DFS03C10	ＨＢＣ北見
DFS03C18	ＳＴＶ北見
DFS03C20	ＨＴＢ北見
DFS03C28	ＵＨＢ北見
DFS03C30	ＴＶＨ北見
DFS04000	ＮＨＫ総合・室蘭
DFS04008	ＮＨＫ教育・室蘭
DFS04010	ＨＢＣ室蘭
DFS04018	ＳＴＶ室蘭
DFS04020	ＨＴＢ室蘭
DFS04028	ＵＨＢ室蘭
DFS04030	ＴＶＨ室蘭
DFS04400	ＮＨＫ総合・仙台
DFS04408	ＮＨＫ教育・仙台
DFS04410	ＴＢＣテレビ
DFS04418	仙台放送
DFS04420	ミヤギテレビ
DFS04428	ＫＨＢ東日本放送
DFS04800	ＮＨＫ総合・秋田
DFS04808	ＮＨＫ教育・秋田
DFS04810	ＡＢＳ秋田放送
DFS04818	ＡＫＴ秋田テレビ
DFS04820	ＡＡＢ秋田朝日放送
DFS04C00	ＮＨＫ総合・山形
DFS04C08	ＮＨＫ教育・山形
DFS04C10	ＹＢＣ山形放送
DFS04C18	ＹＴＳ山形テレビ
DFS04C20	テレビユー山形
DFS04C28	さくらんぼテレビ
DFS05000	ＮＨＫ総合・盛岡
DFS05008	ＮＨＫ教育・盛岡
DFS05010	ＩＢＣテレビ
DFS05018	テレビ岩手
DFS05020	めんこいテレビ
DFS05028	岩手朝日テレビ
DFS05400	ＮＨＫ総合・福島
DFS05408	ＮＨＫ教育・福島
DFS05410	福島テレビ
DFS05418	福島中央テレビ
DFS05420	ＫＦＢ福島放送
DFS05428	テレビユー福島
DFS05800	ＮＨＫ総合・青森
DFS05808	ＮＨＫ教育・青森
DFS05810	ＲＡＢ青森放送
DFS05818	ＡＴＶ青森テレビ
DFS05820	青森朝日放送
DFS05C38	ＴＯＫＹＯ　ＭＸ
DFS06038	ｔｖｋ
DFS06438	群馬テレビ
DFS06800	ＮＨＫ総合・水戸
DFS06C38	チバテレビ
DFS07038	とちぎテレビ
DFS07438	テレ玉
DFS07800	ＮＨＫ総合・長野
DFS07808	ＮＨＫ教育・長野
DFS07810	テレビ信州
DFS07818	ａｂｎ長野朝日放送
DFS07820	ＳＢＣ信越放送
DFS07828	ＮＢＳ長野放送
DFS07C00	ＮＨＫ総合・新潟
DFS07C08	ＮＨＫ教育・新潟
DFS07C10	ＢＳＮ
DFS07C18	ＮＳＴ
DFS07C20	ＴｅＮＹテレビ新潟
DFS07C28	新潟テレビ２１
DFS08000	ＮＨＫ総合・甲府
DFS08008	ＮＨＫ教育・甲府
DFS08010	ＹＢＳ山梨放送
DFS08018	ＵＴＹ
DFS08400	ＮＨＫ総合・名古屋
DFS08430	テレビ愛知
DFS08800	ＮＨＫ総合・金沢
DFS08808	ＮＨＫ教育・金沢
DFS08810	テレビ金沢
DFS08818	北陸朝日放送
DFS08820	ＭＲＯ
DFS08828	石川テレビ
DFS08C00	ＮＨＫ総合・静岡
DFS08C08	ＮＨＫ教育・静岡
DFS08C10	ＳＢＳ
DFS08C18	テレビ静岡
DFS08C20	だいいちテレビ
DFS08C28	静岡朝日テレビ
DFS09000	ＮＨＫ総合・福井
DFS09008	ＮＨＫ教育・福井
DFS09010	ＦＢＣテレビ
DFS09018	福井テレビ
DFS09400	ＮＨＫ総合・富山
DFS09408	ＮＨＫ教育・富山
DFS09410	ＫＮＢ北日本放送
DFS09418	ＢＢＴ富山テレビ
DFS09420	チューリップテレビ
DFS09800	ＮＨＫ総合・津
DFS09830	三重テレビ
DFS09C00	ＮＨＫ総合・岐阜
DFS09C30	ギフチャン
DFS0A000	ＮＨＫ総合・大阪
DFS0A030	テレビ大阪
DFS0A400	ＮＨＫ総合・京都
DFS0A430	ＫＢＳ京都
DFS0A800	ＮＨＫ総合・神戸
DFS0A830	サンテレビ
DFS0AC00	ＮＨＫ総合・和歌山
DFS0AC30	テレビ和歌山
DFS0B000	ＮＨＫ総合・奈良
DFS0B030	奈良テレビ
DFS0B400	ＮＨＫ総合・大津
DFS0B430	ＢＢＣびわ湖放送
DFS0B800	ＮＨＫ総合・広島
DFS0B808	ＮＨＫ教育・広島
DFS0B810	ＲＣＣテレビ
DFS0B818	広島テレビ
DFS0B820	広島ホームテレビ
DFS0B828	ＴＳＳ
DFS0BC00	ＮＨＫ総合・岡山
DFS0BC08	ＮＨＫ教育・岡山
DFS0C000	ＮＨＫ総合・松江
DFS0C008	ＮＨＫ教育・松江
DFS0C400	ＮＨＫ総合・鳥取
DFS0C408	ＮＨＫ教育・鳥取
DFS0C800	ＮＨＫ総合・山口
DFS0C808	ＮＨＫ教育・山口
DFS0C810	ＫＲＹ山口放送
DFS0C818	ｔｙｓテレビ山口
DFS0C820	ｙａｂ山口朝日
DFS0CC00	ＮＨＫ総合・松山
DFS0CC08	ＮＨＫ教育・松山
DFS0CC10	南海放送
DFS0CC18	愛媛朝日
DFS0CC20	あいテレビ
DFS0CC28	テレビ愛媛
DFS0D000	ＮＨＫ総合・高松
DFS0D008	ＮＨＫ教育・高松
DFS0D400	ＮＨＫ総合・徳島
DFS0D408	ＮＨＫ教育・徳島
DFS0D410	四国放送
DFS0D800	ＮＨＫ総合・高知
DFS0D808	ＮＨＫ教育・高知
DFS0D810	高知放送
DFS0D818	テレビ高知
DFS0D820	さんさんテレビ
DFS0DC00	ＮＨＫ総合・福岡
DFS0DC00	ＮＨＫ総合・北九州
DFS0DC08	ＮＨＫ教育・福岡
DFS0DC08	ＮＨＫ教育・北九州
DFS0DC10	ＫＢＣ九州朝日放送
DFS0DC18	ＲＫＢ毎日放送
DFS0DC20	ＦＢＳ福岡放送
DFS0DC28	ＴＶＱ九州放送
DFS0DC30	ＴＮＣテレビ西日本
DFS0E000	ＮＨＫ総合・熊本
DFS0E008	ＮＨＫ教育・熊本
DFS0E010	ＲＫＫ熊本放送
DFS0E018	ＴＫＵテレビ熊本
DFS0E020	ＫＫＴくまもと県民
DFS0E028	ＫＡＢ熊本朝日放送
DFS0E400	ＮＨＫ総合・長崎
DFS0E408	ＮＨＫ教育・長崎
DFS0E410	ＮＢＣ長崎放送
DFS0E418	ＫＴＮテレビ長崎
DFS0E420	ＮＣＣ長崎文化放送
DFS0E428	ＮＩＢ長崎国際テレビ
DFS0E800	ＮＨＫ総合・鹿児島
DFS0E808	ＮＨＫ教育・鹿児島
DFS0E810	ＭＢＣ南日本放送
DFS0E818	ＫＴＳ鹿児島テレビ
DFS0E820	ＫＫＢ鹿児島放送
DFS0E828	ＫＹＴ鹿児島読売ＴＶ
DFS0EC00	ＮＨＫ総合・宮崎
DFS0EC08	ＮＨＫ教育・宮崎
DFS0EC10	ＭＲＴ宮崎放送
DFS0EC18	ＵＭＫテレビ宮崎
DFS0F000	ＮＨＫ総合・大分
DFS0F008	ＮＨＫ教育・大分
DFS0F010	ＯＢＳ大分放送
DFS0F018	ＴＯＳテレビ大分
DFS0F020	ＯＡＢ大分朝日放送
DFS0F400	ＮＨＫ総合・佐賀
DFS0F408	ＮＨＫ教育・佐賀
DFS0F410	ＳＴＳサガテレビ
DFS0F800	ＮＨＫ総合・那覇
DFS0F808	ＮＨＫ教育・那覇
DFS0F810	ＲＢＣテレビ
DFS0F820	ＱＡＢ琉球朝日放送
DFS0F838	沖縄テレビ（ＯＴＶ）
*/}).toString());

//console.log( Object.keys( ServiceID ).join( " " ));

// 番組リスト取得
function OverwriteSearchList(){
	var ProgElements = document.getElementsByClassName( 'utileList' ); // utileList bl も対象
	
	for( var i = 0; i < ProgElements.length; ++i ){
		var ErrorMsg = '';
		
		var Prog = IepgHeader();
		
		var AElements = ProgElements[ i ].getElementsByTagName( 'a' );
		
		// 番組タイトル
		Prog[ 'program-title' ]	= AElements[ 0 ].textContent;
		
		// 適当にユニークそうな数字を ID に
		if( AElements[ 0 ].href.match( /(\d+)/ )){
			Prog[ 'program-id' ]	= RegExp.$1;
		}
		
		// 放送時間・CH
		var DateTimeCh;
		if(
			( DateTimeCh = ProgElements[ i ].getElementsByClassName( "utileListProperty" )) &&
			( DateTimeCh = DateTimeCh[ 0 ]) &&
			( DateTimeCh = DateTimeCh.textContent )
		){
			SetProgNameDate( Prog, DateTimeCh, ErrorMsg );
		}else{
			ErrorMsg = "HTML フォーマットを認識できません";
		}
		
		// 「おまかせ」を iEPG ボタンに変更
		SetIepgButton( Prog, AElements, ErrorMsg );
	}
}

// 1番組ページ
function OverwriteProg(){
	var Prog = IepgHeader();
	
	var ProgElement = document.getElementsByClassName( "container column2" );
	var Dd = ProgElement[ 0 ].getElementsByTagName( "dd" );
	var ErrorMsg;
	
	for( var i = 0; i < Dd.length; ++i ){
		console.log( i + ":" + Dd[ i ].textContent );
	}
	
	Prog[ 'program-title' ]	= Dd[ 0 ].textContent.replace( /\s*ウェブ検索\s*/, '' );
	SetProgNameDate( Prog,
		Dd[ 1 ].textContent.replace( /(.*\d+:\d+).*/s, '$1' ) + "\n" +
		Dd[ 2 ].textContent, ErrorMsg
	);
	
	// 適当にユニークそうな数字を ID に
	if(( "" + window.location ).match( /(\d+)\.action/ )){
		Prog[ 'program-id' ]	= RegExp.$1;
	}
	
	// 「おまかせ」を iEPG ボタンに変更
	var AElements = ProgElement[ 0 ].getElementsByTagName( 'a' );
	SetIepgButton( Prog, AElements, ErrorMsg );
}

function FormatNum( n ){
	return n >= 10 ? ( +n ) : "0" + ( +n );
}

// iEPG header
function IepgHeader(){
	return {
		"Content-type": "application/x-tv-program-digital-info; charset=shift_jis",
		version: 2
	};
}

// 日時・放送局のパース
function SetProgNameDate( Prog, DateTimeCh, ErrorMsg ){
	
	console.log( "hoge:" + DateTimeCh );
	
	DateTimeCh.match( /(\d+)\/(\d+).*?(\d+):(\d+).*?(\d+):(\d+).*?\n\s*(.*)/ );
	
	Prog[ 'station-name' ]	= RegExp.$7;
	Prog.station	= ''; // 暫定
	Prog.year		= ''; // 暫定
	Prog.month		= FormatNum( RegExp.$1 );
	Prog.date		= FormatNum( RegExp.$2 );
	Prog.start		= FormatNum( RegExp.$3 ) + ":" + FormatNum( RegExp.$4 );
	Prog.end		= FormatNum( RegExp.$5 ) + ":" + FormatNum( RegExp.$6 );
	
	// year 設定
	var ProgTime	= new Date();
	Prog.year		= ProgTime.getYear() + 1900;
	ProgTime.setMonth( Prog.month );	// 本来 -1 だが，年月日が 1ヶ月以上過去なら，来年の月日とみなす
	ProgTime.setDate( Prog.date );
	
	if( ProgTime < ( new Date )) ++Prog.year;
	
	// Station ID 取得
	Prog[ 'station-name' ] = Prog[ 'station-name' ]
		.replace( /^\s+/, '' )
		.replace( /\s*\(Ch\.\d+\)\s*$/, '' )
		.replace( /\s+$/, '' );
	
	var Id = GetServiceID( Prog[ 'station-name' ]);
	if( Id ){
		Prog.station	= Id;
	}else{
		ErrorMsg = "「" + Prog[ 'station-name' ] + "」の Service ID が不明です";
		console.error( ErrorMsg );
	}
}

// iEPG リンク作成
function SetIepgButton( Prog, AElements, ErrorMsg ){
	
	for( var i = 0; i < AElements.length; ++i ){
		if( AElements[ i ].getAttribute( 'title' ) == 'おまかせ!番組サーチを設定' ){
			AElements[ i ].textContent	= ErrorMsg ? ( "!!! Error !!! " + ErrorMsg ) : '【iEPG】';
			AElements[ i ].download		= 'iepg.tvpid';
			AElements[ i ].href			= window.URL.createObjectURL( new Blob( [ GenerateIepg( Prog )], { type: 'text/plain' }));
			AElements[ i ].downloadurl	= [ 'text/plain', AElements[ i ].download, AElements[ i ].href ].join( ':' );
			break;
		}
	}
}

function Str2Array( str ){
	var array = [], i, il = str.length;
	for( i = 0; i < il; i++ ) array.push( str.charCodeAt( i ));
	return new Uint8Array( array );
};

// iEPG ファイル生成
function GenerateIepg( Prog ){
	var Ret = '';
	
	for( var key in Prog ){
		Ret += key + ": " + Prog[ key ] + "\n";
	}
	
	// SJIS に変換
	return Str2Array( ECL.convert( unescape( encodeURIComponent( Ret )), 'SJIS', 'UTF8' ));
}

// 放送局名→サービス ID テーブル生成
function MakeServiceIdTbl( str ){
	var List = str.split( /\n+/ );
	var Tbl = {};
	
	for( var i = 0; i < List.length; ++i ){
		if( List[ i ].match( /^\w/ )){
			var tmp = List[ i ].split( /\t+/ );
			
			for( j = 1; j < tmp.length; ++j ){
				Tbl[ RegularizeStationName( tmp[ j ])] = tmp[ 0 ];
			}
		}
	}
	
	return Tbl;
}

// 放送局名正規化
function RegularizeStationName( Name ){
	return Name.replace( /[\s　・]/g, '' )
		.replace( /チャンネル/g, "CH" )
		.replace( /最新ドラマ音楽映画/, "" )
		.replace(
			/[Ａ-Ｚａ-ｚ０-９！”＃＄％＆’（）＊＋，－．／：；＜＝＞？＠［￥］＾＿‘｛｜｝￣]/g,
			function( s ){
				return String.fromCharCode( s.charCodeAt( 0 ) - 0xFEE0 );
			}
		)
		.toUpperCase()
		.replace( /NHK総合\d+/, "NHK総合" )
		.replace( /NHK(?:Eテレ|教育)\d*/, "NHKEテレ" );
}

// ServiceID 取得
function GetServiceID( Name ){
	var RegularizedName = RegularizeStationName( Name );
	var Id = ServiceID[ RegularizedName ];
	
	//console.log( Name + ":" + RegularizedName + ":" + Id );
	
	if( Id ) return Id;	// テーブルに載っていたら return
	
	// ダイレクトマッチしないので，一部検索をする
	
	for( Key in ServiceID ){
		if(
			Key.indexOf( RegularizedName ) >= 0 ||
			RegularizedName.indexOf( Key ) >= 0
		){
			//console.log( "match:" + RegularizedName + ":" + Key );
			if( Id ){
				// 2つ以上にマッチしたので，undefined
				return undefined;
			}
			ServiceID[ RegularizedName ] = Id = ServiceID[ Key ];
		}
	}
	return Id;
}

// メイン処理起動
if(( '' + window.location ).indexOf( "/schedule/" ) >= 0 ){
	OverwriteProg();
}else{
	OverwriteSearchList();
}
