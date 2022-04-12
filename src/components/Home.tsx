import React from 'react';
import PhoneImage from '../assets/phone.png';
import DashboardImage from '../assets/dashboard.png';
import Cards from '../assets/cards-removebg-preview.png'
import PeopleImage from '../assets/people-image.jpeg'
import { ArrowBtn, Cool, EasyIn, LinkedIn, Receipts, Twitter, Vcard } from './resuables/Svg';


const Home = () => {
    return (
        <div>
            <div className="header--container">
                <div className="navbar----container">
                    <ul className='navbar__links-container'>
                        <li className='navbar-link'>OneLiquidity</li>
                        <li className='navbar-link'>
                            <ul className='navbar-child-link__container'>
                                <li className='navbar-child-link'><button className='btn-submit'>Get started</button></li>
                            </ul>
                        </li>

                    </ul>

                </div>
                <div className="header-text__container grid--container">
                    <div className="header-text">
                        <h1 className='h1 mb-2'>The Next Generation Crypto Liquidity Startup</h1>
                       With the current dynamics in the Crypto space, there are a lot of startups trying to break into the space and launch something great, we can help you scale and launch your startup faster in a more flexible way.
                    </div>

                    <div className="header-image">
                        {/* <HeaderImage /> */}
                        <img src={PeopleImage} alt="" />
                    </div>

                </div>
            </div>
            <div className="main-body">
                <div className="mb-7">
                    <div className="mobile-features">
                        <div className="text-center mb-5">
                            <h1 className="h2">Why OneLiquidity?</h1>
                            Safe keeping your assets with integrated study, trust and escrow solutions personalize services to keep pace with your needs. You have access to the basic and the most important recources a startup in crypto needs.

                        </div>
                        <div className="feature-text-right__container">
                            <div className="gr">
                                <div className="feature-text-right-one">
                                    <Receipts />
                                    <h4 className="h3">Automated receipts</h4>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium amet xxx x s

                                </div>
                                <div className="feature-text-right-two">
                                    <Vcard />
                                    <h4 className="h3">Virtual cards</h4>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium amet xxx x s

                                </div>
                                <div className="feature-text-right-three">
                                    <EasyIn />
                                    <h4 className="h3">Easy integration</h4>

                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium amet xxx x s

                                </div>
                                <div className="feature-text-right-four">
                                    <Cool />
                                    <h4 className="h3">Ditch bank fees</h4>

                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium amet xxx x s

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid--container-twelve">
                        <div className="dark-blue-rectangle--container">
                            <div className="dark-blue-rectangle">

                            </div>

                        </div>
                        <div className="light-blue-square"></div>
                        <div className="feature-text-left">
                            <h1 className="h3">Why OneLiquidity?</h1>
                            Safe keeping your assets with integrated study, trust and escrow solutions personalize services to keep pace with your needs. You have access to the basic and the most important recources a startup in crypto needs.

                        </div>
                        <div className="blue-main"></div>
                        <div className="feature-text-right__container">
                            <div className="gr">
                                <div className="feature-text-right-one">
                                    <Receipts />
                                    <h4 className="h3">Automated receipts</h4>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium amet xxx x s

                                </div>
                                <div className="feature-text-right-two">
                                    <Vcard />
                                    <h4 className="h3">Virtual cards</h4>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium amet xxx x s

                                </div>
                                <div className="feature-text-right-three">
                                    <EasyIn />
                                    <h4 className="h3">Easy integration</h4>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium amet xxx x s

                                </div>
                                <div className="feature-text-right-four">
                                    <Cool />
                                    <h4 className="h3">Ditch bank fees</h4>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium amet xxx x s

                                </div>
                            </div>
                        </div>
                    </div>


                </div>



                <div className="white-body mb-5">
                    <div className="text-center feature-title">
                        <h1 className='h1 mb-2'>Tailored solutions & value added services</h1>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores incidunt ut exercitationem sunt,

                    </div>
                    <div className="grid--container-center mb-5">
                        <div className="feature-child-text mb-2">
                            <h3 className='h2'>Buy Crypto easily in app</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet mollitia ex dolores iure atque alias a possimus dolor magni blanditiis? Nihil eligendi necessitatibus maxime tempore beatae dolor esse quo quas!</p>
                        </div>
                        <div className="feature-child-image-right">
                            <img src={PhoneImage} alt="" height="300px" />
                        </div>
                    </div>
                    <div className="grid--container-center mb-5">
                        <div className="feature-child-text mb-2">
                            <h3 className='h2'>See all your assets on the fly</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet mollitia ex dolores iure atque alias a possimus dolor magni blanditiis? Nihil eligendi necessitatibus maxime tempore beatae dolor esse quo quas!</p>
                        </div>
                        <div className="feature-child-image-right">
                            <img src={DashboardImage} alt="" height="220px" />
                        </div>


                    </div>
                    <div className="grid--container-center mb-5">
                        <div className="feature-child-text mb-2">
                            <h3 className='h2'>Own multiple virtual cards</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet mollitia ex dolores iure atque alias a possimus dolor magni blanditiis? Nihil eligendi necessitatibus maxime tempore beatae dolor esse quo quas!</p>
                        </div>
                        <div className="feature-child-image-right">
                            <img src={Cards} alt="" height="300px" className='img-card' />
                        </div>
                    </div>
                </div>
                <div className="white-body pt-0">

                    <div className="advantages">
                        <h1 className='mb-2 h2 text-center'>Have something else in mind?</h1>

                        <div className="">
                            <div className="mb-2 text-center">
                                <h3>Tell us what you need</h3>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam laboriosam voluptates eveniet ea aspernatur maxime illum mollitia iure. Facilis dolor quo asperiores nesciunt saepe. Exercitationem excepturi consequatur deleniti eos soluta.
                            </div>
                            <div className="form--container">
                                <div className="form">
                                    .<div className="grid--container">
                                        <div className="input--container">
                                            <label htmlFor="">First Name</label>
                                            <input type="text" className='input' />
                                        </div>
                                        <div className="input--container">
                                            <label htmlFor="">Last Name</label>
                                            <input type="text" className='input' />
                                        </div>
                                    </div>
                                    <div className="input--container">
                                        <label htmlFor="">Email</label>
                                        <input type="text" className='input' />
                                    </div>
                                    <div className="input--container">
                                        <label htmlFor="">Phone Number</label>
                                        <input type="text" className='input' />
                                    </div>
                                    <div className="input--container">
                                        <label htmlFor="">Company website</label>
                                        <input type="text" className='input' />
                                    </div>
                                    <div className="input--container">
                                        <label htmlFor="">Country</label>
                                        <input type="text" className='input' />
                                    </div>
                                    <div className="input--container">
                                        <label htmlFor="">Number of employees</label>
                                        <input type="text" className='input' />
                                    </div>
                                    <div className="btn--container">
                                        <button className='btn-submit'> Submit
                                            <ArrowBtn /></button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="footer--contaer
            ">
                <div className="dark-blue-body">
                    <div className="grid--container-four">

                        <div className="footer-about">
                            <h1 className='h2'>One Liquidity</h1>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur sint cumque vitae earum excepturi animi expedita enim neque tempore doloremque dolores, aliquam illum fugiat? Animi cum maiores fuga! Neque, temporibus.
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur perspiciatis fugiat nemo reprehenderit? Rerum officiis distinctio officia perferendis odio vero impedit molestiae, mollitia modi iste qui commodi esse reiciendis perspiciatis?</div>
                        <div className="footer-menu">
                            <ul className='footer-links__container'>
                                <li className='footer-link'>Documentation</li>
                                <li className='footer-link'>Careers</li>
                                <li className='footer-link'>Blog</li>
                            </ul>
                        </div>
                        <div className="footer-contact-info">
                            <p>OneLiquidity@mail.com</p>
                            <p>+2340929445464</p>
                        </div>
                        <div className="">
                            <ul className='footer-social-links__container'>
                                <li className='footer-social-link'>
                                    <Twitter />
                                </li>
                                <li className='footer-social-link'>
                                    <LinkedIn />
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Home