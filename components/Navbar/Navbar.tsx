import React from "react";
import Link from 'next/link'
import { Navlinks } from "../Navlinks/Navlinks";

export const Navbar = (): JSX.Element => {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" href="/">Frontol Service Addon</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <header className="collapse navbar-collapse" id="navbarSupportedContent">
                    <Navlinks/>
                </header>
            </div>
        </nav>
    );
}
