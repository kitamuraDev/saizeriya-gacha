import type { SaizeriyaMenu } from '../types/saizeriya-menu-type';

// prettier-ignore
export const saizeriyaMenu: SaizeriyaMenu[] = [
  // サラダ
  { orderCode: '1202', name: '小エビのサラダ', taxExPrice: 319, taxInPrice: 350, isAlcohol: false },
  { orderCode: '1205', name: 'わかめのサラダ', taxExPrice: 319, taxInPrice: 350, isAlcohol: false },
  { orderCode: '1207', name: 'モッツァレラのサラダ', taxExPrice: 364, taxInPrice: 400, isAlcohol: false },
  { orderCode: '1208', name: 'グリーンサラダ', taxExPrice: 319, taxInPrice: 350, isAlcohol: false },
  { orderCode: '1209', name: 'チキンのサラダ', taxExPrice: 319, taxInPrice: 350, isAlcohol: false },
  // ドリンクバー
  { orderCode: '5101', name: 'セットドリンクバー', taxExPrice: 182, taxInPrice: 200, isAlcohol: false },
  { orderCode: '5102', name: 'キッズ（ドリンクバー）', taxExPrice: 91, taxInPrice: 100, isAlcohol: false },
  { orderCode: '5103', name: '単品（ドリンクバー）', taxExPrice: 273, taxInPrice: 300, isAlcohol: false },
  // ワイン
  { orderCode: '3401', name: 'グラスワイン（赤）', taxExPrice: 91, taxInPrice: 100, isAlcohol: true },
  { orderCode: '3402', name: 'グラスワイン（白）', taxExPrice: 91, taxInPrice: 100, isAlcohol: true },
  { orderCode: '3403', name: 'デカンタ（赤）- 250ml', taxExPrice: 182, taxInPrice: 200, isAlcohol: true },
  { orderCode: '3404', name: 'デカンタ（白）- 250ml', taxExPrice: 182, taxInPrice: 200, isAlcohol: true },
  { orderCode: '3405', name: 'デカンタ（赤）- 500ml', taxExPrice: 364, taxInPrice: 400, isAlcohol: true },
  { orderCode: '3406', name: 'デカンタ（白）- 500ml', taxExPrice: 364, taxInPrice: 400, isAlcohol: true },
  { orderCode: '3407', name: 'マグナム（赤）- 1500ml', taxExPrice: 1000, taxInPrice: 1100, isAlcohol: true },
  { orderCode: '3412', name: 'ランブルズコロぜ【（ロゼ・発泡）甘口】', taxExPrice: 1000, taxInPrice: 1100, isAlcohol: true, },
  { orderCode: '3413', name: 'ドンラファエロ【（白・発泡）辛口】', taxExPrice: 1000, taxInPrice: 1100, isAlcohol: true, },
  { orderCode: '3414', name: 'ランブルスコセッコ【（赤・発泡）辛口】', taxExPrice: 1000, taxInPrice: 1100, isAlcohol: true, },
  { orderCode: '3415', name: 'ベルデッキオ【（白）辛口】', taxExPrice: 1000, taxInPrice: 1100, isAlcohol: true, },
  { orderCode: '3416', name: 'キャンティ【（赤）辛口】', taxExPrice: 1000, taxInPrice: 1100, isAlcohol: true, },
  { orderCode: '3419', name: 'キャンティ ルフィナ リゼルバ【（赤）辛口】', taxExPrice: 2000, taxInPrice: 2200, isAlcohol: true, },
  { orderCode: '3301', name: '生ビール（ジョッキ）', taxExPrice: 364, taxInPrice: 400, isAlcohol: true, },
  { orderCode: '3302', name: '生ビール（グラス）', taxExPrice: 273, taxInPrice: 300, isAlcohol: true, },
  { orderCode: '3303', name: 'アサヒ ドライゼロ', taxExPrice: 228, taxInPrice: 250, isAlcohol: false, },
  { orderCode: '3304', name: 'キリン 氷結シチリア産レモン', taxExPrice: 319, taxInPrice: 350, isAlcohol: true, },
  { orderCode: '3306', name: 'グラッパ', taxExPrice: 273, taxInPrice: 300, isAlcohol: true, },
  // スープ
  { orderCode: '1301', name: 'コーンクリームスープ', taxExPrice: 137, taxInPrice: 150, isAlcohol: false, },
  { orderCode: '1305', name: '田舎風ミネストローネ', taxExPrice: 273, taxInPrice: 300, isAlcohol: false, },
  { orderCode: '1307', name: 'たまねぎのズッパ', taxExPrice: 273, taxInPrice: 300, isAlcohol: false, },
  // パン
  { orderCode: '3104', name: 'シナモンプチフォッカ', taxExPrice: 182, taxInPrice: 200, isAlcohol: false, },
  { orderCode: '3106', name: 'プチフォッカ', taxExPrice: 137, taxInPrice: 150, isAlcohol: false, },
  { orderCode: '3108', name: 'ミニフィセル', taxExPrice: 137, taxInPrice: 150, isAlcohol: false, },
  { orderCode: '3109', name: 'ミニフィセル', taxExPrice: 182, taxInPrice: 200, isAlcohol: false, },
  // 前菜・おつまみ
  { orderCode: '1423', name: '生ハムとバッファローモッツァレラの盛合せ', taxExPrice: 455, taxInPrice: 500, isAlcohol: false, },
  { orderCode: '1422', name: 'ハモン・セラーノ', taxExPrice: 291, taxInPrice: 320, isAlcohol: false, },
  { orderCode: '1414', name: 'モッツァレラトマト', taxExPrice: 255, taxInPrice: 280, isAlcohol: false, },
  { orderCode: '1413', name: '爽やかにんじんサラダ', taxExPrice: 182, taxInPrice: 200, isAlcohol: false, },
  { orderCode: '1406', name: '小エビのカクテル', taxExPrice: 255, taxInPrice: 280, isAlcohol: false, },
  { orderCode: '1408', name: '蒸し鶏の香味ソース', taxExPrice: 255, taxInPrice: 280, isAlcohol: false, },
  { orderCode: '1425', name: '柔らか青豆の温サラダ', taxExPrice: 182, taxInPrice: 200, isAlcohol: false, },
  { orderCode: '1403', name: 'ほうれん草のソテー', taxExPrice: 182, taxInPrice: 200, isAlcohol: false, },
  { orderCode: '1411', name: 'アスパラガスの温サラダ', taxExPrice: 273, taxInPrice: 300, isAlcohol: false, },
  { orderCode: '1405', name: 'エスカルゴのオーブン焼き', taxExPrice: 364, taxInPrice: 400, isAlcohol: false, },
  { orderCode: '1401', name: '辛味チキン', taxExPrice: 273, taxInPrice: 300, isAlcohol: false, },
  { orderCode: '1404', name: 'ポップコーンシュリンプ', taxExPrice: 273, taxInPrice: 300, isAlcohol: false, },
  { orderCode: '1415', name: 'カリッとポテト', taxExPrice: 255, taxInPrice: 280, isAlcohol: false, },
  { orderCode: '1407', name: 'チョリソー', taxExPrice: 364, taxInPrice: 400, isAlcohol: false, },
  { orderCode: '1410', name: 'ムール貝のガーリック焼き', taxExPrice: 364, taxInPrice: 400, isAlcohol: false, },
  { orderCode: '1402', name: 'アロスティティーニ', taxExPrice: 364, taxInPrice: 400, isAlcohol: false, },
  { orderCode: '1452', name: 'アロスティティーニ（Wサイズ）', taxExPrice: 728, taxInPrice: 800, isAlcohol: false, },
  // ピザ
  { orderCode: '2201', name: 'マルゲリータピザ', taxExPrice: 364, taxInPrice: 400, isAlcohol: false, },
  { orderCode: '2251', name: 'マルゲリータピザ（Wチーズ）', taxExPrice: 455, taxInPrice: 500, isAlcohol: false, },
  { orderCode: '2202', name: 'バッファローモッツァレラのピザ', taxExPrice: 455, taxInPrice: 500, isAlcohol: false, },
  { orderCode: '2252', name: 'バッファローモッツァレラのピザ（Wチーズ）', taxExPrice: 546, taxInPrice: 600, isAlcohol: false, },
  { orderCode: '2204', name: '野菜ときのこのピザ', taxExPrice: 364, taxInPrice: 400, isAlcohol: false, },
  { orderCode: '2254', name: '野菜ときのこのピザ（Wチーズ）', taxExPrice: 455, taxInPrice: 500, isAlcohol: false, },
  { orderCode: '2208', name: 'ソーセージピザ', taxExPrice: 364, taxInPrice: 400, isAlcohol: false, },
  { orderCode: '2258', name: 'ソーセージピザ（Wチーズ）', taxExPrice: 455, taxInPrice: 500, isAlcohol: false, },
  { orderCode: '2206', name: 'たっぷりコーンのピザ', taxExPrice: 364, taxInPrice: 400, isAlcohol: false, },
  { orderCode: '2206', name: 'たっぷりコーンのピザ（Wチーズ）', taxExPrice: 455, taxInPrice: 500, isAlcohol: false, },
  // グラタン系
  { orderCode: '2109', name: 'エビとタラコのクリームグラタン（全粒粉）', taxExPrice: 391, taxInPrice: 430, isAlcohol: false, },
  { orderCode: '2325', name: 'ペンネアラビアータ（全粒粉）', taxExPrice: 391, taxInPrice: 430, isAlcohol: false, },
  // ドリア
  { orderCode: '2101', name: 'ミラノ風ドリア', taxExPrice: 273, taxInPrice: 300, isAlcohol: false, },
  { orderCode: '2103', name: '半熟卵のミラノ風ドリア', taxExPrice: 319, taxInPrice: 350, isAlcohol: false, },
  { orderCode: '2108', name: '焼きチーズ ミラノ風ドリア', taxExPrice: 319, taxInPrice: 350, isAlcohol: false, },
  { orderCode: '2106', name: 'タラコとエビのドリア', taxExPrice: 364, taxInPrice: 400, isAlcohol: false, },
  { orderCode: '2109', name: 'エビとタラコのクリームグラタン（全粒粉）', taxExPrice: 391, taxInPrice: 430, isAlcohol: false, },
  // パスタ
  { orderCode: '2320', name: '小エビのタラコソース', taxExPrice: 491, taxInPrice: 540, isAlcohol: false, },
  { orderCode: '2315', name: 'イタリア野菜のトマトスパゲッティ', taxExPrice: 491, taxInPrice: 540, isAlcohol: false, },
  { orderCode: '2310', name: 'スープ入り塩味ボンゴレ', taxExPrice: 455, taxInPrice: 500, isAlcohol: false, },
  { orderCode: '2328', name: 'イカの墨入りセピアソース', taxExPrice: 455, taxInPrice: 500, isAlcohol: false, },
  { orderCode: '2321', name: 'きのことほうれん草のクリームスパゲッティ', taxExPrice: 546, taxInPrice: 600, isAlcohol: false, },
  { orderCode: '2305', name: 'カルボナーラ', taxExPrice: 455, taxInPrice: 500, isAlcohol: false, },
  { orderCode: '2306', name: 'ミートソースボロニア風', taxExPrice: 364, taxInPrice: 400, isAlcohol: false, },
  { orderCode: '2316', name: '半熟卵のミートソースボロニア風', taxExPrice: 410, taxInPrice: 450, isAlcohol: false, },
  { orderCode: '2310', name: 'タラコソースシシリー風', taxExPrice: 364, taxInPrice: 400, isAlcohol: false, },
  { orderCode: '2304', name: 'パルマ風スパゲッティ', taxExPrice: 364, taxInPrice: 400, isAlcohol: false, },
  { orderCode: '2303', name: 'ペペロンチーノ', taxExPrice: 273, taxInPrice: 300, isAlcohol: false, },
  { orderCode: '2317', name: '半熟卵のペペロンチーノ', taxExPrice: 319, taxInPrice: 350, isAlcohol: false, },
  // ハンバーグ・ステーキ
  { orderCode: '2406', name: 'ハンバーグステーキ', taxExPrice: 364, taxInPrice: 400, isAlcohol: false, },
  { orderCode: '2407', name: 'ディアボラ風ハンバーグ', taxExPrice: 455, taxInPrice: 500, isAlcohol: false, },
  { orderCode: '2403', name: 'イタリアンハンバーグ', taxExPrice: 455, taxInPrice: 500, isAlcohol: false, },
  { orderCode: '2418', name: 'チョリソーとハンバーグの盛合せ', taxExPrice: 500, taxInPrice: 550, isAlcohol: false, },
  { orderCode: '2402', name: '若鶏のディアボラ風', taxExPrice: 455, taxInPrice: 500, isAlcohol: false, },
  { orderCode: '2404', name: '柔らかチキンのチーズ焼き', taxExPrice: 455, taxInPrice: 500, isAlcohol: false, },
  { orderCode: '2413', name: 'ラムと野菜のグリル', taxExPrice: 791, taxInPrice: 870, isAlcohol: false, },
  // ライス
  { orderCode: '3101', name: 'ライス', taxExPrice: 137, taxInPrice: 150, isAlcohol: false, },
  { orderCode: '3102', name: 'ラージライス', taxExPrice: 182, taxInPrice: 200, isAlcohol: false, },
  { orderCode: '3103', name: 'スモールライス', taxExPrice: 91, taxInPrice: 100, isAlcohol: false, },
  // デザート
  { orderCode: '3206', name: 'イタリアンプリン（すぐに）', taxExPrice: 228, taxInPrice: 250, isAlcohol: false, },
  { orderCode: '3906', name: 'イタリアンプリン（あとで）', taxExPrice: 228, taxInPrice: 250, isAlcohol: false, },
  { orderCode: '3201', name: 'ティラミスクラシコ（すぐに）', taxExPrice: 273, taxInPrice: 300, isAlcohol: false, },
  { orderCode: '3901', name: 'ティラミスクラシコ（あとで）', taxExPrice: 273, taxInPrice: 300, isAlcohol: false, },
  { orderCode: '3212', name: 'プリントティラミスクラシコの盛合せ（すぐに）', taxExPrice: 455, taxInPrice: 500, isAlcohol: false, },
  { orderCode: '3912', name: 'プリントティラミスクラシコの盛合せ（あとで）', taxExPrice: 455, taxInPrice: 500, isAlcohol: false, },
  { orderCode: '3205', name: 'イタリアンジェラート（すぐに）', taxExPrice: 228, taxInPrice: 250, isAlcohol: false, },
  { orderCode: '3905', name: 'イタリアンジェラート（あとで）', taxExPrice: 228, taxInPrice: 250, isAlcohol: false, },
  { orderCode: '3213', name: 'トリフアイスクリーム（すぐに）', taxExPrice: 319, taxInPrice: 350, isAlcohol: false, },
  { orderCode: '3913', name: 'トリフアイスクリーム（あとで）', taxExPrice: 319, taxInPrice: 350, isAlcohol: false, },
  { orderCode: '3207', name: 'チョコレートケーキ（すぐに）', taxExPrice: 273, taxInPrice: 300, isAlcohol: false, },
  { orderCode: '3907', name: 'チョコレートケーキ（あとで）', taxExPrice: 273, taxInPrice: 300, isAlcohol: false, },
  { orderCode: '3215', name: 'コーヒーゼリー&イタリアンジェラート（すぐに）', taxExPrice: 319, taxInPrice: 350, isAlcohol: false, },
  { orderCode: '3915', name: 'コーヒーゼリー&イタリアンジェラート（あとで）', taxExPrice: 319, taxInPrice: 350, isAlcohol: false, },
  { orderCode: '3204', name: 'ジェラート&シナモンプチフォッカ（すぐに）', taxExPrice: 410, taxInPrice: 450, isAlcohol: false, },
  { orderCode: '3904', name: 'ジェラート&シナモンプチフォッカ（あとで）', taxExPrice: 410, taxInPrice: 450, isAlcohol: false, },
];
