import { paymentIcons } from '../../data';
import './PaymentIcons.css';

const PaymentIcons = () => {

  return (
    <div className='payment-icon-container'>
      {paymentIcons.map(paymentIcon => <img src={paymentIcon.url} key={paymentIcon.id} alt={paymentIcon.name} />)}
    </div>
  );
};

export default PaymentIcons;