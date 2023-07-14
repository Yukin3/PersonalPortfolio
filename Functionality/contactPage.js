function hideForm() {
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbz9fdi0qwk6H5enTLDcAITqXfVmanHf8heMo_uVh-d1tU4Hlv4IVfeYPO6jOB252g/exec";
  const form = document.forms["submit-to-google-sheet"];
  const form_submit = document.getElementById("form_submit");
  const socials = document.getElementById("socials");

  form_submit.innerHTML = "Processing Submission...";
  if (form_submit.innerHTML === "Processing Submission...") {
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then((response) => {
        form_submit.innerHTML = `Form sent successfully! \n
           I appreciate your interest, I will reach out to you via email within the next 3 days. I look forward to connecting with you soon!`;
        //form_submit.style.alignItems = "center";
        setTimeout(function () {
          form_submit.innerHTML = "";
        }, 30000);
        form.reset();
      })
      .catch((error) => console.error("Error!", error.message));
  });

  const contactForm = document.getElementById("contact-form");
  contactForm.style.display = "none"; //sets contact-form to blank display i.e. hides form
  const newPage = document.getElementById("newPage");
  newPage.style.display = "block";

  if (
    contactForm.style.display === "none" &&
    newPage.style.display === "block"
  ) {
    console.log(
      `The submission has been received✅, the form📝 has been cleared, and the screen🖥 has changed.`
    );
  } else {
    console.log(`The submission has been received✅`);
  }
}
