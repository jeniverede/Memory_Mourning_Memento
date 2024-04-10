import "../components-styles/RoomStyle.css";

export function Exhibition() {
    return (
        <>
            <main className="page-container">
                <section className="img-container">
                    <figure className="main-image">
                        <img className="jpg" src="/img/home/vict25278.jpg"
                            alt="Mourning wreath brooch in jet" />
                    </figure>

                    <figcaption className="image-text-one-row">
                        <h1 className="primary-text-bold-light center-align">The exhibition</h1>
                    </figcaption>
                </section>

                <section className="paragraph-section">
                    <p>The Victorian period reflects its namesake, Queen Victoria, and her time on the throne of Great Britain from
                        1837 to 1901. This period in British history was a time of change and contradiction. The Industrial
                        Revolution brought wealth and opportunity; it also brought suffering and death. Victorians turned away from the
                        Enlightenment philosophy towards Romanticism, which gave emotional comfort to the bereaved. Spiritualism
                        emerged reflecting these new values, giving connection and comfort to people grieving for their lost loved ones.
                        Mourning had always been observed, but in the Victorian period it reached the height of convention,extravagance and restriction.
                    </p>

                    <p>
                        During my research, I found objects that were integral to the exhibition no longer survived in museum
                        collections. Where needed, highly skilled craftspeople have been employed, creating replicas to complete the display. The replicas are clearly labeled throughout the exhibition. The dresses and objects are grouped in three rooms by the stage of mourning they represent. This exhibition is not a chronological view of mourning.
                    </p>

                    <p>
                        The exhibition is composed of three rooms, arranged small to large. Each room is intended to give the visitor the feeling of withdrawl
                        and isolation that mourning required, as the visitor moves through the rooms the space increases, represnting their return to society.
                    </p>

                    <p>
                        As a curator, I am struck by the ability of Victorian mourning dress to capture human emotion in an object.
                        Through this exhibition, it is hoped you will leave with an experience and process of being ‘in mourning’ as it was known in the Victorian period.
                    </p>

                    <section>
                        <figcaption>
                            <h3 className="secondary-text-bold-dark left-align">
                                Exhibition floor plan</h3>
                        </figcaption>

                        <figure className="floor-plan-image">
                            <img src="./img/exhibition/exhibition-overview.jpg" className="jpg" alt="Exhibition floor plan" />
                        </figure>

                        <div>
                            <h4 className="secondary-text-bold-dark center-align">
                                <a href="https://drive.google.com/file/d/1BwumBJEnMtpPIIVPAv0UQOcDY1GiY9ko/view?usp=drive_link" className="footer-links" target="_blank" rel="noreferrer">
                                    See the full size image
                                </a></h4>
                        </div>
                    </section>
                </section>
            </main>
        </>
    );
}

