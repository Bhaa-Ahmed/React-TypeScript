import Person from "./Person";

type PersonListProps = {
	names: {
		first: string;
		last: string;
	}[];
};

const PersonList = ({ names }: PersonListProps) => {
	return (
		<div>
			{names.map((name, idx) => {
				return (
					<h2 key={idx}>
						<Person name={name} />
					</h2>
				);
			})}
		</div>
	);
};

export default PersonList;
