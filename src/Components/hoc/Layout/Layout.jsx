import React from 'react';
import Header from '../../Header/Header';
import MainMenu from '../../MainMenu/MainMenu';
import SignIn from '../../ModalSignIn/SignIn';
import styles from './Layout.module.sass'
/* import {useSelector} from 'react-redux'; */
function Layout(props) {

    const [openMenu, setOpenMenu] = React.useState(false)
    const [openModal, setOpenModal] = React.useState(false)

    const IconRef = React.useRef(null);

    return(
        <>
        <div className={(openMenu === true || openModal === true) && styles.overlay}></div>
        <Header IconRef={IconRef} setOpenMenu={setOpenMenu} openMenu={openMenu} setOpenModal={setOpenModal} />
        <MainMenu openMenu={openMenu} />
        <SignIn IconRef={IconRef} openModal={openModal} setOpenModal={setOpenModal} />
        <div className="content">
            <div className="container">
                {props.children}
            </div>
        </div> 
        </> 
        
    )
}
export default Layout;