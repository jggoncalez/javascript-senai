let discTitles = ["Greatest", "Thriller", "Back in Black", "The Dark Side of the Moon", "Rumours", "Hotel California"];
let discAuthors = ["Bee Gees", "Michael Jackson", "AC/DC", "Pink Floyd", "Fleetwood Mac", "Eagles"];
let discRelease = [1979, 1982, 1980, 1973, 1977, 1976];
let discGenres = ["Disco", "Pop", "Hard Rock", "Progressive Rock", "Rock", "Rock"];

function discList(){
    return prompt("Qual disco você deseja?\n" +
        "1. Greatest - Bee Gees\n" +
        "2. Thriller - Michael Jackson\n" +
        "3. Back in Black - AC/DC\n" +
        "4. The Dark Side of the Moon - Pink Floyd\n" +
        "5. Rumours - Fleetwood Mac\n" +
        "6. Hotel California - Eagles");
}

function discProperties(){
    let selectID = discList();
    alert(`Propriedades do disco:
        Título: ${discTitles[selectID - 1]}
        Autor: ${discAuthors[selectID - 1]}
        Ano de lançamento: ${discRelease[selectID - 1]}
        Gênero: ${discGenres[selectID - 1]}`)
}

discProperties();