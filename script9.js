const elementById = (id) => {

    return document.getElementById('keyword');
}

const handleSearch = () => {

    const keyword = elementById('keyword');


    const url = `https://theaudiodb.com/api/v1/json/2/search.php?s=${keyword.value}`; //
    console.log(url);
    fetch(url)
        .then((res) => res.json())
        .then((data) => showArtist(data));
};

const showArtist = ({ artists }) => {

    artists.forEach((artist) => {
        console.log(artist);
    })
};