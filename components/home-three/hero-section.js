/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import CountUp from "react-countup";
// import SplineScene from '../SplineScene' 
// import Spline from '@splinetool/react-spline';
// import Spline from '@splinetool/react-spline/next';
import SplineScene from '../SplineScene';




export default function HeroSection() {
	return (
		<div className="fugu--hero-section" id="hero" style={{ backgroundImage: "url(/images/all-img/v3/hero-bg.png)" }}>
			<div id="fugu--counter"></div>
			<div className="container">
				<div className="row" id="wyvuwgady">
					<div id="getfixedsoonsejh">
				<SplineScene className="somethingkeuh"/>
					</div>
					<div className="col-lg-7">
						<div className="fugu--hero-content">
							<h1 className="wow fadeInUpX" data-wow-delay="0s">
							Revolutionizing Energy Efficiency for a Greener Future
							</h1>
							<p className="wow fadeInUpX" data-wow-delay="0.10s">
							Harnessing the power of AI and solar energy to create smarter, more sustainable HVAC systems for residential and commercial spaces.
							</p>
							<div className="fugu--btn-wrap fugu--hero-btn wow fadeInUpX" data-wow-delay="0.20s">
								<Link href={"#"} legacyBehavior>
									<a className="fugu--btn bg-gray active">Get Started</a>
								</Link>
								<Link href={"#learn-more"} legacyBehavior>
									<a className="fugu--btn bg-gray">Learn More</a>
								</Link>
							</div>
							<div className="fugu--counter-wrap wow fadeInUpX" data-wow-delay="0.30s">
								<div className="fugu--counter-data">
									<h2>
										<span data-percentage="45" className="fugu--counter">
											<CountUp end={65} />
										</span>
										<strong>K+</strong>
									</h2>
									<p>Customers</p>
								</div>
								<div className="fugu--counter-data px-3">
									<h2>
										<span data-percentage="86" className="fugu--counter">
											<CountUp end={86} />
										</span>
										<strong>K</strong>
									</h2>
									<p>Installations</p>
								</div>
								<div className="fugu--counter-data px-2">
									<h2>
										<span data-percentage="32" className="fugu--counter">
										<strong>$</strong><CountUp end={3250} />
										</span>
										{/* <strong>K+</strong> */}
									</h2>
									<p>Carbon Credits</p>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-5" id="helloworld">
						<div className="fugu--hero-right" id="rotateOne">
							{/* <div className="rounded-2xl max-w-96"> */}
								{/* <div className="fugu--card-thumb">
									<img src="/images/all-img/v3/hero-thumb2.png" alt="" />
								</div> */}
								{/* <div className="fugu--card-data">
									<h3>The Exorians Universe</h3>
									<p></p>
									<div className="fugu--card-footer">
										<div className="fugu--card-footer-data">
											<span>Mint Price:</span>
											<h4>0.194 ETH</h4>
										</div>
										<Link href={"#"} legacyBehavior>
											<a className="fugu--btn btn-sm bg-white">Place a Bid</a>
										</Link>
									</div>
								</div> */}
								
							{/* </div> */}
							
						</div>
						<div id="splinekdshb">
						{/* <SplineScene /> */}
						</div>
					</div>
					
				</div>
				<div className="fugu--hero-shape1">
					<img src="/images/all-img/v3/shape-hero1.png" alt="" />
				</div>
				<div className="fugu--hero-shape2"></div>
			</div>
		</div>
	);
}
