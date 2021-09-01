const videoResize = Object.create(null);

videoResize.init = function () {
  var w = window.innerWidth;
  //   console.log(w);
  var video = document.getElementsByTagName("video")[0];
  video.height = 720 * 0.75 * (w / 1440);
  video.width = 1280 * 0.75 * (w / 1440);
};

export default Object.freeze(videoResize);
