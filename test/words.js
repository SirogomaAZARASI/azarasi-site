const WORDS = [

/* =========================
   WORD
========================= */

{
    type:"word",
    jp:"こんにちは",
    roma:["konnnichiwa","konnichiha"]
},

{
    type:"word",
    jp:"ありがとう",
    roma:["arigatou"]
},

{
    type:"word",
    jp:"さようなら",
    roma:["sayounara"]
},

{
    type:"word",
    jp:"おはよう",
    roma:["ohayou"]
},

{
    type:"word",
    jp:"こんばんは",
    roma:["konbanwa"]
},

{
    type:"word",
    jp:"ねこ",
    roma:["neko"]
},

{
    type:"word",
    jp:"いぬ",
    roma:["inu"]
},

{
    type:"word",
    jp:"うさぎ",
    roma:["usagi"]
},

{
    type:"word",
    jp:"きつね",
    roma:["kitsune"]
},

{
    type:"word",
    jp:"たぬき",
    roma:["tanuki"]
},

{
    type:"word",
    jp:"りんご",
    roma:["ringo"]
},

{
    type:"word",
    jp:"みかん",
    roma:["mikan"]
},

{
    type:"word",
    jp:"ぶどう",
    roma:["budou"]
},

{
    type:"word",
    jp:"すいか",
    roma:["suika"]
},

{
    type:"word",
    jp:"めろん",
    roma:["meron"]
},

{
    type:"word",
    jp:"ぱそこん",
    roma:["pasokon"]
},

{
    type:"word",
    jp:"きーぼーど",
    roma:["ki-bo-do"]
},

{
    type:"word",
    jp:"ぷろぐらむ",
    roma:["puroguramu"]
},

{
    type:"word",
    jp:"ねっとわーく",
    roma:["nettowa-ku"]
},

{
    type:"word",
    jp:"でーたべーす",
    roma:["de-tabe-su"]
},

/* =========================
   SHORT
========================= */

{
    type:"short",
    jp:"今日はいい天気です",
    roma:["kyouhaiitenkidesu"]
},

{
    type:"short",
    jp:"タイピングは楽しい",
    roma:["taipinguhatanoshii"]
},

{
    type:"short",
    jp:"図形を解放しよう",
    roma:["zukeiokaihoushiyou"]
},

{
    type:"short",
    jp:"経験値を集めよう",
    roma:["keikenchiwoatsumeyou"]
},

{
    type:"short",
    jp:"コンボをつなげよう",
    roma:["konbowotsunageyou"]
},

{
    type:"short",
    jp:"正四面体を発見",
    roma:["seishimentaiohakken"]
},

{
    type:"short",
    jp:"立方体を解放した",
    roma:["rippoutaiwokaihoushita"]
},

{
    type:"short",
    jp:"新しい図形を取得",
    roma:["atarashiizukeiwoshutoku"]
},

{
    type:"short",
    jp:"データベース更新",
    roma:["de-tabe-sukoushin"]
},

{
    type:"short",
    jp:"レベルアップ成功",
    roma:["reberuappuseikou"]
},

/* =========================
   LONG
========================= */

{
    type:"long",
    jp:"タイピングによって失われた図形データベースを復元してください",
    roma:["taipinguniyotteushinawaretazukeide-tabe-suwofukkungenshitekudasai"]
},

{
    type:"long",
    jp:"あなたは図形研究機関の新人オペレーターです",
    roma:["anatahazukeikenkyuukikannoshinjinopere-ta-desu"]
},

{
    type:"long",
    jp:"大量の入力データを処理して未知の多面体を発見しましょう",
    roma:["tairyounonyuuryokude-tawoshorishitemichinotamentaiwohakkenshimashou"]
},

{
    type:"long",
    jp:"アルキメデス立体は美しい対称性を持っています",
    roma:["arukimedesurittaihautsukushiitaishouseiwomotteimasu"]
},

{
    type:"long",
    jp:"最終目標は全ての図形を収集することです",
    roma:["saishuumokuhyouhasubetenozukeiwoshuushuusu r ukotodesu".replace(/\s/g,"")]
},

{
    type:"long",
    jp:"図形は入力文字数に応じて次々と解放されていきます",
    roma:["zukeihanyuuryokumojisuuniojitetsugitsugatokaihousareteikimasu"]
},

{
    type:"long",
    jp:"高レアリティの図形ほど大量の経験値が必要です",
    roma:["kourearitinozukeihodotairyounokeikenchigahitsuyoudesu"]
},

{
    type:"long",
    jp:"正多面体の神秘を解き明かしてください",
    roma:["seitamentainoshinpiwotokiakashitekudasai"]
},

{
    type:"long",
    jp:"データベースの完成率百パーセントを目指しましょう",
    roma:["de-tabe-sunokanseiritsuhyakupa-sentowomezashimashou"]
},

{
    type:"long",
    jp:"究極の図形マスターへの道はまだ始まったばかりです",
    roma:["kyuukyokunozukeimasutaaenomichihamadahajimattabakaridesu"]
}

];

/* ランダム取得 */

function getRandomWord(){

    return WORDS[
        Math.floor(
            Math.random() * WORDS.length
        )
    ];

}