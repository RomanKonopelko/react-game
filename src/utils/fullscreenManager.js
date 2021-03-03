import { fullscreenImg, fullscreenOutImg } from "../utils/audio-media";

export default function fullscreenManager(e) {
  let imgSrc = e.target.getAttribute("src");
  let SCREEN_IMG = imgSrc == fullscreenImg ? fullscreenOutImg : fullscreenImg;

  e.target.setAttribute("src", SCREEN_IMG);

  if (!document.fullscreenElement) {
    document.documentElement.webkitRequestFullScreen();
  } else {
    document.exitFullscreen();
  }
}
