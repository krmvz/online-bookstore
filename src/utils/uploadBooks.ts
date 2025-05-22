import { db } from '../config/firebase';
import { collection, addDoc, writeBatch } from 'firebase/firestore';

interface Book {
  title: string;
  author: string;
  price: number;
  imageUrl: string;
  description: string;
  storeId: string;
  category: string;
  rating?: number;
}

// Function to upload a single book
export const uploadBook = async (bookData: Book) => {
  try {
    const booksRef = collection(db, 'books');
    const docRef = await addDoc(booksRef, bookData);
    return docRef.id;
  } catch (error) {
    console.error('Error uploading book:', error);
    throw error;
  }
};

// Function to upload multiple books in batch
export const uploadBooks = async (books: Book[]) => {
  try {
    const batch = writeBatch(db);
    const booksRef = collection(db, 'books');

    books.forEach((book) => {
      const docRef = doc(booksRef);
      batch.set(docRef, book);
    });

    await batch.commit();
    console.log(`Successfully uploaded ${books.length} books`);
  } catch (error) {
    console.error('Error uploading books in batch:', error);
    throw error;
  }
};

// Example usage:
/*
const sampleBooks = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: 999,
    imageUrl: "https://example.com/gatsby.jpg",
    description: "A story of decadence and excess.",
    storeId: "store123",
    category: "Classic Literature",
    rating: 4.5
  },
  // Add more books as needed
];

// Upload multiple books
try {
  await uploadBooks(sampleBooks);
} catch (error) {
  console.error('Failed to upload books:', error);
}

// Upload a single book
try {
  const bookId = await uploadBook(sampleBooks[0]);
  console.log('Uploaded book with ID:', bookId);
} catch (error) {
  console.error('Failed to upload book:', error);
}
*/