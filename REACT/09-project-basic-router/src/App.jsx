import React from 'react';
import "./App.css";
import { useState } from 'react';
import { Header } from './components/Header/Header';
import { Outlet } from 'react-router-dom';
import { Footer } from './components/Footer/Footer';

export const App = () => {
    return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
          
    </>
  )
}


