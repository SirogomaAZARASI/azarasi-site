/* ==================================================
   POLYTYPE
   GAME.JS PART 1
================================================== */

/* =========================
   DOM
========================= */

const bootScreen =
document.getElementById("bootScreen");

const startBtn =
document.getElementById("startBtn");

const gameContainer =
document.getElementById("gameContainer");

const levelEl =
document.getElementById("level");

const xpEl =
document.getElementById("xp");

const scoreEl =
document.getElementById("score");

const timerEl =
document.getElementById("timer");

const typedCountEl =
document.getElementById("typedCount");

const comboEl =
document.getElementById("combo");

const jpText =
document.getElementById("jpText");

const romaText =
document.getElementById("romaText");

const typedText =
document.getElementById("typedText");

const progressFill =
document.getElementById("progressFill");

const xpFill =
document.getElementById("xpFill");

/* =========================
   SAVE
========================= */

const SAVE_KEY =
"polytype_save_v1";

/* =========================
   STATE
========================= */

const game = {

    level:1,

    xp:0,

    score:0,

    combo:0,

    totalTyped:0,

    unlockedShapes:[1],

    selectedShape:1,

    time:60,

    running:false,

    currentWord:null,

    currentRoma:"",

    inputIndex:0

};

/* =========================
   SAVE
========================= */

function saveGame(){

    localStorage.setItem(
        SAVE_KEY,
        JSON.stringify(game)
    );

}

/* =========================
   LOAD
========================= */

function loadGame(){

    const data =
    localStorage.getItem(
        SAVE_KEY
    );

    if(!data) return;

    try{

        const parsed =
        JSON.parse(data);

        Object.assign(
            game,
            parsed
        );

    }catch(e){

        console.error(e);

    }

}

/* =========================
   XP
========================= */

function xpNeeded(level){

    return Math.floor(
        100 *
        Math.pow(level,1.25)
    );

}

/* =========================
   LEVEL
========================= */

function addXP(amount){

    game.xp += amount;

    while(
        game.xp >=
        xpNeeded(game.level)
    ){

        game.xp -=
        xpNeeded(game.level);

        game.level++;

        showLevelUp(
            game.level
        );

    }

}

/* =========================
   SCORE
========================= */

function addScore(){

    const value =
    10 +
    (game.combo * 2);

    game.score += value;

}

/* =========================
   WORD
========================= */

function nextWord(){

    const word =
    getRandomWord();

    game.currentWord =
    word;

    game.currentRoma =
    word.roma[
        Math.floor(
            Math.random()
            *
            word.roma.length
        )
    ];

    game.inputIndex = 0;

    jpText.textContent =
    word.jp;

    romaText.textContent =
    game.currentRoma;

    typedText.textContent =
    "";

    updateProgress();

}

/* =========================
   PROGRESS
========================= */

function updateProgress(){

    if(
        !game.currentRoma
    ) return;

    const percent =
    (
        game.inputIndex /
        game.currentRoma.length
    ) * 100;

    progressFill.style.width =
    percent + "%";

}

/* =========================
   UI
========================= */

function updateUI(){

    levelEl.textContent =
    game.level;

    xpEl.textContent =
    game.xp;

    scoreEl.textContent =
    game.score;

    comboEl.textContent =
    game.combo;

    timerEl.textContent =
    game.time;

    typedCountEl.textContent =
    game.totalTyped;

    const need =
    xpNeeded(game.level);

    xpFill.style.width =
    (
        game.xp / need
    ) * 100 + "%";

}

/* =========================
   START
========================= */

function startGame(){

    bootScreen.classList.add(
        "hidden"
    );

    gameContainer.classList.remove(
        "hidden"
    );

    game.time = 60;

    game.running = true;

    nextWord();

    updateUI();

}

/* =========================
   TIMER
========================= */

function startTimer(){

    setInterval(()=>{

        if(
            !game.running
        ) return;

        game.time--;

        if(
            game.time <= 0
        ){

            game.time = 0;

            game.running =
            false;

            gameOver();

        }

        updateUI();

    },1000);

}

/* =========================
   INPUT
========================= */

document.addEventListener(
"keydown",
(e)=>{

    if(
        !game.running
    ) return;

    const key =
    e.key.toLowerCase();

    if(
        key.length !== 1
    ) return;

    const target =
    game.currentRoma[
        game.inputIndex
    ];

    if(
        key === target
    ){

        game.inputIndex++;

        game.totalTyped++;

        game.combo++;

        addScore();

        addXP(2);

        typedText.textContent =
        game.currentRoma.slice(
            0,
            game.inputIndex
        );

        updateProgress();

        if(
            game.inputIndex >=
            game.currentRoma.length
        ){

            addXP(20);

            nextWord();

        }

    }else{

        game.combo = 0;

        document.body
        .classList
        .add("glitch");

        setTimeout(()=>{

            document.body
            .classList
            .remove("glitch");

        },150);

    }

    updateUI();

});

/* =========================
   GAME OVER
========================= */

function gameOver(){

    saveGame();

    alert(
`TIME UP!

SCORE : ${game.score}
LEVEL : ${game.level}
TYPE  : ${game.totalTyped}`
    );

}

/* =========================
   START BUTTON
========================= */

startBtn.addEventListener(
"click",
()=>{

    startGame();

});

/* =========================
   INIT
========================= */

loadGame();

afterType();

updateUI();

startTimer();



function afterType(){

    checkShapeUnlocks();

    checkAchievements();

}


/* ==================================================
   POLYTYPE
   GAME.JS PART 2
================================================== */

/* =========================
   DOM
========================= */

const shapeList =
document.getElementById("shapeList");

const shapeNameEl =
document.getElementById("shapeName");

const shapeJPEl =
document.getElementById("shapeJP");

const shapeRarityEl =
document.getElementById("shapeRarity");

const prevShapeBtn =
document.getElementById("prevShape");

const nextShapeBtn =
document.getElementById("nextShape");

const unlockPopup =
document.getElementById("unlockPopup");

const unlockShapeName =
document.getElementById("unlockShapeName");

const achievementPopup =
document.getElementById("achievementPopup");

const achievementName =
document.getElementById("achievementName");

const levelupPopup =
document.getElementById("levelupPopup");

const levelupValue =
document.getElementById("levelupValue");

const achievementArea =
document.getElementById("achievementArea");

/* =========================
   POPUP
========================= */

function popupShow(
element,
duration = 2500
){

    element.classList.remove(
        "hidden"
    );

    setTimeout(()=>{

        element.classList.add(
            "hidden"
        );

    },duration);

}

/* =========================
   LEVELUP
========================= */

function showLevelUp(level){

    levelupValue.textContent =
    `LV ${level}`;

    popupShow(
        levelupPopup
    );

}

/* =========================
   UNLOCK
========================= */

function showUnlock(shape){

    unlockShapeName.textContent =
    shape.jp;

    popupShow(
        unlockPopup,
        3000
    );

}

/* =========================
   ACHIEVEMENT
========================= */

function showAchievement(name){

    achievementName.textContent =
    name;

    achievementArea.textContent =
    name;

    popupShow(
        achievementPopup
    );

}

/* =========================
   CHECK UNLOCK
========================= */

function checkShapeUnlocks(){

    SHAPES.forEach(shape=>{

        if(

            game.totalTyped
            >=
            shape.unlock

            &&

            !game.unlockedShapes
            .includes(
                shape.id
            )

        ){

            game.unlockedShapes
            .push(
                shape.id
            );

            showUnlock(
                shape
            );

            renderDatabase();

            saveGame();

        }

    });

}

/* =========================
   ACHIEVEMENTS
========================= */

function checkAchievements(){

    const count =
    game.totalTyped;

    if(count === 100){

        showAchievement(
            "FIRST 100 TYPES"
        );

    }

    if(count === 1000){

        showAchievement(
            "1000 TYPES"
        );

    }

    if(count === 10000){

        showAchievement(
            "10000 TYPES"
        );

    }

    if(count === 100000){

        showAchievement(
            "MASTER TYPIST"
        );

    }

}

/* =========================
   DATABASE
========================= */

function renderDatabase(){

    shapeList.innerHTML = "";

    SHAPES.forEach(shape=>{

        const unlocked =
        game.unlockedShapes
        .includes(
            shape.id
        );

        const item =
        document.createElement(
            "div"
        );

        item.className =
        unlocked
        ?
        "shapeItem"
        :
        "shapeItem locked";

        item.innerHTML =

        `
        <div class="shapeName">
            ${
                unlocked
                ?
                shape.jp
                :
                "?????"
            }
        </div>

        <div class="shapeMeta">
            ${
                unlocked
                ?
                shape.rarity
                :
                "LOCKED"
            }
        </div>
        `;

        if(unlocked){

            item.addEventListener(
            "click",
            ()=>{

                selectShape(
                    shape.id
                );

            });

        }

        shapeList.appendChild(
            item
        );

    });

}

/* =========================
   SELECT
========================= */

function selectShape(id){

    game.selectedShape =
    id;

    updateShapeInfo();

    saveGame();

}

/* =========================
   SHAPE INFO
========================= */

function updateShapeInfo(){

    const shape =
    getShapeById(
        game.selectedShape
    );

    if(!shape) return;

    shapeNameEl.textContent =
    shape.name;

    shapeJPEl.textContent =
    shape.jp;

    shapeRarityEl.textContent =
    shape.rarity;

    shapeRarityEl.className =
    "";

    shapeRarityEl.classList.add(
        "rarity-" +
        shape.rarity
        .toLowerCase()
    );

}

/* =========================
   NEXT SHAPE
========================= */

function nextUnlockedShape(){

    const unlocked =
    game.unlockedShapes;

    let index =
    unlocked.indexOf(
        game.selectedShape
    );

    index++;

    if(
        index >=
        unlocked.length
    ){

        index = 0;

    }

    selectShape(
        unlocked[index]
    );

}

/* =========================
   PREV SHAPE
========================= */

function prevUnlockedShape(){

    const unlocked =
    game.unlockedShapes;

    let index =
    unlocked.indexOf(
        game.selectedShape
    );

    index--;

    if(
        index < 0
    ){

        index =
        unlocked.length - 1;

    }

    selectShape(
        unlocked[index]
    );

}

/* =========================
   BUTTONS
========================= */

nextShapeBtn
.addEventListener(
"click",
nextUnlockedShape
);

prevShapeBtn
.addEventListener(
"click",
prevUnlockedShape
);

/* =========================
   AUTO SAVE
========================= */

setInterval(()=>{

    saveGame();

},10000);

/* =========================
   PATCH INPUT
========================= */


/* =========================
   INIT
========================= */

renderDatabase();

updateShapeInfo();

/* ==================================================
   POLYTYPE
   GAME.JS PART 3
   THREE.JS
================================================== */

/* =========================
   THREE
========================= */

let scene;
let camera;
let renderer;

let polyMesh;

let drag = false;

let lastX = 0;
let lastY = 0;

const canvas =
document.getElementById(
    "threeCanvas"
);

/* =========================
   INIT
========================= */

function initThree(){

    scene =
    new THREE.Scene();

    camera =
    new THREE.PerspectiveCamera(
        60,
        canvas.clientWidth /
        canvas.clientHeight,
        0.1,
        1000
    );

    camera.position.z = 3;

    renderer =
    new THREE.WebGLRenderer({
        canvas,
        antialias:true,
        alpha:true
    });

    renderer.setPixelRatio(
        window.devicePixelRatio
    );

    renderer.setSize(
        canvas.clientWidth,
        canvas.clientHeight
    );

    createLights();

    loadShapeGeometry(
        game.selectedShape
    );

    animate();

}

/* =========================
   LIGHTS
========================= */

function createLights(){

    const ambient =
    new THREE.AmbientLight(
        0xffffff,
        1.2
    );

    scene.add(
        ambient
    );

    const light1 =
    new THREE.PointLight(
        0x00e5ff,
        40
    );

    light1.position.set(
        4,
        4,
        4
    );

    scene.add(
        light1
    );

    const light2 =
    new THREE.PointLight(
        0x009dff,
        30
    );

    light2.position.set(
        -4,
        -4,
        3
    );

    scene.add(
        light2
    );

}

/* =========================
   MATERIAL
========================= */

function createMaterial(){

    return new THREE.MeshStandardMaterial({

        color:0x00e5ff,

        emissive:0x00bcd4,

        emissiveIntensity:0.6,

        metalness:0.7,

        roughness:0.2,

        wireframe:false

    });

}

/* =========================
   GEOMETRY
========================= */

function geometryFromShape(
shape
){

    switch(
        shape.geometry
    ){

        case "cube":
            return new THREE.BoxGeometry(
                1,
                1,
                1
            );

        case "tetrahedron":
            return new THREE.TetrahedronGeometry(
                1
            );

        case "octahedron":
            return new THREE.OctahedronGeometry(
                1
            );

        case "dodecahedron":
            return new THREE.DodecahedronGeometry(
                1
            );

        case "icosahedron":
            return new THREE.IcosahedronGeometry(
                1
            );

        case "sphere":
            return new THREE.SphereGeometry(
                1,
                32,
                32
            );

        case "cone":
            return new THREE.ConeGeometry(
                1,
                2,
                24
            );

        case "cylinder":
            return new THREE.CylinderGeometry(
                1,
                1,
                2,
                24
            );

        case "torus":
            return new THREE.TorusGeometry(
                1,
                0.3,
                32,
                64
            );

        case "torusknot":
            return new THREE.TorusKnotGeometry(
                1,
                0.25,
                128,
                16
            );

        default:

            return new THREE.IcosahedronGeometry(
                1,
                0
            );

    }

}

/* =========================
   LOAD SHAPE
========================= */

function loadShapeGeometry(
shapeId
){

    const shape =
    getShapeById(
        shapeId
    );

    if(
        !shape
    ) return;

    if(
        polyMesh
    ){

        scene.remove(
            polyMesh
        );

        polyMesh.geometry.dispose();

    }

    const geometry =
    geometryFromShape(
        shape
    );

    const material =
    createMaterial();

    polyMesh =
    new THREE.Mesh(
        geometry,
        material
    );

    scene.add(
        polyMesh
    );

}

/* =========================
   PATCH
========================= */

const oldSelectShape =
selectShape;

selectShape = function(id){

    oldSelectShape(id);

    loadShapeGeometry(id);

};

/* =========================
   RESIZE
========================= */

window.addEventListener(
"resize",
()=>{

    if(
        !renderer
    ) return;

    camera.aspect =
    canvas.clientWidth /
    canvas.clientHeight;

    camera.updateProjectionMatrix();

    renderer.setSize(
        canvas.clientWidth,
        canvas.clientHeight
    );

}
);

/* =========================
   DRAG
========================= */

canvas.addEventListener(
"pointerdown",
e=>{

    drag = true;

    lastX = e.clientX;
    lastY = e.clientY;

}
);

window.addEventListener(
"pointerup",
()=>{

    drag = false;

}
);

window.addEventListener(
"pointermove",
e=>{

    if(
        !drag
    ) return;

    const dx =
    e.clientX - lastX;

    const dy =
    e.clientY - lastY;

    lastX =
    e.clientX;

    lastY =
    e.clientY;

    if(
        polyMesh
    ){

        polyMesh.rotation.y
        += dx * 0.01;

        polyMesh.rotation.x
        += dy * 0.01;

    }

}
);

/* =========================
   WHEEL
========================= */

canvas.addEventListener(
"wheel",
e=>{

    e.preventDefault();

    camera.position.z +=
    e.deltaY * 0.003;

    camera.position.z =
    Math.max(
        1.5,
        Math.min(
            10,
            camera.position.z
        )
    );

}
);

/* =========================
   ANIMATE
========================= */

function animate(){

    requestAnimationFrame(
        animate
    );

    if(
        polyMesh
    ){

        polyMesh.rotation.y
        += 0.004;

    }

    renderer.render(
        scene,
        camera
    );

}

/* =========================
   START PATCH
========================= */

const oldStartGame =
startGame;

startGame = function(){

    oldStartGame();

    if(
        !renderer
    ){

        initThree();

    }

};
