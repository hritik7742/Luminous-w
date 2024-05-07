import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faAward,
	faRibbon,
	faShippingFast,
} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import "./Incentives4_XFFwViqY.css";

const incentives = [
	{
		icon: faAward,
		title: "Free Shipping",
		desc: "Enjoy zero shipping fees on all orders, making your shopping budget-friendly.",
	},
	{
		icon: faShippingFast,
		title: "Cash on Delivery",
		desc: "Pay for your order upon delivery for ultimate convenience and trust.",
	},
	{
		icon: faRibbon,
		title: "Easy Exchanges",
		desc: "Swap your items effortlessly for the perfect fit and satisfaction.",
	},
];

const IncentiveItem = ({ item }) => (
	<Card className="border-0 bg-transparent">
		<Card.Body className="p-4">
			<div className="ezy__incentives4_XFFwViqY-icon">
				<FontAwesomeIcon icon={item.icon} />
			</div>
			<h3 className="mt-2 fs-4">{item.title}</h3>
			<p>{item.desc}</p>
		</Card.Body>
	</Card>
);

IncentiveItem.propTypes = {
	item: PropTypes.object.isRequired,
};

const Incentives4_XFFwViqY = () => {
	return (
		<section className="ezy__incentives4_XFFwViqY" id="Why-us">
			<Container>
				<Row className="justify-content-center text-center">
					<Col xs={12} md={8}>
						<h1 className="ezy__incentives4_XFFwViqY-heading mb-4">
							We created the ultimate style experience
						</h1>
						<p className="mb-5">
						Transform your style with our curated collections. Discover versatile,
						 on-trend pieces that empower your fashion journey
						</p>
					</Col>
				</Row>
				<Card className="ezy__incentives4_XFFwViqY-card border-0 p-4">
					<Row className="text-center">
						{incentives.map((item, i) => (
							<Col xs={12} sm={6} lg={4} className="mt-4" key={i}>
								<IncentiveItem item={item} />
							</Col>
						))}
					</Row>
				</Card>
			</Container>
		</section>
	);
};

export default Incentives4_XFFwViqY;

