import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const worldLocations = [
  {
    id: "manesar",
    name: "Head Office - Manesar",
    city: "Gurugram, Haryana",
    address: "Plot No. 262, Sector 8, IMT Manesar, Gurugram, Haryana - 122 052",
    phone: "+91-(0)124-421-0946",
    email: "info@cosmoinstrumentsindia.com",
    managerEmail: "headoffice@cosmoinstrumentsindia.com",
    managerName: "Head Office",
    googleMapsLink: "https://maps.google.com/?q=Manesar+Gurugram+Haryana+India",
    x: 38,
    y: 22,
    country: "India"
  },
  {
    id: "pune",
    name: "Pune - Chakan Office",
    city: "Pune, Maharashtra",
    address: "Plot No. PAP-32, Phase III Chakan Industrial Area, Nighoje, Pune – 410 501",
    phone: "+91-(0)206-933-2345",
    email: "pune@cosmoinstrumentsindia.com",
    managerEmail: "pune.manager@cosmoinstrumentsindia.com",
    managerName: "Pune Branch Manager",
    googleMapsLink: "https://maps.google.com/?q=Chakan+Pune+Maharashtra+India",
    x: 26,
    y: 44,
    country: "India"
  },
  {
    id: "chennai",
    name: "Chennai Office",
    city: "Chennai, Tamil Nadu",
    address: "61A, Sri Ganesh Street, Vanagaram-Ambattur Road, Ambattur Ind. Estate, Chennai 600 058",
    phone: "+91-(0)999-436-4454",
    email: "chennai@cosmoinstrumentsindia.com",
    managerEmail: "chennai.manager@cosmoinstrumentsindia.com",
    managerName: "Chennai Branch Manager",
    googleMapsLink: "https://maps.google.com/?q=Ambattur+Chennai+Tamil+Nadu+India",
    x: 31,
    y: 57,
    country: "India"
  },
  {
    id: "bengaluru",
    name: "South Zone Regional Office",
    city: "Bengaluru, Karnataka",
    address: "No.90, M.K.S Layout, Avalahalli-Anjanapura Post, Bengaluru-560062",
    phone: "+91-(0)966-338-4423",
    email: "bengaluru@cosmoinstrumentsindia.com",
    managerEmail: "bengaluru.manager@cosmoinstrumentsindia.com",
    managerName: "Bengaluru Branch Manager",
    googleMapsLink: "https://maps.google.com/?q=Avalahalli+Bengaluru+Karnataka+India",
    x: 35,
    y: 74,
    country: "India"
  },
  {
    id: "ahmedabad",
    name: "Gujarat Office",
    city: "Ahmedabad, Gujarat",
    address: "Shop# 602, C-1, 6th Floor, Shreeji Plaza, S.P Ring Road, Nava Naroda, Ahmedabad 382 330",
    phone: "+91 79 1234 5678",
    email: "ahmedabad@cosmoinstrumentsindia.com",
    managerEmail: "ahmedabad.manager@cosmoinstrumentsindia.com",
    managerName: "Ahmedabad Branch Manager",
    googleMapsLink: "https://maps.google.com/?q=Nava+Naroda+Ahmedabad+Gujarat+India",
    x: 46,
    y: 66,
    country: "India"
  }
];

const Marker = ({ x, y, onClick, isSelected }) => {
  return (
    <motion.div
      style={{
        position: "absolute",
        left: `${x}%`,
        top: `${y}%`,
        transform: "translate(-50%, -50%)",
        cursor: "pointer",
        zIndex: 1000
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.4 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
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
          background: "rgba(255, 255, 255, 0.15)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderRadius: "20px",
          padding: "28px",
          minWidth: "320px",
          maxWidth: "360px",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.37)",
          zIndex: 1000,
          marginTop: "-25px",
          border: "1px solid rgba(255, 255, 255, 0.18)"
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
            background: "rgba(255,255,255,0.4)",
            backdropFilter: "blur(10px)",
            border: "2px solid rgba(255,255,255,0.5)",
            width: "32px",
            height: "32px",
            borderRadius: "50%",
            cursor: "pointer",
            fontSize: "18px",
            color: "#1a1a1a",
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
            color: "rgba(0,0,0,0.7)",
            marginBottom: "10px",
            fontWeight: 700
          }}>
            Office Location
          </div>
          <h3 style={{ 
            fontSize: "22px", 
            fontWeight: 800, 
            color: "#1a1a1a",
            marginBottom: "6px",
            textShadow: "0 2px 4px rgba(255,255,255,0.5)"
          }}>
            {location.name}
          </h3>
          <div style={{ fontSize: "15px", color: "rgba(0,0,0,0.8)", fontWeight: 600 }}>
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
            <span style={{ color: "#1a1a1a", fontSize: "18px" }}>📍</span>
            <span style={{ fontSize: "14px", color: "rgba(0,0,0,0.85)", lineHeight: "1.6" }}>
              {location.address}
            </span>
          </div>
          
          <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
            <span style={{ color: "#1a1a1a", fontSize: "18px" }}>📞</span>
            <span style={{ fontSize: "14px", color: "rgba(0,0,0,0.85)" }}>
              {location.phone}
            </span>
          </div>
          
          <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
            <span style={{ color: "#1a1a1a", fontSize: "18px" }}>✉️</span>
            <span style={{ fontSize: "14px", color: "rgba(0,0,0,0.85)" }}>
              {location.email}
            </span>
          </div>

          <div style={{ 
            borderTop: "1px solid rgba(0,0,0,0.2)", 
            paddingTop: "14px", 
            marginTop: "6px"
          }}>
            <div style={{ 
              fontSize: "12px", 
              fontWeight: 700, 
              color: "rgba(0,0,0,0.7)",
              marginBottom: "10px",
              letterSpacing: "1px"
            }}>
              MANAGER CONTACT
            </div>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
              <span style={{ color: "#1a1a1a", fontSize: "18px" }}>👤</span>
              <div>
                <div style={{ fontSize: "15px", color: "#1a1a1a", fontWeight: 700 }}>
                  {location.managerName}
                </div>
                <a 
                  href={`mailto:${location.managerEmail}`}
                  style={{ 
                    fontSize: "13px", 
                    color: "rgba(0,0,0,0.75)", 
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
              background: "rgba(255,255,255,0.35)",
              backdropFilter: "blur(10px)",
              color: "#1a1a1a",
              border: "2px solid rgba(255,255,255,0.6)",
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
              background: "rgba(255,255,255,0.35)",
              backdropFilter: "blur(10px)",
              color: "#1a1a1a",
              border: "2px solid rgba(255,255,255,0.6)",
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

  const handleLocationClick = (location, event) => {
    event.stopPropagation();
    setSelectedLocation(location);
    setPopupPosition({ x: event.clientX, y: event.clientY });
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
            src="/images/india-map.png"
            alt="India Map"
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
              isSelected={selectedLocation?.id === location.id}
            />
          ))}

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