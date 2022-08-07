import React from "react";
import CustomHelmet from '../components/CustomHelmet';
import Footer from '../components/footer/Footer';
import Button from '../components/utils/Button';
import { PolicyWrapper, Header, PolicyContainer } from "../components/policy-related/Policy.styles";

const Polityka = () => {
    return(
        <>
            <CustomHelmet />
                <PolicyWrapper>
                    <Button to='/'>Wróć do strony głównej</Button>
                    <Header>
                        <h1>Polityka prywatności</h1>
                        <p>Polityka prywatności strony zarządzanej przez firmę "OLMAX"</p>
                    </Header>
                    <main>
                        <PolicyContainer>
                            <section>
                                <h2>Czym są dane osobowe?</h2>
                                <p>Dane osobowe to wszelkiego rodzaju informacje bezpośrednio lub pośrednio powiązane z osobą fizyczną. Najczęściej jest to numer ewidencyjny, imię, nazwisko i adres. Także wizerunek oraz numer IP mogą być zaklasyfikowane jako dane osobowe. RODO nie dotyczy osób prawnych, ale dotyczy osób fizycznych prowadzących działalność gospodarczą.</p>
                            </section>
                            <section>
                                <h2>Kto odpowiada za przetwarzanie danych osobowych?</h2>
                                <p>Firma "OLMAX" jest administratorem danych osobowych i odpowiadaja za ich przetwarzanie zgodnie z prawem zapisanym w odpowiednich artykułach</p>
                            </section>
                            <section>
                                <h2>Kiedy przetwarzamy dane osobowe?</h2>
                                <p>Przetwarzaniem danych osobowych są wszelkie działania związane z używaniem danych osobowych od momentu ich pozyskania do momentu ich usunięcia. Zgodnie z definicją legalną przetwarzania danych osobowych zawartą w Rozporządzeniu Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r.</p>
                            </section>
                            <section>
                                <h2>Jakie dane osobowe są przetwarzane?</h2>
                                <p>Zasady przetwarzania danych i prawa osób fizycznych, których dane są albo mogą być przetwarzane, uregulowano m.in. “Zwykłe” dane osobowe</p>
                                <ul>
                                    <li><p>imię</p></li>
                                    <li><p>numer telefonu,</p></li>
                                    <li><p>adres e-mail (nie zawsze jest daną osobową).</p></li>
                                </ul>
                            </section>
                            <section>
                                <h2>Jakie są podstawy prawne przetwarzania danych osobowych?</h2>
                                <p>Przepisy RODO jasno wskazują, że przetwarzanie danych osobowych jest zgodne z prawem tylko wtedy, gdy istnieją ku temu określone warunki. Artykuł 6 RODO wskazuje podstawy do przetwarzania danych, takie jak: zgoda osoby, której dane dotyczą (np. zgoda na telemarketing);</p>
                            </section>
                            <section>
                                <h2>Jak długo przechowujemy dane osobowe?</h2>
                                <p>Dane osobowe przechowywane są tylko tak długo, jak jest to uzasadnione celem przetwarzania, do którego dane zostały zgromadzone. W art. 5 ogólnego rozporządzenia o ochronie danych (RODO). Unijne rozporządzenie o ochronie danych osobowych nie wskazuje okresu, przez jaki dane można przetwarzać, a tym samym nie wskazuje po jakim czasie dane te należy zniszczyć.</p>
                            </section>
                            <section>
                                <h2>Komu przekazujemy zgromadzone dane osobowe?</h2>
                                <p>Administrator może przekazać zgromadzone dane osobowe podmiotowi zewnętrznemu lub innym partnerom biznesowym czy dostawcom. Administrator może także przekazać dane osobowe podmiotowi, który świadczy usługi aktualizacji adresów, aby mieć pewność co do prawidłowego adresu Klienta oraz do partnerów biznesowych firmy "olmax"</p>
                            </section>
                            <section>
                                <h2>Czy dane osobowe są chronione?</h2>
                                <p>Przez administratora zostały uwzględnione wszystkie zalecane sposoby zabezpieczenia danych przez co klient powinien się czuć pewnie.</p>
                            </section>
                        </PolicyContainer>
                    </main>
                </PolicyWrapper>
            <Footer />
        </>
    )
}

export default Polityka;