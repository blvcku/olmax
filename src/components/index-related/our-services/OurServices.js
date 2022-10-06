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
                        <p>Wykonujemy szeroki wachlarz robót ziemnych. W sposób solidny realizujemy powierzone nam zadania. Nasza oferta obejmuje: wykopy, przyłącza, wyburzenie obiektów, drogi dojazdowe, utwardzenie teren, budowy sieci wodno-kanalizacyjnych oraz inne usługi do których możemy wykorzystać nasz sprzęt.</p>
                    </div>
                </OurServicesListItem>
                <OurServicesListItem>
                    <img src={DemolitionIcon} alt='' />
                    <div>
                        <h2>Wyburzenia</h2>
                        <p>Specjalizujemy się w wyburzeniach obiektów użytku publicznego, hale, magazyny, itp. Wykorzystujemy specjalistyczny sprzęt wyburzeniowy wyposażony w młoty wyburzeniowe, nożyce kruszące, zapewniemay wywóz pozostałości porozbiórkowych.
                        </p>
                    </div>
                </OurServicesListItem>
                <OurServicesListItem>
                    <img src={MachineRentalIcon} alt='' />
                    <div>
                        <h2>Wynajem maszyn</h2>
                        <p>Prowadzimy wynajem maszyn i urządzeń budowlanych bez operatora. 
                        Po więcej informacji na temat dostępności oraz cen zapraszamy do kontaktu.</p>
                    </div>
                </OurServicesListItem>
            </ul>
        </OurServicesContainer>
    )
}

export default OurServices;