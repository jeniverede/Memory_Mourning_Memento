import { useState, useEffect } from 'react';

import "../components-styles/ImageCarouselStyle.css";

export function MementoImageCarousel() {
    const [slideIndex, setSlideIndex] = useState(1);
    const [currentIndex, setCurrentIndex] = useState(1); // New state for the current slide index

    useEffect(() => {
        function showSlides(n) {
            let i;
            let slides = document.getElementsByClassName("mySlides");
            let dots = document.getElementsByClassName("demo");
            let captionText = document.getElementById("caption");
            if (n > slides.length) { setCurrentIndex(1); }
            if (n < 1) { setCurrentIndex(slides.length); }
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[currentIndex - 1].style.display = "block"; // Use currentIndex instead of slideIndex
            dots[currentIndex - 1].className += " active";
            captionText.innerHTML = dots[currentIndex - 1].alt;
        }

        showSlides(currentIndex); // Use currentIndex instead of slideIndex
    }, [currentIndex]); // Include currentIndex in the dependency array

    function plusSlides(n) {
        setSlideIndex(prevIndex => prevIndex + n);
    }

    function currentSlide(n) {
        setCurrentIndex(n);
    }

    return (
        <>
            <div className="container">
                {/* Full-width images with number text */}
                <div className="mySlides">
                    <div className="number-text secondary-text-bold-dark">1 / 6</div>
                    <img src="/img/memento/framed hairwork 2.jpg" style={{ width: '100%' }} />
                </div>

                <div className="mySlides">
                    <div className="number-text secondary-text-bold-dark">2 / 6</div>
                    <img src="/img/memento/day dress half front.jpg" style={{ width: '100%' }} />
                </div>

                <div className="mySlides">
                    <div className="number-text secondary-text-bold-dark">3 / 6</div>
                    <img src="/img/memento/mourning doll.jpg" style={{ width: '100%' }} />
                </div>

                <div className="mySlides">
                    <div className="number-text secondary-text-bold-dark">4 / 6</div>
                    <img src="/img/memento/CT003104 sampler.jpg" style={{ width: '100%' }} />
                </div>

                <div className="mySlides">
                    <div className="number-text secondary-text-bold-dark">5 / 6</div>
                    <img src="/img/memento/Throwing off weeds.jpg" style={{ width: '100%' }} />
                </div>

                <div className="mySlides">
                    <div className="number-text secondary-text-bold-dark">6 / 6</div>
                    <img src="/img/memento/BM mauve FSB.jpg" style={{ width: '100%' }} />
                </div>
                {/* Add for more slides */}

                {/* enables user to click on thumbnails to change image */}
                <a className="prev" onClick={() => { console.log("Previous button clicked"); plusSlides(-1); }}></a>
                <a className="next" onClick={() => { console.log("Next button clicked"); plusSlides(1); }}></a>


                <div className="caption-container">
                    <h5 className="secondary-text-reg-dark" id="caption"></h5>
                </div>

                {/* Thumbnail images */}
                <div className="thumbnail-container">
                    <div className="row">
                        <img className="demo cursor" src="/img/memento/framed hairwork 2.jpg" style={{ height: '4.5rem' }} onClick={() => currentSlide(1)} alt="Framed hairwork and photo of young girl, c. 1879-1890, Victoria & Albert Museum" />

                        <img className="demo cursor" src="/img/memento/day dress half front.jpg" style={{ height: '4.5rem' }} onClick={() => currentSlide(2)} alt="Day dress for half mourning, c. 1850, maker unknown, Brighton Museum" />

                        <img className="demo cursor" src="/img/memento/mourning doll.jpg" style={{ height: '4.5rem' }} onClick={() => currentSlide(3)} alt="Doll, dressed in mourning for Queen Victoria, made in Germany, 1901, Victoria & Albert Museum" />

                        <img className="demo cursor" src="/img/memento/CT003104 sampler.jpg" style={{ height: '4.5rem' }} onClick={() => currentSlide(4)} alt="Needlepoint sampler, c. 1847, made by member of Anderson family, Brighton Museum" />

                        <img className="demo cursor" src="/img/memento/Throwing off weeds.jpg" style={{ height: '4.5rem' }} onClick={() => currentSlide(5)} alt="Painting - 'Throwing off her weeds', c. 1846, by Richard Redgrave, Victoria & Albert Museum" />

                        <img className="demo cursor" src="/img/memento/BM mauve FSB.jpg" style={{ height: '4.5rem' }} onClick={() => currentSlide(6)} alt="Afternoon dress for half mourning, c. 1870, maker unknown, Brighton Museum" />
                    </div>
                </div>

                <div>
                    <h4 className="secondary-text-bold-accent">
                        click on the thumbnails to see the images
                    </h4>
                </div>

                <div className="border">
                    <img src="./icons/scroll-divider.svg" alt="ornate divider icon" />
                </div>
            </div>
        </>
    );
}