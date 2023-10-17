window.onload = function() {
    // Check for LocalStorage support:
    if(localStorage) {
        populateForm(form);
        // Get the form:
        var form = document.getElementById("bookingsForm");
        // Event listener for when the bookings form is submitted:
        form.addEventListener("submit", function(e) {
            // A call for the func: 'saveData' with the var: 'form' as its input parameter:
            saveData(form);
        });
    };

    // Save the form data into LocalStorage:
    function saveData() {
        // Fetch the input elements on the form:
        var name = document.getElementById("name");
        var email = document.getElementById("email");
        var phone = document.getElementById("phone");
        var guests = document.getElementById("guests");
		var bookingTime = document.getElementById("bookingTime");
        
        // Store the user's inputted values:
        localStorage.setItem("name", name.value);
        localStorage.setItem("email", email.value);
        localStorage.setItem("phone", phone.value);
        localStorage.setItem("guests", guests.value);
		localStorage.setItem("bookingTime", bookingTime.value);
    };

    // Attempt to pre-populate the saved 'Contact details' data in the 'localStorage' datastore into the Booking form fields:
    function populateForm() {
        // Fetch the input elements on the form:
        var name = document.getElementById("name");
        var email = document.getElementById("email");
        var phone = document.getElementById("phone");
        var guests = document.getElementById("guests");
		var bookingTime = document.getElementById("bookingTime");

        // Retrieve the saved data and update the values of the form fields after navigating back to the form page:
        if(localStorage.getItem("name") != null) {
            name.value = localStorage.getItem("name");
        };

        if(localStorage.getItem("email") != null) {
            email.value = localStorage.getItem("email");
        };

        if(localStorage.getItem("phone") != null) {
            phone.value = localStorage.getItem("phone");
        };

        if(localStorage.getItem("guests") != null) {
			guests.value = localStorage.getItem("guests");
		};

		if(localStorage.getItem("bookingTime") != null) {
			bookingTime.value = localStorage.getItem("bookingTime");
		};
    };
};