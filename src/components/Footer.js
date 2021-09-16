import { useState } from "react";
import { Link } from "react-router-dom";

import logo from '/src/img/logo.png';
import closeIcon from '/src/img/close.svg';

import './Footer.scss';


export const Footer = () => {
    const [modalOpen, setModalOpen] = useState(false);


    return (
        <footer className="footer">
            <div className="footer__body">
                <Link to="/">
                    <img src={logo} alt="Ведьмак"/>
                </Link>
                <p className="footer__open-modal" onClick={() => setModalOpen(true)}>
                    Политика обработки персональных данных
                </p>
                <div className="footer__links">
                    <Link to="/">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.8">
                                <path
                                    d="M21.5 11.5C20.9477 11.5 20.5 11.0523 20.5 10.5C20.5 9.94774 20.9477 9.5 21.5 9.5C22.0523 9.5 22.5 9.94774 22.5 10.5C22.4998 11.0523 22.0523 11.5 21.5 11.5Z"
                                    fill="white"/>
                                <path
                                    d="M16 0C7.16479 0 0 7.16479 0 16C0 24.8352 7.16479 32 16 32C24.8352 32 32 24.8352 32 16C32 7.16479 24.8352 0 16 0ZM25.1321 19.7878C25.0876 20.7659 24.9321 21.4336 24.7051 22.0181C24.2278 23.2522 23.2522 24.2278 22.0181 24.7051C21.4338 24.9321 20.7659 25.0874 19.7881 25.1321C18.8083 25.1768 18.4954 25.1875 16.0002 25.1875C13.5049 25.1875 13.1921 25.1768 12.2122 25.1321C11.2344 25.0874 10.5664 24.9321 9.98218 24.7051C9.3689 24.4744 8.81372 24.1128 8.35474 23.6453C7.88745 23.1865 7.52588 22.6311 7.29517 22.0181C7.06812 21.4338 6.9126 20.7659 6.86816 19.7881C6.823 18.8081 6.8125 18.4951 6.8125 16C6.8125 13.5049 6.823 13.1919 6.86792 12.2122C6.91235 11.2341 7.06763 10.5664 7.29468 9.98193C7.52539 9.3689 7.88721 8.81348 8.35474 8.35474C8.81348 7.88721 9.3689 7.52563 9.98193 7.29492C10.5664 7.06787 11.2341 6.9126 12.2122 6.86792C13.1919 6.82324 13.5049 6.8125 16 6.8125C18.4951 6.8125 18.8081 6.82324 19.7878 6.86816C20.7659 6.9126 21.4336 7.06787 22.0181 7.29468C22.6311 7.52539 23.1865 7.88721 23.6455 8.35474C24.1128 8.81372 24.4746 9.3689 24.7051 9.98193C24.9324 10.5664 25.0876 11.2341 25.1323 12.2122C25.177 13.1919 25.1875 13.5049 25.1875 16C25.1875 18.4951 25.177 18.8081 25.1321 19.7878Z"
                                    fill="white"/>
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M16.0042 18.8364C17.5468 18.8364 18.7974 17.5859 18.7974 16.0432C18.7974 14.5006 17.5468 13.25 16.0042 13.25C14.4615 13.25 13.2109 14.5006 13.2109 16.0432C13.2109 17.5859 14.4615 18.8364 16.0042 18.8364ZM16.0042 20.0864C18.2372 20.0864 20.0474 18.2762 20.0474 16.0432C20.0474 13.8102 18.2372 12 16.0042 12C13.7711 12 11.9609 13.8102 11.9609 16.0432C11.9609 18.2762 13.7711 20.0864 16.0042 20.0864Z"
                                      fill="white"/>
                            </g>
                        </svg>
                    </Link>
                    <Link to="/">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.8">
                                <path
                                    d="M16 0C7.164 0 0 7.164 0 16C0 24.836 7.164 32 16 32C24.836 32 32 24.836 32 16C32 7.164 24.836 0 16 0ZM20 10.6667H18.2C17.4827 10.6667 17.3333 10.9613 17.3333 11.704V13.3333H20L19.7213 16H17.3333V25.3333H13.3333V16H10.6667V13.3333H13.3333V10.256C13.3333 7.89733 14.5747 6.66667 17.372 6.66667H20V10.6667Z"
                                    fill="white"/>
                            </g>
                        </svg>
                    </Link>
                    <Link to="/">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.8">
                                <path
                                    d="M16 0C7.164 0 0 7.164 0 16C0 24.836 7.164 32 16 32C24.836 32 32 24.836 32 16C32 7.164 24.836 0 16 0ZM24.4587 21.5507H21.9693C20.5627 21.5507 20.3267 20.7493 19.1667 19.592C18.12 18.5453 17.54 19.348 17.564 20.8387C17.572 21.2347 17.376 21.5507 16.904 21.5507C15.4307 21.5507 13.312 21.7587 11.1653 19.444C8.96933 17.072 6.66667 12.3133 6.66667 11.8453C6.66667 11.568 6.896 11.444 7.27867 11.444H9.80933C10.48 11.444 10.536 11.776 10.724 12.2013C11.5027 13.976 13.3653 17.5373 13.8627 15.5493C14.148 14.408 14.264 11.764 13.0427 11.536C12.3493 11.408 13.5707 10.6667 15.3387 10.6667C15.7787 10.6667 16.256 10.7133 16.744 10.8267C17.6413 11.0347 17.6453 11.4373 17.632 12.024C17.5867 14.2453 17.3187 15.7387 17.904 16.116C18.4627 16.4773 19.932 14.1133 20.7093 12.288C20.9213 11.784 20.964 11.4453 21.5667 11.4453H24.6627C26.284 11.4453 24.4507 13.776 23.0493 15.5947C21.92 17.06 21.98 17.088 23.2933 18.3067C24.228 19.1747 25.3333 20.36 25.3333 21.0307C25.3333 21.348 25.0853 21.5507 24.4587 21.5507Z"
                                    fill="white"/>
                            </g>
                        </svg>
                    </Link>
                </div>
            </div>
            {modalOpen && (
                <div className="footer__modal-container">
                    <div className="footer__modal">
                        <img className="footer__close" src={closeIcon} onClick={() => setModalOpen(false)} alt="Закрыть"/>
                        <h2>Обработка данных</h2>
                        <section>
                            <article>
                                <b>1. Что регулирует настоящая политика конфиденциальности</b>

                                <p>Настоящая политика конфиденциальности (далее — Политика) действует в отношении всей
                                    информации, включая персональные данные в понимании применимого законодательства (далее
                                    — «Персональная информация»), которую ООО «Гросс маркет» и/или его аффилированные лица,
                                    в том числе входящие в одну группу с ООО «Гросс маркет» (далее — «Гросс маркет»), могут
                                    получить о Вас в процессе использования Вами любых сайтов, программ, продуктов и/или
                                    сервисов Гросс маркет (далее вместе «Сервисы»), информацию о которых Гросс маркет может
                                    также получать Персональную информацию от своих партнеров (далее — «Партнеры»), сайты,
                                    программы, продукты или сервисы которых Вы используете (например, от рекламодателей
                                    Гросс маркет или службами такси). В таких случаях передача Персональной информации
                                    возможна только в случаях, установленных применимым законодательством, и осуществляется
                                    на основании специальных договоров между Гросс маркет и каждым из Партнеров.</p>

                                <p>Пожалуйста, обратите внимание, что использование любого из Сайтов и/или Сервисов может
                                    регулироваться дополнительными условиями, которые могут вносить в настоящую Политику
                                    изменения и/или дополнения, и/или иметь специальные условия в отношении персональной
                                    информации, размещенные в соответствующих разделах документов для таких Сайтов /или
                                    Сервисов.</p>
                            </article>
                            <article>
                                <b>2. Кто обрабатывает информацию</b>

                                <p>Для обеспечения использования Вами Сайтов и Сервисов Ваша Персональная информация собирается и используется Яндексом, в том числе включая общество с ограниченной ответственностью «Гросс маркет», юридическое лицо, созданное по законодательству Российской Федерации и зарегистрированное по адресу: 123351, Россия, Москва, ул. Гроссова, д. 12 (ООО «Гросс маркет»), или его аффилированным лицом, предоставляющим соответствующий Сервис в иных юрисдикциях. С информацией о том, какое лицо предоставляет тот или иной Сервис, Вы можете ознакомиться в условиях использования соответствующего Сервиса.</p>
                            </article>
                            <article>
                                <b>3. Какова цель данной Политики</b>

                                <p>Защита Вашей Персональной информации и Вашей конфиденциальности чрезвычайно важны для Гросс маркета. Поэтому при использовании Вами Сайтов и Сервисов Гросс маркет защищает и обрабатывает Вашу Персональную информацию в строгом соответствии с применимым законодательством.</p>
                            </article>
                        </section>
                    </div>
                </div>
            )}
        </footer>
    );
}