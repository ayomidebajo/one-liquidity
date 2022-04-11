import React from 'react';
import { HeaderImage } from './HeaderImage';
import PhoneImage from '../assets/phone.png';
import DashboardImage from '../assets/dashboard.png';
import Cards from '../assets/cards-removebg-preview.png'


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
                <div className="">

                    <div className="grid--container-twelve">
                        <div className="dark-blue-rectangle--container">
                            <div className="dark-blue-rectangle">

                            </div>

                        </div>
                        <div className="light-blue-square"></div>
                        <div className="feature-text-left">
                            <h1 className="h3">What we do</h1>
                            Safe keeping you assets with integrated study, trust and escrow solutionsd personalize services to keep pace with your needs

                        </div>
                        <div className="blue-main"></div>
                        <div className="feature-text-right__container">
                            <div className="gr">
                                <div className="feature-text-right-one">
                                    <h4 className="h3">Settlement & clearing</h4>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium amet xxx x s

                                </div>
                                <div className="feature-text-right-two">
                                    <h4 className="h3">Settlement & clearing</h4>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium amet xxx x s

                                </div>
                                <div className="feature-text-right-three">
                                    <h4 className="h3">Settlement & clearing</h4>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium amet xxx x s

                                </div>
                                <div className="feature-text-right-four">
                                    <h4 className="h3">Settlement & clearing</h4>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium amet xxx x s

                                </div>
                            </div>
                        </div>
                    </div>


                </div>

               
               
                <div className="white-body ">
                    <div className="text-center feature-title">
                        <h1 className='h1 mb-2'>Tailored solutions & value added services</h1>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores incidunt ut exercitationem sunt,

                    </div>
                    <div className="grid--container-center">
                        <div className="feature-child-text">
                            <h3 className='h2'>Dial something to get airtime</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet mollitia ex dolores iure atque alias a possimus dolor magni blanditiis? Nihil eligendi necessitatibus maxime tempore beatae dolor esse quo quas!</p>
                        </div>
                        <div className="feature-child-image-right">
                            <img src={PhoneImage} alt="" height="300px" />
                        </div>
                    </div>
                    <div className="grid--container-center">
                        <div className="">
                            <img src={DashboardImage} alt="" height="220px" />
                        </div>
                        <div className="feature-child-left">
                            <h3 className='h2'>Dial something to get airtime</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet mollitia ex dolores iure atque alias a possimus dolor magni blanditiis? Nihil eligendi necessitatibus maxime tempore beatae dolor esse quo quas!</p>
                        </div>

                    </div>
                    <div className="grid--container-center">
                        <div className="feature-child-text">
                            <h3 className='h2'>Dial something to get airtime</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet mollitia ex dolores iure atque alias a possimus dolor magni blanditiis? Nihil eligendi necessitatibus maxime tempore beatae dolor esse quo quas!</p>
                        </div>
                        <div className="feature-child-image-right">
                            <img src={Cards} alt="" height="300px" />
                        </div>
                    </div>
                </div>
                <div className="white-body pt-0">

                    <div className="advantages">
                        <h1 className='mb-2 h2 text-center'>Have something else in mind?</h1>

                        <div className="grid--container-center">
                            <div className="">
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
                                            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                                                viewBox="0 0 330 330" xmlSpace="preserve" width="10" height="10">
                                                <path id="XMLID_222_" d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001
	c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213
	C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606
	C255,161.018,253.42,157.202,250.606,154.389z" fill='#fff' />
                                                <g>
                                                </g>
                                                <g>
                                                </g>
                                                <g>
                                                </g>
                                                <g>
                                                </g>
                                                <g>
                                                </g>
                                                <g>
                                                </g>
                                                <g>
                                                </g>
                                                <g>
                                                </g>
                                                <g>
                                                </g>
                                                <g>
                                                </g>
                                                <g>
                                                </g>
                                                <g>
                                                </g>
                                                <g>
                                                </g>
                                                <g>
                                                </g>
                                                <g>
                                                </g>
                                            </svg></button>
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
                                    <svg width="25px" height="25px" viewBox="0 -12 169 169" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0)">
                                            <path d="M159.513 25.5728C156.909 26.2325 154.288 26.7498 151.975 27.2066C151.235 27.353 150.53 27.4913 149.88 27.6246C148.239 25.7212 146.674 23.8769 145.155 22.0857C141.65 17.9593 138.34 14.0629 134.885 10.3309C130.565 5.66503 124.66 2.71732 117.337 1.57004C95.4354 -1.85473 71.9602 12.3998 65.0007 33.3553C64.6725 34.349 64.3201 35.3348 63.9834 36.2806C63.8762 36.5799 63.7714 36.8746 63.669 37.1652L63.5876 37.1738C63.4865 37.1843 63.4137 37.1968 63.3907 37.2007C62.7738 37.0217 62.1684 36.805 61.5779 36.5521C49.3786 31.0014 39.6694 22.1894 31.8977 9.61531C31.5354 9.02854 31.1921 8.42885 30.8475 7.82895C30.2006 6.64451 29.4821 5.50042 28.696 4.40338C27.2212 2.43437 25.5266 1.44153 23.8273 1.52357C22.6886 1.58068 21.0202 2.16134 19.5435 4.60817C17.9557 7.36282 16.6007 10.2451 15.4925 13.2252C10.2327 26.5921 13.1881 39.8628 16.3497 49.9311C16.7172 51.1 17.0631 52.2978 17.5009 53.8153C17.6321 54.2832 17.7798 54.7826 17.9373 55.3247L6.43503 50.3477C6.35014 50.3109 6.25864 50.2921 6.16615 50.2922C6.07367 50.2924 5.98215 50.3114 5.89736 50.3483C5.81256 50.3852 5.73627 50.4393 5.67318 50.5069C5.61008 50.5746 5.56153 50.6544 5.53057 50.7416C3.38106 56.8488 3.47494 61.7498 5.90208 70.1655C9.3636 82.1601 16.5899 91.6704 27.98 99.2091C26.8643 99.9731 25.7694 100.738 24.6924 101.491C18.4408 105.864 12.5357 109.995 5.21033 111.315C3.11005 111.693 1.57947 112.653 0.776763 114.09C-0.0817264 115.629 -0.069911 117.628 0.810895 119.871C1.96539 122.81 3.27019 124.936 4.80012 126.374C8.36341 129.721 11.6261 132.659 15.4755 134.692C27.4287 141.004 41.1914 144.189 56.4611 144.189C58.3325 144.189 60.227 144.142 62.1444 144.047C82.0461 143.051 100.172 134.836 116.017 119.634C132.314 103.998 143.306 83.6572 148.689 59.1736C149.691 54.6173 150.815 50.915 155.318 48.178C160.461 45.0506 164.384 40.0723 166.663 33.78C167.371 31.8221 168.341 29.142 166.387 26.7484C164.413 24.3317 161.837 24.9835 159.513 25.5728ZM14.2311 119.395C15.715 118.81 17.1189 118.257 18.4788 117.684C25.8969 114.66 32.4582 109.859 37.5855 103.704C39.292 101.626 39.9332 100.156 39.7212 98.7877C39.5059 97.3963 38.4125 96.1539 36.0641 94.6325C27.5383 89.1054 21.8393 83.2778 18.1297 76.2983C16.0372 72.3603 14.0512 68.0166 13.6049 62.9159C15.3909 62.758 17.191 62.9052 18.9278 63.3511C21.7717 63.8978 24.7127 64.467 27.6886 62.7684C27.7954 62.7077 27.8837 62.6189 27.9439 62.5117C29.4534 59.8083 28.3377 57.4068 27.3447 55.2888C27.1202 54.8077 26.8944 54.325 26.6968 53.8367C21.941 42.0948 20.4315 32.1908 21.9463 22.6674C22.2415 21.0426 22.6335 19.4369 23.1204 17.859C23.2872 17.2735 23.4591 16.6697 23.6311 16.0396C24.9115 17.0376 25.9779 18.2835 26.7665 19.7026C27.0684 20.1759 27.3814 20.6648 27.7148 21.1256C35.4904 31.8436 44.1311 39.3546 54.1298 44.0875C56.3749 45.1846 58.6932 46.1255 61.0679 46.9032C63.9348 47.8096 65.6308 47.8811 66.9215 47.15C68.1902 46.428 69.0145 44.9317 69.6781 42.1383C71.3058 35.2927 74.0946 29.7448 78.2052 25.1793C87.8121 14.5099 99.4831 9.51036 112.879 10.3229C118.957 10.6911 123.868 12.8518 127.505 16.7767C131.256 20.825 135.134 25.0112 137.908 29.7067C141.489 35.7699 145.775 37.9385 151.815 36.7473C152.367 36.6709 152.926 36.6561 153.481 36.7037L153.796 36.7149C151.958 39.379 149.874 41.033 147.452 41.7563C142.24 43.3105 140.626 47.2735 139.309 51.545C138.571 53.9387 137.851 56.3836 137.153 58.7471C135.165 65.4811 133.11 72.445 130.443 79.0116C121.298 101.524 106.59 117.871 86.7245 127.594C71.4318 135.076 55.9492 136.918 40.7018 133.062C33.9776 131.362 27.4995 129.423 21.4461 127.299C17.2318 125.82 14.4621 123.57 12.56 120.055C13.1396 119.826 13.6942 119.607 14.2311 119.395Z" fill="#fff" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0">
                                                <rect width="168.022" height="143.738" fill="white" transform="translate(0.131226 0.776611)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </li>
                                <li className='footer-social-link'>
                                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                                        viewBox="0 0 512 512" width="25px" height="25px" xmlSpace="preserve" fill='#fff'>
                                        <g>
                                            <g>
                                                <path d="M3.429,166.013V512h124.555V166.013H3.429z M100.306,484.321H31.108V193.692h69.197V484.321z" />
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <path d="M64.389,0C29.71,0,4.531,23.989,4.531,57.047c0,32.504,25.246,57.007,58.737,57.007c17.529,0,32.68-5.73,43.816-16.556
			c10.717-10.434,16.624-24.8,16.61-40.775C122.91,23.327,98.529,0,64.389,0z M87.784,77.658c-5.866,5.703-14.34,8.717-24.517,8.717
			c-18.286,0-31.057-12.056-31.057-29.328c0-17.57,12.934-29.368,32.179-29.368c19.084,0,31.207,11.38,31.626,29.382
			C96.015,65.17,93.095,72.482,87.784,77.658z"/>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <path d="M379.248,166.074c-39.194,0-64.711,12.147-80.901,24.973l-2.335-25.034H183.343V512h110.716V330.228
			c0-7.393,3.193-22.786,4.801-26.246c11.339-24.463,27.061-24.463,51.699-24.463c27.044,0,50.756,25.544,50.756,55.777V512h107.256
			V316.889C508.571,213.268,441.701,166.074,379.248,166.074z M480.892,484.321h-51.898V335.296
			c0-45.235-36.352-83.456-78.398-83.456c-26.801,0-57.666,0-76.438,40.478c-3.933,8.46-7.778,27.922-7.778,37.91v154.093h-55.358
			V193.692h59.96l4.176,41.518h22.043l4.055-6.558c6.514-10.488,26.824-34.889,77.992-34.889
			c49.127,0,101.644,38.522,101.644,123.126V484.321z"/>
                                            </g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                    </svg></li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Home