import './styles.scss';

export const Header = () => {
    return (
        <div className='header'>
            <a href="/">logo</a>
            <nav>
                <a href="/">Features</a>
                <a href="/">Blog</a>
                <a href="/">Pricing</a>
                <a href="/">Company</a>
            </nav>
            <button>Get a demo</button>
        </div>
    )
}
