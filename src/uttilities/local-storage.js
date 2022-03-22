// Here, using local storage to manage cart data 
// const addToDb = (id) => {
//     const quantity = localStorage.getItem(id);
//     if (quantity == '1') {
//         console.log('Already exist');
//         const newQuantity = parseInt(quantity) + 1;
//         localStorage.setItem(id, newQuantity);

//     }
//     else {
//         console.log('new item');
//         localStorage.setItem(id, 1)
//     }

// }
// export { addToDb }
const addToDb = (id) => {
    let shoppingCart = {};

    // get shopping cart 
    const storeCart = localStorage.getItem('shopping-cart');
    if (storeCart) {
        shoppingCart = JSON.parse(storeCart)
    }
    else {

    }

    // add quantity 
    const quantity = shoppingCart[id];
    if (quantity) {

        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;




    }
    else {
        shoppingCart[id] = 1;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
}
const removeFromId = (id) => {
    const storeCart = localStorage.getItem('shopping-cart');
    if (storeCart) {
        const shoppingCart = JSON.parse(storeCart)
        if (id in shoppingCart) {
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
        }
    }
}
export {
    addToDb,
    removeFromId
}