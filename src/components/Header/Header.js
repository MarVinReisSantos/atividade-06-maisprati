import React from "react";
import './Header.css'

export default({black}) =>{
    return(
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=684&h=456" alt=""/>
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src="https://i0.wp.com/amaluz.com.br/wp-content/uploads/2021/08/desenhos-legais-para-fazer-metadinha.jpg?resize=474%2C474&ssl=1" alt="Usuário"/>
                </a>
            </div>
        </header>
    );
}