import React from 'react';

export default class ControlButtons extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		let ControlButtons = (
			//buttons to add and subtract time
			<div className="timer-controls btn-group btn-group-toggle">
				<button className="btn btn-primary" onClick={() => this.props.plusTime()}>
					<i className="fas fa-plus" />
				</button>
				<button className="btn btn-primary" onClick={() => this.props.minTime()}>
					<i className="fas fa-minus" />
				</button>
			</div>
		);
		return ControlButtons;
	}
}
