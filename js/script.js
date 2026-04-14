document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contactForm");
    
    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault();
            
            const nameInput = document.getElementById("name");
            const emailInput = document.getElementById("email");
            const messageInput = document.getElementById("message");
            
            const nameError = document.getElementById("nameError");
            const emailError = document.getElementById("emailError");
            const messageError = document.getElementById("messageError");
            
            let isValid = true;
            
            nameError.textContent = "";
            emailError.textContent = "";
            messageError.textContent = "";

            if (nameInput.value.trim() === "") {
                nameError.textContent = "User Name cannot be empty!";
                isValid = false;
            }
            const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
            if (emailInput.value.trim() === "") {
                emailError.textContent = "Email Address cannot be empty!";
                isValid = false;
            } else if (!emailPattern.test(emailInput.value)) {
                emailError.textContent = "Must be a valid email address format!";
                isValid = false;
            }

            if (messageInput.value.trim() === "") {
                messageError.textContent = "Message cannot be empty!";
                isValid = false;
            } else if (messageInput.value.length < 10) {
                messageError.textContent = "Message is too short! (Min 10 characters)";
                isValid = false;
            }

            if (isValid) {
                const modal = document.getElementById("successModal");
                modal.classList.add("show-modal");
                
                contactForm.reset();
            }
        });

        const closeBtn = document.getElementById("closeModalBtn");
        if (closeBtn) {
            closeBtn.addEventListener("click", function() {
                const modal = document.getElementById("successModal");
                modal.classList.remove("show-modal");
            });
        }
    }
});
