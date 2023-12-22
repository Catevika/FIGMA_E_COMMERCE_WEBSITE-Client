import { Service } from '../../types.tsx';
import ServiceCard from '../Home1/ServiceCard/ServiceCard.tsx';
import './HomeServices.css';

type Props = {
  services: Service[];
};

const HomeServices = ({ services }: Props) => {
  return (
    <div className='home1-services-container'>
      <div className='home1-services-content label-2'>
        {services.map((service) => <div key={service.id} className='home1-services-card'>
          {service ? <ServiceCard service={service} /> : null}
        </div>)}
      </div>
    </div>
  );
};

export default HomeServices;