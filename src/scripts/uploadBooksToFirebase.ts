import { uploadBooks, uploadBook } from '../utils/uploadBooks';
import { sampleBooks } from '../data/sampleBooks';


import { uploadSampleBooks, uploadSingleBook } from './scripts/uploadBooksToFirebase';

// To upload all books:
await uploadSampleBooks();

// To upload a single book:
await uploadSingleBook(0); // uploads the first book


// Function to upload all sample books
export const uploadSampleBooks = async () => {
  try {
    console.log('Starting to upload sample books...');
    await uploadBooks(sampleBooks);
    console.log('Successfully uploaded all sample books!');
  } catch (error) {
    console.error('Failed to upload sample books:', error);
    throw error;
  }
};

// Function to upload a single book
export const uploadSingleBook = async (bookIndex: number = 0) => {
  try {
    if (bookIndex >= 0 && bookIndex < sampleBooks.length) {
      console.log(`Uploading book: ${sampleBooks[bookIndex].title}`);
      const bookId = await uploadBook(sampleBooks[bookIndex]);
      console.log('Successfully uploaded book with ID:', bookId);
      return bookId;
    } else {
      throw new Error('Invalid book index');
    }
  } catch (error) {
    console.error('Failed to upload single book:', error);
    throw error;
  }
};

// Example usage:
/*
// Upload all sample books
uploadSampleBooks()
  .then(() => console.log('Completed uploading all books'))
  .catch(error => console.error('Error in upload process:', error));

// Upload a single book (first book in the sample data)
uploadSingleBook(0)
  .then(bookId => console.log('Uploaded single book with ID:', bookId))
  .catch(error => console.error('Error uploading single book:', error));
*/