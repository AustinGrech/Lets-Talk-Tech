const { Post } = require("../models");

const postData = [
  {
    title: "First Tech Talk",
    content:
      "The filing confirms that the Sonos, model S44, will support Bluetooth and Wi-Fi simultaneously and ditch the annoying toggle of the original Move.",
    user_id: 1,
  },
  // add more dummy Tech Talks here
  {
    title: "Second Tech Talk",
    content: "AMD is way better than Nvidia, prove me wrong!",
    user_id: 2,
  },
  {
    title: "Third Tech Talk",
    content:
      "Building a computer is the same as buying a prebuilt. if you think different why?",
    user_id: 3,
  },
  {
    title: "Fourth Tech Talk",
    content: "How many monitors is to many monitors for a gaming setup?",
    user_id: 4,
  },
  {
    title: "Fifth Tech Talk",
    content:
      "Should you run your computer off a wired or wireless wifi connection?",
    user_id: 5,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
