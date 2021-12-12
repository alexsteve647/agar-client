var joysticks = {
  static: {
    zone: document.querySelector('.zone.static'),
    mode: 'static',
    position: {
      left: '100px',
      top: '100px'
    },
    color: 'blue'
  }
};
var joystick;
createNipple('static');

function createNipple(evt) {
  var type = typeof evt === 'string' ?
      evt : evt.target.getAttribute('data-type');
  if (joystick) {
    joystick.destroy();
  }
  joystick = nipplejs.create(joysticks[type]);
  //bindNipple();
}
