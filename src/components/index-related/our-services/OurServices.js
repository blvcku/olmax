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
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam nobis quia, explicabo nostrum maiores eius nesciunt esse perferendis iste nemo voluptas dicta nihil, totam dolor molestiae tempora nulla in dolorem odit. Illum tempora aliquam ut mollitia. Magni, ex expedita officia nobis quibusdam, assumenda dicta molestias cupiditate dolor blanditiis vero asperiores?</p>
                    </div>
                </OurServicesListItem>
                <OurServicesListItem>
                    <img src={DemolitionIcon} alt='' />
                    <div>
                        <h2>Wyburzenia</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam nobis quia, explicabo nostrum maiores eius nesciunt esse perferendis iste nemo voluptas dicta nihil, totam dolor molestiae tempora nulla in dolorem odit. Illum tempora aliquam ut mollitia. Magni, ex expedita officia nobis quibusdam, assumenda dicta molestias cupiditate dolor blanditiis vero asperiores?</p>
                    </div>
                </OurServicesListItem>
                <OurServicesListItem>
                    <img src={MachineRentalIcon} alt='' />
                    <div>
                        <h2>Wynajem maszyn</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam nobis quia, explicabo nostrum maiores eius nesciunt esse perferendis iste nemo voluptas dicta nihil, totam dolor molestiae tempora nulla in dolorem odit. Illum tempora aliquam ut mollitia. Magni, ex expedita officia nobis quibusdam, assumenda dicta molestias cupiditate dolor blanditiis vero asperiores?</p>
                    </div>
                </OurServicesListItem>
            </ul>
        </OurServicesContainer>
    )
}

export default OurServices;