import React from "react";
import { Col, Container, Form, Nav, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faLinkedin,
	faPinterest,
	faWordpress,
	faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import PropTypes from "prop-types";
import "./Footer8_CgGzYWoW.css";
import brandlogo from "../img/luminousLogo.png"

const quickLinks = [
	{ value: "Terms & Conditions", href: "#!" },
	{ value: "Privacy Policy", href: "#!" },
	{ value: "Refund Policy", href: "#!" },
];

const socialMedia = [
	{ value: "Facebook", href: "#!" },
	{ value: "Instagram", href: "#!" },
	{ value: "LinkedIn", href: "#!" },
	{ value: "Twitter", href: "#!" },
];

const language = [
	{
		value: "en",
		text: "Hindi , English",
	},
	{
		value: "bn",
		text: "UK Dollars $",
	},
];

const currency = [
	{
		value: "en",
		text: "India",
	},
	{
		value: "bn",
		text: "Bangla",
	},
];

const sociaIcons = [
	{
		icon: faLinkedin,
		href: "#!",
	},
	{
		icon: faTwitter,
		href: "#!",
	},
	{
		icon: faPinterest,
		href: "#!",
	},
	{
		icon: faWordpress,
		href: "#!",
	},
];

const QuickLinks = ({ qLink }) => (
	<li>
		<a href={qLink.href}>{qLink.value}</a>
	</li>
);
QuickLinks.propTypes = {
	qLink: PropTypes.object.isRequired,
};

const SocialMedia = ({ media }) => (
	<li>
		<a href={media.href}>{media.value}</a>
	</li>
);
SocialMedia.propTypes = {
	media: PropTypes.object.isRequired,
};

const LanguageItem = ({ language }) => (
	<option value={language.value}>{language.text}</option>
);
LanguageItem.propTypes = {
	language: PropTypes.object.isRequired,
};

const CurrencyItem = ({ currency }) => (
	<option value={currency.value}>{currency.text}</option>
);
CurrencyItem.propTypes = {
	currency: PropTypes.object.isRequired,
};

const NavigationItem = ({ item }) => (
	<a className="ms-2" href={item.href}>
		{item.value}
	</a>
);

NavigationItem.propTypes = {
	item: PropTypes.object.isRequired,
};

const SocialItem = ({ social }) => (
	<li>
		<a href={social.href}>
			<FontAwesomeIcon icon={social.icon} />
		</a>
	</li>
);

SocialItem.propTypes = {
	social: PropTypes.object.isRequired,
};

const Shape = () => (
	<svg
		className="ezy__footer8_CgGzYWoW-shape position-absolute top-0 start-0"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 1920 45"
		preserveAspectRatio="none"
	>
		<path
			d="M 959 45 C 1279.067 45 1599.4 45.667 1920 0 L 0 0 C 319.267 45.667 638.933 45 959 45 z"
			fill="currentColor"
			fillRule="evenodd"
		/>
	</svg>
);

const Footer8_CgGzYWoW = () => {
	return (
		<section className="ezy__footer8_CgGzYWoW">
			<Shape />

			<Container>
				<Row className="text-center text-sm-start">
					<Col lg={3} className="mt-4 mt-lg-0">
						<img
							src={brandlogo}
							height="35"
							alt=""
						/>
						<p className="mt-3 mb-2 opacity-50">Shop at best price</p>
						<div>
							<Nav className="ezy__footer8_CgGzYWoW-social d-inline-flex mt-2">
								{sociaIcons.map((social, i) => (
									<SocialItem social={social} key={i} />
								))}
							</Nav>
						</div>
					</Col>
					<Col lg={9}>
						<Row>
							<Col sm={4} className="mt-4 mt-lg-0">
								<p className="opacity-25 fw-normal text-uppercase small mb-2">
									Quick Links
								</p>
								<Nav className="flex-column ezy__footer8_CgGzYWoW-quick-links">
									{quickLinks.map((qLink, i) => (
										<QuickLinks qLink={qLink} key={i} />
									))}
								</Nav>
							</Col>
							<Col sm={4} className="mt-4 mt-lg-0">
								<h6 className="opacity-25 fw-normal text-uppercase small">
									Social Media
								</h6>
								<Nav className="flex-column ezy__footer8_CgGzYWoW-quick-links">
									{socialMedia.map((media, i) => (
										<SocialMedia media={media} key={i} />
									))}
								</Nav>
							</Col>
							<Col sm={4} className="mt-4 mt-lg-0">
								<h6 className="opacity-25 fw-normal text-uppercase small">
									Language
								</h6>
								<Form.Select name="language" className="px-4">
									{language.map((language, i) => (
										<LanguageItem language={language} key={i} />
									))}
								</Form.Select>
								<h6 className="opacity-25 fw-normal text-uppercase small mt-4">
									Country
								</h6>
								<Form.Select name="language" className="px-4">
									{currency.map((currency, i) => (
										<CurrencyItem currency={currency} key={i} />
									))}
								</Form.Select>
							</Col>
						</Row>

						<div className="mt-4 opacity-50 ezy__footer8_CgGzYWoW-copyright">
							<span>Copyright &copy; Luminous wear, All rights reserved</span>
							{quickLinks.map((item, i) => (
								<NavigationItem item={item} key={i} />
							))}
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Footer8_CgGzYWoW;

