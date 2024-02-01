/**
 * @description:
 * nickName: 在虎
 * email: caiths@icloud.com
 * wechat: ConsoleWarn
 * 尊重原创，请保留版权！
 * @author mdo
 * @date 2024/02/02
 */
const sound = new Howl({ src: ["./assets/video/sound.mp3"] });
const bgm = new Howl({
  src: ["./assets/video/bgm.mp3"],
  html5: true,
  loop: true,
  volume: 0.2,
});

function hideLoading() {
  const loadingElement = document.querySelector("#loading");
  if (loadingElement) {
    loadingElement.remove();
  }
}

window.onload = () => {
  hideLoading();
  let ringId = 0;
  let bgmId = 0;
  let count = 0;
  let countFlag = false;
  let autoClick = false;
  let autoClickInterval = null;
  let countElement = document.querySelector(".count");
  let woodenFishElement = document.querySelector(".woodenFish");
  let logoElement = document.querySelector(".logo");
  let autoClickElement = document.querySelector("#autoClick");
  let centerElement = document.querySelector("#center");

  const localStorageCount = localStorage.getItem("count");
  if (localStorageCount) {
    count = Number(localStorageCount);
    countElement.innerHTML = String(count);
  }

  function startAnimate() {
    countElement.style.transform = "scale(1.1)";
    woodenFishElement.style.transform = "scale(.95)";
    const div = document.createElement("div");
    div.classList.add("subtitleCountTip");
    div.innerText = "功德 + 1，佛祖保佑你";
    centerElement.appendChild(div);
    // setTimeout(() => {
    //   div.remove();
    // }, 1000);
  }

  function initAnimate() {
    countElement.style.transform = "scale(1)";
    woodenFishElement.style.transform = "scale(1)";
  }

  function counter() {
    countFlag = true;
    count++;
    countElement.innerHTML = String(count);
    startAnimate();
    if (ringId !== 0) {
      if (sound.playing()) {
        sound.stop(ringId);
      }
      sound.play(ringId);
    } else {
      ringId = sound.play();
    }
    localStorage.setItem("count", String(count));
  }

  document.onkeyup = (e) => {
    if (e.key === " ") {
      if (!countFlag) {
        counter();
      }
    }
  };

  document.onkeydown = (e) => {
    if (e.key === " ") {
      countFlag = false;
      initAnimate();
    }
  };

  woodenFishElement.addEventListener("mouseup", () => {
    counter();
  });

  woodenFishElement.addEventListener("mousedown", () => {
    // setTimeout(() => {
    //   initAnimate();
    // }, 200);
  });

  logoElement.addEventListener("click", () => {
    if (bgm.playing() && bgm.state().toString() === "loaded") {
      bgm.pause(bgmId);
    } else {
      if (bgmId !== 0) {
        bgm.play(bgmId);
      } else {
        bgmId = bgm.play();
      }
    }
  });

  autoClickElement.addEventListener("click", () => {
    autoClick = !autoClick;
    if (autoClick) {
      autoClickElement.classList.add("confirm");
      autoClickInterval = setInterval(() => {
        counter();
        // setTimeout(() => {
        //   initAnimate();
        // }, 200);
      }, 500);
    } else {
      autoClickElement.classList.remove("confirm");
      clearInterval(autoClickInterval);
    }
  });

  // 广告配置
  // let advertCountNumber = 5;
  // const advertCount = document.querySelector('#advertCount');
  // const advert = document.querySelector('#advert');
  // const advertClose = document.querySelector('#advertClose');
  // advert.addEventListener('click', () => {
  //   window.location.href = 'https://www.chaoai168.com/cf0013800.html';
  // });
  // advertClose.addEventListener('click', (e) => {
  //   e.stopPropagation();
  //   if (advertCountNumber <= 0) {
  //     advert.style.display = 'none';
  //   }
  // });
  // advertCount.innerHTML = advertCountNumber;
  // setTimeout(() => {
  //   advert.style.display = 'flex';
  //   const advertInterval = setInterval(() => {
  //     advertCountNumber--;
  //     advertCount.innerHTML = advertCountNumber;
  //     if (advertCountNumber === 0) {
  //       clearInterval(advertInterval);
  //       advertCount.innerHTML = '✔';
  //     }
  //   }, 1000);
  // }, 10000);
};

function remChange(doc, win) {
  let docEl = doc.documentElement;
  let resizeEvt =
    "orientationchange" in window ? "orientationchange" : "resize";
  let recalc = function () {
    var clientWidth = docEl.clientWidth;
    if (!clientWidth) return;
    if (clientWidth >= 640) {
      docEl.style.fontSize = "100px";
    } else {
      docEl.style.fontSize = 100 * (clientWidth / 640) + "px";
    }
  };
  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener("DOMContentLoaded", recalc, false);
  recalc();
}
remChange(document, window);

// 流量分析
!(function (p) {
  "use strict";
  !(function (t) {
    var s = window,
      e = document,
      i = p,
      c = "".concat(
        "https:" === e.location.protocol ? "https://" : "http://",
        "sdk.51.la/js-sdk-pro.min.js"
      ),
      n = e.createElement("script"),
      r = e.getElementsByTagName("script")[0];
    (n.type = "text/javascript"),
      n.setAttribute("charset", "UTF-8"),
      (n.async = !0),
      (n.src = c),
      (n.id = "LA_COLLECT"),
      (i.d = n);
    var o = function () {
      s.LA.ids.push(i);
    };
    s.LA ? s.LA.ids && o() : ((s.LA = p), (s.LA.ids = []), o()),
      r.parentNode.insertBefore(n, r);
  })();
})({ id: "3HMLt3b6pPuyaNwd", ck: "3HMLt3b6pPuyaNwd" });
