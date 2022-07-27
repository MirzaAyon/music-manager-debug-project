const elementById = (id) => {

    return document.getElementById('keyword');
}

const handleSearch = () => {

    const keyword = elementById('keyword');


    const url = `https://theaudiodb.com/api/v1/json/2/search.php?s=${keyword.value}`; //value na dile error dibe
    //https na dile error dibe
    console.log(url);
    // fetch(url).then((res) => res.json()).then((data) => console.log(data));
    // etake chaile evabeo likha jae eke chaining bole
    // line gular kothao ; dewa hoyni tar mane line break hyni
    fetch(url)
        .then((res) => res.json())
        .then((data) => console.log(data));

};
//ekhn data ta inspact e showing
//coldplay diye search dile ashbe
//onno kichu dile null dibe
//black dile kichu dibe na just api dibe
//json data json theke niye postman e try kore dekhbo
//shob thik thak dekhabe
//coldplay and aurora diye search krbo shob info dibo