import React from 'react';
import NavBar from '../shared_components/nav_bar/NavBar';
import DeployDapp from './deploy_dapp/DeployDapp';
import ExxUpdate from './exx_update/ExxUpdate';
import GetConnected from './get_contected/GetConnected';
import HeroSection from './hero_section/HeroSection';

const Home = () => {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <DeployDapp />
      <GetConnected />
      <ExxUpdate />
    </div>
  );
};

export default Home;
