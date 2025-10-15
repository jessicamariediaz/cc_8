
//step 3
const feedbackForm = document.getElementById("feedback-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const commentsInput = document.getElementById("comments");
const submitBtn = document.getElementById("submitbtn");
const feedbackDisplay = document.getElementById("feedback-display");

//step 4
feedbackForm.addEventListener("click", (e) => {
    if (e.target.matches("input, textarea")) {
        console.log("Interacting with:", e.target.id);


        e.stopPropagation();
    }
});

//step 5

const showTooltip = (field) => {
    const tooltip = document.createElement("span");
    tooltip.className = "tooltip";
    tooltip.id = field.id + "-tooltip";
    tooltip.textContent = `Enter your ${field.id}`;
    field.parentElement.appendChild(tooltip);
};

const hideTooltip = (field) => {
    const tooltip = document.getElementById(field.id + "-tooltip");
    if (tooltip) tooltip.remove();
};


[nameInput, emailInput, commentsInput].forEach(field => {
    field.addEventListener("mouseover", () => showTooltip(field));
    field.addEventListener("mouseout", () => hideTooltip(field));
});



// step 6

commentsInput.addEventListener("input", () => {
    console.log(`Characters typed: ${commentsInput.value.length}`);
});

//step 7

feedbackForm.addEventListener("submit", (e) => {
    e.preventDefault(); 


    if (!nameInput.value || !emailInput.value || !commentsInput.value) {
        alert("All fields are required.");
        return;
    }

    //feedback entry
const entry = document.createElement("div");
    entry.classList.add("feedback-entry");
    entry.textContent = `${nameInput.value} (${emailInput.value}): ${commentsInput.value}`;
    feedbackDisplay.appendChild(entry);






    
     feedbackForm.reset();
});
