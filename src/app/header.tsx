import React, { useState } from 'react';

interface HeaderProps {
  logoUrl?: string;
}

const headerStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1rem',
};

const sectionStyle: React.CSSProperties = {
  flex: 1,
};

const sectionOneStyle: React.CSSProperties = {
  textAlign: 'left',
};

const sectionTwoStyle: React.CSSProperties = {
  textAlign: 'center',
};

const sectionThreeStyle: React.CSSProperties = {
  textAlign: 'right',
  position: 'relative',
};

const logoImageStyle: React.CSSProperties = {
  maxHeight: '50px',
};

const logoPlaceholderStyle: React.CSSProperties = {
  width: '50px',
  height: '50px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#ccc',
  color: '#333',
  fontSize: '0.8rem',
};

const nameTextStyle: React.CSSProperties = {
  fontFamily: '"Cascadia Code", "Fira Code", Consolas, "Courier New", monospace',
  fontSize: '1.5rem',
  fontWeight: 'bold',
};

const hamburgerStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  width: '24px',
  height: '24px',
};

const lineStyle: React.CSSProperties = {
  width: '100%',
  height: '2px',
  backgroundColor: '#000',
};

const Header: React.FC<HeaderProps> = ({ logoUrl }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header style={headerStyle} className="fade-in">
      {/* Section One - Left: Logo */}
      <div style={{ ...sectionStyle, ...sectionOneStyle }}>
        {logoUrl ? (
          <img src={logoUrl} alt="Logo" style={logoImageStyle} />
        ) : (
          <div style={logoPlaceholderStyle}>Your Logo Here</div>
        )}
      </div>
      {/* Section Two - Center: Full Name in Code-like Font */}
      <div style={{ ...sectionStyle, ...sectionTwoStyle }}>
        <span style={nameTextStyle}>William Aldredge Neild</span>
      </div>
      {/* Section Three - Right: Menu Button */}
      <div style={{ ...sectionStyle, ...sectionThreeStyle }}>
        <button 
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
          aria-label="Menu"
        >
          <div style={hamburgerStyle}>
            <div style={lineStyle}></div>
            <div style={lineStyle}></div>
            <div style={lineStyle}></div>
          </div>
        </button>
        {menuOpen && (
          <div style={{
            position: 'absolute',
            top: '100%',
            right: 0,
            backgroundColor: '#fff',
            boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
            padding: '1rem',
            zIndex: 1000,
          }}>
            {/* Dropdown menu content will be added here later */}
            <p>Dropdown menu placeholder</p>
          </div>
        )}
      </div>
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          .fade-in {
            animation: fadeIn 1s ease-in-out;
          }
        `}
      </style>
    </header>
  );
};

export default Header;
