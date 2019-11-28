import React from 'react';
import './App.css';

import CleanTurns from './Components/CleanTurns';
import StreetTurns from "./Components/StreetTurns";
import TrashTurns from "./Components/TrashTurns";

const cleanInitialDate = '2019-11-11'; //data di inizio elenco pulizie, coincide col turno della persona alla posizione 0
const trashInitialDate  = '2019-11-01'; //data di inizio primo ciclo dei turni delle pulizie

const curDate = new Date().toISOString().substr(0, 10);

class App extends React.Component{
	constructor(props) {
		super(props);

		//inizializzazione dello stato con la data corrente
		this.state = {
			date: curDate
		};
	}

	dateChanged(event) {
		this.setState({date: event.target.value});
	}

	render() {
		return (
			<div className="App container">
				<div className="row justify-content-center align-items-center">
					<div className="jumbotron col-12 wrapper">
						<h1 className="display-4">Calendario Turni</h1>
						<hr className="my-4"/>
						<div className="row justify-content-center align-items-center">
							<div className="col-md-4">
								<p className="lead">Data: </p>
							</div>
							<div className="col-md-4">
								<input type="date" onChange={this.dateChanged.bind(this)} defaultValue={this.state.date} min={curDate}/>
							</div>
						</div>
					</div>
				</div>
				<div className="row justify-content-center align-items-center">
					<TrashTurns date={this.state.date} initialDate={trashInitialDate}/>
				</div>
				<div className="row justify-content-center align-items-center">
					<CleanTurns date={this.state.date} initialDate={cleanInitialDate}/>
				</div>
				<div className="row justify-content-center align-items-center">
					<StreetTurns date={this.state.date}/>
				</div>
			</div>
		)
	}
}

export default App;
