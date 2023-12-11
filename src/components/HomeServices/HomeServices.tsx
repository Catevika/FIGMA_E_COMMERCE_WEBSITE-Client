import { services } from '../../data';
import ServiceCard from '../ServiceCard/ServiceCard';
import './HomeServices.css';

const HomeServices = () => {
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