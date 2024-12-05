/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Slider from "react-slick";
function NextArrow({ onClick }) {
	return <button className="slide-arrow fugu--arrow" onClick={onClick}></button>;
}

function PrevArrow({ onClick }) {
	return <button className="slide-arrow prev-arrow" onClick={onClick}></button>;
}

export default function CardSliderOne() {
	const settings = {
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
		autoplay: false,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
		responsive: [
			{
				breakpoint: 1400,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
				},
			},
		],
	};
	return (
		<div className="fugu--slider-section" id="learn-more">
			<div className="container">
				<div className="fugu--section-title">
					<div className="fugu--default-content content-sm">
						<h2>Our Services</h2>
						<p>
						Explore Our Cutting-Edge Solutions Designed to Optimize Energy Efficiency, Reduce Environmental Impact, and Revolutionize HVAC Systems for Sustainable Commercial and Residential Spaces
						</p>
					</div>
				</div>
				<div className="fugu--slider-one ">
					<Slider {...settings}>
						<div className="fugu--card-wrap">
							<div className="fugu--card-thumb">
								<img src="/images/all-img/v3/card1.jpg" alt="" className="max-h-10 "/>
							</div>
							<div className="fugu--card-data">
								<h3>Monocrystalline Panels</h3>
								
								<div className="fugu--card-footer">
									<div className="fugu--card-footer-data">
										<span>Price /Sqft:</span>
										<h4>$12</h4>
									</div>
									<Link href={"/"} legacyBehavior>
										<a className="fugu--btn btn-sm bg-white">Book a Call</a>
									</Link>
								</div>
							</div>
						</div>
						<div className="fugu--card-wrap">
							<div className="fugu--card-thumb">
								<img src="/images/all-img/v3/card2.jpg" alt="" />
							</div>
							<div className="fugu--card-data">
								<h3>Thin-Film Solar Panels</h3>
							
								<div className="fugu--card-footer">
									<div className="fugu--card-footer-data">
										<span>Price /Sqft:</span>
										<h4>$19</h4>
									</div>
									<Link href={"/"} legacyBehavior>
										<a className="fugu--btn btn-sm bg-white">Book a Call</a>
									</Link>
								</div>
							</div>
						</div>
						<div className="fugu--card-wrap">
							<div className="fugu--card-thumb">
								<img src="/images/all-img/v3/card3.jpg" alt="" />
							</div>
							<div className="fugu--card-data">
								<h3>PERC Solar Panels</h3>
								
								<div className="fugu--card-footer">
									<div className="fugu--card-footer-data">
										<span>Price /sqft:</span>
										<h4>$17</h4>
									</div>
									<Link href={"/"} legacyBehavior>
										<a className="fugu--btn btn-sm bg-white">Book a Call</a>
									</Link>
								</div>
							</div>
						</div>
						<div className="fugu--card-wrap">
							<div className="fugu--card-thumb">
								<img src="/images/all-img/v3/card4.jpg" alt="" />
							</div>
							<div className="fugu--card-data">
								<h3>Commercial Panels</h3>
								
								<div className="fugu--card-footer">
									<div className="fugu--card-footer-data">
										<span>Price /Sqft:</span>
										<h4>$10</h4>
									</div>
									<Link href={"/"} legacyBehavior>
										<a className="fugu--btn btn-sm bg-white">Book a Call</a>
									</Link>
								</div>
							</div>
						</div>
						<div className="fugu--card-wrap">
							<div className="fugu--card-thumb">
								<img src="/images/all-img/v3/card5.jpg" alt="" />
							</div>
							<div className="fugu--card-data">
								<h3>Domestic Panels</h3>
								
								<div className="fugu--card-footer">
									<div className="fugu--card-footer-data">
										<span>Price /Sqft:</span>
										<h4>$15</h4>
									</div>
									<Link href={"/"} legacyBehavior>
										<a className="fugu--btn btn-sm bg-white">Book a Call</a>
									</Link>
								</div>
							</div>
						</div>
					</Slider>
				</div>
			</div>
			<div className="fugu--shape1">
				<img src="/images/shape2/shape1.png" alt="" />
			</div>
		</div>
	);
}
