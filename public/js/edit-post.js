// Get the post ID from the endpoint
const post_id = window.location.toString().split("/")[
  window.location.toString().split("/").length - 1
];

// Update the post
const updateTechTalkFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector("#title-update-tech-talk").value.trim();
  const content = document
    .querySelector("#content-update-tech-talk")
    .value.trim();

  if (title && content) {
    const response = await fetch(`/api/posts/${post_id}`, {
      method: "PUT",
      body: JSON.stringify({ title, content }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/dashboard"); // When successful, load the dashboard page
    } else {
      alert("Failed to update a post."); // When unsuccessful, show alert
    }
  }
};

// Delete the post
const deleteTechTalkFormHandler = async (event) => {
  event.preventDefault();

  const response = await fetch(`/api/posts/${post_id}`, {
    method: "DELETE",
  });

  if (response.ok) {
    document.location.replace("/dashboard"); // When successful, load the dashboard page
  } else {
    alert("Failed to delete a post."); // When unsuccessful, show alert
  }
};

// Event listeners
const updateTechTalkButton = document.querySelector("#update-tech-talk");

if (updateTechTalkButton) {
  updateTechTalkButton.addEventListener("click", updateTechTalkFormHandler);
}

const deleteTechTalkButton = document.querySelector("#delete-tech-talk");

if (deleteTechTalkButton) {
  deleteTechTalkButton.addEventListener("click", deleteTechTalkFormHandler);
}
