import React from 'react';
import StoreMap from '../components/MainMenu/StoreMap';
import { stores } from '../data/stores';
// import './css/Stores.page.scss';

export function StoresPage() {
  const [selectedStore, setSelectedStore] = React.useState<string>('');

  const handleStoreSelect = (storeId: string) => {
    setSelectedStore(storeId);
  };

  return (
    <div className="stores-page">
      <h1>Биздин дүкөндөр</h1>
      <div className="stores-container">
        <StoreMap 
          stores={stores}
          selectedStore={selectedStore}
          onStoreSelect={handleStoreSelect}
        />
      </div>
    </div>
  );
}