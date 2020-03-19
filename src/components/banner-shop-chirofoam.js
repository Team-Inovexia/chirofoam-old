import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import {Link} from 'react-scroll'
import shop_banner from "../assets/img/Chirofoam_Home-jumping.png"

const Banner = () => (
	<section>
		<Container>
			<Row className="py-sm-5 py-4">
				<Col md="7">
					<span className="erbaum-bold color-primary space-1">SHOP</span>
					<h2 className="shop-banner-title erbaum-bold color-primary">CHIROFOAM</h2>
					<p className="cta mt-0 pt-sm-5 pt-lg-5 pt-xl-5">
            <Link activeClass="active" className="btn-cta color-primary erbaum-bold space-1" to="product" spy={true} hashSpy={true} smooth={true} duration={250}>BUY NOW</Link>
					</p>
				</Col>
				<Col md="5">
					<img src={shop_banner} alt="shop_banner" width="100%"/>
				</Col>
			</Row>
		</Container>
	</section>
)

export default Banner;
