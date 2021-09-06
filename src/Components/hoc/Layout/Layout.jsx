import React from 'react';
import Header from '../../Header/Header';
import MainMenu from '../../MainMenu/MainMenu';
import SignIn from '../../ModalSignIn/SignIn';
import ContactUs from '../../ContactUs/ContactUs';
import styles from './Layout.module.sass'
/* import {useSelector} from 'react-redux'; */
function Layout(props) {

    const [openMenu, setOpenMenu] = React.useState(false)
    const [openModal, setOpenModal] = React.useState(false)
    const [openContact, setOpenContact] = React.useState(false)

    const IconRef = React.useRef(null);
    const buttonRef = React.useRef(null);
    const contactRef = React.useRef(null);

    const overlayInitialised = () => (openMenu === true || openModal === true) ? true : false

    return(
        <>
        <div className={(overlayInitialised() === true) ? styles.overlay_on : styles.overlay_off}></div>
        <Header buttonRef={buttonRef} IconRef={IconRef} setOpenMenu={setOpenMenu} openMenu={openMenu} setOpenModal={setOpenModal} setOpenContact={setOpenContact} />
        <MainMenu contactRef={contactRef} buttonRef={buttonRef} openMenu={openMenu} setOpenMenu={setOpenMenu} setOpenContact={setOpenContact}/>
        <SignIn IconRef={IconRef} openModal={openModal} setOpenModal={setOpenModal} />
        <ContactUs contactRef={contactRef} openContact={openContact} />
        <div className="content">
            <div className="container">
                {props.children}
            </div>
        </div> 
        </> 
        
    )
}
export default Layout;