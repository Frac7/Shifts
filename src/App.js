import React from 'react';

import { CleanTurns, StreetTurns, TrashTurns } from './components';

class App extends React.Component{
	constructor(props) {
		super(props);

		const curDate = new Date().toISOString().substr(0, 10);

		this.state = {
			date: curDate,
			curDate,
		};
	}

	dateChanged(event) {
		this.setState({ date: event.target.value });
	}

	render() {
		return (
			<div className="App container">
				<div className="row justify-content-center align-items-center">
					<div className="jumbotron col-12 wrapper" align="center">
						<h1 className="display-4">Calendario Turni</h1>
						<hr className="my-4"/>
						<div className="row justify-content-center align-items-center align-content-center">
							<div className="col-md-4 col-sm-auto">
								<p className="lead">Data: </p>
							</div>
							<div className="col-md-4 col-sm-auto">
								<input
									type="date"
									onChange={this.dateChanged.bind(this)}
									defaultValue={this.state.date}
									min={this.state.curDate}
								/>
							</div>
						</div>
					</div>
				</div>
				{this.state.date === '' ? (
					<div className="jumbotron col-12 wrapper" align="center">
						<h1 className="display-6">Nessuna data selezionata</h1>
					</div>
				): (
					<>
						<div className="row justify-content-center align-items-center">
							<TrashTurns date={this.state.date} />
						</div>
						<div className="row justify-content-center align-items-center">
							<CleanTurns date={this.state.date} />
						</div>
						<div className="row justify-content-center align-items-center">
							<StreetTurns date={this.state.date} />
						</div>
					</>
				)}
			</div>
		)
	}
}

export default App;
