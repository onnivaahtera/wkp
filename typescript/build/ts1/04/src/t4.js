// Implement instances of the 'Product' type
function createElectronicDevice() {
    // TODO: Prompt user for electronic device details (brand and model)
    const brand = prompt('Brand');
    const model = prompt('Model');
    // TODO: return object containing brand and model
    return { type: 'electronic', brand: brand ?? '', model: model ?? '' };
}
function createBook() {
    // TODO: Prompt user for book details (title and author)
    const title = prompt('Title');
    const author = prompt('Author');
    // TODO: return object containing title and author
    return { type: 'book', author: author ?? '', title: title ?? '' };
}
// Create instances of 'Product'
const electronicProduct = createElectronicDevice();
const bookProduct = createBook();
// Display the details of each product
function displayProductDetails(product) {
    console.log(`Product Type: ${product.type}`);
    if (product.type === 'electronic') {
        console.log(`Brand: ${product.brand}`);
        console.log(`Model: ${product.model}`);
    }
    else {
        console.log(`Title: ${product.title}`);
        console.log(`Author: ${product.author}`);
    }
}
console.log('Electronic Device Details:');
displayProductDetails(electronicProduct);
console.log();
console.log('Book Details:');
displayProductDetails(bookProduct);
export {};
