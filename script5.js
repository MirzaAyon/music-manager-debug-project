const elementById = (id) => {

    return document.getElementById('keyword');
}

const handleSearch = () => {

    const keyword = elementById('keyword');


    const url = `https://theaudiodb.com/api/v1/json/2/search.php?s=${keyword.value}`; //value na dile error dibe
    //https na dile error dibe
    // console.log(url);
    fetch(url)
        .then((res) => res.json())
        .then((data) => console.log(data));
};

const showArtist = (data) => {
    console.log(data);
}
//handle search er kno pm nai karon amra eke onno func er peter vitore dhukae ba call kore kono kichu dekhte chai na ba dekhar drkr nai