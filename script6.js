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
//show data function ke fetch er modhe pass kore dsi
const showArtist = (data) => {
    console.log(data); //ei line theke run hoise
    //data tar upr forEach chalanor try kortesi but data ta to ekta object
    // data.forEach((artist) => {
    //     console.log(artist);
    // })
    data.artists.forEach((artist) => {
        console.log(artist);
    })
};
//upay 1