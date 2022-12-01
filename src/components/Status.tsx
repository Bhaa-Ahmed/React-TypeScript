type StatusProps = {
	status: "loading" | "success" | "error";
};

const Status = ({ status }: StatusProps) => {
	let msg = "";
	if (status === "loading") {
		msg = "Loading...";
	}
	if (status === "success") {
		msg = "Data fetched successfully";
	}
	if (status === "error") {
		msg = "Error fetching data";
	}
	return (
		<div>
			<h2>Status - {msg}</h2>
		</div>
	);
};

export default Status;
