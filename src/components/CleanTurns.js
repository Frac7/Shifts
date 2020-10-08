import React, { useEffect, useMemo } from 'react';
import data from '../data';

const initialDate = '2020-10-04';

const CleanTurns = ({ date }) => {
	const {
		greenBathroom,
		blueBathroom,
		people
	} = useMemo(() => data, []);

	const timeDivider = useMemo(() => 1000 * 60 * 60 * 24 * 7, []);

	const selectedDate = useMemo(() => new Date(date), [date]);
	useEffect(() => {
		const dayOfTheWeek = selectedDate.getDay();
		if(dayOfTheWeek !== 1) {
			const offset = dayOfTheWeek - 1;
			selectedDate.setDate(selectedDate.getDate() - offset);
		}
	}, [selectedDate, timeDivider]);

	const currentPersonIndex = useMemo(() => Math.floor(((selectedDate - new Date(initialDate)) / timeDivider) % 5),
		[selectedDate, timeDivider]);

	const greenBathroomIndex = useMemo(() => {
		if (!Object.values(greenBathroom).includes(currentPersonIndex)) {
			return greenBathroom[Math.floor((((selectedDate - new Date(initialDate)) / timeDivider) % 15))];
		}
	}, [greenBathroom, timeDivider, currentPersonIndex, selectedDate]);

	const blueBathroomIndex = useMemo(() => {
		if (!Object.values(blueBathroom).includes(currentPersonIndex)) {
			return blueBathroom[Math.floor((((selectedDate - new Date(initialDate)) / timeDivider) % 10))];
		}
	}, [blueBathroom, timeDivider, currentPersonIndex, selectedDate]);

	return (
		<div className="container jumbotron clean-turns align-content-center">
			<div className="row justify-content-center align-items-center align-content-center">
				<div className="col-12 text-center">
					<p className="lead">Turno delle pulizie: </p>
				</div>
				<div className="col-auto">
					<p className="h3"><span className="badge badge-secondary clean-turns-badge">{people[currentPersonIndex]}</span></p>
				</div>
				<div className="col-12 text-center">
					<p className="h3 my-3 text-center">
						<b>Pulire la cucina, pulire l'andito, spolverare</b>
					</p>
				</div>
			</div>
			{!isNaN(greenBathroomIndex) && (
				<div className="row justify-content-center align-items-center align-content-center">
				<div className="col-12 text-center">
					<p className="lead">Pulizia bagno grande: </p>
				</div>
				<div className="col-auto">
					<p className="h3">
						<span className="badge badge-secondary clean-turns-badge">
							{people[greenBathroomIndex]}
						</span>
					</p>
				</div>
			</div>
			)}
			{!isNaN(blueBathroomIndex) && (
				<div className="row justify-content-center align-items-center align-content-center">
					<div className="col-12 text-center">
						<p className="lead">Pulizia bagno piccolo: </p>
					</div>
					<div className="col-auto">
						<p className="h3">
						<span className="badge badge-secondary clean-turns-badge">
							{people[blueBathroomIndex]}
						</span>
						</p>
					</div>
				</div>
			)}
		</div>
	);
}

export default CleanTurns;
