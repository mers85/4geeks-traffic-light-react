import React, { useState } from "react";

export function TrafficLight() {
	const [color, setColor] = useState("red");

	let redSelected = "";
	let yellowSelected = "";
	let greenSelected = "";

	switch (color) {
		case "red":
			redSelected = "selected";
			break;
		case "yellow":
			yellowSelected = "selected";
			break;
		case "green":
			greenSelected = "selected";
			break;
	}

	return (
		<div className="container my-5">
			<div className="container bg-dark p-3 rounded">
				<div
					className={"light red " + redSelected}
					onClick={() => setColor("red")}></div>
				<div
					className={"light yellow " + yellowSelected}
					onClick={() => setColor("yellow")}></div>
				<div
					className={"light green " + greenSelected}
					onClick={() => setColor("green")}></div>
			</div>
		</div>
	);
}
