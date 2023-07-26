// pages/api/users.js

import clientPromise from "../../lib/mongodb";
import connectDB from '../../database/db';

connectDB();

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("nextjs-mongodb");

  switch (req.method) {
    case "POST":
      // Handle user registration
      try {
        const { firstName, lastName, email, password } = req.body;
        const newUser = {
          firstName,
          lastName,
          email,
          password,
        };
        const insertedUser = await db.collection("users").insertOne(newUser);
        res.status(201).json(insertedUser.ops[0]);
      } catch (error) {
        res.status(500).json({ error: "Failed to register user" });
      }
      break;

    case "GET":
      // Retrieve all users
      try {
        const allUsers = await db.collection("users").find({}).toArray();
        res.status(200).json(allUsers);
      } catch (error) {
        res.status(500).json({ error: "Failed to retrieve users" });
      }
      break;

    case "PUT":
      // Handle updating a user by ID
      try {
        const { userId, firstName, lastName, email, password } = req.body;
        const updateResult = await db.collection("users").updateOne(
          { _id: userId },
          { $set: { firstName, lastName, email, password } }
        );
        if (updateResult.modifiedCount > 0) {
          res.status(200).json({ message: "User updated successfully" });
        } else {
          res.status(404).json({ error: "User not found" });
        }
      } catch (error) {
        res.status(500).json({ error: "Failed to update user" });
      }
      break;

    case "DELETE":
      // Handle deleting a user by ID
      try {
        const { userId } = req.body;
        const deleteResult = await db.collection("users").deleteOne({ _id: userId });
        if (deleteResult.deletedCount > 0) {
          res.status(200).json({ message: "User deleted successfully" });
        } else {
          res.status(404).json({ error: "User not found" });
        }
      } catch (error) {
        res.status(500).json({ error: "Failed to delete user" });
      }
      break;

    default:
      res.status(405).end(); // Method Not Allowed
      break;
  }
}
