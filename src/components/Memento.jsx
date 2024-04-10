import "../components-styles/RoomStyle.css";

import { MementoImageCarousel } from "./MementoImageCarousel";

export function Memento() {
    return (
        <>
            <main className="page-container">

                <section className="img-container">
                    <figure className="main-image">
                        <img className="jpg" src="./img/home/vict25278.jpg" alt="Mourning wreath brooch in jet" />
                    </figure>

                    <figcaption className="image-text-one-row">
                        <h1 className="primary-text-bold-light">Memento - Room 3</h1>
                    </figcaption>
                </section>

                <section className="paragraph-section">
                    <p>
                        In this room, we look at half mourning, the transition of widows out of mourning and the objects created to
                        memorialise the deceased.
                    </p>

                    <p>
                        The colour of this room is mauve. Mauve is the official colour of half mourning and was a welcome hint of
                        colour to the black, white and grey of mourning dress. The fashion for mauve came to its height in the
                        Victorian period due to the invention of aniline dyes in 1856. This development allowed for new variations
                        in colour, new depth of colour and better colour resilience. The synthetic base of aniline dye meant that it
                        could be quickly and easily mass-produced.
                    </p>

                    <p>
                        The dresses on display in the centre of the room reflect styles of half mourning over a thirty-year period
                        between 1860 and 1880. Given that mourning dress was made for a specific period in time, these dresses are
                        excellent examples of contemporary fashion. Women dressed for different parts of each day, morning,
                        afternoon and evening. These dresses represent what middle to upper class women would wear spending time at
                        home, walking in town or attending private dinner.
                    </p>

                    <p>
                        Mourning jewellery was a very popular way of memorialising the dead. The symbol of the urn, as seen in the
                        objects, represents immortality. It is an ancient symbol of mourning, and can be seen on tombs and
                        sculptures in cemeteries throughout England. The needlepoint sampler and framed hairwork are examples of
                        common household items created by family members to remember their loved ones. The time spent completing
                        these objects could have aided the emotional process of mourning. A widow was expected to make a gradual
                        transition out of mourning despite the speed implied by the term&apos;s throwing off her widow&apos;s weeds’. As you
                        leave this last room, so the widow leaves the last stage of mourning, and returns to the world.
                    </p>


                    <div className="border">
                        <img src="./icons/scroll-divider.svg" alt="ornate divider icon" />
                    </div>

                    <MementoImageCarousel />

                    <section className="objects">
                        <section>
                            <h3 className="secondary-text-bold-dark left-align">Objects</h3>
                        </section>

                        <h4 className="secondary-text-bold-dark left-align">Framed hairwork and photo of young girl</h4>
                        <h5 className="secondary-text-bold-dark left-align">c. 1879-1890, by the Dinham family, Victoria & Albert Museum</h5>

                        <section className="section-image-to-right">
                            <div className="object-text">
                                <p>
                                    In the Victorian period &apos;hair artists&apos; specialised in turning locks of hair into jewellery and mementos
                                    as a memorial to the dead.
                                </p>

                                <p>
                                    The girl&apos;s photograph and hair in this piece combine to make a very personal memento.
                                </p>

                                <p>
                                    Photography had a special significance for memorial objects. Valued for preserving a true likeness and
                                    capturing a fleeting moment, it encapsualted the transient nature of life.
                                </p>
                            </div>

                            <figure className="image-right">
                                <img className="jpg" src="./img/memento/framed hairwork 2.jpg"
                                    alt="Framed hairwork and photo of young girl, c. 1879-1890" />
                            </figure>
                        </section>

                        <div className="border-line">
                            <hr className="solid" />
                        </div>

                        <h4 className="secondary-text-bold-dark left-align">Mourning locket</h4>
                        <h5 className="secondary-text-bold-dark left-align">c. 1871, England, maker unknown, Victoria & Albert Museum</h5>

                        <section className="section-image-to-left">
                            <div className="object-text">
                                <p>
                                    Gold, onyx and diamonds set in silver, with glazed interior compartments containing hair.
                                </p>

                                <p>
                                    For those who could afford it, lockets were often given as gifts to family members on the death of a
                                    loved one. Queen Victoria gave lockets as gifts after the death of her mother, the Duchess of Kent;
                                    and Prince Albert.
                                </p>

                                <p>
                                    This locket was given by Monica Casswell to a family member in loving memory of her husband, Thomas
                                    Casswell.
                                </p>
                            </div>

                            <figure className="image-left">
                                <img className="jpg" src="./img/memento/locket.jpg" alt="Mourning locket, c. 1871" />
                            </figure>
                        </section>


                        <div className="border-line">
                            <hr className="solid" />
                        </div>

                        <h4 className="secondary-text-bold-dark left-align">Mourning bracelet with five lockets</h4>
                        <h5 className="secondary-text-bold-dark left-align">c. 1860, made in France, Victoria & Albert Museum</h5>

                        <section className="section-image-to-right">
                            <div className="object-text">
                                <p>
                                    This bracelet was worn for the last stage of half mourning and outside of mourning.
                                </p>

                                <p>
                                    It has five small lockets, each one opens, has a photograph or a lock of hair.
                                </p>

                                <p>
                                    The lockets are decorated with a diamond cross, an anchor and a heart which symbolise the Christian
                                    values of faith, hope and love.
                                </p>
                            </div>

                            <figure className="image-right">
                                <img className="jpg" src="./img/memento/bracelet.jpg" alt="Mourning bracelet with five lockets, c. 1860" />
                            </figure>
                        </section>


                        <div className="border-line">
                            <hr className="solid" />
                        </div>

                        <h4 className="secondary-text-bold-dark left-align">Day dress for half mourning</h4>
                        <h5 className="secondary-text-bold-dark left-align">c. 1850, maker unknown, Brighton Museum</h5>

                        <section className="section-image-to-left">
                            <div className="object-text">
                                <p>
                                    Made from purple cotton with a white floral design, pleated front and full skirt gathered at the waist.
                                </p>

                                <p>
                                    Everyday dresses for half mourning such as this one rarely survive. Day dresses are worn, mended and
                                    passed onto other members of the family as needed or to the poor.
                                </p>

                                <p>
                                    This dress has visible signs of wear and mending. It was most likely worn at home, in private or while
                                    receiving visitors.
                                </p>
                            </div>

                            <figure className="image-left">
                                <img className="jpg" src="./img/memento/day dress half front.jpg" alt="Day dress for half mourning, c. 1850" />
                            </figure>
                        </section>


                        <div className="border-line">
                            <hr className="solid" />
                        </div>

                        <h4 className="secondary-text-bold-dark left-align">Afternoon dress for half mourning</h4>
                        <h5 className="secondary-text-bold-dark left-align">c. 1870, maker unknown, Brighton Museum</h5>

                        <section className="section-image-to-right">
                            <div className="object-text">
                                <p>
                                    The dress is made of mauve moire silk with a ivory lace collar and back bustle, reflecting the popular
                                    silhouette of the 1870&apos;s.
                                </p>

                                <p>
                                    This more formal style of mourning dress is better cared for and thus more of them survive in museum
                                    collections.
                                    The fabric used to make this dress was expensive so there was more incentive to keep it in good
                                    condition.
                                </p>

                                <p>
                                    A middle to upper class lady could wear this dress out walking with a chaperone or a companion, while
                                    visiting or receiving friends or for a shopping trip into town.
                                </p>
                            </div>

                            <figure className="image-right">
                                <img className="jpg" src="./img/memento/BM mauve FSB.jpg" alt="Afternoon dress for half mourning, c. 1870" />
                            </figure>
                        </section>

                        <div className="border-line">
                            <hr className="solid" />
                        </div>

                        <h4 className="secondary-text-bold-dark left-align">Evening gown for half mourning</h4>
                        <h5 className="secondary-text-bold-dark left-align">c. 1880, maker unknown, Brighton Museum</h5>

                        <section className="section-image-to-left">
                            <div className="object-text">
                                <p>
                                    This black silk brocade dress with black and ivory lace trimming is an example of evening dress for half
                                    mourning.
                                </p>

                                <p>
                                    The fabric is woven with a design of flowers and leaves. The neckline and cuffs are trimmed with
                                    black and ivory lace and beaded with black glass or possibly jet beads.
                                </p>

                                <p>
                                    Like the mauve dress above, this formal style of mourning dress is better cared for and thus more of
                                    them survive in museum collections due to the expense of the fabric and trimmings.
                                    This dress was probably made for an upper class lady, for a special occasion, a dinner party or a trip
                                    to the opera.
                                </p>
                            </div>

                            <figure className="image-left">
                                <img className="jpg" src="./img/memento/BM black FSB.jpg" alt="Evening gown for half mourning, c. 1880" />
                            </figure>
                        </section>

                        <div className="border-line">
                            <hr className="solid" />
                        </div>

                        <h4 className="secondary-text-bold-dark left-align">Painting - &apos;Throwing off her weeds&apos;</h4>
                        <h5 className="secondary-text-bold-dark left-align">c. 1846, by Richard Redgrave, Victoria & Albert Museum</h5>

                        <section className="section-image-to-right">
                            <div className="object-text">
                                <p>
                                    A young widow is impatient to discard her mourning clothes (widow&apos;s weeds) because she plans
                                    to marry again. The seamstress on the left is showing her a mauve dress, the colour of half mourning.
                                </p>

                                <p>
                                    Originally the painting included the widow&apos;s new suitor entering through the doorway. Critics of the
                                    painting thought this vulgar so Redgrave painted the figure out but he kept a number of visual cues to
                                    suggest that the woman is soon to be married again, the bridal bonnet in the hat box in the foreground
                                    and a sprig of orange blossom (often worn or carried by brides) on the dressing table.
                                </p>
                            </div>

                            <figure className="image-right">
                                <img className="jpg" src="./img/memento/Throwing off weeds.jpg"
                                    alt="Painting - 'Throwing off her weeds', c. 1847 by Richard Redgrave" />
                            </figure>
                        </section>

                        <div className="border-line">
                            <hr className="solid" />
                        </div>

                        <h4 className="secondary-text-bold-dark left-align">Needlepoint sampler</h4>
                        <h5 className="secondary-text-bold-dark left-align">c. 1847, maker unknown, Brighton Museum</h5>

                        <section className="section-image-to-left">
                            <div className="object-text">
                                <p>
                                    This rectangular panel of coarse-weave cream linen is embroidered with a cross-stitch pattern using silk
                                    threads.
                                </p>

                                <p>
                                    It was made to memorialise a young girl and is embroidered using coloured silk threads, a strawberry
                                    border pattern,
                                    crowns, dogs, birds and the tree of life.
                                </p>

                                <p>
                                    It says:
                                    &apos;Rest in Heaven
                                    There is an hour of Peaceful Rest
                                    To mourning wanderers given
                                    There is a tear for souls distrest
                                    A balm for every wounded breast
                                    Tis found above in Heaven
                                    Ann Eliza Anderson
                                    Aged 8 1847&apos;
                                </p>
                            </div>

                            <figure className="image-left">
                                <img className="jpg" src="./img/memento/CT003104 sampler.jpg" alt="Needlepoint sampler memorialising a young girl c. 1847" />
                            </figure>
                        </section>

                        <div className="border-line">
                            <hr className="solid" />
                        </div>

                        <h4 className="secondary-text-bold-dark left-align">Leather gloves for half mourning</h4>
                        <h5 className="secondary-text-bold-dark left-align">late 19th c., Brighton Museum</h5>

                        <section className="section-image-to-right">
                            <div className="object-text">
                                <p>
                                    Women&apos;s gloves made of white leather with three lines of chain stitch embroidered in black
                                    on the top of each glove.
                                </p>

                                <p>
                                    For those who could afford it, gloves were a common gift from the deceased&apos;s family to
                                    mourners attending the funeral.
                                </p>
                            </div>

                            <figure className="image-right">
                                <img className="jpg" src="./img/memento/BM gloves.jpg" alt="Leather gloves for half mourning from the late 19th c." />
                            </figure>
                        </section>

                        <div className="border-line">
                            <hr className="solid" />
                        </div>

                        <h4 className="secondary-text-bold-dark left-align">Doll, dressed in mourning for Queen Victoria</h4>
                        <h5 className="secondary-text-bold-dark left-align">1901, made in Germany, Victoria & Albert Museum</h5>

                        <section className="section-image-to-left">
                            <div className="object-text">
                                <p>
                                    This doll belonged to Letitia Clark (born 1741). She became a lady upon her marriage to London
                                    merchant David Powell in 1761.
                                </p>

                                <p>
                                    Letitia had a hobby of dressing her dolls in the prevailing fashions of her day, in some instances
                                    copying her own clothes.
                                </p>

                                <p>
                                    The Powell family continued the tradition of dressing dolls in fashionable clothing until 1902 and gifted
                                    the collection to the V&A in 1939.
                                </p>
                            </div>

                            <figure className="image-left">
                                <img className="jpg" src="./img/memento/mourning doll.jpg" alt="Child's doll, dressed in mourning for Queen Victoria from 1901" />
                            </figure>
                        </section>

                        <div className="border">
                            <img src="./icons/scroll-divider-2.svg" alt="ornate divider icon" />
                        </div>

                        <section className="section-heading">
                            <h3 className="secondary-text-bold-dark left-align">Room 3 floor plan</h3>
                        </section>

                        <section>
                            <figure className="floor-plan-image">
                                <img className="jpg" src="./img/memento/Room 3.jpg" alt="Room 3 floor plan" />
                            </figure>

                            <div>
                                <h4 className="secondary-text-bold-dark center-align">
                                    <a href="https://drive.google.com/file/d/1Xos7vfyvyNP5FfhZyCEUVPw0zdwqE1J6/view?usp=sharing" className="footer-links" target="_blank" rel="noreferrer">
                                        See the full size image
                                    </a></h4>
                            </div>
                        </section>
                    </section>
                </section>
            </main>
        </>
    );
}