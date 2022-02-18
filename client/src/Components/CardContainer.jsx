import React from 'react'
import {Card, Button} from 'react-bootstrap'
import "../Styles/CardContainer.css"

function CardContainer() {
    return (
        <>
            <div className="cardContainer p-3">
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-3 col-md-4 col-sm-12 m-3 ">
                        <Card.Body className="card">
                            <Card.Title className='cardTitle'><strong>Card Title</strong></Card.Title>
                            <Card.Text className='cardDescription'>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button className='cardButton' variant="outline-light">Edit</Button>
                        </Card.Body>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-12 m-3 ">
                        <Card.Body className="card">
                            <Card.Title className='cardTitle'><strong>Card Title</strong></Card.Title>
                            <Card.Text className='cardDescription'>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button className='cardButton' variant="outline-light">Edit</Button>
                        </Card.Body>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-12 m-3 ">
                        <Card.Body className="card" >
                            <Card.Title className='cardTitle'><strong>Card Title</strong></Card.Title>
                            <Card.Text className='cardDescription'>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button className='cardButton' variant="outline-light">Edit</Button>
                        </Card.Body>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-12 m-3 ">
                        <Card.Body className="card">
                            <Card.Title className='cardTitle'><strong>Card Title</strong></Card.Title>
                            <Card.Text className='cardDescription'>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button className='cardButton' variant="outline-light">Edit</Button>
                        </Card.Body>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-12 m-3 ">
                        <Card.Body className="card">
                            <Card.Title className='cardTitle'><strong>Card Title</strong></Card.Title>
                            <Card.Text className='cardDescription'>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button className='cardButton' variant="outline-light">Edit</Button>
                        </Card.Body>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-12 m-3 ">
                        <Card.Body className="card">
                            <Card.Title className='cardTitle'><strong>Card Title</strong></Card.Title>
                            <Card.Text className='cardDescription'>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button className='cardButton' variant="outline-light">Edit</Button>
                        </Card.Body>
                    </div>
                    
                    



                </div>

            </div>
        </>

    )
}
export default CardContainer;