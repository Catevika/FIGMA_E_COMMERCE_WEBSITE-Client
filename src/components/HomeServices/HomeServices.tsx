import { Service } from '../../types.tsx';
import ServiceCard from '../ServiceCard/ServiceCard.tsx';
import './HomeServices.css';

type Props = {
  services: Service[];
};

const HomeServices = ({ services }: Props) => {
  return (
    <div className='home-services-container'>
      <div className='home-services-content label-2'>
        {services.map((service) => <div key={service.id} className='home-services-card-container'>
          {service ? <ServiceCard service={service} /> : null}
        </div>)}
      </div>
    </div>
  );
};

export default HomeServices;