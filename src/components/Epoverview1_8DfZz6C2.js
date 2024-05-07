import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShoppingCart, faStar } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import "./ProductDetail.css";

// Sample product data (in a real app, this data should be fetched from an API)
const sampleProducts = [
    {
        id: 1,
        img: "https://cdn.easyfrontend.com/pictures/ecommerce/ep-grid_7_1.jpg",
        title: "Luxury Tassel Small Messenger Bag For Lingge",
        price: "225.00",
        rating: "4.1",
        description: "This luxury tassel small messenger bag is perfect for any occasion. It features a stylish design with tassels and is made with high-quality materials.",
    },
    {
        id: 2,
        img: "https://cdn.easyfrontend.com/pictures/ecommerce/ep-grid_7_2.jpg",
        title: "R WHITES LEMONADE 24X330ML CANS",
        price: "12.00",
        rating: "4.9",
        description: "Enjoy a refreshing can of R WHITES LEMONADE. Perfect for hot summer days or as a mixer for your favorite cocktail.",
    },
    // More products here...
    {
        id: 3,
        img: "https://cdn.easyfrontend.com/pictures/ecommerce/ep-grid_7_3.jpg",
        title: "New Fashion Smart Watch for Men",
        price: "98.00",
        rating: "4.5",
        description: "This new fashion smart watch is perfect for men who want to stay connected and look stylish. It features a sleek design and a variety of smart functions.",
    },
    {
        id: 4,
        img: "https://cdn.easyfrontend.com/pictures/ecommerce/ep-grid_7_4.jpg",
        title: "Vintage Leather Shoulder Backpack",
        price: "129.00",
        rating: "4.2",
        description: "This vintage leather shoulder backpack is perfect for everyday use. It features a classic design and is made with high-quality leather.",
    },
];

const Epoverview1_8DfZz6C2 = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        // Fetch the product data using the ID from the URL
        const fetchProduct = () => {
            const foundProduct = sampleProducts.find((product) => product.id === parseInt(id));
            if (foundProduct) {
                setProduct(foundProduct);
            } else {
                navigate("/404"); // Redirect to 404 page if product is not found
            }
        };

        fetchProduct();
    }, [id, navigate]);

    if (!product) {
        return null;
    }

    return (
        <Container className="product-detail-page">
            <Row className="mt-5">
                <Col md={6} lg={6}>
                    <img src={product.img} alt={product.title} className="w-100" />
                </Col>
                <Col md={6} lg={6}>
                    <Card className="product-detail-card p-4">
                        <h2>{product.title}</h2>
                        <h4 className="product-price">${product.price}</h4>
                        <div className="product-ratings">
                            <FontAwesomeIcon icon={faStar} className="product-rating-icon me-1" />
                            {product.rating}
                        </div>
                        <p className="product-description">{product.description}</p>
                        <Button variant="primary" className="add-to-cart-btn">
                            Add to Cart
                        </Button>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

Epoverview1_8DfZz6C2.propTypes = {
    id: PropTypes.string.isRequired,
};

export default Epoverview1_8DfZz6C2;
