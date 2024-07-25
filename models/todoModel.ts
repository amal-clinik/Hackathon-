// Importing mongoose library along with Document and Model types from it
import mongoose, { Schema } from "mongoose";

const todoSchema = new Schema(
  {
    todo: String,
    todoDeadline: String,
    todoAdd: String,
    User: String,
  },
   { 
    timestamps: true,
    createdAt: Date,
    updatedAt: Date,
  }
);

// Creating a mongoose model for the todo document
const Todo = mongoose.models?.Todo || mongoose.model("Todo", todoSchema);

export default Todo;
