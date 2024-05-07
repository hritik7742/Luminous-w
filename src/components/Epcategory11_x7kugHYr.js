import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Epcategory11_x7kugHYr.css";
import westernimg from "../img/western.png";
import sari from "../img/Sari.png";
import kurtis from "../img/Kurtis.png";

const cardsData = [
    {
        id: 1,
        shapeImageUrl: "https://cdn.easyfrontend.com/pictures/tshirt-abstract.png",
        heading: "Women Western",
        imgUrl: "https://cdn.easyfrontend.com/pictures/child-abstact1.png",
        productsPageUrl: "/products", // Add URL for products page
    },
    {
        id: 2,
        shapeImageUrl:
            "https://cdn.easyfrontend.com/pictures/headphone-abstract.png",
        heading: "Women Ethnic",
        imgUrl: "https://cdn.easyfrontend.com/pictures/child-abstact2.png",
        productsPageUrl: "/products", // Add URL for products page
    },
    {
        id: 3,
        shapeImageUrl: "https://cdn.easyfrontend.com/pictures/shoe-abstract.png",
        heading: "kids collection",
        imgUrl: "https://cdn.easyfrontend.com/pictures/child-abstact.png",
        
    },
];

const Epcategory11_x7kugHYr = () => {
    const navigate = useNavigate(); // Initialize useNavigate

    // Function to handle button click and navigate to products page
    const handleButtonClick = (url) => {
        navigate(url);
    };

    return (
        <section className="ezy__epcategory11_x7kugHYr">
            <Container>
                <Row>
                    <Col xs={12} lg={6}>
                        <Row className="p-0">
                            <Col xs={12}>
                                <div className="ezy__epcategory11_x7kugHYr-card-one d-flex align-items-center position-relative p-4 p-lg-5">
                                    <div className="ezy__epcategory11_x7kugHYr-card-one-shape">
                                        <img src={cardsData[0].shapeImageUrl} alt="" />
                                    </div>
                                    <Row>
                                        <Col xs={8}>
                                            <h1 className="ezy__epcategory11_x7kugHYr-heading">
                                                {cardsData[0].heading}
                                            </h1>
                                            <Button
                                                variant=""
                                                className="ezy__epcategory11_x7kugHYr-btn-one mt-4"
                                                onClick={() => handleButtonClick(cardsData[0].productsPageUrl)}
                                            >
                                                Shop Now
                                            </Button>
                                        </Col>
                                        <Col xs={6}>
                                            <div className="ezy__epcategory11_x7kugHYr-img-one">
                                                <img
                                                    src={westernimg}
                                                    alt=""
                                                    className="img-blocks"
                                                />
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col xs={12} className="mt-4">
                                <div className="ezy__epcategory11_x7kugHYr-card-two d-flex align-items-center position-relative p-4 p-lg-5">
                                    <div className="ezy__epcategory11_x7kugHYr-card-one-shape">
                                        <img src={cardsData[1].shapeImageUrl} alt="" />
                                    </div>
                                    <div className="ezy__epcategory11_x7kugHYr-card-two-circle1">
                                        <img
                                            src="https://cdn.easyfrontend.com/pictures/circle-abstract.png"
                                            alt=""
                                        />
                                    </div>
                                    <div className="ezy__epcategory11_x7kugHYr-card-two-circle2">
                                        <img
                                            src="https://cdn.easyfrontend.com/pictures/circle-abstract.png"
                                            alt=""
                                        />
                                    </div>
                                    <Row>
                                        <Col xs={8}>
                                            <h1 className="ezy__epcategory11_x7kugHYr-heading">
                                                {cardsData[1].heading}
                                            </h1>
                                            <Button
                                                variant=""
                                                className="ezy__epcategory11_x7kugHYr-btn-two mt-4"
                                                onClick={() => handleButtonClick(cardsData[1].productsPageUrl)}
                                            >
                                                Shop Now
                                            </Button>
                                        </Col>
                                        <Col xs={8}>
                                            <div className="ezy__epcategory11_x7kugHYr-img-one">
                                                <img
                                                    src={sari}
                                                    alt=""
                                                    className="img-blocks"
                                                />
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} lg={6} className="mt-5 mt-lg-0">
                        <div className="ezy__epcategory11_x7kugHYr-card-three d-flex align-items-center position-relative p-4 p-lg-5">
                            <div className="ezy__epcategory11_x7kugHYr-card-three-shape">
                                <img src={cardsData[2].shapeImageUrl} alt="" />
                            </div>
                            <Row>
                                <Col xs={8}>
                                    <h1 className="ezy__epcategory11_x7kugHYr-heading">
                                        {cardsData[2].heading}
                                    </h1>
                                    <Button
                                        variant=""
                                        className="ezy__epcategory11_x7kugHYr-btn-three mt-4"
                                        onClick={() => handleButtonClick(cardsData[2].productsPageUrl)}
                                    >
                                        Upcoming ...
                                    </Button>
                                </Col>
                                <Col xs={6}>
                                    <div className="ezy__epcategory11_x7kugHYr-img-three">
                                        <img
                                            src={cardsData[2].imgUrl}
                                            alt=""
                                            className="img-fluid"
                                        />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Epcategory11_x7kugHYr;
