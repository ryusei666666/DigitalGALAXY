$(function () {
    function Ajax() {
        $.ajax({
            //連絡先のアドレス
            url: "src_changer.php",
            // 送信データの種類
            method: "GET", //GETはurl内に値を入れてもいける
            //受信データの種類
            dataType: "json",
            //タイムアウト
            timeout: 3000,
            // cashe消す　開発終わったらコメントアウト
            cache: false
        })
        .done(function(responce){
            // console.log("Ajax通信成功");
            // console.log(responce);//[0]all [1]alien [2]poo [3]rocket [4]planet [5]saturn [6]ufo
            var Count = responce;
            console.log(responce);

            function Src_load(){
            //ーーーーplanetーーーー
                if (Count[4] <= $(".planet").length) {
                    for (let i = 0; i < $(".planet").length; i++){
                        if (i < Count[4]) {
                            $(".planet")[i].src = "http://localhost/tikyuusai2019/scan_png/planet" + (i + 1) + ".png";
                        }
                        else {
                            $(".planet")[i].src = "http://localhost/tikyuusai2019/scan_png/planet"+ (Math.floor(Math.random() * Count[4]) +1) +".png";
                        }
                    }
                }
                else {//データ数が表示できる数より多いとき最新の5つを表示
                    for (let i = 0; i < 5; i++){
                        $(".planet")[i].src = "http://localhost/tikyuusai2019/scan_png/planet"+ (Count[4]-(i)) +".png";
                    }
                    for (let i = 5; i < $(".planet").length; i++){
                        $(".planet")[i].src = "http://localhost/tikyuusai2019/scan_png/planet"+ (Math.floor(Math.random() * Count[4]) +1) +".png";
                    }
                }        
            //ーーーーsatuenーーーー
                if (Count[5] <= $(".saturn").length) {
                    for (let i = 0; i < $(".saturn").length; i++){
                        if (i < Count[5]) {
                            $(".saturn")[i].src = "http://localhost/tikyuusai2019/scan_png/saturn" + (i + 1) + ".png";
                        }
                        else {
                            $(".saturn")[i].src = "http://localhost/tikyuusai2019/scan_png/saturn"+ (Math.floor(Math.random() * Count[5]) +1) +".png";
                        }
                    }
                }
                else {//最新の5つを表示
                    for (let i = 0; i < 5; i++) {
                        $(".saturn")[i].src = "http://localhost/tikyuusai2019/scan_png/saturn" + (Count[5]-(i)) +".png";
                    }
                    for (let i = 5; i < $(".saturn").length; i++){
                        $(".saturn")[i].src = "http://localhost/tikyuusai2019/scan_png/saturn"+ Math.floor(Math.random() * (Count[5]) +1) +".png";
                    }
                }
        
            //ーーーーufoーーーー
                if (Count[6] <= $(".ufo").length) {
                    for (let i = 0; i < $(".ufo").length; i++){
                        if (i < Count[6]) {
                            $(".ufo")[i].src = "http://localhost/tikyuusai2019/scan_png/ufo" + (i + 1) + ".png";
                        }
                        else {
                            $(".ufo")[i].src = "http://localhost/tikyuusai2019/scan_png/ufo"+ (Math.floor(Math.random() * Count[6]) +1) +".png";
                        }
                    }
                }
                else {//最新の5つを表示
                    for (let i = 0; i < 5; i++) {
                        $(".ufo")[i].src = "http://localhost/tikyuusai2019/scan_png/ufo" + (Count[6]-(i)) +".png";
                    }
                    for (let i = 5; i < $(".ufo").length; i++){
                        $(".ufo")[i].src = "http://localhost/tikyuusai2019/scan_png/ufo"+ (Math.floor(Math.random() * Count[6]) +1) +".png";
                    }
                }
        
        
            //ーーーーalienーーーー
                if (Count[1] <= $(".alien").length) {
                    for (let i = 0; i < $(".alien").length; i++){
                        if (i < Count[1]) {
                            $(".alien")[i].src = "http://localhost/tikyuusai2019/scan_png/alien" + (i + 1) + ".png";
                        }
                        else {
                            $(".alien")[i].src = "http://localhost/tikyuusai2019/scan_png/alien"+ (Math.floor(Math.random() * Count[1]) +1) +".png";
                        }
                    }
                }
                else {//最新の5つを表示
                    for (let i = 0; i < 5; i++) {
                        $(".alien")[i].src = "http://localhost/tikyuusai2019/scan_png/alien" + (Count[1]-(i)) +".png";
                    }
                    for (let i = 5; i < $(".alien").length; i++){
                        $(".alien")[i].src = "http://localhost/tikyuusai2019/scan_png/alien"+ (Math.floor(Math.random() * Count[1]) +1) +".png";
                    }
                }
        
            //ーーーーrocketーーーー
                if (Count[3] <= $(".rocket").length) {
                    for (let i = 0; i < $(".rocket").length; i++){
                        if (i < Count[3]) {
                            $(".rocket")[i].src = "http://localhost/tikyuusai2019/scan_png/rocket" + (i + 1) + ".png";
                        }
                        else {
                            $(".rocket")[i].src = "http://localhost/tikyuusai2019/scan_png/rocket"+ (Math.floor(Math.random() * Count[3]) +1) +".png";
                        }
                    }
                }
                else {//最新の5つを表示
                    for (let i = 0; i < 5; i++) {
                        $(".rocket")[i].src = "http://localhost/tikyuusai2019/scan_png/rocket" + (Count[3]-(i)) +".png";
                    }
                    for (let i = 5; i < $(".rocket").length; i++){
                        $(".rocket")[i].src = "http://localhost/tikyuusai2019/scan_png/rocket"+ (Math.floor(Math.random() * Count[3]) +1) +".png";
                    }
                }
        
            //ーーーーpooーーーー
                if (Count[2] <= $(".poop").length) {
                    for (let i = 0; i < $(".poop").length ; i++){
                        if (i < Count[2]) {
                            $(".poop")[i].src = "http://localhost/tikyuusai2019/scan_png/poo" + (i + 1) + ".png";
                        }
                        else {
                            $(".poop")[i].src = "http://localhost/tikyuusai2019/scan_png/poo"+ (Math.floor(Math.random() * Count[2]) +1) +".png";
                        }
                    }
                }
                else {//最新の5つを表示
                    for (let i = 0; i < 5; i++) {
                        $(".poop")[i].src = "http://localhost/tikyuusai2019/scan_png/poo" + (Count[2]-(i)) +".png";
                    }
                    for (let i = 5; i < $(".poop").length; i++){
                        $(".poop")[i].src = "http://localhost/tikyuusai2019/scan_png/poo"+ (Math.floor(Math.random() * Count[2]) +1) +".png";
                    }
                }
            };
            Src_load();
        })
        .fail(function(error){
            console.log("Ajax通信失敗");
            console.log(error);
        });
    }



    // 1回目だけ即時実行
    Ajax();
    // console.log("///urlでGETデータを送信///");
    
    let Interval = 45000;
    setInterval(() => {
        Ajax();
    }, Interval);

});