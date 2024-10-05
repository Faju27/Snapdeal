import React from 'react';
import { Col, Container, Row, Form, Button} from 'react-bootstrap';


const Section3 = () => {
    return (
        <div className='section-3'>
            <Row className='text-center text-black' style={{border:'1px solid lightgrey',paddingLeft:'6%',paddingRight:'6%'}}>
                <Col className='align-content-center p-5' style={{border:'1px solid lightgrey'}}>
                    <a href="">
                        <img width={50} src="https://cdn.iconscout.com/icon/premium/png-512-thumb/secure-payment-5291871-4414261.png?f=webp&w=256" alt="" />
                        <h5>100% SECURE PAYMENTS</h5>
                        <p style={{color:'gray'}}>Moving your card details to much more secured place.</p>
                    </a>
                </Col>
                <Col className='align-content-center p-5' style={{border:'1px solid lightgrey'}}>
                    <a href="">
                        <img width={50} src="https://cdn.iconscout.com/icon/premium/png-512-thumb/trust-pay-6017195-5047760.png?f=webp&w=256" alt="" />
                        <h5>TRUSTPAY</h5>
                        <p style={{color:'gray'}}>100% Payment Protection.Easy Return Policy.</p>
                    </a>
                </Col>
                <Col className='align-content-center p-5' style={{border:'1px solid lightgrey'}}>
                    <a href="">
                        <img width={50} src="https://cdn.iconscout.com/icon/premium/png-512-thumb/help-center-3102355-2583874.png?f=webp&w=256" alt="" />
                        <h5>HELP CENTER</h5>
                        <p style={{color:'gray'}}>Got a question?Look no further.Browse our FAQs or submit your query here.</p>
                    </a>
                </Col>
                <Col className='align-content-center p-5' style={{border:'1px solid lightgrey'}}>
                    <a href="">
                        <img width={50} src="https://cdn.iconscout.com/icon/premium/png-512-thumb/shop-on-the-go-6017194-5047759.png?f=webp&w=256" alt="" />
                        <h5>SHOP ON THE GO</h5>
                        <p style={{color:'gray'}}>Download the app and get exciting app only offers at your fingerprints.</p>
                    </a>
                </Col>
            </Row>
            <Container>
                <Row className='py-5 linkHoverUnderline'>
                    <Col xs='2' className='px-3'>
                        <h6>POLICY INFO</h6>
                        <ul className='list-unstyled'>
                            <li><a href="">Privacy policy</a></li>
                            <li><a href="">Terms of Sale</a></li>
                            <li><a href="">Terms of Use</a></li>
                            <li><a href="">Report abuse & Takedown Policy</a></li>
                            <li><a href="">Know Your BIS Standard</a></li>
                            <li><a href="">Product Under Compulsory BIS Certification</a></li>
                            <li><a href="">FAQ</a></li>
                        </ul>
                    </Col>
                    <Col xs='2' className='px-3'>
                    <h6>COMPANY</h6>
                    <ul className='list-unstyled'>
                        <li><a href="">Impact@Snapdeal</a></li>
                        <li><a href="">Careers</a></li>
                        <li><a href="">Blog</a></li>
                        <li><a href="">Sitemap</a></li>
                        <li><a href="">Contact Us</a></li>
                    </ul>
                    </Col>
                    <Col xs='2' className='px-3'>
                    <h6>SNAPDEAL BUSINESS</h6>
                    <ul className='list-unstyled'>
                        <li><a href="">Shopping App</a></li>
                        <li><a href="">Sell on Snapdeal</a></li>
                        <li><a href="">Media Enquiries</a></li>
                    </ul>
                    </Col>
                    <Col xs='2' className='px-3'>
                    <h6>POPULAR LINKS</h6>
                    <ul className='list-unstyled'>
                        <li><a href="">Lehenga</a></li>
                        <li><a href="">Kid's Clothing</a></li>
                        <li><a href="">Sarees</a></li>
                        <li><a href="">Winter Wear</a></li>
                    </ul>
                    </Col>
                    <Col xs='3' className='px-3'>
                        <h6>SUBSCRIBE</h6><br />
                        <Form className='col-7 d-flex' >
                            <Col xs="12">
                                <Form.Control
                                type='email'
                                placeholder="Your email address"
                                style={{borderRadius:'0%',height:'35px',backgroundColor:'lightgrey'}}
                                />
                            </Col>
                            <Col xs="">
                                <Button type="submit" className=' border-0 px-3' style={{borderRadius:'0%',background:'rgb(47, 46, 46)',height:'35px'}}>
                                    <a>SUBSCRIBE</a>
                                </Button>
                            </Col>
                        </Form><br />
                        <p style={{color:'gray',fontSize:'13px'}}>Register now to get updates on promotions and coupons. <a href=""> Or Download App</a></p>
                    </Col>
                </Row>
            </Container>
            <div className='p-4' style={{borderTop:'1px solid lightgrey',borderBottom:'1px solid lightgrey'}}>
                <Container>
                    <Row>
                        <Col xs="5" >
                            <p>PAYMENT</p>
                            <div>
                                <img width={40} className='mx-2' src="https://cdn.iconscout.com/icon/free/png-512/free-visa-icon-download-in-svg-png-gif-file-formats--credit-card-payment-methods-pack-e-commerce-shopping-icons-842905.png?f=webp&w=256" alt="" />
                                <img width={40} className='mx-2' src="https://cdn.iconscout.com/icon/free/png-512/free-amex-logo-icon-download-in-svg-png-gif-file-formats--brandico-font-pack-logos-icons-450518.png?f=webp&w=256" alt="" />
                                <img width={40} className='mx-2' src="https://cdn.iconscout.com/icon/premium/png-512-thumb/mastercard-1822977-1547572.png?f=webp&w=256" alt="" />
                                <img width={60} className='mx-2' src="https://cdn.iconscout.com/icon/free/png-512/free-dinersclub-icon-download-in-svg-png-gif-file-formats--credit-debit-card-bank-payment-methods-vol-2-pack-business-icons-32298.png?f=webp&w=256" alt="" />
                                <img width={30} className='mx-2' src="https://cdn.iconscout.com/icon/premium/png-512-thumb/cash-on-delivery-9082427-7400225.png?f=webp&w=256" alt="" />
                                <img width={60} className='mx-2' src="https://cdn.iconscout.com/icon/free/png-512/free-netbanking-icon-download-in-svg-png-gif-file-formats--credit-debit-bank-transaction-payment-methods-vol-1-pack-business-icons-32270.png?f=webp&w=256" alt="" />
                            </div>
                        </Col>
                        <Col xs="3">
                            <p>CONNECT</p>
                            <div className=' mt-4'>
                                <a href="" className='me-2'><img src="https://i4.sdlcdn.com/img/footer/facebook@4x.png" alt="" height={30}/></a>
                                <a href="" className='mx-2'><img src="https://i1.sdlcdn.com/img/footer/twitter@4x.png" alt="" width={30}/></a>
                                <a href="" className='mx-2'><img src="https://i4.sdlcdn.com/img/footer/instagram@4x.png" alt="" width={30}/></a>
                                <a href="" className='mx-2'><img src="https://i2.sdlcdn.com/img/footer/linkedin@4x.png" alt="" width={30}/></a>
                                <a href="" className='mx-2'><img src="https://i1.sdlcdn.com/img/footer/youtube@4x.png" alt="" width={30}/></a>
                                <a href="" className='mx-2'><img src="https://i4.sdlcdn.com/img/footer/Telegram-Logo_112x112.png" alt="" width={30}/></a>
                                <a href="" className='ms-2'><img src="https://i1.sdlcdn.com/img/footer/whatsapp-logo-112x112.png" alt="" width={30}/></a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default Section3;
