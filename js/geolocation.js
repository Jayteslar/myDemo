window.onload = function() {
    // Check to see if the user's browser supports Geolocation:
    if (navigator.geolocation) {
        // Create a new variable to hold the GeolocationPosition-Object which determines the geolocation - Lat & Long:
        navigator.geolocation.getCurrentPosition(function(position) {
            // Pass the location data to the findNearest function:
            findNearest(position.coords.latitude, position.coords.longitude);
        });
    } else {
        alert("Your browser is not supported.");
    };

    // Find the restaurant that is nearest to the user's location:
    function findNearest(lat, lon) {
        // Calculate  the distance between the user and the first location:
        var d1 = haversine(lat, lon, 40.755018, -73.992556); // 310 West 38th Street
        var d2 = haversine(lat, lon, 40.791121, -73.973971); // 2450 Broadway
        var d3 = haversine(lat, lon, 40.757498, -73.986654); // 200 West 44th Street

        // Add text to the distance (div) labels:
        document.getElementById("location1distance").textContent = "Distance: " + d1 + " miles";
        document.getElementById("location2distance").textContent = "Distance: " + d2 + " miles";
        document.getElementById("location3distance").textContent = "Distance: " + d3 + " miles";

        // Find the smallest distance:
        if (d1 <= d2 && d1 <= d3) {
            // Style 'Location 1' differently if this condition evaluates to true:
            document.getElementById("location1").className = "nearest";
        } else if (d2 <= d1 && d2 <= d3) {
            // Style 'Location 2' differently if this condition evaluates to true:
            document.getElementById("location2").className = "nearest";
        } else {
            // Style 'Location 3' differently if the previous conditions are false:
            document.getElementById("location3").className = "nearest";
        };
    };
};