
// const url = 'https://team7.2020-21.acs.kdg.be/rest/database_Results.json'
const url = '../rest/database_Results.json';
var DBdata = ''

bt = document.getElementById('SearchButton')

bt.addEventListener("mousedown", event => {
    fetch(url)
        .then(resp => resp.text())
        .then(data => buildTable(data));
});

// buildTable(DBdata)

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


// https://www.encodedna.com/javascript/populate-json-data-to-html-table-using-javascript.htm 
// https://www.w3schools.com/js/tryit.asp?filename=tryjson_html_table_dynamic
// https://www.youtube.com/watch?v=XmdOZ5NSqb8
 