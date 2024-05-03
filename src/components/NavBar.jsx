import { Link } from 'react-router-dom'


const NavBar = () => {
    return (
        <header className='header-nav'>
            <nav className='nav-bar'>
                <ul className='nav-list'>
                    <Link style={{ color: '#fff' }} to={'/'}>Catálogo</Link>
                    <Link style={{ color: '#fff' }} to={'/cart'}>Carrinho </Link>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar