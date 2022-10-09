import React, { useState, useEffect } from "react";
import EarthworkImage from '../../../../images/roboty-ziemne.jpg';
import MachineRentalImage from '../../../../images/wynajem-maszyn.jpg';
import DemolitionImage from '../../../../images/wyburzenia.jpg';
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
                <CarouselSlide active={currentSlide === 0} background={EarthworkImage}>
                    <div>
                        <h2>Roboty ziemne</h2>
                        <p>Nasza oferta obejmuje szeroki zakres prac ziemnych: wykopy, utwardzenia,
                           korytowania, odwierty wiertnicą, budowy sieci wodno-kanalizacyjnej, przyłącza
                           prądowe.
                           Zapewniamy wywóz ziemi, gruzu oraz odpadów budowlanych.</p>
                    </div>
                </CarouselSlide>
                <CarouselSlide active={currentSlide === 1} background={DemolitionImage}>
                    <div>
                        <h2>Wyburzenia</h2>
                        <p>Specjalizujemy się w wyburzeniach hal, magazynów, budynków użytku
                           publicznego. Wykorzystujemy specjalistyczny sprzęt wyburzeniowy, który jest
                           wyposażony w młoty wyburzeniowe/nożyce kruszące. Zapewniamy wywóz
                           oraz utylizacje pozostałości porozbiórkowych.</p>
                    </div>
                </CarouselSlide>
                <CarouselSlide active={currentSlide === 2} background={MachineRentalImage}>
                    <div>
                        <h2>Wynajem maszyn</h2>
                        <p>Oferujemy wynajem maszyn i urządzeń budowlanych. W zależności od potrzeb
                           indywidualnych.
                        </p>
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