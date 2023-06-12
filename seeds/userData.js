// Importing Post model from ../models directory
const { User } = require("../models");
// Array of dummy tech talk data
const userData = [
  {
    username: "TechNinja",
    email: "user1@example.com",
    password: "password1",
  },
  {
    username: "TechGeek",
    email: "user2@example.com",
    password: "password2",
  },
  {
    username: "InternetJunkie",
    email: "user3@example.com",
    password: "password3",
  },
  {
    username: "TechWizard12",
    email: "user4@example.com",
    password: "password4",
  },
  {
    username: "AppleTech",
    email: "user5@example.com",
    password: "password5",
  },
];
// Function to seed posts table with dummy data using bulkCreate method
const seedUsers = () => User.bulkCreate(userData);
// Exporting seedPosts function for use in other files
module.exports = seedUsers;
