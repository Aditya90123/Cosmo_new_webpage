import React, { useState } from 'react';
import './AllProducts.css';
import { allProducts } from '../data/allProducts';

export default function AllProducts() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const categories = ['All', ...Array.from(new Set(allProducts.map(p => p.category)))];
  
  const filteredProducts = selectedCategory === 'All' 
    ? allProducts 
    : allProducts.filter(p => p.category === selectedCategory);

  return (
    <div className="all-products-page">
      {/* Header Section */}
      <div className="products-header">
        <h1 className="products-main-title">Our Complete Product Range</h1>
        <p className="products-subtitle">Explore our comprehensive range of leak testing, flow testing, and precision measurement solutions</p>
        
        {/* Category Filter */}
        <div className="category-filter">
          {categories.map((category) => (
            <button
              key={category}
              className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="products-grid">
        {filteredProducts.map((product) => (
          <div key={product.id} className="flip-card-container">
            <div className="flip-card">
              {/* Front Side */}
              <div className="flip-card-front">
                <div className="flip-card-image">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/380x560/1e293b/ffffff?text=" + encodeURIComponent(product.name);
                    }}
                  />
                  <div className="product-category-badge">{product.category}</div>
                </div>
                <div className="flip-card-info">
                  <h3 className="flip-card-title">{product.name}</h3>
                  <p className="flip-card-subtitle">{product.subtitle}</p>
                </div>
              </div>

              {/* Back Side */}
              <div className="flip-card-back">
                <div className="back-header">
                  <h3 className="flip-back-title">{product.name}</h3>
                  <span className="back-category">{product.category}</span>
                </div>
                
                <p className="flip-back-description">{product.description}</p>
                
                <div className="flip-specs">
                  <h4 className="flip-specs-title">Specifications</h4>
                  {Object.entries(product.specs).map(([key, value]) => (
                    <div key={key} className="flip-spec-item">
                      <span className="flip-spec-label">{key}:</span>
                      <span className="flip-spec-value">{value}</span>
                    </div>
                  ))}
                </div>

                <div className="back-actions">
                  <button className="flip-card-btn primary">Request Quote</button>
                  <button className="flip-card-btn secondary">Download Specs</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Results Count */}
      <div className="results-count">
        Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
        {selectedCategory !== 'All' && ` in ${selectedCategory}`}
      </div>
    </div>
  );
}