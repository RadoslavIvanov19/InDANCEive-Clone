import "./style.css";
import typescriptLogo from "./typescript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.ts";
import image from "./TCPic.jpg";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
<div>
<a href="https://vitejs.dev" target="_blank">
<img src="${viteLogo}" class="logo" alt="Vite logo" />
</a>
<a href="https://www.typescriptlang.org/" target="_blank">
<img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
</a>
<h1>Vite + TypeScript</h1>
<div class="card">
<button id="counter" type="button"></button>
</div>
<p class="read-the-docs">
Click on the Vite and TypeScript logos to learn more
</p>
</div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
// document.querySelector("img").src = image;

/* Код за разпознаване на платформата от която се влиза*/
/*
window.onload = function() {
    var userAgent = navigator.userAgent.toLowerCase();
    var imageUrl;

    if (userAgent.match(/android/i) || userAgent.match(/webos/i) || userAgent.match(/iphone/i) || userAgent.match(/ipad/i) || userAgent.match(/ipod/i) || userAgent.match(/blackberry/i) || userAgent.match(/windows phone/i)) {
        imageUrl = 'mobile-image.jpg';
    } else {
        imageUrl = 'desktop-image.jpg';
    }

    document.getElementById('image').src = imageUrl;
};
*/
