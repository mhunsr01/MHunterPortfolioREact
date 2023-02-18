import React from 'react';


const styles = {
  headerStyle: {
    background: 'lightGreen',
  },
  headingStyle: {
    fontSize: '75px',
  },
};


function Header() {
  return (
    <header style={styles.headerStyle} className="header">
      <h1 style={styles.headingStyle}>MHunter Technology</h1>
    </header>
  );
}

export default Header;
