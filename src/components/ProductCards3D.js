import React from 'react';
import './ProductCards3D.css';

const ProductCards3D = () => {
  const featuredProducts = [
    {
      id: "air-leak-tester",
      name: "Air Leak Tester",
      subtitle: "High-Precision Testing",
      image: "/images/air-leak-tester.png",
      overlayImage: "/images/leak-tester-overlay.png"
    },
    {
      id: "air-flow-tester", 
      name: "Air Flow Tester",
      subtitle: "Flow Measurement",
      image: "/images/air-flow-tester.png",
      overlayImage: "/images/flow-tester-overlay.png"
    }
  ];

  return (
    <div className="products-3d-section">
      <div className="products-3d-container">
        {featuredProducts.map((product) => (
          <div key={product.id} className="card-3d">
            <div className="wrapper-3d">
              <img
                className="cover-3d"
                src={product.image}
                alt={product.name}
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/300x450/1e293b/ffffff?text=" + encodeURIComponent(product.name);
                }}
              />
              <img
                className="character-3d"
                src={product.overlayImage}
                alt={`${product.name} overlay`}
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <div className="title-3d">
                <div className="title-text">{product.name}</div>
                <div className="subtitle-text">{product.subtitle}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCards3D;