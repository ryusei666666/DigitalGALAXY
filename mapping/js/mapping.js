$(function () {

// windowサイズ
    // デバッグ用
    // let MaxWidth = window.parent.screen.width;

    // 本番用（横幅3画面）
    let MaxWidth = window.parent.screen.width * 2;
    let MaxHeight = window.parent.screen.height;

// ーーーplanetーーー
    
    const Planet = $(".planet");
    let planetWidth = {};
    let PlanetAngle = {};

    // 惑星をランダム配置
    for (var i = 0; i < Planet.length; i++){
        planetWidth[i] = Math.floor(Math.random() * 130) + 100;
        PlanetAngle[i] = Math.floor(Math.random() * 71) - 35;
        // let d = Math.floor(Math.random() * 360);
        Planet.eq(i).css({
            // "width": `${random}`
            width: planetWidth[i],
            top: Math.floor(Math.random() * (MaxHeight - planetWidth[i])),
            left: Math.floor(Math.random() * (MaxWidth - planetWidth[i])),
            transform: 'rotate(' + PlanetAngle[i] + 'deg)',
            'z-index': Math.floor(Math.random() * 50) + 3,
        });
    };

// ーーーsaturnーーー
    
    const Saturn = $(".saturn");
    let saturnWidth = {};
    let SaturnAngle = {};

    // 惑星をランダム配置
    for (var i = 0; i < Saturn.length; i++){
        saturnWidth[i] = Math.floor(Math.random() * 150) + 100;
        SaturnAngle[i] = Math.floor(Math.random() * 71) - 35;
        // let d = Math.floor(Math.random() * 360);
        Saturn.eq(i).css({
            // "width": `${random}`
            width: saturnWidth[i],
            top: Math.floor(Math.random() * (MaxHeight - saturnWidth[i])),
            left: Math.floor(Math.random() * (MaxWidth - saturnWidth[i])),
            transform: 'rotate(' + PlanetAngle[i] + 'deg)',
            'z-index': Math.floor(Math.random() * 50) + 3,
        });
    };


//ーーーーUFOーーーー 
    const Ufo = $(".ufo");

    // 大きさの配列
    let UfoWidth ={};
    
    // Ufo初期配置
    for (var i = 0; i < Ufo.length; i++) {
        UfoWidth[i] = Math.floor(Math.random() * 150) + 100;
        Ufo.eq(i).css({
            width: UfoWidth[i],
            top: Math.floor(Math.random() * (MaxHeight - UfoWidth[i])),
            left: Math.floor(Math.random() * (MaxWidth - UfoWidth[i])),
            'z-index': Math.floor(Math.random() * 100) + 3,
        });
    };

    // steUfoTime病後にufo移動開始
    // let setUfoTime = 2000;

    // setInterval(function () {
        // setTimeout(function () {
    for (var i = 0; i < Ufo.length; i++) {
        Ufo.eq(i).css({
            animation: "ufoufo 6s ease 3s infinite normal forwards",
        })
    }
        // },setUfoTime);
    // },steUfoTime);


    // オブジェクトごとのフラグを配列にまとめる
    let UfoteleportationFlg = {};

    // 最初は全部false
    for (var i = 0; i < Ufo.length; i++) {
        // if (Math.random() > 0.5) {
            UfoteleportationFlg[i] = true;
        // }
        // else {
        //     UfoteleportationFlg[i] = false;
        // }
    }
    // 瞬間移動のオンオフ
    setTimeout(function () {
        setInterval(function () {
            for (var i = 0; i < Ufo.length; i++) {
                if (Math.random() < 0.2) { //テレポートする確率調整
                    Ufo.eq(i)[0].style.animationPlayState = "running";
                    UfoteleportationFlg[i] = true;

                }
                else {
                    Ufo.eq(i)[0].style.animationPlayState = "paused";
                    UfoteleportationFlg[i] = false;
                    Ufo.eq(i).css({  //だんだん透明になっていくバグ修正用
                        opacity: 0,
                    })
                }
            };
        }, 6000);
    }, 3000);
    
    //瞬間移動の位置と大きさを調整
    // setTimeout(function () {
    setInterval(function () {
        for (var i = 0; i < Ufo.length; i++) {
            if (UfoteleportationFlg[i]) {
                UfoWidth[i] = Math.floor(Math.random() * 150) + 100;
                Ufo.eq(i).css({
                    width: UfoWidth[i],
                    top: Math.floor(Math.random() * (MaxHeight - UfoWidth[i])),
                    left: Math.floor(Math.random() * (MaxWidth - UfoWidth[i])),
                    transform: 'translateX(' + ufoX[i] + 'px) translateY(' + ufoY[i] + 'px) rotate(' + (Math.floor(Math.random() * 21) -10) + 'deg)',
                    'z-index': Math.floor(Math.random() * 100) + 3,
                })
            }
        }
    }, 6000);
    // },2000);

    let ufoX = {};
    let ufoY = {};
    let ufoAngle = {}; 

    for (var i = 0; i < Ufo.length; i++) {
        ufoX[i] = 1;
        ufoY[i] = 1;
        ufoAngle[i] = 1;
    }


    //ufoの動きの設定
    setInterval(() => {
        for (var i = 0; i < Ufo.length; i++) {
            let ufoRandomNum = Math.random();
            if (ufoRandomNum < 0.5) {
                ufoX[i] = Math.floor(Math.random() * 2) + 3;
            }
            else {
                ufoX[i] = -(Math.floor(Math.random() * 2) + 3);
            }
            ufoY[i] += Math.floor(Math.random() * 7) - 3;
            if (ufoAngle[i] >= 30) {
                ufoAngle[i] -= 2;
            }
            else if (ufoAngle[i] <= -30) {
                ufoAngle[i] += 2
            }
            else {
                ufoAngle[i] += Math.floor(Math.random() * 5) - 2;
            }
            Ufo.eq(i).css({
                transform: 'translateX(' + ufoX[i] + 'px) translateY(' + ufoY[i] + 'px) rotate(' + ufoAngle[i] + 'deg)',
            });
        }
    }, 200);




//  ーーーーAlienーーーー

    const Alien = $(".alien");
    let AlienWidth = {};

    // Alien初期配置
    for (var i = 0; i < Alien.length; i++) {
        AlienWidth[i] = Math.floor(Math.random() * 90) + 70;
        Alien.eq(i).css({
            width: AlienWidth[i],
            top: Math.floor(Math.random() * (MaxHeight - AlienWidth[i] * 2.3)),
            left: Math.floor(Math.random() * (MaxWidth - AlienWidth[i])),
            'z-index': Math.floor(Math.random() * 100) + 3,
        });
    };

    for (var i = 0; i < Alien.length; i++) {
        Alien.eq(i).css({
            animation: "ufoufo 6s ease 3s infinite normal forwards",
        })
    }

    // オブジェクトごとのフラグを配列にまとめる
    let AlienteleportationFlg = {};

    for (var i = 0; i < Alien.length; i++) {
            AlienteleportationFlg[i] = true;
    }
    // 瞬間移動のオンオフ
    setTimeout(function () {
        setInterval(function () {
            for (var i = 0; i < Alien.length; i++) {
                if (Math.random() < 0.2) { //テレポートする確率調整
                    Alien.eq(i)[0].style.animationPlayState = "running";
                    AlienteleportationFlg[i] = true;
                }
                else {
                    Alien.eq(i)[0].style.animationPlayState = "paused";
                    AlienteleportationFlg[i] = false;
                    Alien.eq(i).css({   //だんだん透明になっていくバグ修正用
                        opacity: 0, 
                    })
                }
            };
        }, 6000);
    }, 3000);

    //瞬間移動の位置と大きさを調整
    // setTimeout(function () {
    setInterval(function () {
        for (var i = 0; i < Alien.length; i++) {
            if (AlienteleportationFlg[i]) {
                AlienWidth[i] = Math.floor(Math.random() * 100) + 70;
                Alien.eq(i).css({
                    width: AlienWidth[i],
                    top: Math.floor(Math.random() * (MaxHeight - AlienWidth[i] * 2.3)),
                    left: Math.floor(Math.random() * (MaxWidth - AlienWidth[i])),
                    'z-index': Math.floor(Math.random() * 100) + 3,
                })
            }
        }
    }, 6000);
    // },2000);

//ーーーーRocketーーーー

    const Rocket = $(".rocket");
    // ロケットの大きさ
    let RocketWidth = {};
    //角度
    let RocketAngle = {};
    // 初期表示位置　top:t bottom:b left:l right:r 
    let RocketPlace = {};

    // Rocketの初期表示、再表示用の関数
    const Rockettt = function RocketSet() {
        //RocketSet
        let posChange = Math.random();
        RocketWidth[i] = Math.floor(Math.random() * 170) + 100;
        // 下
        if (posChange < 0.25) {
            RocketAngle[i] = Math.floor(Math.random() * 60) - 30;
            RocketPlace[i] = "b";
            Rocket.eq(i).css({
                width: RocketWidth[i],
                top: MaxHeight,
                left: Math.floor(Math.random() * (MaxWidth - RocketWidth[i])),
                transform: 'rotate(' + RocketAngle[i] + 'deg)',
                'z-index': Math.floor(Math.random() * 150) + 3,
            })
        }
        // 右
        else if (posChange < 0.5) {
            RocketAngle[i] = Math.floor(Math.random() * 60) - 120;
            RocketPlace[i] = "r";
            Rocket.eq(i).css({
                width: RocketWidth[i],
                top: Math.floor(Math.random() * (MaxHeight - RocketWidth[i])),
                left: MaxWidth + RocketWidth[i],
                transform: 'rotate(' + RocketAngle[i] + 'deg)',
                'z-index': Math.floor(Math.random() * 150) + 3,
            })
        }
        // 上
        else if (posChange < 0.75) {
            RocketAngle[i] = Math.floor(Math.random() * 60) - 210;
            RocketPlace[i] = "t";
            Rocket.eq(i).css({
                width: RocketWidth[i],
                top: 0 - RocketWidth[i],
                left: Math.floor(Math.random() * (MaxWidth - RocketWidth[i])),
                transform: 'rotate(' + RocketAngle[i] + 'deg)',
                'z-index': Math.floor(Math.random() * 150) + 3,
            })
        }
        //　左 
        else if (posChange <= 1) {
            RocketAngle[i] = Math.floor(Math.random() * 60) + 60;
            RocketPlace[i] = "l";
            Rocket.eq(i).css({
                width: RocketWidth[i],
                top: Math.floor(Math.random() * (MaxHeight - RocketWidth[i])),
                left: 0 - RocketWidth[i],
                transform: 'rotate(' + RocketAngle[i] + 'deg)',
                'z-index': Math.floor(Math.random() * 150) + 3,
            })
        }
    }//RocektSet

    // ロケットを画面外に表示(初期位置)
    for (var i = 0; i < Rocket.length; i++) { 
        Rockettt();
    };
    
    //スピード
    let RocketMotion = {}; 
    //座標
    let RocketX = {}; 
    let RocketY = {};
    //計算用角度
    let tanAngle = {};
    
    // 初期値0だとNaNになるので1
    for (var i = 0; i < Rocket.length; i++){
        RocketMotion[i] = Math.floor(Math.random() * 3) + 2;// RocketMotion
        RocketX[i] = 1;
        RocketY[i] = 1;
        tanAngle[i] = -(RocketAngle[i] - 90);
    }

    let RocketInterval = setInterval(function () {
        for (var i = 0; i < Rocket.length; i++) {
            // sin,cosの値がずれるときのための分岐
            if (tanAngle[i] == -360) {
                RocketX[i] += 1 * RocketMotion[i];
                RocketY[i];
            }
            else if (tanAngle[i] == -270) {
                RocketX[i];
                RocketY[i] -= 1 * RocketMotion[i];
            }
            else if (tanAngle[i] == -180) {
                RocketX[i] += -1 * RocketMotion[i];
                RocketY[i];
            }
            else if (tanAngle == -90) {
                RocketX[i];
                RocketY[i] -= -1 * RocketMotion[i];
            }
            else if (tanAngle[i] == 0) {
                RocketX[i] += 1 * RocketMotion[i];
                RocketY[i];
            }
            else if (tanAngle[i] == 90) {
                RocketX[i];
                RocketY[i] -= 1 * RocketMotion[i];
            }
            else if (tanAngle[i] == 180) {
                RocketX[i] += -1 * RocketMotion[i];
                RocketY[i];
            }
            else if (tanAngle[i] == 270) {
                RocketX[i];
                RocketY[i] -= -1 * RocketMotion[i];
            }
            else if (tanAngle[i] == 360) {
                RocketX[i];
                RocketY[i] -= 1 * RocketMotion[i];
            }
            else {
                RocketX[i] += Math.round(Math.cos(tanAngle[i] * (Math.PI / 180)) * 1000) * RocketMotion[i] / 1000;
                RocketY[i] -= Math.round(Math.sin(tanAngle[i] * (Math.PI / 180)) * 1000) * RocketMotion[i] / 1000;
            }

            Rocket.eq(i).css({
                transform: 'translateX(' + RocketX[i] + 'px) translateY(' + RocketY[i] + 'px) rotate(' + RocketAngle[i] + 'deg)',
            });
            

            // 呼び出しよう関数（スコープの関係で再表記）
                        function RocketSet2() {
                            let posChange = Math.random();
                            RocketWidth[i] = Math.floor(Math.random() * 200) + 100;
                            // 下
                            if (posChange < 0.25) {
                                RocketAngle[i] = Math.floor(Math.random() * 90) - 45;
                                RocketPlace[i] = "b";
                                Rocket.eq(i).css({
                                    width: RocketWidth[i],
                                    top: MaxHeight,
                                    left: Math.floor(Math.random() * (MaxWidth - RocketWidth[i])),
                                    transform: 'rotate(' + RocketAngle[i] + 'deg)',
                                    'z-index': Math.floor(Math.random() * 150) + 3,
                                })
                            }
                            // 右
                            else if (posChange < 0.5) {
                                RocketAngle[i] = Math.floor(Math.random() * 90) - 135;
                                RocketPlace[i] = "r";
                                Rocket.eq(i).css({
                                    width: RocketWidth[i],
                                    top: Math.floor(Math.random() * (MaxHeight - RocketWidth[i])),
                                    left: MaxWidth + RocketWidth[i],
                                    transform: 'rotate(' + RocketAngle[i] + 'deg)',
                                    'z-index': Math.floor(Math.random() * 150) + 3,
                                })
                            }
                            // 上
                            else if (posChange < 0.75) {
                                RocketAngle[i] = Math.floor(Math.random() * 90) - 225;
                                RocketPlace[i] = "t";
                                Rocket.eq(i).css({
                                    width: RocketWidth[i],
                                    top: 0 - RocketWidth[i],
                                    left: Math.floor(Math.random() * (MaxWidth - RocketWidth[i])),
                                    transform: 'rotate(' + RocketAngle[i] + 'deg)',
                                    'z-index': Math.floor(Math.random() * 150) + 3,
                                })
                            }
                            //　左 
                            else if (posChange <= 1) {
                                RocketAngle[i] = Math.floor(Math.random() * 90) + 45;
                                RocketPlace[i] = "l";
                                Rocket.eq(i).css({
                                    width: RocketWidth[i],
                                    top: Math.floor(Math.random() * (MaxHeight - RocketWidth[i])),
                                    left: 0 - RocketWidth[i],
                                    transform: 'rotate(' + RocketAngle[i] + 'deg)',
                                    'z-index': Math.floor(Math.random() * 150) + 3,
                                })
                            }
                        }//RocektSet2


            if (RocketPlace[i] == "t") {
                // if (RocketY[i] > (MaxHeight + RocketWidth[i])) {
                if(Rocket.eq(i)[0].offsetTop + RocketY[i] > (MaxHeight + RocketWidth[i])*2){
                    RocketSet2();
                    RocketX[i] = 1;
                    RocketY[i] = 1;
                }
            }
            else if (RocketPlace[i] == "b") {
                // if (RocketY[i] < -(MaxHeight + RocketWidth[i])) {
                if(Rocket.eq(i)[0].offsetTop + RocketY[i] < -RocketWidth[i]*2){
                    RocketSet2();
                    RocketX[i] = 1;
                    RocketY[i] = 1;
                }
            }
            else if (RocketPlace[i] == "l") {
                // if (RocketX[i] > (MaxWidth + RocketWidth[i])) {
                if (Rocket.eq(i)[0].offsetLeft + RocketX[i] > (MaxWidth + RocketWidth[i])) {
                    RocketSet2();
                    RocketX[i] = 1;
                    RocketY[i] = 1;
                }
            }
            else if (RocketPlace[i] == "r") {
                // if (RocketX[i] < -(MaxWidth + RocketWidth[i])) {
                if (Rocket.eq(i)[0].offsetLeft + RocketX[i] < -RocketWidth[i]) {
                    RocketSet2();
                    RocketX[i] = 1;
                    RocketY[i] = 1;
                }
            }

            // ロケットがめちゃくちゃ曲がっても大丈夫な用にするための処理
            // 方向によって変更点をかえるための処理
            // bottom(-45 ~ 45 deg)
            if (-45 <= RocketAngle[i] && RocketAngle[i] < 45) {
                RocketPlace[i] = "b";
            }
            // right(-45 ~ -135 deg)
            else if (-45 <= RocketAngle[i] && RocketAngle[i] < -135) {
                RocketPlace[i] = "r";
            }
            //  top(-135 ~ -215 deg)
            else if (-135 <= RocketAngle[i] && RocketAngle[i] <= -215) {
                RocketPlace[i] = "t";
            }
            // left(45 ~ 135 deg)
            else if (45 <= RocketAngle[i] && RocketAngle[i] < 135) {
                RocketPlace[i] = "l";
            }
            // top2(135 ~ 215 deg)
            else if (135 <= RocketAngle[i] && RocketAngle[i] <= 215) {
                RocketPlace[i] = "t";
            }
            // tanAngle[i] = -(RocketAngle[i] - 90);
        } //fot文
    }, 20); //SetInterval

    // Rocketの角度調整
    let AngleInterval = setInterval(function () {
            for (var i = 0; i < Rocket.length; i++) {
                RocketAngle[i] += Math.floor(Math.random() * 7) - 3;
                tanAngle[i] = -(RocketAngle[i] - 90);
            }
    }, 200)



    // ーーーーPoopーーーー

    const Poop = $(".poop");
    let PoopWidth ={};

    for (var i = 0; i < Poop.length; i++){
        PoopWidth[i] = Math.floor(Math.random() * 100) + 110;
        // let d = Math.floor(Math.random() * 360);
        Poop.eq(i).css({
            // "width": `${random}`
            width: PoopWidth[i],
            top: Math.floor(Math.random() * (MaxHeight - PoopWidth[i])),
            left: Math.floor(Math.random() * (MaxWidth - PoopWidth[i])),
            'z-index': Math.floor(Math.random() * 150) + 3,
        });
    };

    //スピード
    let PoopMotion = {}; 
    //座標
    let PoopX = {}; 
    let PoopY = {};
    //進む方向の角度
    let PoopAngle = {};
    // 回転速度
    let PoopRollingAngle = {};
    // 回転合計角度
    let PoopRollingAll = {};
    
    // 初期値0だとNaNになるので1
    for (var i = 0; i < Poop.length; i++){
        PoopMotion[i] = Math.floor(Math.random() * 5) + 2; // PoopMotion
        PoopX[i] = 1;
        PoopY[i] = 1;
        PoopAngle[i] = Math.floor(Math.random() * 361) - 180;
        let rolling = Math.random();//分岐用
        if (rolling < 0.5) {
            PoopRollingAngle[i] = Math.floor(Math.random() * 2) + 1; //1 or 2
        }
        else {
            PoopRollingAngle[i] = -(Math.floor(Math.random() * 2) + 1); //-1 or -2
        }
        PoopRollingAll[i] = 0;
    }

    let PoopInterval = setInterval(function () {
        for (var i = 0; i < Poop.length; i++) {
            // Poopのまっすぐ進むための計算
            // sin,cosの値がずれるときのための分岐
            if (PoopAngle[i] == -360) {
                PoopX[i] += 1 * PoopMotion[i];
                PoopY[i];
            }
            else if (PoopAngle[i] == -270) {
                PoopX[i];
                PoopY[i] -= 1 * PoopMotion[i];
            }
            else if (PoopAngle[i] == -180) {
                PoopX[i] += -1 * PoopMotion[i];
                PoopY[i];
            }
            else if (PoopAngle == -90) {
                PoopX[i];
                PoopY[i] -= -1 * PoopMotion[i];
            }
            else if (PoopAngle[i] == 0) {
                PoopX[i] += 1 * PoopMotion[i];
                PoopY[i];
            }
            else if (PoopAngle[i] == 90) {
                PoopX[i];
                PoopY[i] -= 1 * PoopMotion[i];
            }
            else if (PoopAngle[i] == 180) {
                PoopX[i] += -1 * PoopMotion[i];
                PoopY[i];
            }
            else if (PoopAngle[i] == 270) {
                PoopX[i];
                PoopY[i] -= -1 * PoopMotion[i];
            }
            else if (PoopAngle[i] == 360) {
                PoopX[i];
                PoopY[i] -= 1 * PoopMotion[i];
            }
            else {
                PoopX[i] += Math.round(Math.cos(PoopAngle[i] * (Math.PI / 180)) * 1000) * PoopMotion[i] / 1000;
                PoopY[i] -= Math.round(Math.sin(PoopAngle[i] * (Math.PI / 180)) * 1000) * PoopMotion[i] / 1000;
            }

            Poop.eq(i).css({
                transform: 'translateX(' + PoopX[i] + 'px) translateY(' + PoopY[i] + 'px) rotate('+ PoopRollingAll[i] +'deg)'
            });
            
            // 上にぶつかったとき
            if (Poop.eq(i)[0].offsetTop + PoopY[i] < 0) {
                PoopAngle[i] = Math.floor(Math.random() *140) - 160;
            }
            // 右にぶつかったとき
            else if (Poop.eq(i)[0].offsetLeft + PoopX[i] > (MaxWidth - PoopWidth[i])){
                PoopAngle[i] = Math.floor(Math.random() * 140) + 110;
            }
            // 下にぶつかったとき
            else if (Poop.eq(i)[0].offsetTop + PoopY[i] > (MaxHeight - PoopWidth[i])) {
                PoopAngle[i] = Math.floor(Math.random() * 140) + 20;
            }
            // 左にぶつかったとき
            else if (Poop.eq(i)[0].offsetLeft + PoopX[i] < 0) {
                PoopAngle[i] = Math.floor(Math.random() * 140) - 70;
            }

        }
    }, 50);

    setInterval(function () {
        for (var i = 0; i < Poop.length; i++) {
            PoopRollingAll[i] += PoopRollingAngle[i];
        }
    }, 100)

});//end