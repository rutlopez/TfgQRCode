/**
 * @fileoverview Navbar inferior (donde están las distintas secciones del home, donde cliques a una de ellas 
 * y te desplace a esa sección).
 * @version 1.0
 * @author Rut Yela
 * @copyright rut.yela.lopez@gmail.com
 */
import React from "react";
import { AiOutlineHome, AiOutlineQuestionCircle } from "react-icons/ai";
import { BsFillBookmarkStarFill } from 'react-icons/bs';
import { FaArrowRight } from 'react-icons/fa';
import { IoIdCard } from 'react-icons/io5';
import { useState } from "react";

const Navbar2 = () => {
    const [activeNav, setActiveNav] = useState("#");

    return (
        <nav className="nav2-container">
            <a
                href="#"
                onClick={() => setActiveNav("#")}
                className={activeNav === "#" ? "active" : ""}
            >
                <span className={`icon-circle ${activeNav === "#" ? "active" : ""}`}>
                    <AiOutlineHome />
                </span>
            </a>
            <a
                href="#features"
                onClick={() => setActiveNav("#features")}
                className={activeNav === "#features" ? "active" : ""}
            >
                <span className={`icon-circle ${activeNav === "#features" ? "active" : ""}`}>
                    <BsFillBookmarkStarFill />
                </span>
            </a>
            <a
                href="#stepbystep"
                onClick={() => setActiveNav("#stepbystep")}
                className={activeNav === "#stepbystep" ? "active" : ""}
            >
                <span className={`icon-circle ${activeNav === "#stepbystep" ? "active" : ""}`}>
                    <FaArrowRight />
                </span>
            </a>
            <a
                href="#examples"
                onClick={() => setActiveNav("#examples")}
                className={activeNav === "#examples" ? "active" : ""}
            >
                <span className={`icon-circle ${activeNav === "#examples" ? "active" : ""}`}>
                    <IoIdCard />
                </span>
            </a>
            <a
                href="#faq"
                onClick={() => setActiveNav("#faq")}
                className={activeNav === "#faq" ? "active" : ""}
            >
                <span className={`icon-circle ${activeNav === "#faq" ? "active" : ""}`}>
                    <AiOutlineQuestionCircle />
                </span>
            </a>
        </nav>
    );
};

export default Navbar2;
