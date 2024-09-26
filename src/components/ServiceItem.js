// import React from 'react';

// const ServiceItem = ({ service, onEdit, onDelete }) => {
//   return (
//     <div className="card mb-2">
//       <div className="card-body">
//         <h5 className="card-title">{service.name}</h5>
//         <p className="card-text">{service.description}</p>
//         <p className="card-text"><strong>Price: </strong>${service.price}</p>
//         <button className="btn btn-primary" onClick={() => onEdit(service)}>Edit</button>
//         <button className="btn btn-danger ml-2" onClick={() => onDelete(service.id)}>Delete</button>
//       </div>
//     </div>
//   );
// };

// export default ServiceItem;




// src/ServiceItem.js
import React from 'react';

const ServiceItem = ({ service, onEdit, onDelete }) => {
  return (
    <div className="card mb-2 shadow-sm">
      <div className="card-body">
        <h5 className="card-title">{service.name}</h5>
        <p className="card-text">{service.description}</p>
        <p className="card-text"><strong>Price: </strong>${service.price.toFixed(2)}</p>
        <button className="btn btn-primary " onClick={() => onEdit(service)}>Edit</button>
        <button className="btn btn-danger mx-2" onClick={() => onDelete(service.id)}>Delete</button>
      </div>
    </div>
  );
};

export default ServiceItem;
