import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const Layout = ({ children }) => (
    <div className="appContentWrapper">
      <div className="appHeader">
        <p>MY APP</p>
      </div>
      <div className="appContent">
        {children}
      </div>  
      <footer className="appFooter">    
        <p>dat app tho</p>
      </footer>       
    </div>
);

Layout.defaultProps = {
  children: null,
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;