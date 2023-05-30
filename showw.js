function saveEnrollment() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var course = document.getElementById("course").value;
    var gender = document.querySelector('input[name="gender"]:checked').value;



    // Retrieve existing enrollments from local storage
    var enrollments = localStorage.getItem("enrollments");

    if (enrollments) {
        enrollments = JSON.parse(enrollments);
    } else {
        enrollments = [];
    }

    // Add current enrollment to the enrollments array
    enrollments.push({
        name: name,
        email: email,
        course: course,
        gender: gender
    });

    // Save the updated enrollments array to lclstr
    localStorage.setItem("enrollments", JSON.stringify(enrollments));

    // Display all enrollments
    displayEnrollments();
}

function displayEnrollments() {
    var enrollments = localStorage.getItem("enrollments");

    if (enrollments) {
        enrollments = JSON.parse(enrollments);

        var enrollmentsContainer = document.getElementById("enrollments");
        enrollmentsContainer.innerHTML = "<h2>All Enrollments:</h2>";

        enrollments.forEach(function (enrollment, index) {
            var enrollmentItem = document.createElement("div");
            enrollmentItem.className = "enrollment-item";
            enrollmentItem.innerHTML = "<p><strong>Name:</strong> " + enrollment.name + "</p>" +
                "<p><strong>Email:</strong> " + enrollment.email + "</p>" +
                "<p><strong>Course:</strong> " + enrollment.course + "</p>" +
                "<p><strong>Gender:</strong>" + enrollment.gender + "</p>";
                

            enrollmentsContainer.appendChild(enrollmentItem);
        });
    }
}

function clearEnrollments() {
    // Clear the enrollments data in lcl str
    localStorage.removeItem("enrollments");
  
    // Clear displayed enrollments
    var enrollmentsContainer = document.getElementById("enrollments");
    enrollmentsContainer.innerHTML = "";
  }

// Display
displayEnrollments();
