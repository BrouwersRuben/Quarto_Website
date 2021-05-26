// const url = 'https://team7.2020-21.acs.kdg.be/rest/database_Results.json'
const url = '../rest/database_Results.json';

const table = document.getElementById("DatabaseResults")

const GameID = document.getElementById("Id")
const PlayerName = document.getElementById("PlayerName")
const Win = document.getElementById("Win")
const Lose = document.getElementById("Lose")
const Search = document.getElementById("SearchButton")
const Score = document.getElementById("Score");
const ScoreSelect = document.getElementById("SelectScore");

const th = document.querySelector("th")

const IDHead = document.getElementById("IDHead")
const Date = document.getElementById("DATAHead")
const NAMEHead = document.getElementById("NAMEHead")
const SCOREHead = document.getElementById("SCOREHead")
const AVERAGEHead = document.getElementById("AVERAGEHead")
const RESULTHead = document.getElementById("RESULTHead")

const IDHeadCOL = document.getElementById("IDHeadCOL")
const DateCOL = document.getElementById("DATAHeadCOL")
const NAMEHeadCOL = document.getElementById("NAMEHeadCOL")
const SCOREHeadCOL = document.getElementById("SCOREHeadCOL")
const AVERAGEHeadCOL = document.getElementById("AVERAGEHeadCOL")
const RESULTHeadCOL = document.getElementById("RESULTHeadCOL")

let highlightedHeader = document.getElementsByClassName("selected")

IDHead.addEventListener("click", () => {
    SortColumn(IDHead)
    highlightHeader(IDHeadCOL)
})

Date.addEventListener("click", () => {
    SortColumn(Date)
    highlightHeader(DateCOL)
})

NAMEHead.addEventListener("click", () => {
    SortColumn(NAMEHead)
    highlightHeader(NAMEHeadCOL)
    
})

SCOREHead.addEventListener("click", () => {
    SortColumn(SCOREHead)
    highlightHeader(SCOREHeadCOL)
})

AVERAGEHead.addEventListener("click", () => {
    SortColumn(AVERAGEHead)
    highlightHeader(AVERAGEHeadCOL)
})

RESULTHead.addEventListener("click", () => {
    SortColumn(RESULTHead)
    highlightHeader(RESULTHeadCOL)
})

Search.addEventListener("click", event => {
    event.preventDefault();
    reachDatabase();
});

function reachDatabase(){
    fetch(url)
        .then(response => {
            if (response.ok){
                response.json()
                    .then(data => {
                        DBdata = data.games;
                    })
                    .then(() => buildTable(DBdata))
                    .catch(err => { console.log(err) });
            }
        })
}

function SortColumn(element){
    var column = element.dataset.column
    var order = element.dataset.order
    var text = element.innerHTML
    
    text = text.substring(0, text.length - 1)

    if (order == 'desc'){
        element.setAttribute('data-order', 'asc')
        DBdata = DBdata.sort((a,b) => a[column] > b[column] ? 1 : -1)
        text += "&#x2193"
    } else {
        element.setAttribute('data-order', 'desc')
        DBdata = DBdata.sort((a,b) => a[column] < b[column] ? 1 : -1)
        text += "&#x2191"
    }

    element.innerHTML = text
    buildTable(DBdata)
}

function DataChecker(data, value, opositeValue){
    if(value == opositeValue){
        addRow(data);
    }
}

function highlightHeader(element){
    for (let i = 0; i < highlightedHeader.length; i++){
        highlightedHeader[i].className = "";
    }
    element.setAttribute("class", "selected")
}

function addRow(data){
    let row = `<tr>
        <td>${data.ID}</td>
        <td>${data.DATE_STARTED}</td>
        <td>${data.USERNAME}</td>
        <td>${data.SCORE}</td>
        <td>${data["Average Move Duration"]}</td>
        <td>${data.HAS_QUARTO}</td>
    </tr>`;
    table.innerHTML += row;
}

//TODO: use a higher order function to do this.

function buildTable(data){
    table.innerHTML = ''
    if(GameID.value != ""){
        for(let i = 0; i < data.length; i ++){
            DataChecker(data[i], GameID.value, data[i].ID);
        }
        console.log("Checked on ID")
    }else{
        if(PlayerName.value != ""){
            for(let i = 0; i < data.length; i ++){
                DataChecker(data[i], PlayerName.value, data[i].USERNAME);
            }
            console.log("Checked on Player Name")
        }else if(Win.checked){
            for(let i = 0; i < data.length; i ++){
                DataChecker(data[i], "Yes", data[i].HAS_QUARTO);
            }
            console.log("Checked on Win")
        }else if(Lose.checked){
            for(let i = 0; i < data.length; i ++){
                DataChecker(data[i], "No", data[i].HAS_QUARTO);
            }
            console.log("Checked on Lose")
        }else{
            if(Score.value != ""){
                console.log("Checked on Score")
                if(ScoreSelect.value == "Below"){
                    for(let i = 0; i < data.length; i++){
                        if(data[i].SCORE <= Score.value){
                            addRow(data[i]);
                        }
                    }
                }else{
                    for(let i = 0; i < data.length; i++){
                        if(data[i].SCORE >= Score.value){
                            addRow(data[i]);
                        }
                    }
                }
            }else{
                for(let i = 0; i < data.length; i++){
                    addRow(data[i]);
                }
            }
        }
    }
} 