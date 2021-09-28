import SetupControls from "../Controls";
import Video from "../Video";

function _Scanner() {
  this.isScanning = false;

  this.startVideo = function () {
    if (!this.isScanning) {
      Video.launchCamera();
    }
  };

  this.startApp = function () {
    SetupControls(this);
  };
}

const Scanner = new _Scanner();
export default Scanner;
