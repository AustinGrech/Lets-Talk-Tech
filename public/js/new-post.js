// Create new post public/js/new-post.js
const newTechTalkPostFormHandler = async (event) => {
  event.preventDefault();

  const title = document
    .querySelector("#title-new-tech-talk-post")
    .value.trim();
  const content = document
    .querySelector("#content-new-tech-talk-post")
    .value.trim();

  if (title && content) {
    const response = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({ title, content }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/dashboard"); // When successful, load the dashboard page
    } else {
      alert("Failed to create a new post."); // When unsuccessful, show alert
    }
  }
};

// Event listeners
const newTechTalkPostForm = document.querySelector(".new-tech-talk-post-form");
if (newTechTalkPostForm) {
  newTechTalkPostForm.addEventListener("submit", newTechTalkPostFormHandler);
}
