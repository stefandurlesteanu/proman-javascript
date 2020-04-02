base_url = 'http://127.0.0.1:5000/';
users_route_for_boards = base_url + "get-boards";

// functiea va fi apelata pe elementul LI creat de mine
function getCards (board_id) {
    users_route_for_cards = base_url + "get-cards/" + board_id;
    fetch(users_route_for_cards)
        .then((response) => {
        return response.json();
    })
        .then((data) => {
            showCards(data);
        });
}

function getStatusJson (card_id) {
    console.log(card_id)
    staut_route = base_url + "get-statuses/" + card_id;
    fetch(staut_route)
        .then((response) => {
            return response.json();
        })
        .then((statusesCard) => {
            showStatuses(statusesCard);
        });
}

function showStatuses(_status) {
    console.table(_status)
    status_info = document.getElementById('cards');
     console.log( "statuses" +_status.id +_status.title)


    console.log('oneStatus: ' +_status.id + _status.title)
    listOfStatus = document.createElement('hr');
     listOfStatus.innerHTML = "The status is: " + _status.title;
     status_info.append(listOfStatus)


}

function showCards(cards) {
    card_info = document.getElementById('cards');
    console.table(cards)
    for (card of cards) {

        listOfCards = document.createElement('p');
        listOfCards.setAttribute('onClick', 'refreshCardStatus(' +  card.id  + ')');

        listOfCards.innerHTML = 'Card  name is:  ' + card.card_title + " card ID " + card.id + " -> " + card.status_name;
        card_info.appendChild(listOfCards);

    };
}

function refreshCardStatus(cardId){
    fetch(base_url + "get-statuses/" + cardId)
        .then((response)=>{
            return response.json();
        })
        .then((cardStatus) => {
            showCardStatus(cardStatus);
    });

}

function showCardStatus(cardStatus){
    card_container = document.getElementById('cards');

    newStatusFromDatabase = document.createElement('p');
    newStatusFromDatabase.innerHTML = cardStatus.title;
    card_container.append(newStatusFromDatabase);
}

function deleteSomething(elementID) {
    let elem = document.getElementById(elementID)
    elem.remove()
}

function showBoards(users) {

    boards_container = document.getElementById("boards")

    for (user of users){
        board = document.createElement('li');
        board.innerHTML = user.title + "|" + user.id;
        board.setAttribute('onClick', 'getCards(' +  user.id  + ')');
        boards_container.append(board)

    }

}

function getBoards(){
    fetch(users_route_for_boards)
        .then((response) => {
            return response.json();
            })
        .then((data) => {
            showBoards(data);
        });

}

 function changeColor() {
   var x = document.getElementById("boards");
   if (x.style.display === "none") {
     x.style.display = "block";
   } else {
     x.style.display = "none";
   }
 }
//
// function change() {
//     elem = document.getElementById("boards");
//     if (elem.className === "green") {
//         elem.className = "redBoard"
//     } if (elem.className === "redBoard") {
//         elem.className ="green"
//     }
// }
//

getBoards();
