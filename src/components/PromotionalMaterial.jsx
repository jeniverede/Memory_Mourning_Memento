import "../components-styles/RoomStyle.css";

import { PromoImageCarousel } from "./PromoImageCarousel";

export function PromotionalMaterial() {

    return (
        <>
            <main className="page-container">

                <section className="img-container">
                    <figure className="main-image">
                        <img className="jpg" src="./img/home/vict25278.jpg" alt="Mourning wreath brooch in jet" />
                    </figure>

                    <figure className="image-text-one-row">
                        <h1 className="primary-text-bold-light" >Promotional Materials</h1>
                    </figure>
                </section>

                <section className="paragraph-section">

                    <section className="catalogue">
                        <h4 className="secondary-text-bold-dark left-align">Catalogue</h4>
                        <h5 className="secondary-text-bold-dark left-align">45 pages, softcover, £25.00</h5>

                        <div className="object-text">
                            <p>
                                This catalogue includes all aspects of the exhibition, including original floor plans, images, text of all
                                objects and labels, images of the interior/exterior of the exhibition and the venue Moritzbastei in Leipzig,
                                Germany.
                            </p>

                            <p>
                                This catalogue is a valuable addition to the library of anyone who enjoyed the exhibition or is interested
                                in doing research in the same area.
                            </p>
                        </div>

                        <figure className="img-center">
                            <img className="jpg" src="./img/promotional material/Catalogue cover.jpg" alt="Postcard of Queen Alexandra in mourning from 1901" />
                        </figure>
                    </section>

                    <div className="border">
                        <img src="./icons/scroll-divider.svg" alt="ornate divider icon" />
                    </div>

                    <section className="poster">
                        <h4 className="secondary-text-bold-dark left-align">Exhibition poster</h4>
                        <h5 className="secondary-text-bold-dark left-align">50cm x 70cm, £10.00</h5>

                        <div className="object-text">
                            <p>
                                Those who would like to buy a poster can order online here.
                            </p>
                        </div>

                        <figure className="img-center">
                            <img className="jpg" src="./img/promotional material/Poster.jpg" alt="Advertisement from 1900 for clothing for first mourning" />
                        </figure>


                    </section>

                    <div className="border">
                        <img src="./icons/scroll-divider.svg" alt="ornate divider icon" />
                    </div>

                    <section className="postcards">
                        <h4 className="secondary-text-bold-dark left-align">Postcards</h4>
                        <h5 className="secondary-text-bold-dark left-align">11 x 15, £1.50 each or £5.00 for the set</h5>

                        <PromoImageCarousel />

                    </section>

                    <section className="jewellery">
                        <h4 className="secondary-text-bold-dark left-align">Replica jet jewellery set</h4>
                        <h5 className="secondary-text-bold-dark left-align">made of acrylic plastic, gift boxed, £80.00</h5>

                        <div className="object-text">
                            <p>
                                Due to the cost and fragility of real jet jewellery, this set is made from high quality acrylic
                                plastic.
                            </p>

                            <p>
                                The design is reproduced from the original item shown in the exhibition and is beautifully
                                decorated with female cameo medallions symbolising Night and surrounded by roses and leaves.
                            </p>

                            <p>
                                This set comes in a black velvet gift box with a custom made interior structure to protect each item.
                            </p>

                            <p>
                                Jet is the fossilised remains of driftwood found in Whitby, Yorkshire, England.
                                Jet became very popular in the Victorian period and was used exclusively for
                                mourning jewellery.
                            </p>
                        </div>

                        <figure className="img-center">
                            <img className="jpg" src="./img/mourning/jet jewellery set.jpg" alt="Replica set of jet jewellery, necklace, bracelet, earrings and brooch" />
                        </figure>

                    </section>

                    <div className="border">
                        <img src="./icons/scroll-divider.svg" alt="ornate divider icon" />
                    </div>

                    <section className="exhibition-leaflet">
                        <h3 className="secondary-text-bold-dark left-align">Exhibition leaflet - free to visitors at exhibition entrance</h3>
                        <h4 className="secondary-text-bold-dark left-align">Overview of the history of mourning by Jennifer Rothrock</h4>

                        <section className="paragraph-section">
                            <div className="object-text">
                                <p>
                                    Mourning rituals have their origin in the period of Ancient Egypt and Rome, both cultures believed
                                    fundamentally that death was a transition to another world. Mourning dress has its origin in Roman
                                    times, when magistrates began wearing dark togas to state funerals.
                                </p>

                                <p>
                                    During the middle ages, as Kings and Queens became more powerful; state funerals became more
                                    dramatic and more elaborate. Sumptuary laws were enforced so that mourning dress became a visual
                                    representation of class and wealth. These laws related to colour and type of fabric, and it is these
                                    laws from which we have long associated purple, velvet and fur with royalty.
                                </p>

                                <p>
                                    In the sixteenth and seventeenth centuries, mourning dress began to be influenced by fashion trends
                                    and two distinct images of mourning dress were created. The image of elaborate, Catholic mourning <strong>(Plate 1) </strong>was contrasted by another image of sober, mourning influenced by the Protestant
                                    Reformation <strong>(Figure 1)</strong>.
                                </p>
                            </div>
                        </section>

                        <figure className="img-center">
                            <img className="jpg" src="./img/promotional material/Image MdM PW.jpg"
                                alt="Marie de Medici, 1617 and a Protestant widow, 1635" />
                        </figure>

                        <figcaption>
                            <p className="secondary-text-reg-dark center-align">
                                <strong>(Plate 1 - left)</strong> &apos;Marie des Medici, Queen of France&apos;. (1617) by Frans Pourbus the Younger. Museo
                                del Prado, Spain.
                            </p>
                        </figcaption>

                        <figcaption>
                            <p className="secondary-text-reg-dark center-align">
                                <strong>(Figure 1 - right)</strong> Lady Hervey, Penelope d&apos;Arcy (1635) painter unknown
                                (Taylor, 1983:95)
                            </p>
                        </figcaption>

                        <p>
                            In this period, mourning dress was not only an outward sign of your status and wealth, but also your
                            religious conviction.
                        </p>

                        <p>
                            By 1800, mourning dress had become so influenced by fashion that it was difficult to tell the
                            difference between a widow in mourning and fashionable court or ball gown. The influence of Queen
                            Marie Antoinette on fashion and the new availability of fine woven cottons from India changed the
                            look of women&apos;s dress completely; into a light and natural body silhouette even for mourning dress <strong>(Plate 2)</strong>.
                        </p>

                        <figure className="img-center">
                            <img className="jpg" src="./img/promotional material/woman and child in mourning.jpg"
                                alt="Image of Regency mourning dress c. 1811-1820" />
                        </figure>

                        <figcaption>
                            <p className="secondary-text-reg-dark center-align">
                                <strong>(Plate 2)</strong> Regency mourning customs (c. 1811-1820) artist unknown
                            </p>
                        </figcaption>
                        <p>
                            As the Victorian period began with Queen Victoria&apos;s coronation in 1837, mourning was an integral
                            part of established society and lower class families would often sacrifice their health and well
                            being in order to give the deceased a funeral more respectable then their station in life. Upper
                            class women began embellishing garments heavily once outside of the first stage of mourning, which
                            upheld the ability of dress to signify status, class and gentility.
                        </p>

                        <p>
                            The end of elaborate mourning rituals came with World War I. The scale of death and loss experience
                            during the early 20th century and the increasing prominence of women in the workplace rendered
                            Victorian mourning unrealistic and obsolete.
                        </p>

                        <h3 className="secondary-text-bold-dark left-align">References</h3>

                        <p>
                            Pourbous, F. (1617) Marie des Medici, Queen of France.
                            <br />[Online Image] Available at:
                            http://www.artchive.com/web_gallery/F/Frans,-the-Younger-Pourbus/Marie-des-Medici,-Queen-of-France-1617.html
                            <br />
                            [Accessed 4 December 2010]
                        </p >

                        <p>
                            Taylor, L. (1983)
                            Mourning Dress: A Costume and Social History, London: Allen & Unwin. ;
                            [Accessed 4 December 2010]
                        </p>

                        <p>
                            Regency Mourning customs. (2010);
                            <br />[Online Image] Available at: ;
                            http://donnahatch.blogspot.com/2010/04<br />/regency-mourning-customs.html
                            <br />[Accessed 4 December 2010]
                        </p >

                        <div>
                            <h4 className="secondary-text-bold-dark center-align">
                                <a href="https://drive.google.com/file/d/1BEGQClUdaEYKlln9ReIlk4ArHR4K_-kL/view?usp=sharing" className="footer-links" target="_blank" rel="noreferrer">
                                    Download the leaflet here
                                </a></h4>
                        </div>

                    </section>
                </section>
            </main>
        </>
    );
}