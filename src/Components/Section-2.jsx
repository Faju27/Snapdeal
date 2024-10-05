import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Section2 = () => {
    return (
        <div className='bg-body-secondary py-5'>
            <Container>
                <Row className='bg-white justify-content-center ' style={{gap:'5%' ,background:'url(https://i1.sdlcdn.com/img/leaves1x.png)',backgroundRepeat:'no-repeat',backgroundPositionX:'right'}}>
                    <Col className='col-3 col-md-4'><img src="https://i1.sdlcdn.com/img/appScreenshot@1x.png" alt="" width={'100%'} /></Col>
                    <Col className='col-8 col-md-4 align-content-center' style={{lineHeight:'35px'}} >
                        <h1>Download Snapdeal App Now</h1>
                        <p style={{color:'gray'}}>Fast, Simple & Delightful. <br />All it takes is 30 seconds to Download.</p>
                        <a href="" className='me-3'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiNQc5CapoSJE3sujvojLNNXipoAGDZYgUWw&s" alt="" width={125}/></a>
                        <a href=""><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV4qAyl3_O4SLbPQPAQU0FWSaR6UFullnshw&s" alt="" width={125}/></a>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Section2;
