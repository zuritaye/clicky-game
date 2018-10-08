import React from "react";
import "./Nav.css";
import NavMessage from "../NavMessage";

const Nav = props => (
    <nav className="navbar">
        <ul>
            <li className="brand">
                <a href="/">Clicky</a>
            </li>
            <NavMessage score={props.score} topScore={props.topScore} />
            <li>
                Score: {props.score} | Top Score: {props.topScore}
            </li>
        </ul>
    </nav>
);

export default Nav;