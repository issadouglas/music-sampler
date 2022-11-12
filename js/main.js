// assign variables
let infoDivs = document.querySelectorAll('.info-div');
let albumIcons = document.querySelectorAll('.album-icon');

// function to hide all divs
function hideAll() {
  infoDivs.forEach(function(el) {
    el.style.display = 'none';
  });
}

function playonce() {
let players = document.querySelectorAll('audio');
players.forEach(function(el) {
        el.pause();
        el.currentTime = 0;
    });
  }
// run that function right away
hideAll();

// when any animal is clicked, make the suitable div appear
albumIcons.forEach(function(el) {
  el.onclick = (e) => {
    // hide all the divs to ensure that only one will be open
    hideAll();

    // here is a switch statement to handle opening the right div

    switch (e.target.getAttribute('id')) {
      case 'movie':
        document.querySelector('#soundtrack1')
        	.style.display = 'block';
          playonce();
        break;

      case 'cheers':
        document.querySelector('#soundtrack2')
        	.style.display = 'block';
          playonce();
        break;

      case 'madness':
        document.querySelector('#soundtrack3')
        .style.display = 'block';
        playonce();
        break;

      case 'gossip':
        document.querySelector('#soundtrack4')
        .style.display = 'block';
        playonce();
        break;
    }
// end of switch
    // switch does not need default for this

  } // end of function for clicking

}); // end of forEach()
