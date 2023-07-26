"use client"

import React from 'react';
import Category from '@/components/Category';
import Veggie from '@/components/Veggie';
import Popular from '@/components/Popular';
import Search from '@/components/Search';
import Layout from '@/components/Layout';

function Home() {
  return (
    <div>
      <Layout />
      <Search />
      <Category />
      <Veggie />
      <Popular />
    </div>
  );
}

export default Home;
