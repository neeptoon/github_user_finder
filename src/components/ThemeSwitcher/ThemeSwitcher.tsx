import {ReactComponent as MoonIcon} from 'assets/icon-moon.svg';
import {ReactComponent as SunIcon} from 'assets/icon-sun.svg';
import styles from './ThemeSwitcher.module.scss';
import {useEffect, useState} from "react";

export const ThemeSwitcher = () => {
    const [isDark, setDark] = useState(false);
    const themeText = isDark ? 'light' : 'dark';
    const ThemeIcon = isDark ? SunIcon : MoonIcon;

    useEffect(() => {
        document.body.setAttribute('data-theme', isDark ? 'dark' : 'light')
    }, [isDark])

    return (
        <div className={styles.themeSwitcher} onClick={() => setDark(!isDark)}>
            <span>{themeText}</span>
            <ThemeIcon className={styles.icon}/>
        </div>
    );
}
