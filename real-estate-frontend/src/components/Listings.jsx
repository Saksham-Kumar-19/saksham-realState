import React, { useEffect, useState } from 'react';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

function Listings() {
  const [properties, setProperties] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (!user) {
      navigate('/');
      return;
    }

    const fetchProperties = async () => {
      try {
        const response = await api.get('/properties');
        setProperties(response.data);
      } catch (error) {
        console.error('Failed to load properties:', error.message);
      }
    };

    fetchProperties();
  }, [navigate]);

  return (
    <main>
      <h2>Property Listings</h2>
      {properties.map((property) => (
        <div key={property._id} className="property-item">
          <h3>{property.title}</h3>
          <p><strong>Price:</strong> ${property.price}</p>
          <p><strong>Location:</strong> {property.location}</p>
          <p>{property.description}</p>
        </div>
      ))}
    </main>
  );
}

export default Listings;
