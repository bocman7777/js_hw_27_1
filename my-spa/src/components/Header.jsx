import { Link } from 'react-router-dom';
import ThemeSwitcher from './ThemeSwitcher';

export default function Header({ toggleTheme, theme }) {
    return (
        <header style={{
            display: 'flex', justifyContent: 'space-between',
            alignItems: 'center', padding: '10px 20px',
            backgroundColor: theme === 'light' ? '#eee' : '#333',
            color: theme === 'light' ? '#000' : '#fff'
        }}>
            <nav>
                <Link to="/" style={{ margin: '0 10px' }}>Головна</Link>
                <Link to="/contacts" style={{ margin: '0 10px' }}>Контакти</Link>
                <Link to="/about" style={{ margin: '0 10px' }}>Про мене</Link>
            </nav>
            <ThemeSwitcher toggleTheme={toggleTheme} theme={theme} />
        </header>
    );
}
