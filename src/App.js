import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import AboutPage from './components/About';
import PaintingsPage from './components/Paintings';
import ContactPage from './components/Contact';
import ExperiencePage from './components/Experiences';
import Footer from './components/Footer';
import Project1 from './components/Project1';
import Project2 from './components/Project2';
import Project3 from './components/Project3';
import Project4 from './components/Project4';
import Project5 from './components/Project5';
import Project6 from './components/Project6';
import Project7 from './components/Project7';
import Project8 from './components/Project8';
import Project9 from './components/Project9';
import styled from 'styled-components';

// Container that ensures the footer stays at the bottom
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

// Content wrapper that pushes the footer down
const ContentWrap = styled.div`
  flex: 1;
`;

function App() {
  return (
    <Router>
      <PageContainer>
        <Navbar />
        <ContentWrap>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/paintings" element={<PaintingsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/project1" element={<Project1 />} />
            <Route path="/project2" element={<Project2 />} />
            <Route path="/project3" element={<Project3 />} />
            <Route path="/project4" element={<Project4 />} />
            <Route path="/project5" element={<Project5 />} />
            <Route path="/project6" element={<Project6 />} />
            <Route path="/project7" element={<Project7 />} />
            <Route path="/project8" element={<Project8 />} />
            <Route path="/project9" element={<Project9 />} />
          </Routes>
        </ContentWrap>
        <Footer />
      </PageContainer>
    </Router>
  );
}

export default App;
