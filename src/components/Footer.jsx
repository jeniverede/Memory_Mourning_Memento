import "../components-styles/FooterStyle.css";

export function Footer() {
    return (
        <>
            <footer>
                <div className="border">
                    <img src="./icons/scroll-divider.svg" alt="ornate divider icon" />
                </div>

                <div id="contact">
                    <h4 className="secondary-text-bold-dark">Credits: website design and build by<br />Jennifer Rothrock</h4>
                    
                    <h4 className="secondary-text-bold-dark">jennifer.r.rothrock@gmail.com</h4>
                    
                    <h4 className="secondary-text-bold-dark center-align"><a href="https://rothrock-portfolio.netlify.app/" className="footer-links" target="_blank" rel="noreferrer">Visit my Portfolio</a></h4>
                </div>
            </footer>
        </>
    );
}