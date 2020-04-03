
window.onload = function () {
    let boardContent = document.getElementById('toggle');
    boardContent.style.display = 'none';
    let draggable = document.getElementById("draggable");
    let dropzones = document.getElementsByClassName("dropzone");

}

function toggle() {
    let boardContent = document.getElementById('toggle');
    let toggleButton = document.getElementById('toggle-icon');
    if(boardContent.style.display==='none') {
        boardContent.style.display = 'block';
        toggleButton.innerHTML = 'expand_less';
    } else {
        boardContent.style.display = 'none';
        toggleButton.innerHTML = 'expand_more';
    }

}

const list_items = document.querySelectorAll('.list-item');
const lists = document.querySelectorAll('.list');

let draggedItem = null;

for (let i = 0; i < list_items.length; i++){
    const item = list_items[i];

    item.addEventListener('dragstart', function () {
        draggedItem = item;
        setTimeout(function () {
            item.style.display = 'none';
        },0)
    });

    item.addEventListener('dragend', function () {
        setTimeout(function () {
            draggedItem.style.display = 'block';
            draggedItem = null;
        },0)
    });

    for (let j = 0; j < lists.length; j++){
        const list = lists[j];
        list.addEventListener('dragover', function (e) {
            e.preventDefault();
        });
        list.addEventListener('dragenter', function (e) {
            e.preventDefault();
            this.style.background = 'rgba(0,0,0,0.2)'
        });
        list.addEventListener('dragleave', function (e) {
            this.style.background = 'rgba(0,0,0,0.1)'
        })
        list.addEventListener('drop', function (e) {
            this.append(draggedItem);
            this.style.background = 'rgba(0,0,0,0.1)'

        });
    }
}