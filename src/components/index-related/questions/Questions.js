import React from "react";
import { QuestionsContainer, QuestionsList } from "./Questions.styles";

const Questions = () => {
    return(
        <QuestionsContainer>
            <h2>FAQ</h2>
            <p>Przed skontaktowaniem się z nami zapoznaj się z najczęściej zadawanymi pytaniami przez naszych klientów.</p>
            <QuestionsList>
                <li>
                    <details>
                        <summary>Gdzie znajduje się nasza siedziba?</summary>
                        <p>- Hallera 9 Częstochowa.</p>
                    </details>
                </li>
                <li>
                    <details>
                        <summary>Jakie są ceny naszych usług?</summary>
                        <p>- Po wszelkie informacje cenowe zapraszam do kontaktu telefonicznego.</p>
                    </details>
                </li>
                <li>
                    <details>
                        <summary>Czy świadczymy usługi na terenie całego kraju?</summary>
                        <p>- Świadczymy usługi na terenie całej Polski.</p>
                    </details>
                </li>
                <li>
                    <details>
                        <summary>Czy wynajmujemy maszyny bez operatora? </summary>
                        <p>Wszystkie maszyny przeznaczone na wynajem mogą zostać wynajęte bez operatora.</p>
                    </details>
                </li>
            </QuestionsList>
        </QuestionsContainer>
    )
}

export default Questions;