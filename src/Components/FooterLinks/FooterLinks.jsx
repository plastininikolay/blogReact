import React from "react"
import styles from './FooterLinks.module.sass'
import facebook from '../../assets/icons/facebook.svg'
import instagram from '../../assets/icons/instagram.svg'
import linkedIn from '../../assets/icons/linkedIn.svg'
import twitter from '../../assets/icons/twitter.svg'
function FooterLinks() {
    return (
        <div className={styles.links}>
        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className={styles.link}>
            <img src={facebook} alt="facebook icon"/>
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className={styles.link}>
            <img src={instagram} alt="instagram icon"/>
        </a>
        <a href="https://ru.linkedin.com/" target="_blank" rel="noreferrer" className={styles.link}>
            <img src={linkedIn} alt="linkedIn icon"/>
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noreferrer" className={styles.link}>
            <img src={twitter} alt="twitter icon"/>
        </a>
        </div>
    )
   
}
export default FooterLinks;