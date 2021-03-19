import React from "react";
import "./Header.css";
import Typed from "react-typed";

function Header() {
	return (
		<div className="header_wrapper">
			<div className="header_info">
				<h1>Welcome to My Portfolio</h1>
				<Typed
					className="typed_text"
					strings={[
						"Hello visitor! 🖐",
						"My name is Jonah Etuaful",
						"I want to specially welcome you to my page. ❤",
					]}
					typeSpeed={40}
					backSpeed={60}
					loop
				/>
				<button class="custom_btn btn_14 header_btn m-4">Contact Me</button>
			</div>
		</div>
	);
}

export default Header;
