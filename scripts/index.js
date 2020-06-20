var breaths = 1;
var MAX_BREATHS = 10;

window.onload = function () {
    var counter = document.querySelector(".counter");

    var interval = setInterval(function () {
        if (breaths === MAX_BREATHS) {
            clearInterval(interval);
            document.querySelector(".breathe").classList.add("hide");
            document.getElementById("inhale").classList.add("hide");
            document.getElementById("exhale").classList.add("hide");
            document.getElementById("hold").classList.add("hide");
            counter.classList.add("hide");
            document.getElementById("end").classList.remove("hide");

        }
        breaths += 1;
        breadthLoop();
        counter.textContent = breaths + "/" + MAX_BREATHS;

    }, 15000);

    counter.textContent = breaths + "/" + MAX_BREATHS;

};

function restart(id, classname) {
  const element = document.getElementById(id);
  element.classList.remove(classname);
  void element.offsetWidth;
  element.classList.add(classname);
}

function breadthLoop(){
  restart("breathe", "breathing");
  restart("hold", "hold");
  restart("inhale", "inhale");
  restart("exhale", "exhale");
}

function reloadPage() {
  window.location.reload(false)
}
