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
                        <p>Wykonujemy szeroki wachlarz robót ziemnych. Dysponujemy sprzętem w skład którego wchodzą: koparki, ładowarki, zagęszczarki, wywrotki, wozidła i hakowce. W sposób solidny realizujemy powierzone nam zadania. Nasza oferta obejmuje: wykopy, wyburzenie obiektów, drogi dojazdowe, utwardzenie teren, podbudowę terenu, układanie kostki brukowej, i wiele innych usług do których możemy wykorzystać nasz sprzęt.</p>
                    </div>
                </OurServicesListItem>
                <OurServicesListItem>
                    <img src={DemolitionIcon} alt='' />
                    <div>
                        <h2>Wyburzenia</h2>
                        <p>Specjalizujemy się w wyburzeniach obiektów użytku publicznego, hale, magazyny i wiele wiele innych. Wykorzystujemy specjalistyczny sprzęt wyburzeniowy wyposażony w młoty wyburzeniowe, nożyce kruszące, zapewniemay wywóz oraz utylizacje pozostałości porozbiórkowych.</p>
                    </div>
                </OurServicesListItem>
                <OurServicesListItem>
                    <img src={MachineRentalIcon} alt='' />
                    <div>
                        <h2>Wynajem maszyn</h2>
                        <p>Prowadzimy wynajem maszyn bez operatora, po wszelkie informacje cenowe zapraszamy do kontaktu.</p>
                        <p>Maszyny przeznaczone przez nas na wynajem to:</p>
                        <ul>
                            <li>zagęszczarki</li>
                            <li>wozidła budowlane skoczki</li>
                            <li>i wiele innych maszyn budowlanych</li>
                        </ul>
                    </div>
                </OurServicesListItem>
            </ul>
        </OurServicesContainer>
    )
}

export default OurServices;