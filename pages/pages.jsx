import React from 'react';
import Home from './home';
import Cuisine from './cuisine/[type]/index';
import Searched from './searched/[name]/index';
import Recipes from './recipes/[id]/index';
import { Routes, Route } from 'react-router-dom';

function Pages() {
  return (

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine/:type" element={<Cuisine />} />
        <Route path="/searched/:search" element={<Searched />} />
        <Route path="/recipes/:id" element={<Recipes />} />
      </Routes>

  );
}

export default Pages;
