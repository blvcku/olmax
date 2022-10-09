import React from "react";
import { HeroSectionContainer } from "./HeroSection.styles";

const HeroSection = () => {
    return(
        <HeroSectionContainer>
            <div>
                <h2>Skup zbiorników mauzer</h2>
                <p>Nasza firma chętnie nawiąże współpracę na odbiór/zakup zbiorników mauzer o
                pojemności 600L/800L/1000L lub beczek plastikowych/metalowych. Zbiorniki
                muszą być kompletne, nieuszkodzone, bez zawartości żadnych substancji, na
                podstawie metalowej/plastikowej/drewnianej. Cena ustalana jest
                indywidualnie, w zależności od wyżej wymienionych parametrów.
                Posiadamy również takowe zbiorniki na sprzedaż, w liczbie hurtowej dla firm
                lub pojedynczej dla osób prywatnych.
                </p>
            </div>
        </HeroSectionContainer>
    )
}

export default HeroSection;