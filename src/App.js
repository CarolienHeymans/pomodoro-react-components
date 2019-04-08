import React, { Component } from 'react';
import './App.css';
import Sound from 'react-sound';
import Alert from './components/Alert';
import TimerButton from './components/buttons/TimerButtons';
import ControlButtons from './components/buttons/ControlButtons';

class App extends React.Component {
	//set default state of clock
	constructor(props) {
		super(props);
		this.state = {
			timerStarted: false,
			timerStopped: true,
			minutes: 25,
			seconds: 0,
			alarmStatus: Sound.status.STOPPED
		};
	}

	handleReset() {
		//reset the timer to default settings

		this.setState({
			timerStarted: false,
			timerStopped: true,
			seconds: 0,
			minutes: 25
		});
		clearInterval(this.timer);
	}

	handleTimerStop() {
		//stop the timer, also stop the alert
		this.setState({ timerStarted: false, timerStopped: true, alarmStatus: Sound.status.STOPPED });
		clearInterval(this.timer);
	}

	handleAlert() {
		//play the alert
		this.setState({ alarmStatus: Sound.status.PLAYING });
		this.handleReset();
	}
	handleTimerStart() {
		//start the timer
		//console.log('het werkt!');
		if (this.state.timerStopped) {
			//start button only works if not counting down
			this.timer = setInterval(() => {
				this.setState({ timerStarted: true, timerStopped: false });
				if (this.state.timerStarted) {
					//count down when press start button
					if (this.state.seconds === 0) {
						this.setState((prevState) => ({
							minutes: prevState.minutes - 1,
							seconds: 60
						}));
					}
					this.setState((prevState) => ({
						seconds: prevState.seconds - 1
					}));
					//alert if timer is done
					if (this.state.minutes === 0 && this.state.seconds === 0) {
						this.handleAlert();
					}
				}
			}, 1000);
		}
	}

	handlePlusTime() {
		//add minutes to timer
		if (this.state.timerStopped) {
			this.setState({
				minutes: this.state.minutes + 1
			});
		}
	}
	handleMinTime() {
		//subtract minutes from timer
		if (this.state.timerStopped) {
			this.setState({
				minutes: this.state.minutes - 1
			});
		}
	}

	render() {
		return (
			//display the timer
			<div className="container">
				<Alert playing={this.state.alarmStatus} />
				<div className="clock">
					<h2 className="text-center">Pomodoro Timer</h2>
					<div className="timer-container">
						<div className="current-timer">{this.state.minutes + ':' + this.state.seconds}</div>
					</div>
					<ControlButtons minTime={this.handleMinTime.bind(this)} plusTime={this.handlePlusTime.bind(this)} />
					<TimerButton
						stop={this.handleTimerStop.bind(this)}
						reset={this.handleReset.bind(this)}
						start={this.handleTimerStart.bind(this)}
					/>
				</div>
			</div>
		);
	}
}
export default App;
