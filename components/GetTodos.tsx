import { deleteTodo } from "@/lib/action";
import Todo from "@/models/todoModel";
import React from "react";

export default async function GetTodos() {
  try {
    const todos = await Todo.find();
    if (todos.length === 0) {
      return <h1 className="text-red-400 font-bold text-xl">You have no todos</h1>;
    } else {
      const deadLineToDate = (todoDeadline: any) => {
        const deadlineDate = new Date(todoDeadline);

        // Extracting day, month, and year components from the Date object
        const day = deadlineDate.getDate();
        const month = deadlineDate.getMonth() + 1; // Months are zero-based, so add 1
        const year = deadlineDate.getFullYear();

        // Formatting the date as MM/DD/YYYY
        return `${month}/${day}/${year}`;
      };

      // Creating a new Date object from the given string
      return (
       <div className="w-full mb-10 gap-20 p-10">
        <div className="w-full gap-10 italic">
         <table className="table w-full">
          <thead>
         <tr className="test">
	   <th>الطــلب</th>
           <th>مستخدم</th>
	   <th>الاسم</th>
	   <th>التـــاريخ</th>
           <th>نوع الطلب</th>
           </tr>
          </thead>
        <tbody>
         {todos.map((todo) => {
           return (
            <tr key={todo._id} className="hex">
	      <td>
                  <label>
                   <input type="checkbox" className="checkbox bg-amber-400" />
                  </label>
              </td>
	       <td> 
		<div className="avatar online placeholder">
		  <div className="bg-neutral text-neutral-content w-8 rounded-full">
		    <span className="text-xs">U</span>
		  </div>
		</div>
               </td>
                <td>{todo.todo as string}</td>
                <td>{deadLineToDate(todo.todoDeadline)}</td>
	        <td>{todo.todoAdd as string}</td>
		<td>{todo.User as string}</td>
             <td>
		<form action={deleteTodo}>
                <input
                  hidden
                  type="text"
                  name="id"
                  defaultValue={todo._id.toString()}
                />
                <button className="btn btn-neutral text-white rounded rounded-full ">
                  Delete User
                </button>
              </form>
	     </td>
            </tr>
           );
          })}
        </tbody>
         </table>
        </div>
       </div>
      );
    }
  } catch (error) {
    console.log(error);
  }
}
