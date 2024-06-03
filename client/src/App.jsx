import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import LatestProjectAssignments from './components/LatestProjectAssignments';
import './components/styles/styles.css';

const App = () => (
  <div>
    <Header />
    <main>
      <LatestProjectAssignments />
    </main>
    <Footer />
  </div>
);

export default App;
