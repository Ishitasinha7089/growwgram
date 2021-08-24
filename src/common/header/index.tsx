import './header.css';

import {
  useEffect,
  useState,
} from 'react';

import lscache from 'lscache';
import { Link } from 'react-router-dom';

import moon from '../../styles/icons/moon.svg';
import sun from '../../styles/icons/sun.svg';

const Header = () => {
    const [src, setSrc] = useState(sun)
    // const lsDark = lscache.get('dark')!==null? lscache.get('dark') : false
    const [dark, isDark] = useState(lscache.get('dark'))
    useEffect(() => {
        if(lscache.get('dark')) {
            setSrc(moon)
            document.documentElement.setAttribute('data-theme', 'dark');
            return;
        }
        setSrc(sun)
        console.log("asklalx,ldl");
        document.documentElement.removeAttribute('data-theme');
    }, [])
    const changeTheme = () =>{
        if(!dark) {
            setSrc(moon)
            lscache.set('dark', true)
            isDark(true)
            document.documentElement.setAttribute('data-theme', 'dark');
            return;
        }
        setSrc(sun)
        isDark(false)
        console.log("asklalx,ldl");
        document.documentElement.removeAttribute('data-theme');
        lscache.set('dark', false)
    }
    return (
        <div className="ggHeader9305 flexbox">
            <div className="ggHeaderInner9305 flexbox">
                <Link to="/"><h1>Growwgram</h1></Link>
                <img onClick={changeTheme} src={src} alt="theme" />
            </div>
        </div>
    )
}

export default Header;
