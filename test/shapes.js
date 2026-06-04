const SHAPES = [

/* =========================
   BASIC
========================= */

{
    id:1,
    name:"Point",
    jp:"点",
    rarity:"N",
    unlock:0,
    geometry:"point"
},

{
    id:2,
    name:"Line",
    jp:"線分",
    rarity:"N",
    unlock:20,
    geometry:"line"
},

{
    id:3,
    name:"Triangle",
    jp:"三角形",
    rarity:"N",
    unlock:40,
    geometry:"triangle"
},

{
    id:4,
    name:"Square",
    jp:"正方形",
    rarity:"N",
    unlock:60,
    geometry:"square"
},

{
    id:5,
    name:"Pentagon",
    jp:"五角形",
    rarity:"N",
    unlock:80,
    geometry:"polygon5"
},

{
    id:6,
    name:"Hexagon",
    jp:"六角形",
    rarity:"N",
    unlock:100,
    geometry:"polygon6"
},

{
    id:7,
    name:"Heptagon",
    jp:"七角形",
    rarity:"N",
    unlock:120,
    geometry:"polygon7"
},

{
    id:8,
    name:"Octagon",
    jp:"八角形",
    rarity:"N",
    unlock:140,
    geometry:"polygon8"
},

{
    id:9,
    name:"Nonagon",
    jp:"九角形",
    rarity:"N",
    unlock:160,
    geometry:"polygon9"
},

{
    id:10,
    name:"Decagon",
    jp:"十角形",
    rarity:"N",
    unlock:180,
    geometry:"polygon10"
},

/* =========================
   PLATONIC
========================= */

{
    id:11,
    name:"Tetrahedron",
    jp:"正四面体",
    rarity:"R",
    unlock:250,
    geometry:"tetrahedron"
},

{
    id:12,
    name:"Cube",
    jp:"立方体",
    rarity:"R",
    unlock:350,
    geometry:"cube"
},

{
    id:13,
    name:"Octahedron",
    jp:"正八面体",
    rarity:"R",
    unlock:500,
    geometry:"octahedron"
},

{
    id:14,
    name:"Dodecahedron",
    jp:"正十二面体",
    rarity:"SR",
    unlock:800,
    geometry:"dodecahedron"
},

{
    id:15,
    name:"Icosahedron",
    jp:"正二十面体",
    rarity:"SR",
    unlock:1200,
    geometry:"icosahedron"
},

/* =========================
   PRISMS
========================= */

{
    id:16,
    name:"Triangular Prism",
    jp:"三角柱",
    rarity:"R",
    unlock:1400,
    geometry:"prism3"
},

{
    id:17,
    name:"Square Prism",
    jp:"四角柱",
    rarity:"R",
    unlock:1500,
    geometry:"prism4"
},

{
    id:18,
    name:"Pentagonal Prism",
    jp:"五角柱",
    rarity:"R",
    unlock:1600,
    geometry:"prism5"
},

{
    id:19,
    name:"Hexagonal Prism",
    jp:"六角柱",
    rarity:"R",
    unlock:1700,
    geometry:"prism6"
},

{
    id:20,
    name:"Octagonal Prism",
    jp:"八角柱",
    rarity:"R",
    unlock:1800,
    geometry:"prism8"
},

/* =========================
   PYRAMIDS
========================= */

{
    id:21,
    name:"Triangular Pyramid",
    jp:"三角錐",
    rarity:"R",
    unlock:2000,
    geometry:"pyramid3"
},

{
    id:22,
    name:"Square Pyramid",
    jp:"四角錐",
    rarity:"R",
    unlock:2200,
    geometry:"pyramid4"
},

{
    id:23,
    name:"Pentagonal Pyramid",
    jp:"五角錐",
    rarity:"R",
    unlock:2400,
    geometry:"pyramid5"
},

{
    id:24,
    name:"Hexagonal Pyramid",
    jp:"六角錐",
    rarity:"R",
    unlock:2600,
    geometry:"pyramid6"
},

{
    id:25,
    name:"Octagonal Pyramid",
    jp:"八角錐",
    rarity:"R",
    unlock:2800,
    geometry:"pyramid8"
},

/* =========================
   ARCHIMEDEAN
========================= */

{
    id:26,
    name:"Truncated Tetrahedron",
    jp:"切頂四面体",
    rarity:"SR",
    unlock:3200,
    geometry:"truncated_tetrahedron"
},

{
    id:27,
    name:"Cuboctahedron",
    jp:"立方八面体",
    rarity:"SR",
    unlock:3600,
    geometry:"cuboctahedron"
},

{
    id:28,
    name:"Truncated Cube",
    jp:"切頂立方体",
    rarity:"SR",
    unlock:4000,
    geometry:"truncated_cube"
},

{
    id:29,
    name:"Truncated Octahedron",
    jp:"切頂八面体",
    rarity:"SR",
    unlock:4500,
    geometry:"truncated_octahedron"
},

{
    id:30,
    name:"Rhombicuboctahedron",
    jp:"斜方立方八面体",
    rarity:"SR",
    unlock:5000,
    geometry:"rhombicuboctahedron"
},

/* =========================
   ADVANCED
========================= */

{
    id:31,
    name:"Snub Cube",
    jp:"ねじれ立方体",
    rarity:"SR",
    unlock:6000,
    geometry:"snub_cube"
},

{
    id:32,
    name:"Icosidodecahedron",
    jp:"二十・十二面体",
    rarity:"SR",
    unlock:7000,
    geometry:"icosidodecahedron"
},

{
    id:33,
    name:"Truncated Dodecahedron",
    jp:"切頂十二面体",
    rarity:"SR",
    unlock:8000,
    geometry:"truncated_dodecahedron"
},

{
    id:34,
    name:"Truncated Icosahedron",
    jp:"切頂二十面体",
    rarity:"SSR",
    unlock:10000,
    geometry:"truncated_icosahedron"
},

{
    id:35,
    name:"Rhombicosidodecahedron",
    jp:"斜方二十・十二面体",
    rarity:"SSR",
    unlock:12000,
    geometry:"rhombicosidodecahedron"
},

/* =========================
   SPECIAL
========================= */

{
    id:36,
    name:"Sphere",
    jp:"球",
    rarity:"R",
    unlock:14000,
    geometry:"sphere"
},

{
    id:37,
    name:"Cylinder",
    jp:"円柱",
    rarity:"R",
    unlock:15000,
    geometry:"cylinder"
},

{
    id:38,
    name:"Cone",
    jp:"円錐",
    rarity:"R",
    unlock:16000,
    geometry:"cone"
},

{
    id:39,
    name:"Torus",
    jp:"トーラス",
    rarity:"SR",
    unlock:18000,
    geometry:"torus"
},

{
    id:40,
    name:"Torus Knot",
    jp:"トーラス結び目",
    rarity:"SSR",
    unlock:22000,
    geometry:"torusknot"
},

/* =========================
   RARE
========================= */

{
    id:41,
    name:"Star Tetrahedron",
    jp:"星形四面体",
    rarity:"SSR",
    unlock:25000,
    geometry:"star_tetra"
},

{
    id:42,
    name:"Small Stellated Dodecahedron",
    jp:"小星形十二面体",
    rarity:"SSR",
    unlock:30000,
    geometry:"small_stellated"
},

{
    id:43,
    name:"Great Dodecahedron",
    jp:"大十二面体",
    rarity:"SSR",
    unlock:35000,
    geometry:"great_dodeca"
},

{
    id:44,
    name:"Great Icosahedron",
    jp:"大二十面体",
    rarity:"SSR",
    unlock:40000,
    geometry:"great_icosa"
},

{
    id:45,
    name:"Great Stellated Dodecahedron",
    jp:"大星形十二面体",
    rarity:"UR",
    unlock:50000,
    geometry:"great_stellated"
},

/* =========================
   LEGEND
========================= */

{
    id:46,
    name:"Mobius Strip",
    jp:"メビウスの帯",
    rarity:"UR",
    unlock:60000,
    geometry:"mobius"
},

{
    id:47,
    name:"Klein Bottle",
    jp:"クラインの壺",
    rarity:"UR",
    unlock:70000,
    geometry:"klein"
},

{
    id:48,
    name:"Menger Sponge",
    jp:"メンガースポンジ",
    rarity:"UR",
    unlock:90000,
    geometry:"menger"
},

{
    id:49,
    name:"Sierpinski Tetrahedron",
    jp:"シェルピンスキー四面体",
    rarity:"UR",
    unlock:120000,
    geometry:"sierpinski"
},

{
    id:50,
    name:"Polygon Core",
    jp:"ポリゴンコア",
    rarity:"LR",
    unlock:200000,
    geometry:"core"
},

/* =========================
   CYBER SERIES
========================= */

{
    id:51,
    name:"Data Cube",
    jp:"データキューブ",
    rarity:"SR",
    unlock:210000,
    geometry:"data_cube"
},

{
    id:52,
    name:"Quantum Cube",
    jp:"量子立方体",
    rarity:"SR",
    unlock:220000,
    geometry:"quantum_cube"
},

{
    id:53,
    name:"Neon Prism",
    jp:"ネオンプリズム",
    rarity:"SR",
    unlock:230000,
    geometry:"neon_prism"
},

{
    id:54,
    name:"Cyber Pyramid",
    jp:"サイバー錐体",
    rarity:"SR",
    unlock:240000,
    geometry:"cyber_pyramid"
},

{
    id:55,
    name:"Wireframe Core",
    jp:"ワイヤーフレームコア",
    rarity:"SR",
    unlock:250000,
    geometry:"wireframe_core"
},

{
    id:56,
    name:"Binary Crystal",
    jp:"バイナリ結晶",
    rarity:"SSR",
    unlock:260000,
    geometry:"binary_crystal"
},

{
    id:57,
    name:"Hex Matrix",
    jp:"六角マトリクス",
    rarity:"SSR",
    unlock:270000,
    geometry:"hex_matrix"
},

{
    id:58,
    name:"Cyber Nexus",
    jp:"サイバーネクサス",
    rarity:"SSR",
    unlock:280000,
    geometry:"cyber_nexus"
},

{
    id:59,
    name:"Data Ring",
    jp:"データリング",
    rarity:"SSR",
    unlock:290000,
    geometry:"data_ring"
},

{
    id:60,
    name:"Neural Polyhedron",
    jp:"神経多面体",
    rarity:"SSR",
    unlock:300000,
    geometry:"neural_polyhedron"
},

/* =========================
   FRACTAL
========================= */

{
    id:61,
    name:"Fractal Seed",
    jp:"フラクタルの種",
    rarity:"SR",
    unlock:320000,
    geometry:"fractal_seed"
},

{
    id:62,
    name:"Fractal Cube",
    jp:"フラクタル立方体",
    rarity:"SSR",
    unlock:340000,
    geometry:"fractal_cube"
},

{
    id:63,
    name:"Recursive Sphere",
    jp:"再帰球体",
    rarity:"SSR",
    unlock:360000,
    geometry:"recursive_sphere"
},

{
    id:64,
    name:"Menger Fragment",
    jp:"メンガー断片",
    rarity:"SSR",
    unlock:380000,
    geometry:"menger_fragment"
},

{
    id:65,
    name:"Infinite Prism",
    jp:"無限柱体",
    rarity:"UR",
    unlock:400000,
    geometry:"infinite_prism"
},

{
    id:66,
    name:"Infinite Tetra",
    jp:"無限四面体",
    rarity:"UR",
    unlock:420000,
    geometry:"infinite_tetra"
},

{
    id:67,
    name:"Fractal Core",
    jp:"フラクタルコア",
    rarity:"UR",
    unlock:440000,
    geometry:"fractal_core"
},

{
    id:68,
    name:"Chaos Geometry",
    jp:"カオス幾何体",
    rarity:"UR",
    unlock:460000,
    geometry:"chaos_geometry"
},

{
    id:69,
    name:"Dimension Fold",
    jp:"次元折り畳み体",
    rarity:"UR",
    unlock:480000,
    geometry:"dimension_fold"
},

{
    id:70,
    name:"Infinity Mesh",
    jp:"無限メッシュ",
    rarity:"LR",
    unlock:500000,
    geometry:"infinity_mesh"
},

/* =========================
   SPACE
========================= */

{
    id:71,
    name:"Moon Core",
    jp:"月核",
    rarity:"SR",
    unlock:520000,
    geometry:"moon_core"
},

{
    id:72,
    name:"Planet Sphere",
    jp:"惑星球体",
    rarity:"SSR",
    unlock:540000,
    geometry:"planet_sphere"
},

{
    id:73,
    name:"Gas Giant",
    jp:"巨大ガス惑星",
    rarity:"SSR",
    unlock:560000,
    geometry:"gas_giant"
},

{
    id:74,
    name:"Ring World",
    jp:"リングワールド",
    rarity:"UR",
    unlock:580000,
    geometry:"ring_world"
},

{
    id:75,
    name:"Dyson Fragment",
    jp:"ダイソン断片",
    rarity:"UR",
    unlock:600000,
    geometry:"dyson_fragment"
},

{
    id:76,
    name:"Star Core",
    jp:"恒星核",
    rarity:"UR",
    unlock:630000,
    geometry:"star_core"
},

{
    id:77,
    name:"Neutron Sphere",
    jp:"中性子球",
    rarity:"UR",
    unlock:660000,
    geometry:"neutron_sphere"
},

{
    id:78,
    name:"Black Hole Ring",
    jp:"ブラックホールリング",
    rarity:"UR",
    unlock:700000,
    geometry:"blackhole_ring"
},

{
    id:79,
    name:"Galaxy Mesh",
    jp:"銀河メッシュ",
    rarity:"LR",
    unlock:750000,
    geometry:"galaxy_mesh"
},

{
    id:80,
    name:"Universe Seed",
    jp:"宇宙の種",
    rarity:"LR",
    unlock:800000,
    geometry:"universe_seed"
},

/* =========================
   MYTHIC SERIES
========================= */

{
    id:81,
    name:"Dragon Polyhedron",
    jp:"竜多面体",
    rarity:"UR",
    unlock:850000,
    geometry:"dragon_polyhedron"
},

{
    id:82,
    name:"Phoenix Crystal",
    jp:"不死鳥結晶",
    rarity:"UR",
    unlock:900000,
    geometry:"phoenix_crystal"
},

{
    id:83,
    name:"Titan Core",
    jp:"巨神核",
    rarity:"UR",
    unlock:950000,
    geometry:"titan_core"
},

{
    id:84,
    name:"Olympus Sphere",
    jp:"天界球",
    rarity:"UR",
    unlock:1000000,
    geometry:"olympus_sphere"
},

{
    id:85,
    name:"World Tree Node",
    jp:"世界樹ノード",
    rarity:"UR",
    unlock:1050000,
    geometry:"world_tree"
},

{
    id:86,
    name:"Chaos Egg",
    jp:"混沌の卵",
    rarity:"LR",
    unlock:1100000,
    geometry:"chaos_egg"
},

{
    id:87,
    name:"Genesis Crystal",
    jp:"創世結晶",
    rarity:"LR",
    unlock:1150000,
    geometry:"genesis_crystal"
},

{
    id:88,
    name:"Eternal Prism",
    jp:"永遠のプリズム",
    rarity:"LR",
    unlock:1200000,
    geometry:"eternal_prism"
},

{
    id:89,
    name:"Divine Polyhedron",
    jp:"神聖多面体",
    rarity:"LR",
    unlock:1250000,
    geometry:"divine_polyhedron"
},

{
    id:90,
    name:"Mythic Core",
    jp:"神話コア",
    rarity:"LR",
    unlock:1300000,
    geometry:"mythic_core"
},

/* =========================
   HYPER DIMENSION
========================= */

{
    id:91,
    name:"Tesseract",
    jp:"テッセラクト",
    rarity:"UR",
    unlock:1350000,
    geometry:"tesseract"
},

{
    id:92,
    name:"Hyper Cube",
    jp:"超立方体",
    rarity:"UR",
    unlock:1400000,
    geometry:"hyper_cube"
},

{
    id:93,
    name:"4D Prism",
    jp:"四次元柱体",
    rarity:"UR",
    unlock:1450000,
    geometry:"4d_prism"
},

{
    id:94,
    name:"4D Sphere",
    jp:"四次元球体",
    rarity:"UR",
    unlock:1500000,
    geometry:"4d_sphere"
},

{
    id:95,
    name:"Quantum Fold",
    jp:"量子折畳体",
    rarity:"UR",
    unlock:1550000,
    geometry:"quantum_fold"
},

{
    id:96,
    name:"Hyper Nexus",
    jp:"超次元ネクサス",
    rarity:"LR",
    unlock:1600000,
    geometry:"hyper_nexus"
},

{
    id:97,
    name:"Dimension Crystal",
    jp:"次元結晶",
    rarity:"LR",
    unlock:1650000,
    geometry:"dimension_crystal"
},

{
    id:98,
    name:"Reality Mesh",
    jp:"現実メッシュ",
    rarity:"LR",
    unlock:1700000,
    geometry:"reality_mesh"
},

{
    id:99,
    name:"Singularity Node",
    jp:"特異点ノード",
    rarity:"LR",
    unlock:1750000,
    geometry:"singularity_node"
},

{
    id:100,
    name:"Omega Prism",
    jp:"オメガプリズム",
    rarity:"LR",
    unlock:1800000,
    geometry:"omega_prism"
},

/* =========================
   ENDGAME
========================= */

{
    id:101,
    name:"Alpha Core",
    jp:"アルファコア",
    rarity:"LR",
    unlock:1900000,
    geometry:"alpha_core"
},

{
    id:102,
    name:"Beta Core",
    jp:"ベータコア",
    rarity:"LR",
    unlock:2000000,
    geometry:"beta_core"
},

{
    id:103,
    name:"Gamma Core",
    jp:"ガンマコア",
    rarity:"LR",
    unlock:2100000,
    geometry:"gamma_core"
},

{
    id:104,
    name:"Delta Core",
    jp:"デルタコア",
    rarity:"LR",
    unlock:2200000,
    geometry:"delta_core"
},

{
    id:105,
    name:"Omega Core",
    jp:"オメガコア",
    rarity:"LR",
    unlock:2300000,
    geometry:"omega_core"
},

{
    id:106,
    name:"Void Sphere",
    jp:"虚無球",
    rarity:"LR",
    unlock:2400000,
    geometry:"void_sphere"
},

{
    id:107,
    name:"Origin Crystal",
    jp:"起源結晶",
    rarity:"LR",
    unlock:2500000,
    geometry:"origin_crystal"
},

{
    id:108,
    name:"Creation Seed",
    jp:"創造の種",
    rarity:"LR",
    unlock:2600000,
    geometry:"creation_seed"
},

{
    id:109,
    name:"Final Polyhedron",
    jp:"最終多面体",
    rarity:"LR",
    unlock:2800000,
    geometry:"final_polyhedron"
},

{
    id:110,
    name:"Polygon God",
    jp:"ポリゴンゴッド",
    rarity:"LR",
    unlock:3000000,
    geometry:"polygon_god"
},

/* =========================
   BONUS COLLECTION
========================= */

{
    id:111,
    name:"Cyber Relic I",
    jp:"サイバー遺物Ⅰ",
    rarity:"SSR",
    unlock:3100000,
    geometry:"relic1"
},

{
    id:112,
    name:"Cyber Relic II",
    jp:"サイバー遺物Ⅱ",
    rarity:"SSR",
    unlock:3200000,
    geometry:"relic2"
},

{
    id:113,
    name:"Cyber Relic III",
    jp:"サイバー遺物Ⅲ",
    rarity:"SSR",
    unlock:3300000,
    geometry:"relic3"
},

{
    id:114,
    name:"Cyber Relic IV",
    jp:"サイバー遺物Ⅳ",
    rarity:"SSR",
    unlock:3400000,
    geometry:"relic4"
},

{
    id:115,
    name:"Cyber Relic V",
    jp:"サイバー遺物Ⅴ",
    rarity:"SSR",
    unlock:3500000,
    geometry:"relic5"
},

{
    id:116,
    name:"Archive Node",
    jp:"アーカイブノード",
    rarity:"UR",
    unlock:3600000,
    geometry:"archive_node"
},

{
    id:117,
    name:"Memory Crystal",
    jp:"記憶結晶",
    rarity:"UR",
    unlock:3700000,
    geometry:"memory_crystal"
},

{
    id:118,
    name:"Data Ocean",
    jp:"データの海",
    rarity:"UR",
    unlock:3800000,
    geometry:"data_ocean"
},

{
    id:119,
    name:"System Heart",
    jp:"システムハート",
    rarity:"UR",
    unlock:3900000,
    geometry:"system_heart"
},

{
    id:120,
    name:"Protocol Zero",
    jp:"プロトコルゼロ",
    rarity:"LR",
    unlock:4000000,
    geometry:"protocol_zero"
}

];

/* =========================
   HELPERS
========================= */

function getShapeById(id){

    return SHAPES.find(
        shape => shape.id === id
    );

}

function getUnlockedShapes(totalTyped){

    return SHAPES.filter(
        shape => totalTyped >= shape.unlock
    );

}