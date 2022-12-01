type GreetProps = {
	name: string;
	messageCount?: number;
	isLoggedIn: boolean;
};

const Greet = ({ name, messageCount = 0, isLoggedIn }: GreetProps) => {
	return (
		<div>
			{isLoggedIn ? (
				<h2>
					Hello {name}! You have {messageCount} unread messages
				</h2>
			) : (
				<h2>Hello Guest!</h2>
			)}
		</div>
	);
};

export default Greet;
