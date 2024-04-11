import "../components-styles/HomeStyle.css";

export function Home() {
    return (
        <>
            <main className="page-container">
                <section className="img-container">
                    <figure className="main-image">
                        <img className="jpg" src="/img/home/vict25278.jpg"
                            alt="Mourning wreath brooch in jet" />
                    </figure>

                    <figcaption id="image-text-two-rows">
                        <h1 className="primary-text-bold-light center-align">Mourning, Memory, Memento</h1>
                        <br />
                        <h2 className="primary-text-reg-light center-align">Victorian Mourning Dress</h2>
                    </figcaption>
                </section>

                <section className="content-container">
                    <div className="section-centered-text">
                        <h4 className="primary-text-bold-dark center-align">
                            &apos;There is always death, consequently there is always mourning.&apos;
                        </h4>

                        <h4 className="primary-text-reg-dark center-align">
                            (Mourning Materials, 1888, pp.543)
                        </h4>

                        <div className="border">
                            <img src="./icons/scroll-divider.svg" alt="ornate divider icon" />
                        </div>

                        <h3 className="primary-text-bold-dark center-align">
                            Mourning, Memory and Memento is an exhibition delving into the experience of Victorian
                            mourning through women&apos;s dress.
                        </h3>
                    </div>

                    <div className="border">
                        <img src="./icons/scroll-divider-2.svg" alt="ornate divider icon" />
                    </div>

                    <section className="paragraph-section">
                        <p>
                            In 2011, I completed a Master&apos;s Degree from London College of Fashion (University of London)
                            in Fashion Curation. During the program I undertook research and wrote academic papers on the
                            topic of clothing collections and exhibitions in museums. With support from my course leaders;
                            Amy de la Haye and Judith Clark, I chose Victorian Mourning Dress in England and the widow&apos;s
                            peak cap as my thesis topic.
                        </p>
                        
                        <p>
                            For my thesis I researched the origins and established practices of mourning during the Victorian
                            period (1837-1901) through dress and attemped to find surviving widow&apos;s peak caps in museums throughout
                            England. During my research I found no widow&apos;s peak caps in collections that were available to the public.
                            This told me much about the attitude towards mourning dress in the Victorian period.
                            Mourning dress was considered a temporary requirement to fulfill societal expectations. They were not
                            treasured or kept with care.
                        </p>
                        
                        <p>
                            As fashions changed during this period, only the most conservative Victorian women wore the widow&apos;s peak
                            cap in it&apos;s original form. New styles of mourning dress were adopted by younger generations, although
                            colours considered appropriate for mourning dress remained throughout the period.
                        </p>
                        
                        <p>
                            This website is a digital representation of my master&apos;s thesis. Included are the research, the exhibition 
                            design, the objects in the exhibition and the details about those objects.
                            I have included the texts from the exhibition, images and collection information from the museums
                            they belong to. My entire thesis is not repesented here. I have arranged the pages and content in a way that 
                            I hope will be easy to read and understand.
                        </p>
                        
                        <p>
                            I hope this website will inspire others, provide information to researchers and serve as a representation
                            of a period of time in my life that was dedicated to my passion for historical dress.
                            I am so grateful to everyone who supported me during this time.
                        </p>
                    </section>
                </section>
            </main>
        </>
    );
}


























