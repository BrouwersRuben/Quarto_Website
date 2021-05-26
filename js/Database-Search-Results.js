// const url = 'https://team7.2020-21.acs.kdg.be/rest/database_Results.json'
const url = '../rest/database_Results.json';

const table = document.getElementById("DatabaseResults")

const Search = document.getElementById("SearchButton")

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
let DBdata;

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
                    .then(() => showData())
                    .catch(error => { console.log(error) });
            }
        })
}



function nothingHere(string){
    return !string.trim().length;
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
    showData()
}

// Bug where it does sort the table on the data filled in in the form, but only displays it after i clicked one of the table headers

//Arrows the wrong way around??

//Win and lose radio buttons do not work yet

function showData(){
    function addRows(){

        table.innerHTML = "";

        DBdata.forEach(gamePlayed => {
            const row = `<tr>
                            <td>${gamePlayed.ID}</td>
                            <td>${gamePlayed.DATE_STARTED}</td>
                            <td>${gamePlayed.USERNAME}</td>
                            <td>${gamePlayed.SCORE}</td>
                            <td>${gamePlayed["Average Move Duration"]}</td>
                            <td>${gamePlayed.HAS_QUARTO}</td>
                        </tr>`;
        table.innerHTML += row;
        });

        const GameID = document.getElementById("Id").value
        const PlayerName = document.getElementById("PlayerName").value
        const Win = document.getElementById("Win").value
        const Lose = document.getElementById("Lose").value
        const Score = document.getElementById("Score").value
        const ScoreSelect = document.getElementById("SelectScore").value

        if (!nothingHere(GameID)){
            DBdata = DBdata.filter(data => {
                return data.ID == GameID;
            })
        } else {
            if (!nothingHere(PlayerName)){
                DBdata = DBdata.filter(data => {
                    return data.USERNAME == PlayerName;
                })
            } else {
                if (Win.checked){
                    DBdata = DBdata.filter(data => {
                        return data.HAS_QUARTO == "Yes";
                    })
                } else if (Lose.checked){
                    DBdata = DBdata.filter(data => {
                        return data.HAS_QUARTO == "No";
                    })
                } else {
                    if (!nothingHere(Score)){
                        DBdata = DBdata.filter(data => {
                            switch(ScoreSelect){
                                case 'Above':
                                    return data.SCORE > Score; 
                                case 'Below':
                                    return data.SCORE < Score;
                            }  
                        })
                    }
                }
            }       
        }
    }
    addRows();
}

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

function highlightHeader(element){
    for (let i = 0; i < highlightedHeader.length; i++){
        highlightedHeader[i].className = "";
    }
    element.setAttribute("class", "selected")
}

