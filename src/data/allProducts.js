export const allProducts = [
  // Air Leak Testers
  {
    id: "ls-r902",
    name: "LS-R902 Leak Tester",
    category: "Air Leak Testers",
    subtitle: "High-precision differential pressure leak testing",
    description: "Advanced differential pressure leak detection system designed for high-accuracy testing. Ideal for automotive components, EV batteries, and industrial sealing validation.",
    image: "/images/ls-r902.jpg",
    specs: {
      "Testing Method": "Differential Pressure",
      "Accuracy": "±0.1% of reading",
      "Pressure Range": "Up to 1 MPa",
      "Display": "Digital LCD",
      "Applications": "Automotive, EV, Industrial"
    },
    features: [
      "High-precision differential pressure sensing",
      "Automotive and EV component testing",
      "Fast, repeatable inspection cycles",
      "User-friendly digital interface",
      "Compact and portable design"
    ]
  },
  {
    id: "air-leak-tester-pro",
    name: "Air Leak Tester Pro",
    category: "Air Leak Testers",
    subtitle: "Enhanced precision with extended range",
    description: "Premium leak testing solution with higher precision and extended pressure range. Features advanced data logging capabilities for comprehensive quality control systems.",
    image: "/images/air-leak-tester-pro.jpg",
    specs: {
      "Testing Method": "Differential Pressure",
      "Accuracy": "±0.05% of reading",
      "Pressure Range": "Up to 2 MPa",
      "Data Logging": "USB/Network",
      "Applications": "Automotive, EV, Aerospace"
    },
    features: [
      "Ultra-high accuracy measurement",
      "Extended pressure range capability",
      "Advanced data logging and analysis",
      "Network connectivity options",
      "Compliance with international standards"
    ]
  },
 
  // Air Flow Testers
  {
    id: "air-flow-tester",
    name: "Air Flow Tester",
    category: "Air Flow Testers",
    subtitle: "Precision flow and volume measurement",
    description: "Specialized flow and volume measurement instrument for filters, ducts, and industrial systems. Delivers accurate flow rate readings with compact design and fast results.",
    image: "/images/air-flow-tester.jpg",
    specs: {
      "Measurement Type": "Flow & Volume",
      "Accuracy": "±0.2% of reading",
      "Flow Range": "0.1-100 L/min",
      "Pressure Range": "Up to 500 kPa",
      "Applications": "HVAC, Filters, Blowers"
    },
    features: [
      "Accurate flow rate and volume readings",
      "Ideal for HVAC and industrial systems",
      "Compact design with fast response",
      "Multiple measurement units",
      "Easy calibration and maintenance"
    ]
  },
 
  // Helium/Hydrogen Leak Testers
  {
    id: "helium-leak-tester",
    name: "Helium Leak Tester",
    category: "Helium/Hydrogen Leak Testers",
    subtitle: "Ultra-sensitive helium leak detection",
    description: "State-of-the-art helium leak detection system for finding extremely small leaks in critical applications. Used in semiconductor, aerospace, and high-vacuum industries.",
    image: "/images/helium-leak-tester.jpg",
    specs: {
      "Detection Method": "Helium Mass Spectrometry",
      "Sensitivity": "1×10⁻¹² atm·cc/sec",
      "Test Pressure": "Vacuum to 2 MPa",
      "Response Time": "< 1 second",
      "Applications": "Semiconductor, Aerospace, Vacuum"
    },
    features: [
      "Ultra-high sensitivity detection",
      "Mass spectrometry technology",
      "Rapid leak location capability",
      "Vacuum and pressure testing modes",
      "Automatic calibration routines"
    ]
  },
 
  // Pressure Testers
  {
    id: "pressure-tester",
    name: "Pressure Tester",
    category: "Pressure",
    subtitle: "Comprehensive pressure testing solutions",
    description: "Versatile pressure testing equipment for various industrial applications. Designed for accuracy, reliability, and ease of use in quality control environments.",
    image: "/images/pressure-tester.jpg",
    specs: {
      "Pressure Range": "0-10 MPa",
      "Accuracy": "±0.25% of full scale",
      "Display": "Digital with graphing",
      "Test Modes": "Pressure, Decay, Burst",
      "Applications": "General Industrial"
    },
    features: [
      "Wide pressure range capability",
      "Multiple test modes available",
      "Data recording and analysis",
      "Robust industrial construction",
      "Safety relief mechanisms"
    ]
  },
 
  // Peripherals
  {
    id: "test-chamber",
    name: "Test Chamber",
    category: "Peripherals",
    subtitle: "Custom test fixtures and chambers",
    description: "Custom-designed test chambers and fixtures for specific product testing requirements. Engineered for optimal sealing and repeatable test conditions.",
    image: "/images/test-chamber.jpg",
    specs: {
      "Material": "Aluminum/Stainless Steel",
      "Size": "Custom to specification",
      "Pressure Rating": "Up to 5 MPa",
      "Sealing": "Custom gasket design",
      "Applications": "Custom testing solutions"
    },
    features: [
      "Custom design for specific products",
      "High-quality sealing systems",
      "Durable construction materials",
      "Quick-change fixture options",
      "Integration with Cosmo testers"
    ]
  },
  {
    id: "quick-connector",
    name: "Quick Connector",
    category: "Peripherals",
    subtitle: "Rapid test connection system",
    description: "Quick-connect accessories for fast and secure test connections. Reduces setup time and ensures consistent sealing for repeatable test results.",
    image: "/images/quick-connector.jpg",
    specs: {
      "Connection Type": "Push-to-connect",
      "Pressure Rating": "Up to 2 MPa",
      "Material": "Stainless Steel",
      "Size Range": "1/8\" to 1\"",
      "Applications": "General testing"
    },
    features: [
      "One-handed operation",
      "Consistent sealing pressure",
      "Multiple size options",
      "Corrosion-resistant materials",
      "Long service life"
    ]
  },
 
  // Sound/Vibration Analyzer
  {
    id: "sound-vibration-analyzer",
    name: "Sound/Vibration Analyzer",
    category: "Sound/Vibration Analyzer",
    subtitle: "Multi-channel acoustic analysis",
    description: "Advanced sound and vibration analysis system for equipment diagnostics and quality control. Provides comprehensive frequency analysis and logging capabilities.",
    image: "/images/sound-analyzer.jpg",
    specs: {
      "Channels": "4-8 channels",
      "Frequency Range": "20 Hz - 20 kHz",
      "Analysis": "FFT, Spectrum, Time",
      "Storage": "SD card/Internal",
      "Applications": "Equipment diagnostics"
    },
    features: [
      "Multi-channel simultaneous analysis",
      "Real-time frequency display",
      "Comprehensive data logging",
      "Portable and battery operated",
      "Industry-standard analysis modes"
    ]
  },
 
  // Cosmo Super Gel and Seals
  {
    id: "cosmo-super-gel",
    name: "Cosmo Super Gel",
    category: "Cosmo Super Gel and Customized Seals",
    subtitle: "Advanced sealing compound",
    description: "Premium sealing gel for leak testing applications. Provides excellent sealing properties for irregular surfaces and temporary test sealing requirements.",
    image: "/images/cosmo-gel.jpg",
    specs: {
      "Type": "Silicone-based compound",
      "Temperature Range": "-40°C to +200°C",
      "Pressure Rating": "Up to 3 MPa",
      "Shelf Life": "24 months",
      "Applications": "Temporary sealing"
    },
    features: [
      "Excellent sealing properties",
      "Wide temperature tolerance",
      "Easy application and removal",
      "Non-corrosive formula",
      "Compatible with most materials"
    ]
  },
  {
    id: "custom-seals",
    name: "Custom Seals",
    category: "Cosmo Super Gel and Customized Seals",
    subtitle: "Bespoke sealing solutions",
    description: "Custom-designed seals and gaskets for specific testing applications. Manufactured to precise specifications for optimal performance in your test setup.",
    image: "/images/custom-seals.jpg",
    specs: {
      "Material": "Various polymers",
      "Size": "Custom to specification",
      "Temperature Range": "-60°C to +250°C",
      "Pressure Rating": "Application dependent",
      "Applications": "Custom sealing solutions"
    },
    features: [
      "Custom design for specific needs",
      "Wide material selection",
      "Precision manufacturing",
      "Quality assured production",
      "Technical support included"
    ]
  },
 
  // CORETEC Products
  {
    id: "coretec-servo-press",
    name: "CORETEC Servo Press",
    category: "CORETEC Servo Presses & Nutrunners",
    subtitle: "Precision servo pressing systems",
    description: "High-precision servo press systems for assembly and pressing applications. Offers programmable force and position control for consistent quality.",
    image: "/images/coretec-press.jpg",
    specs: {
      "Force Range": "1-100 kN",
      "Position Accuracy": "±0.01 mm",
      "Control": "Servo with programmable logic",
      "Stroke": "Up to 500 mm",
      "Applications": "Assembly, Pressing"
    },
    features: [
      "Programmable force control",
      "High-precision positioning",
      "Data logging capability",
      "Multiple pressing modes",
      "Integration with QC systems"
    ]
  },
  {
    id: "coretec-nutrunner",
    name: "CORETEC Nutrunner",
    category: "CORETEC Servo Presses & Nutrunners",
    subtitle: "Smart fastening solutions",
    description: "Advanced servo nutrunner for precision fastening applications. Provides torque control, angle monitoring, and data collection for quality assurance.",
    image: "/images/coretec-nutrunner.jpg",
    specs: {
      "Torque Range": "0.5-1000 Nm",
      "Accuracy": "±2% of set torque",
      "Control": "Servo with angle monitoring",
      "Drive Size": "1/4\" to 1\"",
      "Applications": "Assembly fastening"
    },
    features: [
      "Precise torque control",
      "Angle monitoring capability",
      "Comprehensive data logging",
      "Multiple fastening strategies",
      "Quality traceability"
    ]
  },
 
  // Koganei Products
  {
    id: "koganei-pneumatic",
    name: "Koganei Pneumatic Accessories",
    category: "Koganei Pneumatic Accessories",
    subtitle: "Japanese precision pneumatics",
    description: "High-quality Japanese pneumatic components for automation and control systems. Known for reliability, precision, and long service life.",
    image: "/images/koganei-pneumatic.jpg",
    specs: {
      "Origin": "Japan",
      "Pressure Rating": "Up to 1 MPa",
      "Port Size": "M5, M7, 1/8\" etc.",
      "Temperature Range": "5-60°C",
      "Applications": "Industrial automation"
    },
    features: [
      "Japanese quality manufacturing",
      "Wide product range available",
      "High reliability and durability",
      "Precision engineering",
      "Complete system solutions"
    ]
  },
 
  // Other Products
  {
    id: "calibration-service",
    name: "Calibration Service",
    category: "Others",
    subtitle: "Professional calibration solutions",
    description: "Comprehensive calibration services for leak testers and pressure measuring equipment. Ensures your equipment maintains accuracy and compliance.",
    image: "/images/calibration-service.jpg",
    specs: {
      "Service Type": "On-site/Laboratory",
      "Standards": "ISO/IEC 17025",
      "Certificates": "Traceable to NIST",
      "Turnaround": "5-10 business days",
      "Applications": "Equipment maintenance"
    },
    features: [
      "NIST-traceable calibration",
      "ISO 17025 accredited",
      "On-site service available",
      "Comprehensive documentation",
      "Preventive maintenance options"
    ]
  }
];