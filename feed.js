const name = document.querySelector("#nameInput")
const feedback = document.querySelector("#feedbackText")
const submit = document.querySelector("#submitBtn")
const recentFeedback = document.querySelector("#feedbackList")

submit.addEventListener("click", function(e) {
  e.preventDefault()

  const enter_name = name.value.trim().toUpperCase()
  const enter_feedback = feedback.value.trim()

  if (enter_name !== "" && enter_feedback !== "") {
    recentFeedback.innerHTML += "<li>" + enter_name + "<br>" + enter_feedback + "</li>"
  }

  name.value = ""
  feedback.value = ""
})
