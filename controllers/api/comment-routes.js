// Import the required modules
const router = require("express").Router();
const { Comment } = require("../../models");
const withAuth = require("../../utils/auth");
// Create a new tech talk
router.post("/", withAuth, async (req, res) => {
  try {
    // Create a new tech talk with the provided data
    const newComment = await Comment.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    // Send a response with the new tech talk data
    res.status(200).json(newComment);
  } catch (err) {
    // Send an error response if something went wrong
    res.status(400).json(err);
  }
});
// Export the router
module.exports = router;
