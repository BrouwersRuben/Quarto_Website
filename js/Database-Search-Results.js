
var DBResults = [
    {
      "ID": 3,
      "USERNAME": "who?",
      "DATE_STARTED": "2021-05-22 17:08:17.140000",
      "SCORE": 7406,
      "TURNS": 5,
      "TIME_PLAYED": 7.41,
      "GAME_DIFFICULTY": 0,
      "HAS_QUARTO": 0,
      "Average Move Duration": "  1.48"
    },
    {
      "ID": 4,
      "USERNAME": "dummy",
      "DATE_STARTED": "2021-05-22 17:09:45.185000",
      "SCORE": 4973,
      "TURNS": 3,
      "TIME_PLAYED": 4.97,
      "GAME_DIFFICULTY": 0,
      "HAS_QUARTO": 0,
      "Average Move Duration": "  1.66"
    },
    {
      "ID": 1,
      "USERNAME": "souljaboytellem",
      "DATE_STARTED": "2021-05-22 17:02:54.870000",
      "SCORE": 4791,
      "TURNS": 4,
      "TIME_PLAYED": 4.79,
      "GAME_DIFFICULTY": 0,
      "HAS_QUARTO": 0,
      "Average Move Duration": "  1.20"
    },
    {
      "ID": 5,
      "USERNAME": "whoopty",
      "DATE_STARTED": "2021-05-22 17:12:21.420000",
      "SCORE": 5463,
      "TURNS": 3,
      "TIME_PLAYED": 5.46,
      "GAME_DIFFICULTY": 0,
      "HAS_QUARTO": 0,
      "Average Move Duration": "  1.82"
    },
    {
      "ID": 6,
      "USERNAME": "deez",
      "DATE_STARTED": "2021-05-22 17:15:01.396000",
      "SCORE": 7837,
      "TURNS": 4,
      "TIME_PLAYED": 7.84,
      "GAME_DIFFICULTY": 0,
      "HAS_QUARTO": 1,
      "Average Move Duration": "  1.96"
    },
    {
      "ID": 7,
      "USERNAME": "loser",
      "DATE_STARTED": "2021-05-22 17:15:34.429000",
      "SCORE": 26760,
      "TURNS": 7,
      "TIME_PLAYED": 26.76,
      "GAME_DIFFICULTY": 0,
      "HAS_QUARTO": 1,
      "Average Move Duration": "  3.82"
    },
    {
      "ID": 2,
      "USERNAME": "drain",
      "DATE_STARTED": "2021-05-22 17:03:30.002000",
      "SCORE": 10957,
      "TURNS": 6,
      "TIME_PLAYED": 10.96,
      "GAME_DIFFICULTY": 0,
      "HAS_QUARTO": 0,
      "Average Move Duration": "  1.83"
    }
]

buildTable(DBResults)

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
