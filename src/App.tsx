import "./App.css";
import Heading from "./components/Heading";
import Oscar from "./components/Oscar";
import Status from "./components/Status";
import Greet from "./components/Greet";
import Button from "./components/Button";
import Container from "./components/Container";
// import Person from "./components/Person";
// import PersonList from "./components/PersonList";

function App() {
	// const personName = {
	// 	first: "Eslam",
	// 	last: "Ahmed",
	// };

	// const persons = [
	// 	{
	// 		first: "Eslam",
	// 		last: "Ahmed",
	// 	},
	// 	{
	// 		first: "Marwan",
	// 		last: "Ahmed",
	// 	},
	// 	{
	// 		first: "Bahaa",
	// 		last: "Ahmed",
	// 	},
	// ];

	return (
		<div className="App">
			<Greet name="Bahaa" isLoggedIn={true} />
			{/* <Person name={personName} />
			<PersonList names={persons} /> */}
			<Status status="success" />
			<Heading>Placeholder text</Heading>
			<Oscar>
				<Heading>Placeholder text</Heading>
			</Oscar>
			<Button handleClick={(e, id) => console.log("hi", e, id)} />
			<Container style={{ border: "1px solid black", padding: "1rem" }} />
		</div>
	);
}

export default App;
