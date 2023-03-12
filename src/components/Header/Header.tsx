import './styles.scss';
import {ReactComponent as LogoIcon } from '../../assets/icons/logo.svg';

export const Header = () => {
    return (
        <header className="header">
            <div className='header__container container'>
                <a href="/" className='header__logo'><LogoIcon height={28}/></a>
                <nav className='header__nav'>
                    <a href="/" className='header__nav-link header__nav-link--active'>Features</a>
                    <a href="/" className='header__nav-link'>Blog</a>
                    <a href="/" className='header__nav-link'>Pricing</a>
                    <a href="/" className='header__nav-link'>Company</a>
                </nav>
                <button className='header__button'>Get a demo</button>
            </div>
        </header>
        
    )
}
