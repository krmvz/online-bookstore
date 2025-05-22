import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { BookStore } from '../../data/book';

interface StoreMapProps {
  stores: BookStore[];
  selectedStore?: string;
  onStoreSelect: (storeId: string) => void;
}

const StoreMap: React.FC<StoreMapProps> = ({ stores, selectedStore, onStoreSelect }) => {
  const mapContainerStyle = {
    width: '100%',
    height: '400px'
  };

  const center = {
    lat: 42.8746,
    lng: 74.5698
  };

  return (
    <div className="store-map-container">
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
      <div className="map-container">
        <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={center}
            zoom={13}
          >
            {stores.map(store => (
              <Marker
                key={store.id}
                position={store.location.coordinates}
                onClick={() => onStoreSelect(store.id)}
              />
            ))}
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
};

export default StoreMap;