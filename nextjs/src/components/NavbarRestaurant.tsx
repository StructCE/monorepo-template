import Image from "next/image"
import styles from "../styles/navbar.module.css"
import login from '../../../../public/images/login-cardapio.png'
import logo from '../../../../public/images/logo_sushispace.png'

export default function Navbar(){
    return(
        <nav className={styles.navbar}>
            <ul className={styles.ul_l}>
                <li className={styles.li}>Cardápio</li>
                <li className={styles.li}>Unidades</li>
            </ul>
            <a className={styles.img_logo}><Image src = {logo} height={110} alt =''></Image></a>
            <ul className={styles.ul_r}>
                <li className={styles.li}>Contato</li>
                <li className={styles.li}>Carrinho</li>
                <a className={styles.img_login}><Image src = {login} height={35} alt =''></Image></a>
            </ul>
            
        </nav>
        
    )
}
