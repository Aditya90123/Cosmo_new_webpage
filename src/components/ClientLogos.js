import { useEffect, useState } from "react";

const clientLogos = [
  "AAm.png",
  "ADM.jpg",
  "Advik.png",
  "Ahresy.png",
  "Aisin.png",
  "Alicon.png",
  "AltiGreen.png",
  "Anand.png",
  "APicom.png",
  "AsianMetals.jpg",
  "ASK.jpg",
  "Astemo.png",
  "Ather.jpeg",
  "Atmo.png",
  "Aurangabad_electric.png",
  "AusaMedical.png",
  "Axeltech.png",
  "Bharat_FIH.png",
  "BorgWarner.png",
  "BOSCH.png",
  "bremo.png",
  "Cat.png",
  "Chamundi.png",
  "CNC_india.png",
  "Comali.png",
  "Craftsman.png",
  "Daeseung.png",
  "Daikin.png",
  "DANA.png",
  "Eicher.png",
  "Ekk.png",
  "Endurance.png",
  "Escort.png",
  "Excide.png",
  "Exedy.png",
  "Exicom.png",
  "Fiat.png",
  "Fiem.png",
  "force.png",
  "Gabriel.png",
  "Greaves.png",
  "Hanon.png",
  "HERO.png",
  "Hitachi.png",
  "Honda(2).png",
  "honda.png",
  "Hyundai.png",
  "Hyundai_Transys.png",
  "IJL.png",
  "Ikuni.png",
  "Indo-MIM.png",
  "Indo.jpg",
  "Inzi.png",
  "Jaya_Hind.png",
  "KIA.jpg",
  "Leyland.png",
  "LG.png",
  "Lumax.png",
  "Mahindra.jpg",
  "MahindraELectric.png",
  "Mann+.png",
  "Mark_Exhaust.png",
  "Maruti-Suzuki-Logo-2000.png",
  "MH.png",
  "Mistubishi_electric.png",
  "MNS.png",
  "Myunghwa.png",
  "Nipro.png",
  "OLA.png",
  "Panasonic.jpg",
  "Pari.png",
  "Piolax.png",
  "Posh.png",
  "Psa.jpg",
  "Rane.png",
  "Rico.png",
  "River.png",
  "Rockman.png",
  "RoyalEnfield.png",
  "Sandhar.png",
  "SML.png",
  "Sona.png",
  "SriKrishna.png",
  "STF.png",
  "Sundram.png",
  "Surya.png",
  "Suzuki.png",
  "Tata.png",
  "TataMotors.png",
  "Tata_Technologies.png",
  "TCS.png",
  "TE.png",
  "Timken.png",
  "Tenneco.png",
  "Toyota.png",
  "TVS.png",
  "Unotech.png",
  "Varroc.png",
  "Vibrant.png",
  "Visteon.png",
  "Volvo.png",
  "Wabco.png",
  "WheelsIndia.png",
  "ZF.png",
];

export default function ClientLogos() {
  const firstRowLogos = clientLogos.slice(0, clientLogos.length / 2);
  const secondRowLogos = clientLogos.slice(clientLogos.length / 2);

  return (
    <section className="client-logos-section">
      <div className="client-logos-container">
        <div className="client-logos-heading">
          <h2>Trusted by Industry Leaders</h2>
          <p>Powering innovation across global automotive and manufacturing sectors</p>
        </div>
        
        {/* First Row - Left to Right */}
        <div className="client-logos-row client-logos-row-1">
          <div className="client-logos-track client-logos-track-reverse">
            {firstRowLogos.map((logo, index) => (
              <div key={`row1-${index}`} className="client-logo-item">
                <img 
                  src={`/clientslogo/${logo}`} 
                  alt={`Client ${index + 1}`} 
                  className="client-logo-image"
                />
              </div>
            ))}
            {firstRowLogos.map((logo, index) => (
              <div key={`row1-dup-${index}`} className="client-logo-item">
                <img 
                  src={`/clientslogo/${logo}`} 
                  alt={`Client ${index + 1}`} 
                  className="client-logo-image"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Second Row - Right to Left */}
        <div className="client-logos-row client-logos-row-2">
          <div className="client-logos-track">
            {secondRowLogos.map((logo, index) => (
              <div key={`row2-${index}`} className="client-logo-item">
                <img 
                  src={`/clientslogo/${logo}`} 
                  alt={`Client ${index + 1}`} 
                  className="client-logo-image"
                />
              </div>
            ))}
            {secondRowLogos.map((logo, index) => (
              <div key={`row2-dup-${index}`} className="client-logo-item">
                <img 
                  src={`/clientslogo/${logo}`} 
                  alt={`Client ${index + 1}`} 
                  className="client-logo-image"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
