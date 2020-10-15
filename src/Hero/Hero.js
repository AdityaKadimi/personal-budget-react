import React from 'react';

function Hero() {
  return (
      
    <header>
        <h1>Aditya kadimi Personal Budget</h1>
        <h2>A personal-budget management app</h2>
        {/* This is a A11y change (alt) */}
        <img src="com.jpg" alt="Computer Image" width="200" height="200" className="pic"></img>
    </header>
    
  );
}

export default Hero;
