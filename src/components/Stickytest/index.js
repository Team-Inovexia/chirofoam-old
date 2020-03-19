import React from "react"
import {Link} from "gatsby"

const Stickytest = (props) => {
  const wrapperClass = (props.disable)?"d-none":"sticky-test position-fixed"
	const openTakeTest = () => {
		document.querySelector(".test-slider-content").classList.remove('hidden')
		document.querySelector(".test-slider-content").classList.add('show')
	}
	const closeTakeTest = () => {
		document.querySelector(".test-slider-content").classList.add('hidden')
		document.querySelector(".test-slider-content").classList.remove('show')
	}
	return(
		<div className={wrapperClass}>
			<div className="test-content-slider-tab">
				<div className="test-content-slider-title">
					<button className="fs-1 fs-lg-2 py-1 px-2 py-lg-2 px-lg-3 proxima-b" onClick={openTakeTest}>Take The Chirofoam Test</button>
				</div>
				<div className="test-slider-content hidden">
					<div className="text-center">
						<h4><span>Take The Chirofoam Test</span></h4>
						<p><span>See if Chirofoam is right for you.</span></p>
						<p className="start_noww">
							<Link className="btn text-white btn-custom-secondary" to="/take-test/">START NOW</Link>
						</p>
					</div>
				<button className="test-close-slider-content btn text-white btn-custom-secondary rounded-0 p-0" onClick={closeTakeTest}>&times;</button>
				</div>
			</div>
		</div>
	)
}

export default Stickytest;
