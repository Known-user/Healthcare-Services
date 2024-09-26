// import React, { useState } from 'react';
// import AddService from './AddService';
// import ServiceItem from './ServiceItem';

// const ServiceList = () => {
//   const [services, setServices] = useState([]);
//   const [currentService, setCurrentService] = useState(null);

//   const addService = (newService) => {
//     setServices([...services, newService]);
//   };

//   const updateService = (updatedService) => {
//     setServices(services.map(service => (service.id === updatedService.id ? updatedService : service)));
//     setCurrentService(null);
//   };

//   const deleteService = (id) => {
//     setServices(services.filter(service => service.id !== id));
//   };

//   const editService = (service) => {
//     setCurrentService(service);
//   };

//   return (
//     <div className="container">
//       <h2>Healthcare Services</h2>
//       <AddService onAdd={addService} onUpdate={updateService} currentService={currentService} />
//       <div>
//         {services.map(service => (
//           <ServiceItem key={service.id} service={service} onEdit={editService} onDelete={deleteService} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ServiceList;






// src/ServiceList.js
import React, { useState } from 'react';
import AddService from './AddService';
import ServiceItem from './ServiceItem';

const ServiceList = () => {
  const [services, setServices] = useState([]);
  const [currentService, setCurrentService] = useState(null);

  const addService = (newService) => {
    setServices([...services, newService]);
  };

  const updateService = (updatedService) => {
    setServices(services.map(service => (service.id === updatedService.id ? updatedService : service)));
    setCurrentService(null);
  };

  const deleteService = (id) => {
    setServices(services.filter(service => service.id !== id));
  };

  const editService = (service) => {
    setCurrentService(service);
  };

  const cancelEdit = () => {
    setCurrentService(null); // Reset current service to null to cancel the edit
  };

  return (
    <div className="container">
      <h2 className="mb-4">Healthcare Services</h2>
      <AddService onAdd={addService} onUpdate={updateService} currentService={currentService} onCancel={cancelEdit} />
      <div>
        {services.map(service => (
          <ServiceItem key={service.id} service={service} onEdit={editService} onDelete={deleteService} />
        ))}
      </div>
    </div>
  );
};

export default ServiceList;
