import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { motion } from 'framer-motion';
import './css/Gifts.page.scss';

interface DeliveryInfo {
  recipientName: string;
  senderName: string;
  address: string;
  phoneNumber: string;
  giftWrap: boolean;
  giftType: string;
  personalMessage: string;
  occasion: string;
}

function GiftsPage() {
  const { cartItems } = useCart();
  const [deliveryInfo, setDeliveryInfo] = useState<DeliveryInfo>({
    recipientName: '',
    senderName: '',
    address: '',
    phoneNumber: '',
    giftWrap: true,
    giftType: 'standard',
    personalMessage: '',
    occasion: 'birthday'
  });

  const giftTypes = [
    { id: 'standard', name: 'Стандарттык белек кутусу', price: 200 },
    { id: 'premium', name: 'Премиум белек кутусу', price: 500 },
    { id: 'luxury', name: 'Люкс белек кутусу', price: 1000 },
  ];

  const occasions = [
    { id: 'birthday', name: 'Туулган күн' },
    { id: 'wedding', name: 'Үйлөнүү тою' },
    { id: 'graduation', name: 'Бүтүрүү' },
    { id: 'anniversary', name: 'Юбилей' },
    { id: 'other', name: 'Башка' }
  ];

  return (
    <motion.div 
      className="gifts_page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="page_title">Белек кылуу</h1>

      <div className="gift_types">
        {giftTypes.map(type => (
          <div 
            key={type.id}
            className={`gift_type_card ${deliveryInfo.giftType === type.id ? 'selected' : ''}`}
            onClick={() => setDeliveryInfo({...deliveryInfo, giftType: type.id})}
          >
            <h3>{type.name}</h3>
            <p className="price">{type.price} сом</p>
            <ul className="features">
              {type.id === 'standard' && (
                <>
                  <li>Жөнөкөй белек кутусу</li>
                  <li>Белек кат</li>
                </>
              )}
              {type.id === 'premium' && (
                <>
                  <li>Кооз белек кутусу</li>
                  <li>Белек кат</li>
                  <li>Гүл кошуп берүү</li>
                </>
              )}
              {type.id === 'luxury' && (
                <>
                  <li>Люкс белек кутусу</li>
                  <li>Кооз белек кат</li>
                  <li>Гүл букети</li>
                  <li>Шоколад кошуп берүү</li>
                </>
              )}
            </ul>
          </div>
        ))}
      </div>

      <form className="delivery_form">
        <div className="form_section">
          <h2>Белек берүүчү жөнүндө маалымат</h2>
          <div className="form_group">
            <label>Сиздин атыңыз</label>
            <input
              type="text"
              required
              value={deliveryInfo.senderName}
              onChange={(e) => setDeliveryInfo({...deliveryInfo, senderName: e.target.value})}
            />
          </div>

          <div className="form_group">
            <label>Белектөө себеби</label>
            <select
              value={deliveryInfo.occasion}
              onChange={(e) => setDeliveryInfo({...deliveryInfo, occasion: e.target.value})}
            >
              {occasions.map(occasion => (
                <option key={occasion.id} value={occasion.id}>
                  {occasion.name}
                </option>
              ))}
            </select>
          </div>

          <div className="form_group">
            <label>Белек кат</label>
            <textarea
              value={deliveryInfo.personalMessage}
              onChange={(e) => setDeliveryInfo({...deliveryInfo, personalMessage: e.target.value})}
              placeholder="Белек алуучуга жылуу сөзүңүздү жазыңыз..."
              rows={4}
            />
          </div>
        </div>

        <div className="form_section">
          <h2>Белек алуучу жөнүндө маалымат</h2>
          <div className="form_group">
            <label>Алуучунун аты-жөнү</label>
            <input
              type="text"
              required
              value={deliveryInfo.recipientName}
              onChange={(e) => setDeliveryInfo({...deliveryInfo, recipientName: e.target.value})}
            />
          </div>

          <div className="form_group">
            <label>Дареги</label>
            <textarea
              required
              value={deliveryInfo.address}
              onChange={(e) => setDeliveryInfo({...deliveryInfo, address: e.target.value})}
            />
          </div>

          <div className="form_group">
            <label>Телефон номери</label>
            <input
              type="tel"
              required
              value={deliveryInfo.phoneNumber}
              onChange={(e) => setDeliveryInfo({...deliveryInfo, phoneNumber: e.target.value})}
            />
          </div>
        </div>

        <button type="submit" className="submit_btn">
          Буйрутма берүү
        </button>
      </form>
    </motion.div>
  );
}

export { GiftsPage };