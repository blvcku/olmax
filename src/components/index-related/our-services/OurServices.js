import React from 'react';
import EarthworkIcon from '../../../images/roboty-ziemne.svg';
import MachineRentalIcon from '../../../images/wynajem-maszyn.svg';
import DemolitionIcon from '../../../images/wyburzenia.svg';
import { OurServicesContainer, OurServicesListItem } from './OurServices.styles';

const OurServices = () => {
    return(
        <OurServicesContainer>
            <ul>
                <OurServicesListItem>
                    <img src={EarthworkIcon} alt='' />
                    <div>
                        <h2>Roboty ziemne</h2>
                        <p>W solidny sposób realizujemy powierzone Nam zadania. Nasza oferta obejmuje: wykopy,
                        przyłącza, wyburzenia obiektów, drogi dojazdowe, utwardzenia terenu, budowy sieci
                        wodno-kanalizacyjnych oraz inne usługi, do&nbsp;których możemy wykorzystać Nasz sprzęt.</p>
                    </div>
                </OurServicesListItem>
                <OurServicesListItem>
                    <img src={DemolitionIcon} alt='' />
                    <div>
                        <h2>Wyburzenia</h2>
                        <p>Specjalizujemy się w&nbsp;rożnego typu wyburzeniach. Wykorzystujemy do&nbsp;tego sprzęt
                           wyburzeniowy, wyposażony w&nbsp;specjalistyczny osprzęt. Zapewniamy wywóz pozostałości
                           porozbiórkowych i&nbsp;uprzątnięcia terenu.
                       </p>
                    </div>
                </OurServicesListItem>
                <OurServicesListItem>
                    <img src={MachineRentalIcon} alt='' />
                    <div>
                        <h2>Wynajem maszyn</h2>
                        <p>Oferujemy wynajem maszyn bez operatora, indywidualnie dopasowany do&nbsp;aktualnych
                        potrzeb Naszego klienta. </p>
                    </div>
                </OurServicesListItem>
            </ul>
        </OurServicesContainer>
    )
}

export default OurServices;