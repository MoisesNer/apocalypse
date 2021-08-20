import React, { useState } from 'react'
import './topbar.css'
import { Link } from 'react-router-dom'
import logosmall from '../../assets/logosmall-white2.png'

export default function DropdownMenu() {


    const [click, setClick] = useState(false);
    // const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    // const showButton = () => {
    //     if (window.innerWidth <= 960) {
    //         setButton(false);
    //     } else {
    //         setButton(true);
    //     }
    // };

    // useEffect(() => {
    //     showButton();
    // }, []);

    // window.addEventListener('resize', showButton);

    return (

        <>
            <div className="drop-burguer-menu" onClick={handleClick}>
                <i className={click ? "fas fa-times close-icon" : "fas fa-bars burguer"} />
            </div>
            <div className={click ? 'dropdown' : 'dropdown-closed'}>
                <div className="dropdwon-wrapper">
                    <div className="dropdown-menu">
                        <Link to='/'>
                            <img src={logosmall} alt="paintball APOCALYPSE logo" className='dropdownLogo' onClick={closeMobileMenu}/>
                        </Link>
                        <Link className='dropdown-link' onClick={closeMobileMenu} to='/contact' >Contact</Link>
                        <Link className='dropdown-link' onClick={closeMobileMenu} to='/gallery'>Gallery</Link>
                        <Link className='dropdown-link' onClick={closeMobileMenu} to='/about' >About</Link>
                    </div>
                    {/* <div className="dropdown-btn-wrap">
                    <button className='dropdown-button'>Contact Me</button>
                </div> */}
                </div>
            </div>
        </>
    )
}
