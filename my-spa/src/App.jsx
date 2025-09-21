import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Contacts from './pages/Contacts';
import About from './pages/About';
import ErrorBoundary from './components/ErrorBoundary';
import { useState, useEffect } from 'react';

export default function App() {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const saved = localStorage.getItem('theme');
        if (saved) setTheme(saved);
    }, []);

    useEffect(() => {
        document.body.className = theme;
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');

    return (
        <ErrorBoundary>
            <Header toggleTheme={toggleTheme} theme={theme} />
            <main style={{ padding: '20px' }}>
                <Routes>
                    <Route path="/" element={
                        <ErrorBoundary>
                            <Home />
                        </ErrorBoundary>
                    } />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </main>
        </ErrorBoundary>
    );
}
