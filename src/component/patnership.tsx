import './css/partnership.css';

const PartnershipLogos = () => {
  const partners = [
    { name: "Tech Corp", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5MDIv1WMdr4xuBODYdDJ46xaaZVakTSmG1w&s" },
    { name: "Global Innovate", logo: "https://pbs.twimg.com/profile_images/1780620249450291200/Ay1jymLh_400x400.jpg" },
    { name: "Future Systems", logo: "https://pbs.twimg.com/profile_images/1854641330221195277/R3edkAmv_400x400.jpg" },
    { name: "Enterprise Solutions", logo: "https://miro.medium.com/v2/resize:fit:2400/1*1QABIdoaCqI1kKyJoJiObA.png" },
    { name: "Digital Frontier", logo: "https://pbs.twimg.com/profile_images/1789681376809062401/OZwCKU3g_400x400.jpg" }
    
  ];

  return (
    <div className="partnership-container">
      <div className="logos-wrapper">
        {partners.map((partner, index) => (
          <div 
            key={index} 
            className="logo-circle"
          >
            <img 
              src={partner.logo} 
              alt={`${partner.name} logo`} 
              className="logo-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnershipLogos;
