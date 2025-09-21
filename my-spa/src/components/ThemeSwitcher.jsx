export default function ThemeSwitcher({ toggleTheme, theme }) {
    return (
        <button onClick={toggleTheme}>
            {theme === 'light' ? 'Темна тема' : 'Світла тема'}
        </button>
    );
}
