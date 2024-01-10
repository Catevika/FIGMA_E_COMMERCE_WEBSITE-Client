import { Service } from '../../types';
import './ServiceCard.css';
type Props = {
  service: Service;
};

const ServiceCard = ({ service }: Props) => {
  const { iconUrl, title, description } = service;
  return (
    <div className='service-card'>
      <img src={iconUrl} alt='Shipping icon' width={24} height={24} />
      <p className='label-2'>{title}</p>
      <p className='caption-1'>{description}</p>
    </div>
  );
};

export default ServiceCard;