import React from 'react';
import { Button, Card, Carousel, Col, Container, Form, Row } from 'react-bootstrap';
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import Aside from './Aside';

const Section1 = () => {
    return (
        <div className='bg-body-secondary py-2 flex-shrink-1'>
            <Container>
                <Row className='position-relative overflow-hidden'>
                    <Col xs="4" className='bg-white p-0 col-md-3 col-lg-2' style={{height:'900px'}}>
                        <Aside />
                    </Col>


                    <Col xs="8" className='col-md-9 col-lg-10'>
                        <Row className='row-gap-3 ps-3'>
                            <Col xs="9" className='bg-dark col-12 col-xl-9 px-0' style={{height:'365px',border:'1px solid lightgrey',borderRadius:"5px",overflow:"hidden"}}>
                                <div>
                                    <Carousel>
                                        <Carousel.Item interval={2000}>
                                            <img src="https://n3.sdlcdn.com/imgs/k/s/i/utility-86032.jpg" alt=""/>
                                        </Carousel.Item>
                                        <Carousel.Item interval={2000} active>
                                            <img src="https://n2.sdlcdn.com/imgs/k/y/b/ONDC_WEB_BANNER_12oct_f3080-c117c.jpg" height={"280px"} width={"100%"} alt="" />
                                        </Carousel.Item>
                                        <Carousel.Item interval={2000}>
                                            <img src="https://n1.sdlcdn.com/imgs/k/y/b/web_home_903_new_12_13ad3-d671e.jpg" alt="" />
                                        </Carousel.Item>
                                        <Carousel.Item interval={2000}>
                                            <img src="https://n2.sdlcdn.com/imgs/k/x/z/DESKTOPBOOKBANNER-83d8b.jpg" alt="" />
                                        </Carousel.Item>
                                        <Carousel.Item interval={2000}>
                                            <img src="https://n2.sdlcdn.com/imgs/k/x/g/sportshoesbanner03july-85e66.jpg" alt="" />
                                        </Carousel.Item>
                                        <Carousel.Item interval={2000}>
                                            <img src="https://n2.sdlcdn.com/imgs/k/s/i/ethnicwear-ef4d9.jpg" alt="" />
                                        </Carousel.Item>
                                        <Carousel.Item interval={2000}>
                                            <img src="https://n3.sdlcdn.com/imgs/k/s/i/cookware-bc6ef.jpg" alt="" />
                                        </Carousel.Item>
                                        <Carousel.Item interval={2000}>
                                            <img src="https://n4.sdlcdn.com/imgs/k/s/i/bedsheets0512-a7f6e.jpg" alt="" />
                                        </Carousel.Item>
                                    </Carousel>
                                </div>
                                <div className='bg-white d-flex justify-content-between text-center align-items-center' style={{height:'25%',color:"grey",fontSize:"13px",cursor:'pointer'}}>
                                    <div className='col-2 py-4 active'>HOME UTILITY</div>
                                    <div className='col-2 py-4 active'>ONDC Store</div>
                                    <div className='col-2 py-4 active'>BOBCARD</div>
                                    <div className='col-2 py-4 active text-truncate'>India @100 : Envisioning Tomorrow’s Economic Powerhouse</div>
                                    <div className='col-2 py-4 active'>Sports Footwear</div>
                                    <div className='col-2 py-4 active'>ETHNIC WEAR</div>
                                    <div className='col-2 py-4 active'>KITCHENWARE</div>
                                    <div className='col-2 py-4 active'>HOME FURNISHING</div>
                                </div>
                            </Col>

                            <Col xs="3">
                                <div className='bg-white ms-2 p-3 align-content-center text-center position-relative d-none d-xl-block' style={{height:'100%',width:'100%',border:'1px solid lightgrey',borderRadius:"5px"}}>
                                    <img width={125} src="https://cdn.iconscout.com/icon/premium/png-512-thumb/location-2154684-1809544.png?f=webp&w=256" alt="" />
                                    <p style={{fontSize:"13px",color:'grey'}}>Your Delivery Pincode</p>
                                    <p style={{fontSize:"13px"}}>Enter your pincode to check availability and faster delivery options</p>
                                    <Form className='col-12 px-2' >
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter Pincode"
                                            required
                                            className='bg-body-tertiary'
                                            />
                                        <Col xs="12" className='d-flex justify-content-between'>
                                            <Button type="submit" className=' border-0 rounded-1 px-4 mt-3' style={{background:'rgb(47, 46, 46)'}}>SUBMIT</Button>
                                            <Button type="button" className='border-0 rounded-1 mt-3 bg-body-tertiary' style={{color:'grey'}}>NEXT

                                            <div className='top-0 h-100 position-absolute w-100 p-1' id='display' style={{border:'1px solid lightgrey',borderRadius:"5px",left:"0px",}}>
                                                <img width={"100%"} src="https://blog.monetizedeal.com/wp-content/uploads/2024/04/snapdeal-affiliate-program.png" alt="" />
                                                <p style={{fontSize:"13px",marginTop:'15px'}}>Login to your <br /> Snapdeal account</p>
                                                <Button type="submit" className=' border-0 rounded-0 px-5 mt-3' style={{background:'rgb(47, 46, 46)'}}>Login</Button>
                                                <Col xs='12' className='d-flex mt-5 justify-content-between px-3'>
                                                    <p style={{fontSize:'13px',paddingTop:"10px"}}>New user?<a href="" className='text-primary'>Register</a></p>
                                                    <Button type="button" className='border-0 rounded-0 bg-body-tertiary h-100' style={{color:'grey'}}>NEXT</Button>
                                                </Col>
                                            </div>

                                            </Button>
                                        </Col>
                                    </Form>
                                </div>
                            </Col>

                            <Col xs="12" className=' px-0 position-relative' style={{height:"425px"}}>
                                <div className='my-4 mx-3'><h5>TRENDING PRODUCTS</h5></div>
                                <div className='h-100 d-flex overflow-x-scroll overflow-y-hidden gap-1 p-2'>
                                    <a href="" className='col-12 col-sm-6 col-lg-3' id='first'>
                                        <Card className='h-100 border-0 p-3 shadows' style={{fontSize:"15px",color:'grey'}}>
                                            <Card.Img  src='https://t1.sdlcdn.com/imgs/i/n/r/large/bhawna-collection-Loard-Shiv-Trishul-SDL890408077-1-86933.jpeg'/>
                                            <Card.Body>
                                                <Card.Text className='text-truncate'>Shiv Trishul Damru Gold-plated Locket with Rudraksha Mala</Card.Text>
                                                <div>
                                                    <span style={{textDecoration:'line-through'}}>Rs 599/-</span>
                                                    <span style={{color:'black'}}>Rs 105/-</span>
                                                    <span style={{fontSize:"13px",border:'1px solid grey'}} className='mx-2 p-1'>82% OFF</span>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </a>
                                    <a href="" className='col-12 col-sm-6 col-lg-3'>
                                        <Card className='h-100 border-0 p-3 shadows' style={{fontSize:"15px",color:'grey'}}>
                                            <Card.Img  src='https://t3.sdlcdn.com/imgs/i/u/v/large/HeelSocks1-aeb5a.jpg'/>
                                            <Card.Body>
                                                <Card.Text>Stay Healthy - Foot Protector (Free Size)</Card.Text>
                                                <div>
                                                    <span style={{textDecoration:'line-through'}}>Rs 899/-</span>
                                                    <span style={{color:'black'}}>Rs 96/-</span>
                                                    <span style={{fontSize:"13px",border:'1px solid grey'}} className='mx-2 p-1'>89% OFF</span>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </a>
                                    <a href="" className='col-12 col-sm-6 col-lg-3'>
                                        <Card className='h-100 border-0 p-3 shadows' style={{fontSize:"15px",color:'grey'}}>
                                            <Card.Img  src='https://n3.sdlcdn.com/imgs/k/z/a/Maxbell-USB-Rechargeable-Electronic-Flameless-SDL532175834-1-47b18.jpg'/>
                                            <Card.Body>
                                                <Card.Text style={{marginTop:"40px"}}>Maxbell USB Rechargeable Electronic Flameless Lighter</Card.Text>
                                                <div>
                                                    <span style={{textDecoration:'line-through'}}>Rs 899/-</span>
                                                    <span style={{color:'black'}}>Rs 172/-</span>
                                                    <span style={{fontSize:"13px",border:'1px solid grey'}} className='mx-2 p-1'>81% OFF</span>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </a>
                                    <a href="" className='col-12 col-sm-6 col-lg-3'>
                                        <Card className='h-100 border-0 p-3 shadows' style={{fontSize:"15px",color:'grey'}}>
                                            <Card.Img  src='https://n1.sdlcdn.com/imgs/j/d/1/Aadi-Black-Casual-Shoes-SDL461191496-3-fa710.jpeg'/>
                                            <Card.Body>
                                                <Card.Text>Aadi Black Casual Shoes</Card.Text>
                                                <div>
                                                    <span style={{textDecoration:'line-through'}}>Rs 999/-</span>
                                                    <span style={{color:'black'}}>Rs 331/-</span>
                                                    <span style={{fontSize:"13px",border:'1px solid grey'}} className='mx-2 p-1'>67% OFF</span>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </a>
                                    <a href="" className='col-12 col-sm-6 col-lg-3'>
                                        <Card className='h-100 border-0 p-3 shadows' style={{fontSize:"15px",color:'grey'}}>
                                            <Card.Img  src='https://n2.sdlcdn.com/imgs/k/w/k/Bentag-kitchenware-Vegetable-Fruit-Clever-SDL841893040-1-1e2e8.jpg'/>
                                            <Card.Body>
                                                <Card.Text className='text-truncate'>Bentag kitchenware Vegetable & Fruit Clever Cutter Stainless Steel Vegetable Scissor</Card.Text>
                                                <div>
                                                    <span style={{textDecoration:'line-through'}}>Rs 499/-</span>
                                                    <span style={{color:'black'}}>Rs 139/-</span>
                                                    <span style={{fontSize:"13px",border:'1px solid grey'}} className='mx-2 p-1'>72% OFF</span>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </a>
                                    <a href="" className='col-12 col-sm-6 col-lg-3'>
                                        <Card className='h-100 border-0 p-3 shadows' style={{fontSize:"15px",color:'grey'}}>
                                            <Card.Img  src='https://n1.sdlcdn.com/imgs/k/e/u/Veirdo-100-Cotton-Regular-Fit-SDL051246309-1-51a91.jpg'/>
                                            <Card.Body>
                                                <Card.Text className='text-truncate'>Veirdo - Multicolor Cotton Regular Fit Men's T-Shirt ( Pack of 1 )</Card.Text>
                                                <div>
                                                    <span style={{textDecoration:'line-through'}}>Rs 1,199/-</span>
                                                    <span style={{color:'black'}}>Rs 291/-</span>
                                                    <span style={{fontSize:"13px",border:'1px solid grey'}} className='mx-2 p-1'>76% OFF</span>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </a>
                                    <a href="" className='col-12 col-sm-6 col-lg-3'>
                                        <Card className='h-100 border-0 p-3 shadows' style={{fontSize:"15px",color:'grey'}}>
                                            <Card.Img  src='https://n3.sdlcdn.com/imgs/h/r/s/Shiv-Shakti-Kavach-5-Mukhi-SDL772359305-1-3b306.jpeg'/>
                                            <Card.Body>
                                                <Card.Text className='text-truncate'>Shiv Shakti Kavach 5 Mukhi Rudraksha Mala With Shiv Trishul & Damru Brass Necklace Brass Brass Pendant Set</Card.Text>
                                                <div>
                                                    <span style={{textDecoration:'line-through'}}>Rs 599/-</span>
                                                    <span style={{color:'black'}}>Rs 176/-</span>
                                                    <span style={{fontSize:"13px",border:'1px solid grey'}} className='mx-2 p-1'>71% OFF</span>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </a>
                                    <a href="" className='col-12 col-sm-6 col-lg-3' id='second'>
                                        <Card className='h-100 border-0 p-3 shadows' style={{fontSize:"15px",color:'grey'}}>
                                            <Card.Img  src='https://n3.sdlcdn.com/imgs/k/o/6/Battlestar-Tummy-Trimmer-Pack-of-SDL774194847-1-3aa54.jpeg'/>
                                            <Card.Body>
                                                <Card.Text>Battlestar - Tummy Trimmer ( Pack of 1 )</Card.Text>
                                                <div>
                                                    <span style={{textDecoration:'line-through'}}>Rs 1,199/-</span>
                                                    <span style={{color:'black'}}>Rs 353/-</span>
                                                    <span style={{fontSize:"13px",border:'1px solid grey'}} className='mx-2 p-1'>71% OFF</span>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </a>
                                </div>
                                <div className='position-absolute h-100  top-0 start-0 align-content-center mx-3'>
                                    <a href="#first"><IoIosArrowDropleft size={50} fill='grey'/></a>
                                </div>
                                <div className='position-absolute h-100 top-0 end-0 align-content-center mx-3' >
                                    <a href="#second"><IoIosArrowDropright size={50} fill='grey'/></a>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Section1;
