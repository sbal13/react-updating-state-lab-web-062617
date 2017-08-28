import React from 'react'

class DigitalClicker extends React.Component {
	
	constructor(){
		super();

		this.state = {
			timesClicked: 0
		}
	}

	incrementClicks = ()=> {
		this.setState({timesClicked: (++this.state.timesClicked)})
	}

	render(){
		return (
		<div>
			<button onClick={this.incrementClicks}>{this.state.timesClicked}</button>
		</div>
	)};
};


export default DigitalClicker
