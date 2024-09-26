
import React, { useState, useEffect } from 'react';

const AddService = ({ onAdd, onUpdate, currentService, onCancel }) => {
  const [name, setName] = useState(currentService ? currentService.name : '');
  const [description, setDescription] = useState(currentService ? currentService.description : '');
  const [price, setPrice] = useState(currentService ? currentService.price : '');

  useEffect(() => {
    if (currentService) {
      setName(currentService.name);
      setDescription(currentService.description);
      setPrice(currentService.price);
    } else {
      resetForm();
    }
  }, [currentService]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!currentService && (!name || !description || !price)) {
      alert("All fields are required!");
      return;
    }

    const serviceData = {
      id: currentService ? currentService.id : Date.now(),
      name: name || currentService.name, 
      description: description || currentService.description, 
      price: price ? parseFloat(price) : currentService.price, 
    };

    currentService ? onUpdate(serviceData) : onAdd(serviceData);
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setDescription('');
    setPrice('');
  };

  const handleCancel = () => {
    resetForm();
    onCancel(); 
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        placeholder="Service Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="form-control mb-2"
      />
      <input
        type="text"
        placeholder="Service Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="form-control mb-2"
      />
      <input
        type="number"
        placeholder="Service Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="form-control mb-2"
      />
      <button type="submit" className="btn btn-success">
        {currentService ? 'Update Service' : 'Add Service'}
      </button>
      {currentService && (
        <button type="button" className="btn btn-secondary mx-2" onClick={handleCancel}>
          Cancel
        </button>
      )}
    </form>
  );
};

export default AddService;
