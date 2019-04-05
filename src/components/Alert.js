import React, { Component } from 'react';
import alarmSound from './churchchimedanielsimon.mp3';
import Sound from 'react-sound';

export default class Alert extends React.Component {
	render() {
		return <Sound url={alarmSound} playStatus={this.props.playing} />;
	}
}
