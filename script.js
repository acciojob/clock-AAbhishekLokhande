//your JS code here. If required.
  // Function to update the timer
        function updateTimer() {
            // Get the current date and time
            var currentDateTime = new Date();

            // Format the date and time
            var formattedDateTime = currentDateTime.toLocaleString();

            // Display the formatted date and time in the 'timer' element
            document.getElementById('timer').innerHTML = formattedDateTime;
        }

        // Update the timer every second (1000 milliseconds)
        setInterval(updateTimer, 1000);

        // Initial call to set the initial value
        updateTimer();