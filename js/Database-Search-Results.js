const main = document.querySelector('main');
const table =document.createElement('table');
const thead =document.createElement('thead');
const tbody = document.createElement('tbody');
const headrow = document.createElement('tr');
const id= document.createElement('td');
const PlayerName= document.createElement('td');
const Score= document.createElement('td');
const WinState= document.createElement('td');

id.innerText='ID';
PlayerName.innerText='Player Name';
Score.innerText='Score';
WinState.innerText='Win State'

thead.appendChild(headrow)
table.appendChild(thead);
table.appendChild(tbody);

// https://www.encodedna.com/javascript/populate-json-data-to-html-table-using-javascript.htm 
// https://www.w3schools.com/js/tryit.asp?filename=tryjson_html_table_dynamic
