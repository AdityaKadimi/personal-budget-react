import React from 'react';

import {
    Link
  } from "react-router-dom";

function Menu() {
  return (
    <nav>
    <ul>
        {/* This is Link SEO change (nofollow) */}
        <li><Link rel="nofollow" to="/" rel="canonical">Home</Link></li>
        {/* This is Link SEO change (canonical) */}
        <li><Link rel="nofollow" to="/about" rel="canonical">About</Link></li>
        <li><Link rel="nofollow" to="/login" rel="canonical">Login</Link></li>
    </ul>
</nav>
  );
}

export default Menu;
