type PersonProps = {
	name: {
		first: string;
		last: string;
	};
};

const Person = ({ name: { first, last } }: PersonProps) => {
	return (
		<h2>
			{first} {last}
		</h2>
	);
};

export default Person;
