import React from 'react';


import './static/footer.css'

const Footer = () => {
    return ( 
    <>
        <footer>
            <div className="container-footer">
                <section>
                    <div className="footer-info">
                        <h1>Quem somos</h1>
                        <ul>
                            <li>Politica</li>
                            <li>Privacidade</li>
                            <li>Somos ChocoBrownie S.A!</li>
                            <li>Quem são o ChocoBrownie ?</li>
                        </ul>
                    </div>
                    <div className="footer-info">
                        <h1>contato</h1>
                        <ul>
                            <li><a href="https://www.instagram.com/chocobrowniesa/">@CHOCOBROWNIESA</a></li>
                        </ul>
                    </div>
                    <div className="footer-info">
                        <h1>para desenvolvedores</h1>
                        <ul>
                            <li>Consumir API</li>
                            <li>Documentação</li>
                            <li>Nosso desenvolvedor</li>
                            <li>Fontes e Paleta de Cores</li>
                        </ul>
                    </div>
                </section>
                    <div className="logoFooter"></div>
            </div>
        </footer>
    </> 
    );
}
 
export default Footer;