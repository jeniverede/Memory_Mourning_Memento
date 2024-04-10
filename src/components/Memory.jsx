import "../components-styles/RoomStyle.css";

import { MemoryImageCarousel } from "./MemoryImageCarousel";

export function Memory() {
    return (
        <>
            <main className="page-container">

                <section className="img-container">
                    <figure className="main-image">
                        <img className="jpg" src="./img/home/vict25278.jpg" alt="Mourning wreath brooch in jet" />
                    </figure>

                    <figcaption className="image-text-one-row">
                        <h1 className="primary-text-bold-light">Memory - Room 2</h1>
                    </figcaption>
                </section>

                <section className="paragraph-section">
                    <p>
                        In this room, we look at how mourning and matrimony were joined in Victorian England. When death surrounded
                        a wedding, whether the death of a parent or of a prior spouse, mourning took precedence on the wedding day.
                    </p>

                    <p>
                        The colour of this room is grey. As evidenced by the wedding gowns in the centre of the room, colour was
                        allowed into mourning dress, but with the addition of grey to mute the joy of pure colour.
                    </p>

                    <p>
                        In the Victorian period, society had different expectations of widows and widowers regarding second
                        marriages. Widows were expected to remain in mourning for two and half years. Re-marriage before that time
                        or too quickly after it ended was considered scandalous. Widowers could remain in mourning for two years,
                        but they could also leave it off any time they felt ready. If there were small children left behind by the
                        death of a wife, men were expected to re-marry as soon as possible. It was not considered proper for a
                        father to raise children without a wife. If a man did re-marry, he was allowed to leave off mourning for one
                        day and take it up again the next. On her wedding day, the bride was expected to observe the same level of
                        mourning as her new husband, as a sign of respect to her predecessor.
                    </p>

                    <p>
                        Queen Victoria is essential to the narrative of this exhibition, and became the singular image of a
                        Victorian widow when Prince Albert died in 1861. Victoria remained in first mourning until her death in
                        1901. Prince Albert was integral to Queen Victoria’s reign. His ideas and reforms, beginning with The Great
                        Exhibition of 1851, had begun to improve the lives of the English people. Victoria mourned not just for
                        herself and their family, but also for England’s loss.
                    </p>


                    <div className="border">
                        <img src="./icons/scroll-divider.svg" alt="ornate divider icon" />
                    </div>

                    <MemoryImageCarousel />

                    <section className="objects">
                        <section>
                            <h2 className="secondary-text-bold-dark left-align">
                                Objects</h2>
                        </section>

                        <h4 className="secondary-text-bold-dark left-align">Mourning ring, of Prince Albert for Queen Victoria</h4>
                        <h5 className="secondary-text-bold-dark left-align">1861, maker unknown, Royal Collection</h5>

                        <section className="section-image-to-right">
                            <div className="object-text">
                                <p>
                                    This mourning ring was made for Queen Victoria after Prince Albert&apos;s
                                    death. The initials &apos;V&apos; and &apos;A&apos; are set in white enamel on either side of
                                    Albert&apos;s photo. Jewellery was a popular way of memorialising a loved one,
                                    with rings symbolising eternity.
                                </p>
                            </div>

                            <figure className="image-right">
                                <img className="jpg" src="./img/memory/Albert ring.jpg" alt="Mourning ring of Prince Albert for Queen Victoria from 1861" />
                            </figure>
                        </section>

                        <div className="border-line">
                            <hr className="solid" />
                        </div>

                        <h4 className="secondary-text-bold-dark left-align">Photograph - daughters of Prince Albert in mourning</h4>
                        <h5 className="secondary-text-bold-dark left-align">1862, photographer unknown, Royal Collection</h5>

                        <section className="section-image-to-left">
                            <div className="object-text">
                                <p>
                                    This photograph shows Prince Albert&apos;s five daughters in mourning for him.
                                    The youngest, Princess Beatrice in the center, was four years old when her
                                    father died in December of 1861.
                                </p>

                                <p>
                                    Children went into mourning dress for family members and members
                                    of the Royal Court, the same as adults. Children&apos;s mourning dress followed the
                                    same rules as adult dress, Mourning for a parent lasted one year.
                                </p>
                            </div>

                            <figure className="image-left">
                                <img className="jpg" src="./img/memory/daughter of Albert mourning.jpg"
                                    alt="Photograph of daughters of Prince Albert in mourning from 1862" />
                            </figure>
                        </section>

                        <div className="border-line">
                            <hr className="solid" />
                        </div>

                        <h4 className="secondary-text-bold-dark left-align">Mourning card for H.R.H. Prince Albert</h4>
                        <h5 className="secondary-text-bold-dark left-align">1861, by J.T. Wood & Co., Victoria & Albert Museum</h5>

                        <section className="section-image-to-right">
                            <div className="object-text">
                                <p>
                                    The black border on this card is a common feature of mourning stationary.
                                    The design of this card reflects Queen Victoria&apos;s feelings fo her beloved
                                    husband, Prince Albert.
                                </p>

                                <p>
                                    Ivy symbolises fidelity and mourning, with the dog-rose symbolising love
                                    and it&apos;s two sides of happiness and sorrow. The angels are guardians of
                                    the dead and symbolise spirituality.
                                </p>
                            </div>

                            <figure className="image-right">
                                <img className="jpg" src="./img/memory/Albert card.jpg" alt="Mourning card for H.R.H. Prince Albert from 1861" />
                            </figure>
                        </section>

                        <div className="border-line">
                            <hr className="solid" />
                        </div>

                        <h4 className="secondary-text-bold-dark left-align">Wedding photograph, Queen Victoria, the Prince of Wales and Princess Alexandra</h4>
                        <h5 className="secondary-text-bold-dark left-align">c. 1863, photographer unknown, Royal Collection</h5>

                        <section className="section-image-to-left">
                            <div className="object-text">
                                <p>
                                    This photograph was taken for the wedding of Edward, Prince of Wales and heir to the throne; to
                                    Princess Alexandra of Denmark.
                                </p>

                                <p>
                                    The couple married two years after the death of Prince Albert.
                                    Despite the official period of mourning being over, Queen Victoria is still wearing full mourning
                                    and sits facing a bust of Prince Albert.
                                </p>
                            </div>

                            <figure className="image-left">
                                <img className="jpg" src="./img/memory/QV with Prince of Wales.jpg"
                                    alt="Wedding photograph of Queen Victoria, the Prince of Wales and Princess Alexandra, c. 1863" />
                            </figure>
                        </section>

                        <div className="border-line">
                            <hr className="solid" />
                        </div>

                        <h4 className="secondary-text-bold-dark left-align">Mourning fan belonging to Queen Victoria</h4>
                        <h5 className="secondary-text-bold-dark left-align">1890, maker unknown, Royal Collection</h5>

                        <section className="section-image-to-right">
                            <div className="object-text">
                                <p>
                                    According to the documentation, this fan belonged to Queen Victora and was used up till
                                    her death in 1901.
                                </p>

                                <p>
                                    This fan would have been considered too elaborate for first mourning but would have been
                                    acceptable for half mourning.
                                </p>
                            </div>

                            <figure className="image-right">
                                <img className="jpg" src="./img/memory/QV fan.jpg" alt="Mourning fan belonging to Queen Victoria from 1890" />
                            </figure>
                        </section>

                        <div className="border-line">
                            <hr className="solid" />
                        </div>

                        <h4 className="secondary-text-bold-dark left-align">Photograph - bridal couple in mourning dress</h4>
                        <h5 className="secondary-text-bold-dark left-align">1890, photographer unknown, private owner</h5>

                        <section className="section-image-to-left">
                            <div className="object-text">
                                <p>
                                    This bridal photograph shows a couple married in mourning dress. It is most likely that one of them
                                    was mourning a family member, possibly a parent. Spouses were expected to observe the same level of
                                    mourning as the family they were marrying into.
                                </p>
                            </div>

                            <figure className="image-left">
                                <img className="jpg" src="./img/memory/MJCC wdding pg103 2.jpg" alt="Photograph of a bridal couple in mourning dress from 1890" />
                            </figure>
                        </section>

                        <div className="border-line">
                            <hr className="solid" />
                        </div>

                        <h4 className="secondary-text-bold-dark left-align">Wedding outfit, bodice and skirt</h4>
                        <h5 className="secondary-text-bold-dark left-align">c. 1877, Brighton Museum</h5>

                        <section className="section-image-to-right">
                            <div className="object-text">
                                <p>
                                    This silk dress was worn by Marie Barberry on the day of her wedding, 10 October 1877;
                                    at West Hoathly in Sussex.
                                </p>

                                <p>
                                    The white lace collar, mauve trimmings and blue-grey colour are consistent for mourning and
                                    wedding dresses.
                                </p>
                            </div>

                            <figure className="image-right">
                                <img className="jpg" src="./img/memory/BM wedding front.jpg" alt="Wedding outfit, bodice and skirt, c. 1877" />
                            </figure>
                        </section>

                        <div className="border-line">
                            <hr className="solid" />
                        </div>

                        <h4 className="secondary-text-bold-dark left-align">Photograph - bridal couple in mourning dress</h4>
                        <h5 className="secondary-text-bold-dark left-align">1890, photographer unknown, private owner</h5>

                        <section className="section-image-to-left">
                            <div className="object-text">
                                <p>
                                    This bridal photograph shows a couple married in mourning dress. It is most likely that one of them
                                    was mourning a family member, possibly a parent. Spouses were expected to observe the same level of
                                    mourning as the family they were marrying into.
                                </p>
                            </div>

                            <figure className="image-left">
                                <img className="jpg" src="./img/memory/MJCC wedding pg102.jpg" alt="Photograph of a bridal couple in mourning dress from 1890" />
                            </figure>
                        </section>

                        <div className="border-line">
                            <hr className="solid" />
                        </div>

                        <h4 className="secondary-text-bold-dark left-align">Wedding outfit, bodice and skirt</h4>
                        <h5 className="secondary-text-bold-dark left-align">c. 1872, Fashion Museum, Bath</h5>

                        <section className="section-image-to-right">
                            <div className="object-text">
                                <p>
                                    This grey-green silk bodice and skirt would have been worn by a bride in mourning.
                                    The bride may have been mourning the loss of a parent or other family member, or she
                                    may have been a new bride to a widower.
                                </p>

                                <p>
                                    New brides were expected to take up mourning to the same extent as the husband for his
                                    previous wife, out of respect to her predecessor; even on her wedding day.
                                </p>
                            </div>

                            <figure className="image-right">
                                <img className="jpg" src="./img/memory/FBB B & S.jpg" alt="Wedding outfit, bodice and skirt c. 1872" />
                            </figure>
                        </section>

                        <div className="border-line">
                            <hr className="solid" />
                        </div>

                        <h4 className="secondary-text-bold-dark left-align">Painting - &apos;The Wedding Dress&apos; by Fred Elwell</h4>
                        <h5 className="secondary-text-bold-dark left-align">c. 1911, Hull Museum Collection</h5>

                        <section className="section-image-to-left">
                            <div className="object-text">
                                <p>
                                    This painting dates to after Queen Victoria&apos;s death in 1901, but it reflects Victorian sentiment.
                                    Death was often put in a domestic setting during the Victorian period. The wedding dress symbolises
                                    the deceased.
                                </p>

                                <p>
                                    The painter portrays the mourner turned inward with grief, making the scene emotional
                                    and private. The woman may be in mourning for her husband or the man she intended to marry.
                                </p>
                            </div>

                            <figure className="image-left">
                                <img className="jpg" src="./img/memory/The Wedding dress.jpg" alt="Painting - 'The Wedding Dress' by Fred Elwell, c. 1911" />
                            </figure>
                        </section>

                        <div className="border">
                            <img src="./icons/scroll-divider-2.svg" alt="ornate divider icon" />
                        </div>

                        <section className="section-heading">
                            <h3 className="secondary-text-bold-dark left-align">Room 2 floor plan</h3>
                        </section>

                        <section>
                            <figure className="floor-plan-image">
                                <img className="jpg" src="./img/memory/Room 2.jpg" alt="image-room-2" />
                            </figure>
                        </section>

                        <div>
                            <h4 className="secondary-text-bold-dark center-align">
                                <a href="https://drive.google.com/file/d/1GA_3KNdjEeTU0-GX9t6B_u6a4FN3iKid/view?usp=sharing" className="footer-links" target="_blank" rel="noreferrer">
                                    See the full size image
                                </a></h4>
                        </div>
                    </section>
                </section>
            </main>
        </>
    );
}