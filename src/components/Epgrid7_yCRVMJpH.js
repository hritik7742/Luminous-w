import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShoppingCart, faStar } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import "./Epgrid7_yCRVMJpH.css";

// Sample product data
const products = [
    {
        id: 1,
        img: "https://cdn.easyfrontend.com/pictures/ecommerce/ep-grid_7_1.jpg",
        title: "Luxury Tassel Small Messenger Bag For Lingge",
        price: "225.00",
        rating: "4.1",
    },
    {
        id: 2,
        img: "https://cdn.easyfrontend.com/pictures/ecommerce/ep-grid_7_2.jpg",
        title: "R WHITES LEMONADE 24X330ML CANS",
        price: "12.00",
        rating: "4.9",
    },
    // More products here...
    {
        id: 3,
        img: "https://cdn.easyfrontend.com/pictures/ecommerce/ep-grid_7_3.jpg",
        title: "New Fashion Smart Watch for Men",
        price: "98.00",
        rating: "4.5",
    },
    {
        id: 4,
        img: "https://cdn.easyfrontend.com/pictures/ecommerce/ep-grid_7_4.jpg",
        title: "Vintage Leather Shoulder Backpack",
        price: "129.00",
        rating: "4.2",
    },
];

const ProductItem = ({ product }) => {
    const navigate = useNavigate();

    const handleProductClick = () => {
        navigate(`/product/${product.id}`);
    };

    return (
        <Card
            className="ezy__epgrid7_yCRVMJpH-card border-0 p-2"
            onClick={handleProductClick}
        >
            <Card.Body className="position-relative p-0">
                <div className="ezy__epgrid7_yCRVMJpH-fav-icon">
                    <FontAwesomeIcon icon={faHeart} />
                </div>
                <img src={product.img} alt="Product" className="w-100" />
                <h5 className="ezy__epgrid7_yCRVMJpH-ratings">
                    <FontAwesomeIcon icon={faStar} className="ezy__epgrid7_yCRVMJpH-rating me-1" />
                    {product.rating}
                </h5>
            </Card.Body>
            <Card.Body className="text-start px-1">
                <h5 className="ezy__epgrid7_yCRVMJpH-title">{product.title}</h5>
                <div className="ezy__epgrid7_yCRVMJpH-details d-flex justify-content-between align-items-center px-1">
                    <h5 className="ezy__epgrid7_yCRVMJpH-price my-2">${product.price}</h5>
                    <h5 className="ezy__epgrid7_yCRVMJpH-cart">
                        <FontAwesomeIcon icon={faShoppingCart} />
                    </h5>
                </div>
            </Card.Body>
        </Card>
    );
};

ProductItem.propTypes = {
    product: PropTypes.object.isRequired,
};

const Epgrid7_yCRVMJpH = () => {
    return (
        <section className="ezy__epgrid7_yCRVMJpH">
            <Container>
                <h2 className="ezy__epgrid7_yCRVMJpH-heading text-center">Our Products</h2>
                <Row className="ezy__epgrid7_yCRVMJpH-row text-center justify-content-xl-center mt-5">
                    {products.map((product) => (
                        <Col md={6} lg={4} xl={3} className="p-2" key={product.id}>
                            <ProductItem product={product} />
                        </Col>
                    ))}
                </Row>
            </Container>
            <div className="text-center mt-5">
                <Button variant="danger" className="ezy__epgrid7_yCRVMJpH-btn">
                    See All
                </Button>
            </div>
        </section>
    );
};

export default Epgrid7_yCRVMJpH;
