import { useState, useEffect } from 'react';

import "../components-styles/ImageCarouselStyle.css";

export function MourningImageCarousel() {
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
                    <img src="/img/mourning/ron_case_obit_pic_large-1.jpg" style={{ width: '100%' }} />
                </div>

                <div className="mySlides">
                    <div className="number-text secondary-text-bold-dark">2 / 6</div>
                    <img src="/img/mourning/mourning today.jpg" style={{ width: '100%' }} />
                </div>

                <div className="mySlides">
                    <div className="number-text secondary-text-bold-dark">3 / 6</div>
                    <img src="/img/mourning/QA widows cap.jpg" style={{ width: '100%' }} />
                </div>

                <div className="mySlides">
                    <div className="number-text secondary-text-bold-dark">4 / 6</div>
                    <img src="/img/mourning/1900 dress F B.jpg" style={{ width: '100%' }} />
                </div>

                <div className="mySlides">
                    <div className="number-text secondary-text-bold-dark">5 / 6</div>
                    <img src="/img/mourning/MJCC widow pg92.jpg" style={{ width: '100%' }} />
                </div>

                <div className="mySlides">
                    <div className="number-text secondary-text-bold-dark">6 / 6</div>
                    <img src="/img/mourning/LMA 265 1.jpg" style={{ width: '100%' }} />
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
                        <img className="demo cursor" src="/img/mourning/ron_case_obit_pic_large-1.jpg" style={{ height: '5.25rem' }} onClick={() => currentSlide(1)} alt="Photograph - Three Queens in mourning, 16 February 1962, by Ron Case" />

                        <img className="demo cursor" src="/img/mourning/mourning today.jpg" style={{ height: '5.25rem' }} onClick={() => currentSlide(2)} alt="Advertisement, dress for first mourning, c. 1900" />

                        <img className="demo cursor" src="/img/mourning/QA widows cap.jpg" style={{ height: '5.25rem' }} onClick={() => currentSlide(3)} alt="Postcard, Queen Alexandra in mourning, c. 1901" />

                        <img className="demo cursor" src="/img/mourning/1900 dress F B.jpg" style={{ height: '5.25rem' }} onClick={() => currentSlide(4)} alt="Mourning dress ensemble made of wool and trimmed with crape, c. 1900 maker unknown, Victoria & Albert Museum" />

                        <img className="demo cursor" src="/img/mourning/MJCC widow pg92.jpg" style={{ height: '5.25rem' }} onClick={() => currentSlide(5)} alt="Photograph, widow, late 19th century, collection of Mourning Antiques" />

                        <img className="demo cursor" src="/img/mourning/LMA 265 1.jpg" style={{ height: '5.25rem' }} onClick={() => currentSlide(6)} alt="Letter to Lady Jersey by unidentified correspondent, 1839, London Metropolitan Archives" />
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

