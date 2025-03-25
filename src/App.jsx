
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
                    <Route path="/festy" element={<MainLandingPage />} />
                    <Route path="/festy/performers" element={<PerformersPage />} />
                    <Route path="/festy/performers/:id" element={<PerformerDetails performers={performers} />} />
                    <Route path="/festy/tickets" element={<Tickets />} />
                    <Route path="/festy/programs" element={<ProgramsContainer />} />
                    <Route path="/festy/aboutus" element={<AboutUsPage />} />
                    <Route path="/festy/cats" element={<CatsPage />} />
                    <Route path="/festy/login" element={<LoginForm />} />
                    <Route path="/festy/register" element={<RegisterForm />} /> 
                    <Route path="/festy/account-details" element={<AccountDetails />} /> 
                </Routes>
            </Router>
        </AuthProvider>
    );
}

export default App;
