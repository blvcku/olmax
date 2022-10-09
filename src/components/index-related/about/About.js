import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Button from "../../utils/Button";
import { AboutContainer, AboutWrapper } from "./About.styles";

const About = () => {
    return(
        <AboutContainer>
            <AboutWrapper>
                <div>
                    <h2>O nas</h2>
                    <p>Firma OLMAX DAMIAN STRĄCZYŃSKI mieści się w&nbsp;Częstochowie. </p>
                    <p>Profil naszej działalności obejmuje głównie prace związane z&nbsp;kompleksowymi
                        robotami ziemnymi, wyburzeniami i&nbsp;transportem.</p>
                    <p>Posiadamy kilkuletnie doświadczenie, które pozwala Nam prężnie rozwijać się
                    w tej branży.</p>
                    <p>Najwyższym priorytetem jest zadowolenie naszych klientów. Dlatego do
                    każdego zadania podchodzimy indywidualnie, aby&nbsp;zapewnić wysoką jakość
                    usług.</p>
                 
                    <Button to='/#aktualnosci'>Sprawdź nasze aktualności</Button>
                </div>
                <span></span>
                <div>
                    <StaticImage layout='fullWidth' placeholder="blurred" src='../../../images/o-nas.png' alt='O nas' />
                </div>
            </AboutWrapper>
        </AboutContainer>
    )
}

export default About;