export default {
	RequesterDropdownonOptionChange(option) {
		// Call the function to fetch dispatch details
		getDispatchDetails.run();

		// Additional logic to handle the selected option
		console.log("Selected option:", option);

		// You can add more logic here if needed
	}
};
