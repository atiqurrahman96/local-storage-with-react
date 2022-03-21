// Here, using local storage to manage cart data 
const addToDb = (id) => {
    const quantity = localStorage.getItem(id);
    if (quantity == '1') {
        console.log('Already exist');
        const newQuantity = parseInt(quantity) + 1;
        localStorage.setItem(id, newQuantity);

    }
    else {
        console.log('new item');
        localStorage.setItem(id, 1)
    }

}
export { addToDb }