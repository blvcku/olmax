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
                        <summary>Ile kosztują wasze usługi?</summary>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia cum voluptatum recusandae dolor aliquid blanditiis doloribus excepturi minima? Cum commodi, optio, animi dolorum, doloribus dicta velit quasi voluptas architecto ex itaque quos. Voluptas, eum!</p>
                    </details>
                </li>
                <li>
                    <details>
                        <summary>Ile kosztują wasze usługi?</summary>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia cum voluptatum recusandae dolor aliquid blanditiis doloribus excepturi minima? Cum commodi, optio, animi dolorum, doloribus dicta velit quasi voluptas architecto ex itaque quos. Voluptas, eum!</p>
                    </details>
                </li>
                <li>
                    <details>
                        <summary>Ile kosztują wasze usługi?</summary>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia cum voluptatum recusandae dolor aliquid blanditiis doloribus excepturi minima? Cum commodi, optio, animi dolorum, doloribus dicta velit quasi voluptas architecto ex itaque quos. Voluptas, eum!</p>
                    </details>
                </li>
                <li>
                    <details>
                        <summary>Ile kosztują wasze usługi?</summary>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia cum voluptatum recusandae dolor aliquid blanditiis doloribus excepturi minima? Cum commodi, optio, animi dolorum, doloribus dicta velit quasi voluptas architecto ex itaque quos. Voluptas, eum!</p>
                    </details>
                </li>
                <li>
                    <details>
                        <summary>Ile kosztują wasze usługi?</summary>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia cum voluptatum recusandae dolor aliquid blanditiis doloribus excepturi minima? Cum commodi, optio, animi dolorum, doloribus dicta velit quasi voluptas architecto ex itaque quos. Voluptas, eum!</p>
                    </details>
                </li>
            </QuestionsList>
        </QuestionsContainer>
    )
}

export default Questions;