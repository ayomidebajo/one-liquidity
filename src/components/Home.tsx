import React from 'react';
import { HeaderImage } from './HeaderImage';
// import PhoneImage from '../assets/phone.png';
import DashboardImage from '../assets/dashboard.png';


const Home = () => {
    return (
        <div>
            <div className="header--container">
                <div className="navbar----container">
                    <ul className='navbar__links-container'>
                        <li className='navbar-link'>OneLiquidity</li>
                        <li className='navbar-link'>
                            <ul className='navbar-child-link__container'>
                                <li className='navbar-child-link'>about</li>
                                <li className='navbar-child-link'>contact</li>
                                <li className='navbar-child-link'>stuff</li>
                                <li className='navbar-child-link'>stuff</li>
                                <li className='navbar-child-link'>stuff</li>
                                <li className='navbar-child-link'>stuff</li>
                            </ul>
                        </li>
                        <li className='navbar-link'>
                            <ul className='navbar-child-link__container'>
                                <li className='navbar-child-link'>sign in</li>
                                <li className='navbar-child-link'>sign up</li>
                            </ul>
                        </li>

                    </ul>

                </div>
                <div className="header-text__container grid--container">
                    <div className="header-text">
                        <h1 className='h1 mb-2'>The Next Generation Crypto Liquidity Startup</h1>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores incidunt ut exercitationem sunt, reprehenderit debitis beatae molestiae placeat sit animi sequi accusamus saepe laboriosam voluptatibus odit nihil eaque harum non.
                    </div>

                    <div className="header-image">
                        <HeaderImage />
                    </div>

                </div>
            </div>
            <div className="main-body">

                <div className="grey-body">
                    <div className="mb-7 feature-text__container">
                        <h4 className='mb-2'>Get started quickly</h4>
                        <h1 className='mb-2'>Power your crypto business with scalable fiat payment APIs</h1>
                        Our payments platform is designed to increase conversion and reduce fraud at every step of the payment flow. Get access to streamlined checkout flows, fraud prevention, issuer-level optimisations, and more so that you can focus on building the next big thing.
                    </div>
                    <div className="grid--container-center mb-7">
                        <div className="feature-text">
                            <h2 className='mb-2'>Crypto exchanges and on-ramps</h2>
                            Allow users in more than 180 countries to deposit funds via dozens of local payment methods. With Connect, pay out fiat currencies in 45+ countries.
                        </div>

                        <div className="feature-image__container">
                            <img src={DashboardImage} alt="" width="400px" />
                            {/* <img src={PhoneImage} alt="phone" width="150px" /> */}
                        </div>

                    </div>
                    <div className="grid--container-center mb-7">
                        <div className="feature-text">
                            <h2 className='mb-2'>Crypto exchanges and on-ramps</h2>
                            Allow users in more than 180 countries to deposit funds via dozens of local payment methods. With Connect, pay out fiat currencies in 45+ countries.
                        </div>

                        <div className="feature-image__container">
                            <img src={DashboardImage} alt="" width="400px" />
                            {/* <img src={PhoneImage} alt="phone" width="150px" /> */}
                        </div>

                    </div>

                    <div className="grid--container-center mb-7">
                        <div className="feature-text">
                            <h2 className='mb-2'>Crypto exchanges and on-ramps</h2>
                            Allow users in more than 180 countries to deposit funds via dozens of local payment methods. With Connect, pay out fiat currencies in 45+ countries.
                        </div>

                        <div className="feature-image__container">
                            <img src={DashboardImage} alt="" width="400px" />
                            {/* <img src={PhoneImage} alt="phone" width="150px" /> */}
                        </div>

                    </div>


                    <div className="slant"></div>
                </div>
                <div className="blue-body">
                    <div className="mb-7 feature-text__container">
                        <h4 className='mb-2'>Scale with confidence</h4>
                        <h1 className='mb-2'>Trusted solutions – now for the blockchain</h1>
                        Tap into Stripe’s global infrastructure and proven APIs to grow your business. With optimised onboarding and dedicated support for crypto, Stripe makes it easier for you to hit the ground running – no more painful questionnaires and cumbersome red tape.
                    </div>
                    <div className="grid--container-three">
                        <div className="card--container">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt esse eos id numquam nesciunt, odio eligendi sed, facere rerum commodi aut laudantium, architecto perferendis officiis porro enim. Delectus, perspiciatis magni!
                        </div>
                        <div className="card--container">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt esse eos id numquam nesciunt, odio eligendi sed, facere rerum commodi aut laudantium, architecto perferendis officiis porro enim. Delectus, perspiciatis magni!
                        </div>
                        <div className="card--container">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt esse eos id numquam nesciunt, odio eligendi sed, facere rerum commodi aut laudantium, architecto perferendis officiis porro enim. Delectus, perspiciatis magni!
                        </div>

                    </div>
                </div>
                <div className="white-body">

                    <div className="advantages">
                        <h1 className='mb-2 text-center'>Have something else in mind?</h1>

                        <div className="grid--container-center">
                            <div className="">
                                <h3>Tell us what you need</h3>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam laboriosam voluptates eveniet ea aspernatur maxime illum mollitia iure. Facilis dolor quo asperiores nesciunt saepe. Exercitationem excepturi consequatur deleniti eos soluta.
                            </div>
                            <div className="form--container">
                                <div className="form">
                                    <div className="input--container">
                                        <label htmlFor="">First Name</label>
                                        <input type="text" className='input' />
                                    </div>
                                    <div className="input--container">
                                        <label htmlFor="">Last Name</label>
                                        <input type="text" className='input' />
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
                                    <div className="input--container">
                                        <button> Submit</button>
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
                    <div className="grid--container-three">
                        <div className="">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur sint cumque vitae earum excepturi animi expedita enim neque tempore doloremque dolores, aliquam illum fugiat? Animi cum maiores fuga! Neque, temporibus.
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur perspiciatis fugiat nemo reprehenderit? Rerum officiis distinctio officia perferendis odio vero impedit molestiae, mollitia modi iste qui commodi esse reiciendis perspiciatis?</div>
                        <div className="">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos nemo illo eius dicta numquam quas. Eveniet odit, vitae reiciendis animi autem quis aliquam eum. Fuga tempore esse quia laboriosam error.</div>
                        <div className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ab provident, totam, sunt quaerat cum ipsum rem ullam fuga a temporibus hic vel praesentium illo quas dignissimos repellendus quidem? Possimus?</div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Home