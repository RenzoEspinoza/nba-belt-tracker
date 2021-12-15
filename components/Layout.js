import Navbar from './Navbar'
import styles from '../styles/Layout.module.css'

const Layout = (props) => {
    return (
    <>
        <Navbar/>
        <main className={styles.main}>{props.children}</main>
    </>
    )
}

export default Layout
