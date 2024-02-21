import { Link } from 'react-router-dom'
import Navbar from './UI/Navbar'
import './Header.css'

export default function Header() {
    return (
        <div className='header'>
            <h1>David Brush</h1>
            <Navbar
                links={[
                    <Link key={1} to="/">
                        About Me
                    </Link>,
                    <Link key={2} to="/portfolio">
                        Portfolio
                    </Link>,
                    <Link key={3} to="/contact">
                        Contact
                    </Link>,
                    <Link key={4} to="/resume">
                        Resume
                    </Link>
                ]}
            />
        </div>
    )
}
