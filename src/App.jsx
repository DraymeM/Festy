
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './assets/Header';
import PerformerDetails from './assets/PerformerDetails';
import LoginForm from './assets/LoginForm';
import AccountDetails from './assets/Account'
import RegisterForm from './assets/RegisterForm'; 
import MainLandingPage from './MainLandingPage';
import TicketContainer from './TicketContainer'; 
import PerformersPage from './PerformersPage';
import performers from './performersData'; 
import AboutUsPage from './AboutUsPage'; 
import ProgramsContainer from './assets/ProgramsContainer';
import CatsPage from './Cats';
import { AuthProvider } from './AuthContext';

function App() {
    const Tickets = () => <TicketContainer />;

    return (
        <AuthProvider>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<MainLandingPage />} />
                    <Route path="/performers" element={<PerformersPage />} />
                    <Route path="/performers/:id" element={<PerformerDetails performers={performers} />} />
                    <Route path="/tickets" element={<Tickets />} />
                    <Route path="/programs" element={<ProgramsContainer />} />
                    <Route path="/aboutus" element={<AboutUsPage />} />
                    <Route path="/cats" element={<CatsPage />} />
                    <Route path="/login" element={<LoginForm />} />
                    <Route path="/register" element={<RegisterForm />} /> 
                    <Route path="/account-details" element={<AccountDetails />} /> 
                </Routes>
            </Router>
        </AuthProvider>
    );
}

export default App;
