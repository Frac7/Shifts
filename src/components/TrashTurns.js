import React from 'react';
import data from '../data';

const startingDate  = '2020-10-01';

const TrashTurns = ({ date }) => {
	const { turns, people, trashTurns } = {
		turns: data.trash,
		...data
	};

	const selectedDate = new Date(date);
	
	const dayOfTheWeek = selectedDate.getDay() - 1;
	const trashTurnIndex = dayOfTheWeek === -1 ? trashTurns.length - 1 : dayOfTheWeek;

	const turnObject = trashTurns[trashTurnIndex];
	
	const initialDate = new Date(startingDate);
	const shift = (selectedDate.getMonth() - initialDate.getMonth()) + (12 * (selectedDate.getFullYear() - initialDate.getFullYear()));

	return (
		<div className="container jumbotron trash-turns">
			<div className="row justify-content-center align-items-center align-content-center">
				<div className="col-12 text-center">
					<p className="lead">Turni della spazzatura: </p>
				</div>
				<>
					{selectedDate.getDay() - 1 === 5 ?
						<div className="col-auto">
							<p className="lead"> - </p>
						</div>:
							(trashTurns[trashTurnIndex].length && trashTurns[trashTurnIndex].map((turn, i) => (
							<div className="col-auto" key={i}>
								<div className="row justify-content-center align-items-center align-content-center">
									<div className="col-auto">
										<p className="h3">{turns[turn].trash}:</p>
									</div>
									<div className="col-auto">
										<p className="h3">
											<span className={'mx-2 badge badge-secondary trash' + turn + '-badge'}>
												{people[Math.floor(turns[turn].initial + shift) % 5]}
											</span>
										</p>
									</div>
								</div>
							</div>
							))) || (
								<>
									<div className="col-auto">
										<p className="h3">{turns[turnObject].trash}:</p>
									</div>
									<div className="col-auto">
										<p className="h3">
											<span className={'mx-2 badge badge-secondary trash' + turnObject + '-badge'}>
												{people[Math.floor(turns[turnObject].initial + shift) % 5]}
											</span>
										</p>
									</div>
									{turnObject === 3 && (
										<div className="col-12">
											<p className="h3 my-3 text-center"><b>Conferire tra le 18/18:30</b></p>
										</div>
									)}
								</>
							)
					}
				</>
			</div>
		</div>
	);
}

export default TrashTurns;
