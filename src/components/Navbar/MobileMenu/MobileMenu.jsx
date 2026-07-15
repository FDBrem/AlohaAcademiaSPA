import "./MobileMenu.css";

import { IoClose } from "react-icons/io5";

import { navigation } from "../../../config/navigation";

const MobileMenu = ({ open, onClose }) => {

    return (

        <>
            <div
                className={`mobile-overlay ${open ? "show" : ""}`}
                onClick={onClose}
            />

            <aside className={`mobile-menu ${open ? "open" : ""}`}>

                <div className="mobile-header">

                    <h2>ALOHA</h2>

                    <button
                        onClick={onClose}
                        aria-label="Cerrar menú"
                    >
                        <IoClose />
                    </button>

                </div>

                <nav>

                    <ul>

                        {navigation.map((item) => (

                            <li key={item.label}>

                                <a
                                    href={item.href}
                                    onClick={onClose}
                                >
                                    {item.label}
                                </a>

                            </li>

                        ))}

                    </ul>

                </nav>

                <a
                    href="#contacto"
                    className="mobile-cta"
                    onClick={onClose}
                >
                    Clase gratuita
                </a>

            </aside>

        </>

    );

};

export default MobileMenu;