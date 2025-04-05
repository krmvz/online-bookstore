/* General Page Styling */
.books_page {
  font-family: 'Inter', sans-serif;
  margin: 40px auto;
  max-width: 1100px;
  padding: 20px;
  text-align: center;
}

.page_title {
  font-size: 2rem;
  color: #333;
  margin-bottom: 30px;
  font-weight: bold;
}

/* Books Grid - More books per row */
.books_list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 15px;
  justify-content: center;
}

/* Individual Book Card */
.book_card {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  padding: 15px;
  text-align: center;
  transition: transform 0.2s ease-in-out;
}

.book_card:hover {
  transform: translateY(-4px);
}

/* Book Image */
.book_image {
  width: 120px;
  height: 180px;
  object-fit: cover;
  border-radius: 5px;
}

/* Book Title */
.book_title {
  font-size: 1rem;
  color: #333;
  font-weight: bold;
  margin-top: 10px;
}

/* Price */
.book_price {
  font-size: 1rem;
  font-weight: bold;
  color: #3498db;
  margin-top: 5px;
}

/* Add to Basket Button */
.add_to_basket_btn {
  background-color: #3498db;
  color: white;
  border: none;
  padding: 8px 12px;
  font-size: 0.9rem;
  font-weight: bold;
  border-radius: 5px;
  margin-top: 10px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  outline: none;
}

.add_to_basket_btn:hover {
  background-color: #2980b9;
  transform: scale(1.05);
}

/* Responsive */
@media (max-width: 768px) {
  .books_list {
      grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  }

  .book_image {
      width: 100px;
      height: 150px;
  }
}
