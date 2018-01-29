

const state = {
  board1: ['$200.jpg','$200.jpg','$200.jpg','$200.jpg','$200.jpg','$200.jpg','$400.jpg','$400.jpg','$400.jpg','$400.jpg','$400.jpg','$400.jpg','$600.jpg','$600.jpg','$600.jpg',
  '$600.jpg','$600.jpg','$600.jpg','$800.jpg','$800.jpg','$800.jpg','$800.jpg','$800.jpg','$800.jpg','$1000.jpg','$1000.jpg','$1000.jpg','$1000.jpg','$1000.jpg','$1000.jpg'],
  board2: [400,400,400,400,400,400,600,600,600,600,600,600,1200,1200,1200,1200,1200,1200,1600,1600,1600,1600,1600,2000,2000,2000,2000,2000],
  questions1: ["Purple Skinned Edible is the Start Ingredient of Baba Ghanoush","A US president USG","The American alligator can be found from Texas to as far east & north as this Tar Heel State",
              "Kim Il-Sung Stadium","In 1959 he took the honor as leader of the Green Bay Packers","It's an organized group or association, like the Red Hat or Humane",
              "In 1807 Marshall presided over the treason trial of this man","A presidential assassin: JWB","Being terrestrial, the cape speckled padloper isn't called a turtle, but this",
              "Stadio Giuseppe Meazza","Da 1985 NFC choice was this coach of da Bears","Get some sun in one of these glass-enclosed rooms or porches",
              "Marshall was a cousin, friend & finally adversary of this president who raged at his pro-Federalist rulings","A composer & a baroque'n man:JSB","In 1992 babies of this largest lizard hatched for the first time outside of Indonesia at Washington, D.C.'s National Zoo",
              "Estadio Azteca","He was honored as coach of the Dolphins in 1971, even though he lost some games that year","Paul Hindemith composed many of these, including ones for solo harp, English horn & bassoon",
              "As minister to this nation, Marshall became an American hero for refusing the demands made in the XYZ Affair","She's a suspenseful contemporary novelist:MHC","Although called a toad, this North American animal is actually a lizard that feeds mainly on ants",
              "Malmo Stadion","In 1990 he rode with the Dallas Cowboys to NFC honors","This capital near the center of the Balkans region was named for a church",
              "Marshall's first major case, Marbury v. him, established the court's right to review federal laws","A fashion designer, nee Halfin: DVF","This snake can range in size from the 23-inch ant-hill species to the reticulated, which may reach 33 feet","Estadio Presidente Peron","This hoodied genius was named in 2007 for the Patriots",
              "It's the 2-word chemical name for table salt; pass it around!"]

}

function populateBoardBoardOne(state) {
  var id = 1
  for(let i=0;i<state.board1.length;i++) {
    id = id.toString();
    var selector = '#'+id;
    id++
    $(selector).children().attr('src',state.board1[i]);
  }
}
function getQuestion(state,id) {
  var currentSquareId = id
  var question;
  for(let i=0;i<state.questions1.length;i++) {
    question = state.questions1[currentSquareId-1]
    console.log(question)
  }
  $('#'+id).empty();
  $('#'+id).html(question);

}

function eventListeners() {
 $('.green-button').click(function(event) {
   populateBoardBoardOne(state)
 })
 $('.cell').click(function(event) {
    let id = event.currentTarget.id
    getQuestion(state,id);
  })

 $('.reset').click(function(event) {
   location.reload()
 })
}$(eventListeners)
