let stretch = document.getElementById('stretch');
let drop = document.getElementById('drop');
let evil = document.getElementById('evil');
let reset = document.getElementById('reset');
let penguin = document.getElementById('penguin');
let eyeBallLeft = document.getElementById('eyeBallLeft');
let eyeBallRight = document.getElementById('eyeBallRight');
let eyeRight = document.getElementById('eye-right');
let pageTitle = document.getElementById('page-title');
let subTitle = document.getElementById('subtitle');

stretch.addEventListener('click', penguinStretch);
drop.addEventListener('click', penguinDrop);
evil.addEventListener('click', penguinEvil);
reset.addEventListener('click', penguinReset);

function penguinStretch(){
  penguin.classList.add("stretchAnimation");

  setTimeout(function() {
    penguin.classList.remove("stretchAnimation")
  }, 2000);
}
function penguinEvil() {
  eyeBallLeft.classList.add('evilAnimation');
  eyeBallRight.classList.add('evilAnimation');
  pageTitle.classList.add('evilAnimation2');
  subTitle.classList.add('evilAnimation2');
  reset.classList.add("resetOn");
}
function penguinDrop(){
  penguin.classList.add("dropAnimation");
  reset.classList.add("resetOn")
}
function penguinReset() {
  penguin.classList.remove("dropAnimation");
  eyeBallLeft.classList.remove("evilAnimation");
  eyeBallRight.classList.remove("evilAnimation");
  pageTitle.classList.remove("evilAnimation2");
  subTitle.classList.remove("evilAnimation2");
  reset.classList.remove("resetOn");
}
