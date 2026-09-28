// ==========================================
// COLLEGE EVENT PORTAL - JAVASCRIPT
// ==========================================


// ================= ANNOUNCEMENT =================

function changeAnnouncement() {

    const announcements = [
        "Registration is now open for all events!",
        "Early registration is available now.",
        "Students can participate in multiple events.",
        "Certificates will be provided to participants.",
        "Campus Fest 2026 starts on 10 October!"
    ];

    const randomNumber =
        Math.floor(Math.random() * announcements.length);

    document.getElementById("announcementText").textContent =
        announcements[randomNumber];
}


// ================= SELECT EVENT =================

function selectEvent(eventName) {

    document.getElementById("event").value = eventName;

    document.getElementById("registration")
        .scrollIntoView({
            behavior: "smooth"
        });
}


// ================= EVENT FILTER =================

function filterEvents(category) {

    const events =
        document.querySelectorAll(".event-card");

    events.forEach(function(event) {

        if (
            category === "all" ||
            event.classList.contains(category)
        ) {

            event.style.display = "block";

        } else {

            event.style.display = "none";

        }

    });

}


// ================= REGISTRATION =================

document
    .getElementById("registrationForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();


        // Get values using DOM

        const name =
            document.getElementById("name").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const mobile =
            document.getElementById("mobile").value.trim();

        const department =
            document.getElementById("department").value.trim();

        const selectedEvent =
            document.getElementById("event").value;


        // Error elements

        const nameError =
            document.getElementById("nameError");

        const emailError =
            document.getElementById("emailError");

        const mobileError =
            document.getElementById("mobileError");

        const departmentError =
            document.getElementById("departmentError");

        const eventError =
            document.getElementById("eventError");

        const successMessage =
            document.getElementById("successMessage");


        // Clear previous messages

        nameError.textContent = "";
        emailError.textContent = "";
        mobileError.textContent = "";
        departmentError.textContent = "";
        eventError.textContent = "";
        successMessage.textContent = "";


        let valid = true;


        // Name validation

        if (name === "") {

            nameError.textContent =
                "Please enter your name.";

            valid = false;
        }


        // Email validation

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email === "") {

            emailError.textContent =
                "Please enter your email.";

            valid = false;

        } else if (!emailPattern.test(email)) {

            emailError.textContent =
                "Please enter a valid email.";

            valid = false;

        }


        // Mobile validation

        const mobilePattern =
            /^[0-9]{10}$/;

        if (mobile === "") {

            mobileError.textContent =
                "Please enter your mobile number.";

            valid = false;

        } else if (!mobilePattern.test(mobile)) {

            mobileError.textContent =
                "Mobile number must contain 10 digits.";

            valid = false;

        }


        // Department validation

        if (department === "") {

            departmentError.textContent =
                "Please enter department/year.";

            valid = false;

        }


        // Event validation

        if (selectedEvent === "") {

            eventError.textContent =
                "Please select an event.";

            valid = false;

        }


        // Successful registration

        if (valid) {

            successMessage.textContent =
                "✅ Registration successful! " +
                name +
                ", you registered for " +
                selectedEvent +
                ".";


            // Clear form

            document
                .getElementById("registrationForm")
                .reset();

        }

    });


// ================= CONTACT FORM =================

document
    .getElementById("contactForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();


        const name =
            document.getElementById("contactName").value.trim();

        const email =
            document.getElementById("contactEmail").value.trim();

        const message =
            document.getElementById("message").value.trim();


        const contactSuccess =
            document.getElementById("contactSuccess");


        if (
            name === "" ||
            email === "" ||
            message === ""
        ) {

            contactSuccess.textContent =
                "Please fill all contact form fields.";

            contactSuccess.style.color = "red";

        } else {

            contactSuccess.textContent =
                "✅ Your message has been sent successfully!";

            contactSuccess.style.color = "green";


            document
                .getElementById("contactForm")
                .reset();

        }

    });