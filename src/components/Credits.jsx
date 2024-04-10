import "../components-styles/RoomStyle.css";

export function Credits() {
    return (
        <>
            <main className="page-container">

                <section className="img-container">
                    <figure className="main-image">
                        <img className="jpg" src="./img/home/vict25278.jpg" alt="Mourning wreath brooch in jet" />
                    </figure>

                    <figcaption className="image-text-one-row">
                        <h1 className="primary-text-bold-light">Credits</h1>
                    </figcaption>
                </section>

                <section className="credits" >
                    <div className="credits-text" >
                        <h2 className="secondary-text-bold-dark left-align">Mourning, Memory and Memento</h2>
                        <p>
                            Research, exhibition design, replica cap and text by:
                            Jennifer Rothrock
                        </p>

                        <p>
                            <h3 className="secondary-text-bold-dark left-align">Objects represented in the exhibition from:</h3>
                            <ul>
                                <li>Brighton Museum and Art Gallery, Brighton</li>
                                <li>London Metropolitan Archives, London</li>
                                <li>Museum of London, London</li>
                                <li>The Royal Collection, Windsor</li>
                                <li>The Fashion Museum, Bath</li>
                                <li>Victoria & Albert Museum, London</li>
                                <li>Anonymous private owners</li>
                            </ul>
                        </p>

                        <p>
                            <h3 className="secondary-text-bold-dark left-align">Images reproduced with permission of:</h3>
                            <ul>
                                <li>Hull Museums Collection, Hull</li>
                                <li>The Wellcome Collection, London</li>
                                <li>Anonymous private owners</li>
                            </ul>
                        </p>

                        <p>
                            <h3 className="secondary-text-bold-dark left-align">Special thanks to:</h3>
                            <ul>
                                <li>Amy de la Haye, London College of Fashion</li>
                                <li>Judith Clark, London College of Fashion</li>
                                <li>Martin Pel, Brighton Museum</li>
                                <li>Hilary Davidson, Museum of London</li>
                                <li>Sophie Parry, Museum of London</li>
                                <li>Deirdre Murphy, Historic Royal Palaces</li>
                                <li>Elaine Uttley, The Fashion Museum Bath</li>
                                <li>Kate Loubser</li>
                                <li>Lou Taylor</li>
                                <li>Adair Hinds</li>
                                <li>My coursemates Helen Ritchie & Jacob Moss</li>
                                <li>My family</li>
                                <li>My friends</li>
                            </ul>
                        </p>

                        <p>
                            <h3 className="secondary-text-bold-dark left-align">Additonal resources on the subject of death and mourning customs:</h3>
                            <ul className="resources">
                                <li>Mourning Dress: A Costume and Social History by Lou Taylor</li>
                                <li><i>Costumes for Births, Marriages and Deaths</i> by Phillis Cunnington and Catherine Lucas</li>
                                <li><i>Hatches, Matches and Dispatches: Christening, Bridal and Mourning Fashion</i> by Rowena Clark</li>
                                <li><i>Black: The History of a Color</i> by Micheal Pastoureau</li>
                                <li><i>Men in Black</i> by John Harvey</li>
                                <li><i>Death, Heaven and the Victorians</i> by John Morley</li>
                                <li><i>A History of Mourning</i> by Richard Davey</li>
                                <li><i>The Royal Way of Death</i> by Olivia Bland</li>
                                <li><i>The Victorian Book of the Dead</i> by Chris Woodyard</li>
                            </ul>
                        </p>

                        <div>
                            <h3 className="secondary-text-bold-dark left-align">Decorative borders</h3>
                            <p className="secondary-text-reg-dark left-align">Victorian Divider Vectors by Vecteezy</p>
                        </div>
                    </div>
                </section>

            </main>
        </>
    );
}