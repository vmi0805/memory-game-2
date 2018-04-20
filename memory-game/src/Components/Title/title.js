import React from "react";
import "./title.css";

const Title = props => {
	return (
		<div className={'container'}>
			<div class = "holder">
				<div className = {'title-element-1'}>
					<h1>Clicky Game!</h1>
				</div>
			</div>

			<div className = {'title-element-2'}>
				<h3>Click the images.</h3>
				<h4>Remember which you've clicked else you lose.</h4>
				<h4>This game tests your memory...</h4>
				<h4>Try to beat the Top Score...</h4>
			</div>

			<div className = {'title-element-3'}>
				<h2>{"Score: " + props.currentScore + " |" + " Top Score: " + props.topScore}</h2>
			</div>

		</div>
	);
}

export default Title;