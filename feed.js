const name = document.querySelector("#nameInput");
const feedback = document.querySelector("#feedbackText");
const submit = document.querySelector("#submitBtn");
const recentFeedback = document.querySelector("#feedbackList");

// Submit feedback
submit.addEventListener("click", function(e) {
  e.preventDefault();

  const enter_name = name.value.trim().toUpperCase();
  const enter_feedback = feedback.value.trim();
  const rating = document.querySelector('input[name="rating"]:checked');
  const starCount = rating ? rating.id.replace("rating","") : 0;

  let stars = "";
  for(let i=0; i<starCount; i++){
    stars += "⭐";
  }

  if (enter_name !== "" && enter_feedback !== "") {

    // 🔥 SEND DATA TO PYTHON (Flask backend)
    fetch("http://127.0.0.1:5000/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: enter_name,
        feedback: enter_feedback,
        rating: parseInt(starCount)
      })
    })
    .then(res => res.json())
    .then(data => console.log("Saved:", data))
    .catch(err => console.error("Error:", err));

    // UI update (your original code)
    recentFeedback.innerHTML += `
      <li><i class="fa-solid fa-user"></i>
      <strong>${enter_name}</strong><br>
      ${stars}<br>
      ${enter_feedback}
      </li>
    `;
  }

  name.value = "";
  feedback.value = "";
});

// Mouse effects
submit.addEventListener("mousedown", function(){
  submit.style.transform = "scale(0.95)";
});
submit.addEventListener("mouseup", function(){
  submit.style.transform = "scale(1)";
});
submit.addEventListener("mouseenter", function(){
  submit.style.backgroundColor = "blue";
});
submit.addEventListener("mouseleave", function(){
  submit.style.backgroundColor = "#198754"; // Bootstrap success green
});

// Keyboard: submit on Enter anywhere
document.addEventListener("keydown", function(event){
  if(event.key === "Enter"){
    submit.click();
  }
});