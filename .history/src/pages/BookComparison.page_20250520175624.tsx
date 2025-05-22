import React, { useState, useEffect } from 'react';
import { useBookSearch } from '../context/BookSearchContext';
import { useLocation } from 'react-router-dom';
import { BookStore } from '../data/book';
import './css/BookComparison.page.scss';

export function BookComparisonPage() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get('search');
  const { searchResults, loading, error } = useBookSearch();
  const [sortBy, setSortBy] = useState('price');
  const [filterInStock, setFilterInStock] = useState(false);
  const [userLocation, setUserLocation] = useState<GeolocationPosition | null>(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => setUserLocation(position),
        (error) => console.error('Error getting location:', error)
      );
    }
  }, []);

  const calculateDistance = (storeLat: number, storeLng: number) => {
    if (!userLocation) return 0;
    
    const R = 6371; // Earth's radius in km
    const lat1 = userLocation.coords.latitude;
    const lon1 = userLocation.coords.longitude;
    const lat2 = storeLat;
    const lon2 = storeLng;
    
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
              Math.sin(dLon/2) * Math.sin(dLon/2);
    
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
  };

  const sortStores = (stores: typeof searchResults[0]['stores']) => {
    let filteredStores = [...stores];
    
    if (filterInStock) {
      filteredStores = filteredStores.filter(store => store.inStock);
    }

    return filteredStores.sort((a, b) => {
      if (sortBy === 'price') {
        return a.price - b.price;
      } else if (sortBy === 'distance' && userLocation) {
        const distanceA = calculateDistance(
          a.store.location.coordinates.lat,
          a.store.location.coordinates.lng
        );
        const distanceB = calculateDistance(
          b.store.location.coordinates.lat,
          b.store.location.coordinates.lng
        );
        return distanceA - distanceB;
      }
      return 0;
    });
  };

  return (
    <div className="book-comparison-page">
      <div className="comparison-header">
        <h1>Баа салыштыруу</h1>
        {searchQuery && <p className="search-query">Издөө: "{searchQuery}"</p>}
      </div>
      
      <div className="comparison-controls">
        <div className="control-group">
          <select 
            value={sortBy} 
            onChange={(e) => setSortBy(e.target.value)}
            className="sort-select"
          >
            <option value="price">Баасы боюнча иреттөө</option>
            <option value="distance">Аралык боюнча иреттөө</option>
          </select>
          <label className="filter-checkbox">
            <input
              type="checkbox"
              checked={filterInStock}
              onChange={(e) => setFilterInStock(e.target.checked)}
            />
            Бар болгон гана китептерди көрсөтүү
          </label>
        </div>
      </div>
      
      {loading && <div className="loading">Издөө...</div>}
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
                  <p className="isbn">ISBN: {result.ISBN}</p>
                </div>
              </div>
              
              <div className="store-comparison">
                <h3>Дүкөндөрдө бар:</h3>
                <div className="store-list">
                  {sortStores(result.stores).length === 0 ? (
                    <div className="no-stores">Бул китеп азырынча дүкөндөрдө жок</div>
                  ) : (
                    sortStores(result.stores).map((storeInfo) => (
                      <div key={storeInfo.store.id} className="store-item">
                        <div className="store-header">
                          <div className="store-name-price">
                            <span className="store-name">{storeInfo.store.name}</span>
                            <span className="price">{storeInfo.price} сом</span>
                          </div>
                          <div className="store-status">
                            <span className={`availability ${storeInfo.inStock ? 'in-stock' : 'out-of-stock'}`}>
                              {storeInfo.inStock ? 'Бар' : 'Жок'}
                              {storeInfo.quantity && storeInfo.inStock && ` (${storeInfo.quantity} даана)`}
                            </span>
                            {userLocation && (
                              <span className="distance">
                                {calculateDistance(
                                  storeInfo.store.location.coordinates.lat,
                                  storeInfo.store.location.coordinates.lng
                                ).toFixed(1)} км
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="store-details">
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