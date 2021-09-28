import SetupControls from "../Controls";
import Video from "../Video";

/*
const Scanner = (function () {

  let self;

  function startVideo() {
    Video.launchCamera();
    self.controls.scanBtn.style.display = "none";
  }

  function startApp() {
    self = this;
    self.controls = SetupControls(self);
  }

  return {
    startApp, startVideo
  };

})();

export default Scanner;

*/

function _Scanner () {
    this.startVideo = function () {
        console.log(this);
        Video.launchCamera();
      }

    this.startApp = function () {
       SetupControls(this);
    }
}

const Scanner = new _Scanner();
export default Scanner;

