import Link from 'next/link'
import styles from '../styles/Navbar.module.css'

function Navbar() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>NBA Title Belt</div>
            <nav>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/history">History</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar
