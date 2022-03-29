import React from 'react';

function Sudo(props) {
    return (
        <>
            <h1>Sudocode voor Aym App</h1>
            <p>Sudo voor het development team (aka ikzelf)</p>
            <p>elke stap:</p>
            <ul>
                <li>sudo schrijven per stap</li>
                <li>Maak documenten schoon</li>
                <li>doe basis opzet eerst</li>
                <li>werk installatie manual bij</li>
                <li>per stap een commit</li>
            </ul>

            <article>
                <h2>Projectopzet</h2>
                <p>Basis mappen aanmaken</p>
                <ul>
                    <li>pages
                        <ul>
                            <li>Home</li>
                            <li>Login</li>
                            <li>About</li>
                            <li>Manual</li>
                            <li>Contact</li>
                            <li>Sudo</li>
                        </ul>
                    </li>
                    <li>components
                        <ul>
                            <li>Header</li>
                            <li>Footer</li>
                            <li>Button</li>
                        </ul>
                    </li>
                    <li>helpers</li>
                </ul>
                <p>Browserrouter install, add Router to index.js, Switch and Route in app.js, useParam in Subreddit, navLinks in header</p>
                <p>Pages indelen en Navlinks in Header zetten.</p>
            </article>
        </>
    );
}

export default Sudo;