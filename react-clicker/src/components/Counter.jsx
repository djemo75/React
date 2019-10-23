import React, { Component} from 'react';



class Counter extends Component {
	
	constructor(props){
		super();
		this.state={
			count: Number(window.localStorage.getItem('count'))
		}
		
		this.updateCounter = this.updateCounter.bind(this);
		this.resetCounter = this.resetCounter.bind(this);
		this.minusCounter = this.minusCounter.bind(this);
	}
	updateCounter() {
		this.setState({
			count: this.state.count+1
		}, () => {
			const oldCount=this.state.count;
			window.localStorage.setItem('count', `${oldCount}`);
		});
	}
	resetCounter() {
		this.setState({
			count: 0
		}, () => {
			const oldCount=this.state.count;
			window.localStorage.setItem('count', `${oldCount}`);
		});
	}
	minusCounter() {
		this.setState({
			count: this.state.count-1
		}, () => {
			const oldCount=this.state.count;
			window.localStorage.setItem('count', `${oldCount}`);
		});
	}
	render() {
		const {count}=this.state;
		return(<div className="main-box">
			
			<div className="counterBox">{count}</div><br/>
			<button onClick={this.minusCounter} className="btn minusButton">-</button>
			<button onClick={this.resetCounter} className="btn resetButton">0</button>
			<button onClick={this.updateCounter} className="btn plusButton">+</button>
			
		</div>
		);
	}
	
}
export default Counter;
