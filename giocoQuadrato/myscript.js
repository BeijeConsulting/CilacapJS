const mov = 5;

let player = document.getElementById("player");

//JSON JavaScript Object Notation
let props = {
  width: 100,
  height: 100
};

function changeProps() {
  player.style.width = props.width + "px";
  player.style.height = props.height + "px";
}

changeProps();

let left = 0;
let t0p = 0;
function getKeyCod() {
  let key = window.event.keyCode;
  console.log(key);
  console.log(player.offsetTop);
  console.log(player.offsetLeft);
  //187: +; 189: -
  //37/65:sx 38/87:up 39/68:dx 40/83:down
  if (key === 39 || key === 68) {
    left += mov;
    player.style.left = left + "px";
  } else if (key === 37 || key === 65) {
    left -= mov;
    player.style.left = left + "px";
  } else if (key === 38 || key === 87) {
    t0p -= mov;
    player.style.top = t0p + "px";
  } else if (key === 40 || key === 83) {
    t0p += mov;
    player.style.top = t0p + "px";
  } else if (key == 187) {
    props.width += 10;
    props.height += 10;
    changeProps();
  } else if (key == 189) {
    props.width -= 10;
    props.height -= 10;
    changeProps();
  }
}
