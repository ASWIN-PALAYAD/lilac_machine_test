import React from 'react'
import Wrapper from '../assets/wrappers/FooterWrapper'
import logo from '../assets/images/logo.png'
import footerHeadphone from '../assets/images/footerHeadphone.png'
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import AppleIcon from '@mui/icons-material/Apple';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const Footer = () => {
    return (
        <Wrapper>
            <div className="Container">
                <div className="Left">
                    <div className="Logo">
                        <img src={logo} alt="" />
                    </div>
                    <p className="Discription">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    </p>
                    <div className="SocialMediaIcons">
                        <div className='icons'><YouTubeIcon /></div>
                        <div className='icons'><LinkedInIcon /></div>
                        <div className='icons'><TwitterIcon /></div>
                        <div className='icons'><FacebookIcon /></div>
                        <div className='icons'><InstagramIcon /></div>

                    </div>
                </div>

                <div className="Center">
                    <div className='Usefull_links'>
                        <b><p className='Title' > QUICK LINKS</p></b>
                        <ul className="List">
                            <li className="ListItem">Products</li>
                            <li className="ListItem">Clasifieds</li>
                            <li className="ListItem">Contact us</li>
                            <li className="ListItem">Login</li>
                            <li className="ListItem">Sign Up</li>

                        </ul>
                    </div>
                    <div className='Usefull_links'>
                        <b><p className='Title' > CUSTOMER AREA</p></b>
                        <ul className="List">
                            <li className="ListItem">My Account </li>
                            <li className="ListItem">Order</li>
                            <li className="ListItem">Tracking List</li>
                            <li className="ListItem">Terms</li>
                            <li className="ListItem">Privacy Policy</li>
                            <li className="ListItem">Return Policy</li>
                            <li className="ListItem">My Cart</li>

                        </ul>
                    </div>
                    <div className='Usefull_links'>
                        <b><p className='Title' >Vendor AREA</p></b>
                        <ul className="List">
                            <li className="ListItem">Partner With us </li>
                            <li className="ListItem">Training </li>
                            <li className="ListItem">Producers</li>
                            <li className="ListItem">Terms</li>
                            <li className="ListItem">Privacy Policy</li>

                        </ul>
                    </div>

                </div>

                <div className="Right">
                    <b><p className='Title' >CONTACT</p></b>
                    <div className="contact_details">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
                    </div>
                    <div className="enquiry">
                        <div className="enquiry_image">
                            <img style={{ width: '30px' }} src={footerHeadphone} alt="" />
                        </div>
                        <div className="enquiry_number">
                            <h6>Have any question?</h6>
                            <span>+ 123 456 789</span>
                        </div>
                        <div className="enquiry_button">
                            <button>CHAT</button>
                        </div>
                    </div>
                    <div className="PlayStore">
                        <div className="AppStore">
                            <div className="AppImage">
                                <AppleIcon />
                            </div>
                            <div className="AppDetails">
                                <p>Download on the</p>
                                <h5>App Store</h5>
                            </div>

                        </div>

                        <div className="AppStore">
                            <div className="AppImage">
                                <PlayArrowIcon />
                            </div>
                            <div className="AppDetails">
                                <p>GET IT ON</p>
                                <h5 >Google Play</h5>
                            </div>
                        </div>
                    </div>

                </div>

            </div>



        </Wrapper>
    )
}

export default Footer