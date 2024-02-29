import React from "react";

//include images and components into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import MainPlayer from "./MainPlayer";

//create your first component
const Home = () => {
	return (
		<div className="row d-flex justify-content-center">
			<MainPlayer />
		</div>
	);
};

export default Home;
