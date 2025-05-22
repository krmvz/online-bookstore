import React from 'react';
import { BookStore } from '../../data/book';

interface StoreMapProps {
  stores: BookStore[];
  selectedStore?: string;
  onStoreSelect: (storeId: string) => void;
}

const StoreMap: React.FC<StoreMapProps> = ({ stores, selectedStore, onStoreSelect }) => {
  return (
    <div className="store-map">
      <div className="store-list">
        {stores.map(store => (
          <div 
            key={store.id} 
            className={`store-item ${selectedStore === store.id ? 'selected' : ''}`}
            onClick={() => onStoreSelect(store.id)}
          >
            <h3>{store.name}</h3>
            <p>{store.location.address}</p>
            <p>Open: {store.workingHours.open} - {store.workingHours.close}</p>
            <p>Phone: {store.contacts.phone}</p>
          </div>
        ))}
      </div>
      {/* Map integration will go here */}
    </div>
  );
};

export default StoreMap;