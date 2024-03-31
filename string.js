const searchButton = document.getElementById("search-button");
const searchBar = document.getElementById("search-bar");
//console.log(searchBar);
searchButton.addEventListener("click", function() {
    const searchString = searchBar.value;

    console.log("Search string:"+searchString);
});
