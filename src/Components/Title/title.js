import React from "react";
import "./Title.css";

const Title = props => {
	return
		<div className={'container'}>
			<div className = {'title-element'}>
				<h1>"Clicky Game"</h1>
			</div>

			<div className = {'title-element'}>
				<h2>"Click an image to begin!"</h2>
			</div>

			<div className = {'title-element'}>
				<h2>"Score:" + ${props.currentScore} + " |" + " Top Score:" + ${props.topScore}</h2>
			</div>

		</div>
}

export default Title;