import { useEffect } from 'react';
import { useBookSearch } from '../context/BookSearchContext';
import { useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './css/BookComparison.page.scss';

export function BookComparisonPage() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get('search');
  const { searchResults, error, searchBooks } = useBookSearch();

  useEffect(() => {
    // Load all books initially or filter by search query
    searchBooks(searchQuery || '');
  }, [searchQuery, searchBooks]);
  const { addToCart } = useCart();

  const handleAddToCart = async (book: typeof searchResults[0], storeInfo: typeof searchResults[0]['stores'][0]) => {
    await addToCart({
      bookId: book.id,
      title: book.title,
      price: storeInfo.price,
      quantity: 1,
      imageUrl: book.imageUrl,
      storeId: storeInfo.store.id,
      storeName: storeInfo.store.name
    });
  };

  return (
    <div className="book-comparison-page">
      <div className="comparison-header">
        <h1>Баа салыштыруу</h1>
        {searchQuery && <p className="search-query">Издөө: "{searchQuery}"</p>}
      </div>
      

      
      {error && <div className="error">{error}</div>}
      
      <div className="search-results">
        {searchResults.length === 0 ? (
          <div className="no-results">Китеп табылган жок</div>
        ) : (
          searchResults.map((result) => (
            <div key={result.id} className="book-comparison-card">
              <div className="book-info">
                <div className="book-image">
                  <img src={result.imageUrl} alt={result.title} />
                </div>
                <div className="book-details">
                  <h2>{result.title}</h2>
                  <p className="author">{result.author}</p>
                  <p className="category">{result.category}</p>
                </div>
              </div>
              
              <div className="store-comparison">
                <h3>Дүкөндөрдө бар:</h3>
                <div className="store-list">
                  {result.stores.length === 0 ? (
                    <div className="no-stores">Бул китеп азырынча дүкөндөрдө жок</div>
                  ) : (
                    result.stores.map((storeInfo) => (
                      <div key={storeInfo.store.id} className="store-item">
                        <div className="store-header">
                          <div className="store-name-price">
                            <span className="store-name">{storeInfo.store.name}</span>
                            <span className="price">{storeInfo.price} сом</span>
                            {storeInfo.inStock && (
                              <button 
                                className="add-to-cart-btn" 
                                onClick={() => handleAddToCart(result, storeInfo)}
                              >
                                Куржунга кошуу 🛒
                              </button>
                            )}
                          </div>
                          <div className="store-status">
                            <span className={`availability ${storeInfo.inStock ? 'in-stock' : 'out-of-stock'}`}>
                              {storeInfo.inStock ? 'Бар' : 'Жок'}
                              {storeInfo.quantity && storeInfo.inStock && ` (${storeInfo.quantity} даана)`}
                            </span>
                          </div>
                          <button className="details-toggle" onClick={() => {
                            const details = document.querySelector(`#store-details-${storeInfo.store.id}`);
                            if (details) details.classList.toggle('expanded');
                          }}>
                            <i className="fas fa-chevron-down"></i>
                          </button>
                        </div>
                        <div id={`store-details-${storeInfo.store.id}`} className="store-details">
                          <div className="store-info">
                            <div className="info-row">
                              <i className="fas fa-map-marker-alt"></i>
                              <span className="address">{storeInfo.store.location.address}</span>
                            </div>
                            <div className="info-row">
                              <i className="fas fa-clock"></i>
                              <span className="working-hours">
                                {storeInfo.store.workingHours.open} - {storeInfo.store.workingHours.close}
                              </span>
                            </div>
                            <div className="info-row">
                              <i className="fas fa-phone"></i>
                              <span className="contact">
                                {storeInfo.store.contacts.phone}
                                {storeInfo.store.contacts.email && (
                                  <span className="email"> | {storeInfo.store.contacts.email}</span>
                                )}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}