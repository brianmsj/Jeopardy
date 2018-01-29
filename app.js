

const state = {
  board1: [200,200,200,200,200,200,400,400,400,400,400,400,600,600,600,600,600,600,800,800,800,800,800,800,1000,1000,1000,1000,1000,1000],
  board2: [400,400,400,400,400,400,600,600,600,600,600,600,1200,1200,1200,1200,1200,1200,1600,1600,1600,1600,1600,2000,2000,2000,2000,2000],
  questions1: [],
  questions2: [],

}

function populateBoard(state) {
  var id = 1
  for(let i=0;i<state.board1.length;i++) {
    id = id.toString();
    var selector = '#'+id;
    id++
    $(selector).html(state.board1[i]);
  }
}

function eventListeners() {
 $('.green-button').click(function(event) {
   populateBoard(state)
 })

 $('.reset').click(function(event) {
   location.reload()
 })
}$(eventListeners)
