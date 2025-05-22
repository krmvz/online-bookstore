import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './css/Gifts.page.scss';

interface CartItem {
    id?: string;
    bookId: string;
    title: string;
    price: number;
    quantity: number;
    imageUrl: string;
    userId?: string;
    format: 'print' | 'ebook' | 'audio';
  }
  
interface DeliveryInfo {
  recipientName: string;
  senderName: string;
  address: string;
  phoneNumber: string;
  giftWrap: boolean;
  giftType: string;
  personalMessage: string;
  occasion: string;
  deliveryDate: string;
  deliveryTime: string;
}

interface GiftOrder {
  id: string;
  items: CartItem[];
  delivery: DeliveryInfo;
  totalAmount: number;
  status: 'pending' | 'confirmed';
  orderDate: string;
}

function GiftsPage() {
  const navigate = useNavigate();
  const { cartItems, clearCart } = useCart();
  const [deliveryInfo, setDeliveryInfo] = useState<DeliveryInfo>({
    recipientName: '',
    senderName: '',
    address: '',
    phoneNumber: '',
    giftWrap: true,
    giftType: 'standard',
    personalMessage: '',
    occasion: 'birthday',
    deliveryDate: '',
    deliveryTime: ''
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

  const calculateTotal = () => {
    const itemsTotal = cartItems.reduce((total, item) => total + item.price, 0);
    const giftPrice = giftTypes.find(type => type.id === deliveryInfo.giftType)?.price || 0;
    return itemsTotal + giftPrice;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (cartItems.length === 0) {
      alert('Сураныч, биринчи китеп тандаңыз');
      return;
    }

    try {
      const newOrder: GiftOrder = {
        id: `ORDER-${Date.now()}`,
        // items: cartItems,
        delivery: deliveryInfo,
        totalAmount: calculateTotal(),
        status: 'pending',
        orderDate: new Date().toISOString()
      };

      const existingOrders = JSON.parse(localStorage.getItem('giftOrders') || '[]');
      localStorage.setItem('giftOrders', JSON.stringify([...existingOrders, newOrder]));

      clearCart();
      alert('Буйрутма ийгиликтүү сакталды!');
      navigate('/profile');
    } catch (error) {
      console.error('Order submission error:', error);
      alert('Буйрутма сактоодо ката кетти. Сураныч, кайра аракет кылыңыз.');
    }
  };

  return (
    <motion.div 
      className="gifts_page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="page_title">Белек кылуу</h1>

      <div className="order_summary">
        <h2>Буйрутма жыйынтыгы</h2>
        <p>Тандалган китептер: {cartItems.length}</p>
        <p>Жалпы баасы: {calculateTotal()} сом</p>
      </div>

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

      <form className="delivery_form" onSubmit={handleSubmit}>
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

        <div className="form_section">
          <h2>Жеткирүү убактысы</h2>
          <div className="form_group">
            <label>Жеткирүү күнү</label>
            <input
              type="date"
              required
              min={new Date().toISOString().split('T')[0]}
              value={deliveryInfo.deliveryDate}
              onChange={(e) => setDeliveryInfo({...deliveryInfo, deliveryDate: e.target.value})}
            />
          </div>

          <div className="form_group">
            <label>Жеткирүү убактысы</label>
            <select
              required
              value={deliveryInfo.deliveryTime}
              onChange={(e) => setDeliveryInfo({...deliveryInfo, deliveryTime: e.target.value})}
            >
              <option value="">Убакытты тандаңыз</option>
              <option value="morning">Эртең менен (9:00 - 12:00)</option>
              <option value="afternoon">Түштөн кийин (12:00 - 17:00)</option>
              <option value="evening">Кечинде (17:00 - 20:00)</option>
            </select>
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