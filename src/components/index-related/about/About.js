import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Button from "../../utils/Button";
import { AboutContainer, Wrapper } from "./About.styles";

const About = ({innerRef}) => {
    return(
        <AboutContainer ref={innerRef}>
            <Wrapper>
                <div>
                    <h2>Nasza firma</h2>
                    <p>Firma Olmax Damian Strączyński z siedzibą w miejscowości Częstochowa świadczy swoje usługi w branży robót ziemnych, wynajmu sprzętu budowlanego.</p>
                    <p>Profil naszej działalnosci obejmuje głownie prace związane z wyburzeniami, transportem, kompleksowymi robotami ziemnymi, wszelakiego rodzaju wykopami. Obecnie nasza firma posiada szeroki wachlarz sprzętu budowalnego, dzięki któremu, żadna usługa dla nas nie jest straszna.</p>
                    <Button to='/aktualnosci'>Sprawdź nasze aktualności</Button>
                </div>
                <span></span>
                <div>
                    <StaticImage layout='fullWidth' placeholder="blurred" src='../../../images/o-nas.png' alt='O nas' />
                </div>
            </Wrapper>
        </AboutContainer>
    )
}

export default About;