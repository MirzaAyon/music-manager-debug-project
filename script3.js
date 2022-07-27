const elementById = (id) => {

    return document.getElementById('keyword');
}

const handleSearch = () => {

    const keyword = elementById('keyword');


    const url = `theaudiodb.com/api/v1/json/2/search.php?s=coldplay`; // data ke dynamic korar jonno templete string
};