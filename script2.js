//part one
// const elementById = (id) => {
//     console.log(id); //eta run kortese but niche run korena
//     document.getElementById('keyword');
// }

// const handleSearch = () => {

//     const keyword = elementById('keyword');

//     console.log(keyword); //undefined dey
//     console.log(keyword.value); //undefined er to kono value nai
//     //eta run korena
// };

//part two
// const elementById = (id) => {
//     console.log(id);
//     return document.getElementById(id);
// }

// const handleSearch = () => {

//     const keyword = elementById('keyword');

//     console.log(keyword); //undefined dey
//     console.log(keyword.value); //undefined er to kono value nai
//     //eta run korena
// }; //ebar kaj krse
//etai logical error dekhlam func declare krsi but return korini











const elementById = (id) => {
    console.log(id); //eta run kortese but
    return document.getElementById('keyword');
}

const handleSearch = () => {

    const keyword = elementById('keyword');

    // console.log(keyword); //undefined dey
    console.log(keyword.value); //undefined er to kono value nai
    //eta run korena
};
//ekhn keyword ta id hishebe and ggg ta data hishebe paise