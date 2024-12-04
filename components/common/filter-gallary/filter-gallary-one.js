/* eslint-disable @next/next/no-img-element */
import Isotope from "isotope-layout";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
export default function FilterGalarryOne() {
	const isotope = useRef();
	const [activeClass, setActiveClass] = useState("*");
	const [filterKey, setFilterKey] = useState("*");
	useEffect(() => {
		setTimeout(() => {
			isotope.current = new Isotope("#fugu--four-column", {
				itemSelector: ".collection-grid-item",

				resizable: false,
				masonry: {
					columnWidth: ".collection-grid-item",
					gutterWidth: 0,
				},
			});
		}, 1000);
		// return () => isotope.current.destroy();
	}, []);

	useEffect(() => {
		if (isotope.current)
			filterKey === "*"
				? isotope.current.arrange({ filter: `*` })
				: isotope.current.arrange({ filter: `.${filterKey}` });
	}, [filterKey]);

	const handleFilterKeyChange = (key) => () => {
		setFilterKey(key);
		setActiveClass(key);
	};

	const handleActiveClass = (key) => {
		if (key === activeClass) return "active";
	};
	return (
		<div className="fugu--portfolio-section fugu--section-padding">
			<div className="container">
				<div className="fugu--section-title">
					<div className="fugu--default-content content-sm">
						<h2>Explore the most unique Products</h2>
						<p>
							Our Solar Panels are Durable & Enhanced with AI tools.
						</p>
					</div>
				</div>

				
					
			</div>
			<div className="fugu--shape2">
				<img src="/images/shape2/shape2.png" alt="" />
			</div>
		</div>
	);
}
