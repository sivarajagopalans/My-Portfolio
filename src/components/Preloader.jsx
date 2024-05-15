import React from 'react';
import './css/preloader.css';
import preloderIcon from  '../preloader.gif';

const Preloader = () => {
  return (
    <div className="loader-container">
        <img src={preloderIcon} alt="Loading..." width={"100px"}/>
    </div>
  );
};

export default Preloader;
