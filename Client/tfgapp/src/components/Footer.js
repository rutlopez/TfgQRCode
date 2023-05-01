import React from 'react';

function Footer() {
  return (
    <footer style={{ backgroundColor: '#303030', color: '#fff', fontSize: 14, padding: 20 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <p style={{ margin: 0 }}>© 2023 Rut Yela QR Code Business Card</p>
        </div>
        <div>
          <ul style={{ listStyle: 'none', display: 'flex', margin: 0, padding: 0 }}>
            <li style={{ marginRight: 10 }}><a href="#" style={{ color: '#fff' }}>Privacy Policy</a></li>
            <li><a href="#" style={{ color: '#fff' }}>Terms of Service</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
