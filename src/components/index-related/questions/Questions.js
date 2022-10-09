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
                        <p>- Siedziba firmy znajduje się przy ul.&nbsp;Hallera&nbsp;9 w Częstochowie.
                        </p>
                    </details>
                </li>
                <li>
                    <details>
                        <summary>Czy świadczymy usługi na terenie całego kraju?</summary>
                        <p>- Tak, świadczymy usługi na terenie całej Polski.</p>
                    </details>
                </li>
              
            </QuestionsList>
        </QuestionsContainer>
    )
}

export default Questions;