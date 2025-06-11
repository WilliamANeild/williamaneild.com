import React, { useState } from 'react';
import Link from 'next/link';

interface SocialRowProps {
  logo: string;
  alt: string;
  label: string;
  labelColor: string;
}

const SocialRow: React.FC<SocialRowProps> = ({ logo, alt, label, labelColor }) => {
  const [hover, setHover] = useState(false);

  // Container for each social row
  const containerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
  };

  // The logo image will slide left when hovered
  const logoStyle: React.CSSProperties = {
    width: '40px',
    height: '40px',
    transition: 'transform 0.3s ease',
    transform: hover ? 'translateX(-20px)' : 'translateX(0)',
  };

  // The text is initially hidden (offset and transparent) and slides in on hover
  const textStyle: React.CSSProperties = {
    marginLeft: '10px',
    color: labelColor,
    fontSize: '1.2rem',
    transition: 'transform 0.3s ease, opacity 0.3s ease',
    transform: hover ? 'translateX(0)' : 'translateX(-20px)',
    opacity: hover ? 1 : 0,
  };

  return (
    <div
      style={containerStyle}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img src={logo} alt={alt} style={logoStyle} />
      <span style={textStyle}>{label}</span>
    </div>
  );
};

const Socials: React.FC = () => {
  return (
    <div
      style={{
        backgroundColor: '#1a1a1a', // Distinct background for this page
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative', // Allows absolute positioning for the back button
      }}
    >
      {/* Back Arrow Button */}
      <div style={{ position: 'absolute', top: '20px', left: '20px' }}>
        <Link href="/">
          <button
            style={{
              background: 'transparent',
              border: 'none',
              color: 'white',
              fontSize: '2rem',
              cursor: 'pointer',
            }}
            aria-label="Go back to main screen"
          >
            ←
          </button>
        </Link>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
        {/* Instagram Section */}
        <SocialRow
          logo="/Users/liamneild/Desktop/instagram-logo-png-transparent-background.png"
          alt="Instagram Logo"
          label="Instagram: liam.neild"
          labelColor="purple"
        />
        {/* LinkedIn Section */}
        <SocialRow
          logo="/Users/liamneild/Desktop/sm_5b072d2f4f66c-removebg-preview.png"
          alt="LinkedIn Logo"
          label="LinkedIn: william-neild"
          labelColor="darkblue"
        />
        {/* Primary Email Section */}
        <SocialRow
          logo="/Users/liamneild/Desktop/Gmail-logo-design-on-transparent-background-PNG-removebg-preview.png"
          alt="Email Logo"
          label="Email: WilliamANeild@gmail.com"
          labelColor="red"
        />
        {/* Alternate Email Section */}
        <SocialRow
          logo="/Users/liamneild/Desktop/Emory_University-04-removebg-preview.png"
          alt="Alternate Email Logo"
          label="Alternate Email: Liam.Neild@Emory.edu"
          labelColor="lightblue"
        />
      </div>
    </div>
  );
};

export default Socials;
