import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faHeart,
	faSearch,
	faShoppingCart,
	faStar,
	faStarHalfAlt,
} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import { Col, Row, Container, Button } from "react-bootstrap";
import "./EPGrid11_kMIo8ob7.css";

const products = [
	{
		id: 1,
		imageUrl: "https://cdn.easyfrontend.com/pictures/ecommerce/grid_9_3.png",
		discount: -5,
		title: "Baby Truck",
		rating: 4.5,
		price: 676,
	},
	{
		id: 2,
		imageUrl: "https://cdn.easyfrontend.com/pictures/ecommerce/grid_9_4.png",
		discount: -5,
		title: "Baby Truck",
		rating: 3.5,
		price: 676,
	},
	{
		id: 3,
		imageUrl: "https://cdn.easyfrontend.com/pictures/ecommerce/grid_9_5.png",
		discount: -5,
		title: "Baby Truck",
		rating: 4.5,
		price: 676,
	},
	{
		id: 4,
		imageUrl: "https://cdn.easyfrontend.com/pictures/ecommerce/grid_9_6.png",
		discount: -5,
		title: "Baby Truck",
		rating: 4,
		price: 676,
	},
];

const socialData = [
	{ icon: faHeart },
	{ icon: faShoppingCart },
	{ icon: faSearch },
];

const Product = ({ product }) => (
	<Col md={6} lg={3} className="mt-5">
		<div className="ezy__epgrid11_kMIo8ob7-item">
			<div className="ezy__epgrid11_kMIo8ob7-img position-relative p-5 w-100">
				{product.discount && (
					<h6 className="ezy__epgrid11_kMIo8ob7-item-discount px-4 py-2 mb-0">
						{product.discount < 0
							? `-$${Math.abs(product.discount)}`
							: `+$${product.discount}`}
					</h6>
				)}
				<img src={product.imageUrl} alt="" className="img-fluid" />
				<div className="ezy__epgrid11_kMIo8ob7-overlay d-flex align-items-center justify-content-center">
					<div className="ezy__epgrid11_kMIo8ob7-item-overlay d-flex align-items-center justify-content-center rounded py-1 px-2">
						{socialData.map((item, i) => (
							<Button variant="" className="ezy__epgrid11_kMIo8ob7-icon" key={i}>
								<FontAwesomeIcon icon={item.icon} />
							</Button>
						))}
					</div>
				</div>
			</div>
			<div className="ezy__epgrid11_kMIo8ob7-content p-4">
				<div className="d-flex justify-content-between align-items-center">
					<div>
						<a href="#!">
							<h6 className="mb-1">{product.title}</h6>
						</a>
						<span className="ezy__epgrid11_kMIo8ob7-rating">
							{Array.from(
								{ length: Math.floor(product.rating) },
								(_, index) => (
									<FontAwesomeIcon key={index} icon={faStar} className="me-1" />
								)
							)}
							{product.rating % 1 !== 0 && (
								<FontAwesomeIcon icon={faStarHalfAlt} className="me-1" />
							)}
						</span>
					</div>
					<div>
						<p className="mb-0 fs-3 fw-bold">${product.price}</p>
					</div>
				</div>
			</div>
		</div>
	</Col>
);

Product.propTypes = {
	product: PropTypes.object.isRequired,
};

const EPGrid11_kMIo8ob7 = () => (
	<section className="ezy__epgrid11_kMIo8ob7">
		<Container>
			<Row>
				<h2 className="ezy__epgrid11_kMIo8ob7-heading">Trending Now</h2>
				{products.map((product) => (
					<Product key={product.id} product={product} />
				))}
			</Row>
		</Container>
	</section>
);

export default EPGrid11_kMIo8ob7;

