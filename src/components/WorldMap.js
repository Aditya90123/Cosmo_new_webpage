import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const worldLocations = [
  {
    id: "chennai",
    name: "Chennai Office",
    city: "Chennai",
    address: "COSMO India Pvt Ltd, Ambattur, Chennai",
    phone: "+91 44 1234 5678",
    email: "chennai@cosmo.com",
    managerEmail: "manager.chennai@cosmo.com",
    managerName: "Priya Sharma",
    googleMapsLink: "https://maps.google.com/?q=Chennai+India",
    x: 73,
    y: 58,
    country: "India"
  },
  {
    id: "coimbatore",
    name: "Coimbatore Office",
    city: "Coimbatore",
    address: "COSMO India Pvt Ltd, Peelamedu, Coimbatore",
    phone: "+91 422 1234 5678",
    email: "coimbatore@cosmo.com",
    managerEmail: "manager.coimbatore@cosmo.com",
    managerName: "Rajesh Kumar",
    googleMapsLink: "https://maps.google.com/?q=Coimbatore+India",
    x: 69,
    y: 57,
    country: "India"
  },
  {
    id: "pune",
    name: "Pune Office",
    city: "Pune",
    address: "COSMO India Pvt Ltd, Hinjewadi, Pune",
    phone: "+91 20 1234 5678",
    email: "pune@cosmo.com",
    managerEmail: "manager.pune@cosmo.com",
    managerName: "Sneha Deshpande",
    googleMapsLink: "https://maps.google.com/?q=Pune+India",
    x: 67,
    y: 52,
    country: "India"
  },
  {
    id: "manesar",
    name: "Manesar Office",
    city: "Manesar",
    address: "COSMO India Pvt Ltd, IMT Manesar, Haryana",
    phone: "+91 124 1234 5678",
    email: "manesar@cosmo.com",
    managerEmail: "manager.manesar@cosmo.com",
    managerName: "Rohit Sharma",
    googleMapsLink: "https://maps.google.com/?q=Manesar+Haryana+India",
    x: 68,
    y: 35,
    country: "India"
  },
  {
    id: "gujarat",
    name: "Gujarat Office",
    city: "Gujarat",
    address: "COSMO India Pvt Ltd, Sanand, Gujarat",
    phone: "+91 79 1234 5678",
    email: "gujarat@cosmo.com",
    managerEmail: "manager.gujarat@cosmo.com",
    managerName: "Amit Patel",
    googleMapsLink: "https://maps.google.com/?q=Sanand+Gujarat+India",
    x: 63,
    y: 46,
    country: "India"
  },
  {
    id: "gurugram",
    name: "Gurugram Office",
    city: "Gurugram",
    address: "COSMO India Pvt Ltd, Cyber City, Gurugram",
    phone: "+91 124 1234 5678",
    email: "gurugram@cosmo.com",
    managerEmail: "manager.gurugram@cosmo.com",
    managerName: "Neha Verma",
    googleMapsLink: "https://maps.google.com/?q=Gurugram+Haryana+India",
    x: 69,
    y: 42,
    country: "India"
  },
  {
    id: "jamshedpur",
    name: "Jamshedpur Office",
    city: "Jamshedpur",
    address: "COSMO India Pvt Ltd, Bistupur, Jamshedpur",
    phone: "+91 657 1234 5678",
    email: "jamshedpur@cosmo.com",
    managerEmail: "manager.jamshedpur@cosmo.com",
    managerName: "Anil Singh",
    googleMapsLink: "https://maps.google.com/?q=Jamshedpur+India",
    x: 76,
    y: 48,
    country: "India"
  },
  {
    id: "rudrapur",
    name: "Rudrapur Office",
    city: "Rudrapur",
    address: "COSMO India Pvt Ltd, SIDCUL, Rudrapur",
    phone: "+91 594 1234 5678",
    email: "rudrapur@cosmo.com",
    managerEmail: "manager.rudrapur@cosmo.com",
    managerName: "Deepak Joshi",
    googleMapsLink: "https://maps.google.com/?q=Rudrapur+Uttarakhand+India",
    x: 71,
    y: 38,
    country: "India"
  },
  {
    id: "faridabad",
    name: "Faridabad Office",
    city: "Faridabad",
    address: "COSMO India Pvt Ltd, Sector 21, Faridabad",
    phone: "+91 129 1234 5678",
    email: "faridabad@cosmo.com",
    managerEmail: "manager.faridabad@cosmo.com",
    managerName: "Suresh Gupta",
    googleMapsLink: "https://maps.google.com/?q=Faridabad+Haryana+India",
    x: 70,
    y: 42,
    country: "India"

  },
  {
    id: "coimbatore",
    name: "Coimbatore Office",
    city: "Coimbatore",
    address: "COSMO India Pvt Ltd, Peelamedu, Coimbatore",
    phone: "+91 422 1234 5678",
    email: "coimbatore@cosmo.com",
    managerEmail: "manager.coimbatore@cosmo.com",
    managerName: "Rajesh Kumar",
    googleMapsLink: "https://maps.google.com/?q=Coimbatore+India",
    x: 69,
    y: 57,
    country: "India"
  },
  {
    id: "pune",
    name: "Pune Office",
    city: "Pune",
    address: "COSMO India Pvt Ltd, Hinjewadi, Pune",
    phone: "+91 20 1234 5678",
    email: "pune@cosmo.com",
    managerEmail: "manager.pune@cosmo.com",
    managerName: "Sneha Deshpande",
    googleMapsLink: "https://maps.google.com/?q=Pune+India",
    x: 67,
    y: 52,
    country: "India"
  },
  {
    id: "manesar",
    name: "Manesar Office",
    city: "Manesar",
    address: "COSMO India Pvt Ltd, IMT Manesar, Haryana",
    phone: "+91 124 1234 5678",
    email: "manesar@cosmo.com",
    managerEmail: "manager.manesar@cosmo.com",
    managerName: "Rohit Sharma",
    googleMapsLink: "https://maps.google.com/?q=Manesar+Haryana+India",
    x: 68,
    y: 35,
    country: "India"
  },
  {
    id: "gujarat",
    name: "Gujarat Office",
    city: "Gujarat",
    address: "COSMO India Pvt Ltd, Sanand, Gujarat",
    phone: "+91 79 1234 5678",
    email: "gujarat@cosmo.com",
    managerEmail: "manager.gujarat@cosmo.com",
    managerName: "Amit Patel",
    googleMapsLink: "https://maps.google.com/?q=Sanand+Gujarat+India",
    x: 63,
    y: 46,
    country: "India"
  },
  {
    id: "gurugram",
    name: "Gurugram Office",
    city: "Gurugram",
    address: "COSMO India Pvt Ltd, Cyber City, Gurugram",
    phone: "+91 124 1234 5678",
    email: "gurugram@cosmo.com",
    managerEmail: "manager.gurugram@cosmo.com",
    managerName: "Neha Verma",
    googleMapsLink: "https://maps.google.com/?q=Gurugram+Haryana+India",
    x: 69,
    y: 42,
    country: "India"
  },
  {
    id: "jamshedpur",
    name: "Jamshedpur Office",
    city: "Jamshedpur",
    address: "COSMO India Pvt Ltd, Bistupur, Jamshedpur",
    phone: "+91 657 1234 5678",
    email: "jamshedpur@cosmo.com",
    managerEmail: "manager.jamshedpur@cosmo.com",
    managerName: "Anil Singh",
    googleMapsLink: "https://maps.google.com/?q=Jamshedpur+India",
    x: 76,
    y: 48,
    country: "India"
  },
  {
    id: "rudrapur",
    name: "Rudrapur Office",
    city: "Rudrapur",
    address: "COSMO India Pvt Ltd, SIDCUL, Rudrapur",
    phone: "+91 594 1234 5678",
    email: "rudrapur@cosmo.com",
    managerEmail: "manager.rudrapur@cosmo.com",
    managerName: "Deepak Joshi",
    googleMapsLink: "https://maps.google.com/?q=Rudrapur+Uttarakhand+India",
    x: 71,
    y: 38,
    country: "India"
  },
  {
    id: "faridabad",
    name: "Faridabad Office",
    city: "Faridabad",
    address: "COSMO India Pvt Ltd, Sector 21, Faridabad",
    phone: "+91 129 1234 5678",
    email: "faridabad@cosmo.com",
    managerEmail: "manager.faridabad@cosmo.com",
    managerName: "Suresh Gupta",
    googleMapsLink: "https://maps.google.com/?q=Faridabad+Haryana+India",
  }
];

const Marker = ({ x, y, onClick, isSelected, onHover, onMouseLeave }) => {
  return (
    <motion.div
      style={{
        position: "absolute",
        left: `${x}%`,
        top: `${y}%`,
        transform: "translate(-50%, -50%)",
        cursor: "pointer",
        zIndex: 100
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.4 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      onMouseEnter={onHover}
      onMouseLeave={onMouseLeave}
    >
      {/* Outer pulsing ring */}
      <motion.div
        style={{
          position: "absolute",
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          border: "3px solid #667eea",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          opacity: 0.6
        }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.6, 0.2, 0.6]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      {/* Middle pulsing ring */}
      <motion.div
        style={{
          position: "absolute",
          width: "35px",
          height: "35px",
          borderRadius: "50%",
          border: "3px solid #764ba2",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          opacity: 0.8
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.8, 0.4, 0.8]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      />
      {/* Inner circle - Gradient */}
      <div
        style={{
          position: "absolute",
          width: "22px",
          height: "22px",
          borderRadius: "50%",
          background: isSelected ? "#764ba2" : "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          border: "3px solid #fff",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          boxShadow: isSelected 
            ? "0 0 20px rgba(118, 75, 162, 0.8), 0 0 40px rgba(118, 75, 162, 0.4)"
            : "0 0 15px rgba(102, 126, 234, 0.6), 0 0 30px rgba(102, 126, 234, 0.3)"
        }}
      />
      {/* Center dot - White */}
      <div
        style={{
          position: "absolute",
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          background: "#fff",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          boxShadow: "0 0 10px rgba(255,255,255,0.8)"
        }}
      />
    </motion.div>
  );
};

const HoverTooltip = ({ location, position }) => {
  if (!location) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8, y: 15 }}
        transition={{ 
          duration: 0.2,
          ease: "easeOut"
        }}
        style={{
          position: "fixed",
          left: position?.x || "50%",
          top: position?.y || "50%",
          transform: "translate(-50%, -100%)",
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          borderRadius: "16px",
          padding: "20px",
          minWidth: "280px",
          maxWidth: "320px",
          boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
          zIndex: 1000,
          marginTop: "-20px",
          border: "3px solid #fff",
          pointerEvents: "none"
        }}
      >
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div style={{ marginBottom: "16px" }}>
            <div style={{ 
              fontSize: "20px", 
              fontWeight: 800, 
              color: "#fff",
              marginBottom: "6px",
              textShadow: "0 2px 4px rgba(0,0,0,0.2)"
            }}>
              {location.city}
            </div>
            <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.9)", fontWeight: 600 }}>
              {location.country}
            </div>
          </div>

          <div style={{ 
            borderTop: "1px solid rgba(255,255,255,0.3)", 
            paddingTop: "14px",
            marginBottom: "12px"
          }}>
            <div style={{ 
              fontSize: "11px", 
              fontWeight: 700, 
              color: "rgba(255,255,255,0.8)",
              marginBottom: "10px",
              letterSpacing: "1px"
            }}>
              REGIONAL MANAGER
            </div>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
              <span style={{ color: "#fff", fontSize: "18px" }}>👤</span>
              <div>
                <div style={{ fontSize: "14px", color: "#fff", fontWeight: 700 }}>
                  {location.managerName}
                </div>
                <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.9)" }}>
                  {location.managerEmail}
                </div>
              </div>
            </div>
          </div>

          <motion.a 
            href={location.googleMapsLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "13px",
              color: "#fff",
              fontWeight: 700,
              textDecoration: "none",
              background: "rgba(255,255,255,0.2)",
              padding: "10px 16px",
              borderRadius: "8px",
              backdropFilter: "blur(10px)"
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            🗺️ View on Google Maps
          </motion.a>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const LocationPopup = ({ location, onClose, position }) => {
  if (!location) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8, y: 20 }}
        transition={{ 
          duration: 0.3,
          ease: "easeOut"
        }}
        style={{
          position: "fixed",
          left: position?.x || "50%",
          top: position?.y || "50%",
          transform: "translate(-50%, -100%)",
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          borderRadius: "20px",
          padding: "28px",
          minWidth: "320px",
          maxWidth: "360px",
          boxShadow: "0 25px 80px rgba(0,0,0,0.4)",
          zIndex: 1000,
          marginTop: "-25px",
          border: "4px solid #fff"
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <motion.button
          onClick={onClose}
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
          style={{
            position: "absolute",
            top: "16px",
            right: "16px",
            background: "rgba(255,255,255,0.3)",
            backdropFilter: "blur(10px)",
            border: "2px solid #fff",
            width: "32px",
            height: "32px",
            borderRadius: "50%",
            cursor: "pointer",
            fontSize: "18px",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          ×
        </motion.button>
        
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          style={{ marginBottom: "20px" }}
        >
          <div style={{ 
            fontSize: "11px", 
            letterSpacing: "0.2em", 
            textTransform: "uppercase", 
            color: "rgba(255,255,255,0.8)",
            marginBottom: "10px",
            fontWeight: 700
          }}>
            Office Location
          </div>
          <h3 style={{ 
            fontSize: "22px", 
            fontWeight: 800, 
            color: "#fff",
            marginBottom: "6px",
            textShadow: "0 2px 4px rgba(0,0,0,0.2)"
          }}>
            {location.name}
          </h3>
          <div style={{ fontSize: "15px", color: "rgba(255,255,255,0.9)", fontWeight: 600 }}>
            {location.city}, {location.country}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{ display: "grid", gap: "14px" }}
        >
          <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
            <span style={{ color: "#fff", fontSize: "18px" }}>📍</span>
            <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.95)", lineHeight: "1.6" }}>
              {location.address}
            </span>
          </div>
          
          <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
            <span style={{ color: "#fff", fontSize: "18px" }}>📞</span>
            <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.95)" }}>
              {location.phone}
            </span>
          </div>
          
          <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
            <span style={{ color: "#fff", fontSize: "18px" }}>✉️</span>
            <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.95)" }}>
              {location.email}
            </span>
          </div>

          <div style={{ 
            borderTop: "1px solid rgba(255,255,255,0.3)", 
            paddingTop: "14px", 
            marginTop: "6px"
          }}>
            <div style={{ 
              fontSize: "12px", 
              fontWeight: 700, 
              color: "rgba(255,255,255,0.8)",
              marginBottom: "10px",
              letterSpacing: "1px"
            }}>
              MANAGER CONTACT
            </div>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
              <span style={{ color: "#fff", fontSize: "18px" }}>👤</span>
              <div>
                <div style={{ fontSize: "15px", color: "#fff", fontWeight: 700 }}>
                  {location.managerName}
                </div>
                <a 
                  href={`mailto:${location.managerEmail}`}
                  style={{ 
                    fontSize: "13px", 
                    color: "rgba(255,255,255,0.9)", 
                    textDecoration: "none" 
                  }}
                >
                  {location.managerEmail}
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          style={{ display: "grid", gap: "10px", marginTop: "24px" }}
        >
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            style={{
              width: "100%",
              padding: "14px 24px",
              background: "rgba(255,255,255,0.25)",
              backdropFilter: "blur(10px)",
              color: "#fff",
              border: "2px solid rgba(255,255,255,0.5)",
              borderRadius: "12px",
              fontSize: "15px",
              fontWeight: 700,
              cursor: "pointer"
            }}
            onClick={() => window.open(location.googleMapsLink, '_blank')}
          >
            🗺️ Open in Google Maps
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            style={{
              width: "100%",
              padding: "14px 24px",
              background: "rgba(255,255,255,0.25)",
              backdropFilter: "blur(10px)",
              color: "#fff",
              border: "2px solid rgba(255,255,255,0.5)",
              borderRadius: "12px",
              fontSize: "15px",
              fontWeight: 700,
              cursor: "pointer"
            }}
            onClick={() => window.location.href = `mailto:${location.managerEmail}`}
          >
            ✉️ Contact Manager
          </motion.button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default function WorldMap() {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [popupPosition, setPopupPosition] = useState(null);
  const [hoveredLocation, setHoveredLocation] = useState(null);
  const [hoverPosition, setHoverPosition] = useState(null);

  const handleLocationClick = (location, event) => {
    setSelectedLocation(location);
    setPopupPosition({ x: event.clientX, y: event.clientY });
  };

  const handleLocationHover = (location, event) => {
    setHoveredLocation(location);
    setHoverPosition({ x: event.clientX, y: event.clientY });
  };

  const handleLocationLeave = () => {
    setHoveredLocation(null);
    setHoverPosition(null);
  };

  return (
    <div style={{
      background: "#ffffff",
      padding: "100px 24px",
      position: "relative"
    }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative" }}>
        {/* Header Section */}
        <div
          style={{
            maxWidth: 1200,
            margin: "auto",
            display: "grid",
            gap: 14,
            textAlign: "center",
          }}
        >
          <p
            style={{
              color: "#94a3b8",
              textTransform: "uppercase",
              letterSpacing: "0.25em",
              fontSize: 12,
            }}
          >
            Our Locations
          </p>
          <h3 style={{ fontSize: 36, lineHeight: 1.1, maxWidth: 760, margin: "auto" }}>
            
          </h3>
        </div>

        {/* Map Container - No border, pure white background */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ 
            position: "relative", 
            maxWidth: "1200px",
            margin: "0 auto",
            border: "none",
            borderRadius: "0",
            overflow: "hidden"
          }}
          onClick={() => setSelectedLocation(null)}
        >
          {/* World Map Image */}
          <img
            src="/images/world%20map.png"
            alt="World Map"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              background: "transparent",
              opacity: 1
            }}
          />

          {/* Location Markers */}
          {worldLocations.map((location) => (
            <Marker
              key={location.id}
              x={location.x}
              y={location.y}
              onClick={(e) => handleLocationClick(location, e)}
              onHover={(e) => handleLocationHover(location, e)}
              onMouseLeave={handleLocationLeave}
              isSelected={selectedLocation?.id === location.id}
            />
          ))}

          {/* Hover Tooltip */}
          {hoveredLocation && (
            <HoverTooltip
              location={hoveredLocation}
              position={hoverPosition}
            />
          )}

          {/* Popup */}
          {selectedLocation && (
            <LocationPopup
              location={selectedLocation}
              onClose={() => setSelectedLocation(null)}
              position={popupPosition}
            />
          )}
        </motion.div>

        {/* Legend */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "24px",
          marginTop: "24px",
          flexWrap: "wrap"
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <div style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              background: "#a8a8a8",
              border: "2px solid #fff"
            }} />
            <span style={{ color: "#333", fontSize: "12px" }}></span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <div style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              background: "#dddddd",
              border: "2px solid #fff"
            }} />
            <span style={{ color: "#333", fontSize: "12px" }}></span>
          </div>
        </div>

        {/* Animated Stats */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "24px",
          marginTop: "48px"
        }}>
          {[
            
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                delay: index * 0.15,
                duration: 0.5,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{
                y: -8,
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              style={{
                background: "#fff",
                borderRadius: "12px",
                padding: "24px",
                textAlign: "center",
                border: "2px solid #000",
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)"
              }}
            >
              <motion.div 
                style={{ 
                  fontSize: "32px", 
                  fontWeight: 700, 
                  color: "#000",
                  marginBottom: "8px"
                }}
                whileHover={{
                  scale: 1.1,
                  color: "#333"
                }}
                transition={{ duration: 0.3 }}
              >
                {stat.value}
              </motion.div>
              <div style={{ fontSize: "14px", color: "#333", fontWeight: 600 }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}