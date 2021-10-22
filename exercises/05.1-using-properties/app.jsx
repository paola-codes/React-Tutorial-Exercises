import React from "react";
import ReactDOM from "react-dom";

/**
 * first, import the clock component that is being exported as default on the Clock.js file
 * (the same way you did on exercise 03
 *
 * second, update the <Clock /> tag to pass the currentDate property to it, with todays current date as a value.
 */

export const Clock = (props) => {
	return <p>{props.currentDate}</p>;
};

Clock.propTypes = {
	todaysDate: PropTypes.obj
};

//fake html tag           //where
ReactDOM.render(<Clock todaysDate={todaysDate} />, document.querySelector("#myDiv"));