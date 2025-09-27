function loginUser() {
  const username = document.getElementById("username").value;
  if(username.trim() !== "") {
    localStorage.setItem("quizUser", username);
    window.location.href = "quiz.html";
  }
  return false;
}
