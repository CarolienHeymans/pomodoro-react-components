import React from 'react';

export default class TimerButton extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		let TimerButton = (
			<div className="controls btn-group btn-group-toggle" data-toggle="buttons">
				<button className="btn btn-success" onClick={() => this.props.start()}>
					<i className="fas fa-play" />
				</button>
				<button className="btn btn-danger" onClick={() => this.props.stop()}>
					<i className="fas fa-stop" />
				</button>
				<button className="btn btn-info" onClick={() => this.props.reset()}>
					<i className="fas fa-undo-alt" />
				</button>
			</div>
		);
		return TimerButton;
	}
}
