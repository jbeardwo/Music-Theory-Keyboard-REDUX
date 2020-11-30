var nowPlaying = [];

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("window").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("window").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
}

document.addEventListener('keydown',hardwareKeyDown);
document.addEventListener('keyup', hardwareKeyUp);

function pianoKeyClick(note){
    pianoKeyDown(note);
    setTimeout(function(){
      pianoKeyUp(note);
    }, 2000);
}

function pianoKeyDown(note) {
    console.log(note);
    highlightKey(note);
}

function pianoKeyUp(note) {
    console.log(note);
    revertKey(note);
}

function highlightKey(note) {
    var divID = note + "Key";
    if(document.getElementById(divID).className.includes("lStraightKey")) {
        document.getElementById(divID).className = "highlightKey lStraightKey";
    } else if(document.getElementById(divID).className.includes("cutKey")) {
        document.getElementById(divID).className = "highlightKey cutKey";
    } else if(document.getElementById(divID).className.includes("rStraightKey")) {
        document.getElementById(divID).className = "highlightKey rStraightKey";
    } else if(document.getElementById(divID).className.includes("blackKey")) {
        document.getElementById(divID).className = "key highlightBlackKey";
    }
}

function selectKey(note){
  var divID = note + "Key";
  if(document.getElementById(divID).className.includes("lStraightKey")) {
      document.getElementById(divID).className = "selectKey lStraightKey";
  } else if(document.getElementById(divID).className.includes("cutKey")) {
      document.getElementById(divID).className = "selectKey cutKey";
  } else if(document.getElementById(divID).className.includes("rStraightKey")) {
      document.getElementById(divID).className = "selectKey rStraightKey";
  } else if(document.getElementById(divID).className.includes("blackKey")) {
      document.getElementById(divID).className = "key selectBlackKey";
  }
}

function revertKey(note){
  var divID = note + "Key";
  if(document.getElementById(divID).className.includes("lStraightKey")) {
      document.getElementById(divID).className = "key lStraightKey";
  } else if(document.getElementById(divID).className.includes("cutKey")) {
      document.getElementById(divID).className = "key cutKey";
  } else if(document.getElementById(divID).className.includes("rStraightKey")) {
      document.getElementById(divID).className = "key rStraightKey";
  } else if(document.getElementById(divID).className.includes("BlackKey")) {
      document.getElementById(divID).className = "key blackKey";
  }
}

function hardwareKeyDown(e){
  console.log(e);
  pianoKeyDown('c4');
}
function hardwareKeyUp(e){
  pianoKeyUp('c4');
}
