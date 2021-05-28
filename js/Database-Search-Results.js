// const url = 'https://team7.2020-21.acs.kdg.be/rest/database_Results.json'
const url = '../rest/database_Results.json';

const table = document.getElementById("dbTable")
const tableBody = document.getElementById("DatabaseResults")

const search = document.getElementById("SearchButton")

const back = document.getElementById("BackButton")

const th = document.querySelector("th")

let highlightedHeader = document.getElementsByClassName("selected")
let DBdata;

// Event handler for the submit button
//TODO: Make this a button, not a submit
search.addEventListener("click", event => {
    event.preventDefault();
    reachDatabase();
});

back.addEventListener("click", (event) => {
    event.preventDefault();
    location.href = '../index.html';
})

// Function that retrieves the data from the JSON file
function reachDatabase(){
    fetch(url)
        .then(response => {
            if (response.ok){
                return response.json()
            } else {
                console.error("Problem loading in the JSON data")
            }
        })
        .then(data => {
            DBdata = data.games;
        })
        .then( () => {
            showData();
        })
        .catch(error => { alert(error) });
}


// Function that checks if there is something present inside of the specifield field
function nothingHere(string){
    return !string.trim().length;
}

// Function that sorts the columns on their values
function SortColumn(element){
    var column = element.dataset.column
    var order = element.dataset.order
    var text = element.innerHTML
    
    text = text.substring(0, text.length - 1)

    if (order == 'desc'){
        element.setAttribute('data-order', 'asc')
        DBdata = DBdata.sort((a,b) => a[column] > b[column] ? 1 : -1)
        text += "&#x2191;"
    } else {
        element.setAttribute('data-order', 'desc')
        DBdata = DBdata.sort((a,b) => a[column] < b[column] ? 1 : -1)
        text += "&#x2193;"
    }

    element.innerHTML = text
    showData()
}

// Function that highlights the column by clicking on the header
function highlightHeader(element){
    for (let column of highlightedHeader){
        column.setAttribute("class", "")
    }
    element.setAttribute("class", "selected")
}

// Function that loads in the data inside of the HTML
function showData(){
    const GameID = document.getElementById("Id")
    const PlayerName = document.getElementById("PlayerName")
    const Win = document.getElementById("Win")
    const Lose = document.getElementById("Lose")
    const Score = document.getElementById("Score")
    const ScoreSelect = document.getElementById("SelectScore")

    tableBody.innerHTML = "";

    // Filters the data on the values filled in into the form
    if (!nothingHere(GameID.value)){
        DBdata = DBdata.filter(data => {
            return data.ID == GameID.value;
        })
    } else {
        if (!nothingHere(PlayerName.value)){
            DBdata = DBdata.filter(data => {
                return data.USERNAME == PlayerName.value;
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
                if (!nothingHere(Score.value)){
                    DBdata = DBdata.filter(data => {
                        switch(ScoreSelect.value){
                            case 'Above':
                                return data.SCORE > Score.value; 
                            case 'Below':
                                return data.SCORE < Score.value;
                        }  
                    })
                }
            }
        }       
    }

    DBdata.forEach(rowData => {
        console.log(rowData)
        const row = `<tr>
                        <td>${rowData.ID}</td>
                        <td>${rowData.DATE_STARTED}</td>
                        <td>${rowData.USERNAME}</td>
                        <td>${rowData.SCORE}</td>
                        <td>${rowData["Average Move Duration"]}</td>
                        <td>${rowData.HAS_QUARTO}</td>
                    </tr>`;
        tableBody.innerHTML += row;
    });
}

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

// Event handlers that handle the clicking of the column headers,
// there is an other way to do it with the queryselector, but I could 
// not get that to work so i used this workaround
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