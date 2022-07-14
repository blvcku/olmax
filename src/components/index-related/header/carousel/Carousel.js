import React, { useState, useEffect } from "react";
import FirstSlide from '../../../../images/first-slide.jpg';
import { CarouselContainer, CarouselSlide, CarouselIndicatorsContainer, CarouselIndicator } from './Carousel.styles';

const Carousel = () => {

    const [currentSlide, setCurrentSlide] = useState(0);
    const [manuallyChanged, setManuallyChanged] = useState(false);
    const slides = 2 // + 1 counting from 0
    const nextSlideTime = 15000 // miliseconds :1000

    const setActiveSlide = (e, slide) => {
        e.preventDefault();
        setManuallyChanged(true);
        setCurrentSlide(slide);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            if(manuallyChanged) return;
            setCurrentSlide(prev => prev === slides ? 0 : prev + 1);
        }, nextSlideTime);
        if(manuallyChanged){
            clearInterval(interval);
            setManuallyChanged(false);
        }
        return () => clearInterval(interval);
    }, [manuallyChanged]);    

    return(
        <>
            <CarouselContainer currentSlide={currentSlide}>
                <CarouselSlide active={currentSlide === 0} background={FirstSlide}>
                    <div>
                        <h2>Roboty ziemne</h2>
                        <span></span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id aliquid repellendus iure ea. Fugit aspernatur consequuntur assumenda perspiciatis saepe eveniet quia alias modi tenetur optio molestias a dolorum, quibusdam debitis, libero omnis illo. Deserunt voluptatibus dolorum corporis pariatur nemo eius?</p>
                    </div>
                </CarouselSlide>
                <CarouselSlide active={currentSlide === 1} background={FirstSlide}>
                    <div>
                        <h2>Roboty ziemne</h2>
                        <span></span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id aliquid repellendus iure ea. Fugit aspernatur consequuntur assumenda perspiciatis saepe eveniet quia alias modi tenetur optio molestias a dolorum, quibusdam debitis, libero omnis illo. Deserunt voluptatibus dolorum corporis pariatur nemo eius?</p>
                    </div>
                </CarouselSlide>
                <CarouselSlide active={currentSlide === 2} background={FirstSlide}>
                    <div>
                        <h2>Roboty ziemne</h2>
                        <span></span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id aliquid repellendus iure ea. Fugit aspernatur consequuntur assumenda perspiciatis saepe eveniet quia alias modi tenetur optio molestias a dolorum, quibusdam debitis, libero omnis illo. Deserunt voluptatibus dolorum corporis pariatur nemo eius?</p>
                    </div>
                </CarouselSlide>
            </CarouselContainer>
            <CarouselIndicatorsContainer>
                <li>
                    <CarouselIndicator onClick={e => setActiveSlide(e, 0)} active={currentSlide === 0} aria-label='Pierwszy slajd'>
                        <span></span>
                    </CarouselIndicator>
                </li>
                <li>
                    <CarouselIndicator onClick={e => setActiveSlide(e, 1)} active={currentSlide === 1} aria-label='Drugi slajd'>
                        <span></span>
                    </CarouselIndicator>
                </li>
                <li>
                    <CarouselIndicator onClick={e => setActiveSlide(e, 2)} active={currentSlide === 2} aria-label='Trzeci slajd'>
                        <span></span>
                    </CarouselIndicator>
                </li>
            </CarouselIndicatorsContainer>
        </>
    )
}

export default Carousel;