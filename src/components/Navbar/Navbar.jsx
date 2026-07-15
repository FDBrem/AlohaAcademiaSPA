import "./Navbar.css";

import { useEffect, useState } from "react";

import { HiOutlineMenuAlt3 } from "react-icons/hi";

import logo from "../../assets/logos/logoTransparente.png";

import { navigation } from "../../config/navigation";

import MobileMenu from "./MobileMenu/MobileMenu";

const Navbar = () => {

    const [scrolled, setScrolled] = useState(false);

    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {

        const handleScroll = () => {

            setScrolled(window.scrollY > 40);

        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);

    }, []);

    return (

        <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>

            <div className="container navbar-container">

                <a href="#inicio" className="brand">

                    <img
                        src={logo}
                        alt="Aloha Dojo"
                        className="brand-logo"
                    />

                    <div className="brand-text">

                        <span>ALOHA</span>

                        <small>JIU JITSU</small>

                    </div>

                </a>

                <nav className="desktop-nav">

                    <ul>

                        {navigation.map((item) => (

                            <li key={item.label}>

                                <a href={item.href}>

                                    {item.label}

                                </a>

                            </li>

                        ))}

                    </ul>

                </nav>

                <a
                    href="#contacto"
                    className="navbar-button"
                >

                    Clase gratuita

                </a>

                <button
                    className="menu-button"
                    onClick={() => setMenuOpen(true)}
                    aria-label="Abrir menú"
                >

                    <HiOutlineMenuAlt3 />

                </button>

            </div>

        </header>
    );
    
    <MobileMenu
      open={menuOpen}
      onClose={() => setMenuOpen(false)}
    />
};

export default Navbar;