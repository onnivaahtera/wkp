// TODO: Implement the promptForBook function
function promptForBook() {
    // TODO: Prompt user for book details (title, author, publication year)
    const bookTitle = prompt('Title');
    const bookAuthor = prompt('Author');
    const bookPublicationYear = Number(prompt('Publication Year'));
    // TODO: Create an object of type 'Book' with the entered values
    const book = {
        title: bookTitle ?? '',
        author: bookAuthor ?? '',
        publicationYear: bookPublicationYear,
    };
    return book;
}
// TODO: Call the promptForBook function to get the book details
const bookDetails = promptForBook();
// TODO: Display the details of the book object to the user
console.log('Book Details:');
console.log(`Title: ${bookDetails.title}`);
console.log(`Author: ${bookDetails.author}`);
console.log(`Publication Year: ${bookDetails.publicationYear}`);
export {};
