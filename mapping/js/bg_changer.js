    //何分で背景かえるか
    const BG = document.getElementById("background");
    const BG2 = document.getElementById("background2");
    let bgNum = Math.floor(Math.random() * 9) + 1;
    BG2.style.backgroundImage = "url(bg/" + bgNum + ".jpg)";

    setInterval(() => {
        bgNum = Math.floor(Math.random() * 9) + 1;
        BG.style.backgroundImage = "url(bg/" + bgNum + ".jpg)";
        BG2.classList.add("fadeout");
        setTimeout(() => {
            BG2.style.backgroundImage = "url(bg/" + bgNum + ".jpg)";
            BG2.classList.remove("fadeout");
        }, 10000);
    }, 15000);
