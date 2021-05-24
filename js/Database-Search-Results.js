// const url = 'https://team7.2020-21.acs.kdg.be/rest/database_Results.json'
const url = '../rest/database_Results.json';
let DBdata = []

const GameID = document.getElementById("Id")
const PlayerName = document.getElementById("PlayerName")
const Win = document.getElementById("Win")
const Lose = document.getElementById("Lose")
const Search = document.getElementById("SearchButton")

const th = document.querySelector("th")

const IDHead = document.getElementById("IDHead")
const NAMEHead = document.getElementById("NAMEHead")
const SCOREHead = document.getElementById("SCOREHead")
const RESULTHead = document.getElementById("RESULTHead")

IDHead.addEventListener("click", event => {
    var column = IDHead.dataset.column
    var order = IDHead.dataset.order
    console.log("IDHead was clicked", column, order)

    if (order == 'desc'){
       IDHead.dataset.order.
    } else {
        console.log("asc")
    }
})

NAMEHead.addEventListener("click", event => {
    var column = NAMEHead.dataset.column
    var order = NAMEHead.dataset.order
    console.log("NAMEHead was clicked", column, order)
})

SCOREHead.addEventListener("click", event => {
    var column = SCOREHead.dataset.column
    var order = SCOREHead.dataset.order
    console.log("SCOREHead was clicked", column, order)
})

RESULTHead.addEventListener("click", event => {
    var column = RESULTHead.dataset.column
    var order = RESULTHead.dataset.order
    console.log("RESULTHead was clicked", column, order)
})

Search.addEventListener("click", event => {
    event.preventDefault();
    fetch(url)
        .then(resp => resp.json())
        .then(data => DBdata = data)
        .then(() => buildTable(DBdata))
});

// Search.addEventListener("mousedown", event => {
//     var ID = GameID.value
//     var data = searchTable(ID, DBdata)
//     buildTable(data)
// })

// function searchTable(value, array){
//     var filteredData = []
//     for (var i = 0; i < array.length; i++){
//         var ID = array[i].ID
//         if (ID.includes(value)){
//             filteredData.push(array[i])
//         }
//     }
//     return filteredData
// }

function buildTable(data){
    var table = document.getElementById("DatabaseResults")
    for(var i = 0; i < data.length; i++){
        var row = `<tr>
                        <td>${data[i].ID}</td>
                        <td>${data[i].USERNAME}</td>
                        <td>${data[i].TIME_PLAYED}</td>
                        <td>${data[i].HAS_QUARTO}</td>
                    </tr>`
        table.innerHTML += row
    }
} 