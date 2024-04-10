import { useState, useEffect } from 'react';

import "../components-styles/ImageCarouselStyle.css";

export function MemoryImageCarousel() {
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
                    <img src="/img/memory/QV with Prince of Wales.jpg" style={{ width: '100%' }} />
                </div>

                <div className="mySlides">
                    <div className="number-text secondary-text-bold-dark">2 / 6</div>
                    <img src="/img/memory/BM wedding front.jpg" style={{ width: '100%' }} />
                </div>

                <div className="mySlides">
                    <div className="number-text secondary-text-bold-dark">3 / 6</div>
                    <img src="/img/memory/MJCC wedding pg102.jpg" style={{ width: '100%' }} />
                </div>

                <div className="mySlides">
                    <div className="number-text secondary-text-bold-dark">4 / 6</div>
                    <img src="/img/memory/The Wedding dress.jpg" style={{ width: '100%' }} />
                </div>

                <div className="mySlides">
                    <div className="number-text secondary-text-bold-dark">5 / 6</div>
                    <img src="/img/memory/MJCC wdding pg103 2.jpg" style={{ width: '100%' }} />
                </div>

                <div className="mySlides">
                    <div className="number-text secondary-text-bold-dark">6 / 6</div>
                    <img src="/img/memory/daughter of Albert mourning.jpg" style={{ width: '100%' }} />
                </div>
                {/* Add for more slides */}

                {/* enables user to click on thumbnails to change image */}
                <a className="prev" onClick={() => { console.log("Previous button clicked"); plusSlides(-1); }}></a>
                <a className="next" onClick={() => { console.log("Next button clicked"); plusSlides(1); }}></a>


                <div className="caption-container">
                    <h4 className="secondary-text-reg-dark" id="caption"></h4>
                </div>

                {/* Thumbnail images */}
                <div className="thumbnail-container">
                    <div className="row">
                        <img className="demo cursor" src="/img/memory/QV with Prince of Wales.jpg" style={{ height: '5rem' }} onClick={() => currentSlide(1)} alt="Wedding photograph of Queen Victoria, the Prince of Wales and Princess Alexandra, c. 1863, Royal Collection" />

                        <img className="demo cursor" src="/img/memory/BM wedding front.jpg" style={{ height: '5rem' }} onClick={() => currentSlide(2)} alt="Wedding outfit, bodice and skirt, c. 1877, Brighton Museum" />

                        <img className="demo cursor" src="/img/memory/MJCC wedding pg102.jpg" style={{ height: '5rem' }} onClick={() => currentSlide(3)} alt="Photograph - bridal couple in mourning dress, c. 1890" />

                        <img className="demo cursor" src="/img/memory/The Wedding dress.jpg" style={{ height: '5rem' }} onClick={() => currentSlide(4)} alt="Painting - 'The Wedding Dress' by Fred Elwell, c. 1911, Hull Museum Collection" />

                        <img className="demo cursor" src="/img/memory/MJCC wdding pg103 2.jpg" style={{ height: '5rem' }} onClick={() => currentSlide(5)} alt="Photograph - bridal couple in mourning dress, c. 1890" />

                        <img className="demo cursor" src="/img/memory/daughter of Albert mourning.jpg" style={{ height: '5rem' }} onClick={() => currentSlide(6)} alt="Photograph - daughters of Prince Albert in mourning, c. 1862, Royal Collection" />
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