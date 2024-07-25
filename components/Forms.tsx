"use client";
import dayjs from "dayjs";
import { DatePicker } from 'antd';
import { createTodos } from "@/lib/action";
import { useRef } from "react";
import SubmitButton from "./SubmitButton";

export default function Forms() {
  // we are using useRef to reset the form after submission
  const { RangePicker } = DatePicker;
  const ref = useRef<HTMLFormElement>(null);
  return (
    <form
      ref={ref}
      action={async (FormData) => {
        ref.current?.reset();
        await createTodos(FormData);
      }}
      className="flex flex-col text-center items-center mb-10 w-full"
    >
    <div className="card">
   <div className="text-center mb-10 pb-10 pt-10 mt-10">
     <h1 className="text-center items-center"> 
      <h1 className="main"> د/ امـــل كلينــــك</h1>
    </h1>
   </div>
  <div className="test">
     <label className="input input-bordered flex items-center gap-2 mb-10 bg-black text-amber-300" htmlFor="todo">
    <svg
    xmlns="http://www.w3.org/2000/svg"
     viewBox="0 0 16 16"
      fill="currentColor"
       className="h-4 w-4 opacity-70">
      <path
      d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
       </svg>
        <input type="text" className="bg-amber-400" placeholder="الاسم" name="todo"/>
       </label>
     </div>
      <label className="input input-bordered flex items-center gap-2 mb-10 bg-black text-amber-400">
       <div className="test">
        التاريخ
       </div>
      <input type="date" name="todoDeadline" className="input input-bordered flex items-center gap-2 w-full text-amber-400" placeholder="Data Today"/>
     </label>
    <div className="test">
     <select className=" text-amber-400 select select-bordered w-full w-full mb-10 bg-black" id="todoAdd" name="todoAdd">
       <option disabled selected>نوع العمل</option>
	<option>كشف البشرة والشعر </option>
	<option>فيشل ماسي هيدرافيشل</option>
	<option>بلازما الشعر والبيبي هير </option>
	<option>بلازما والوجه والرقبة </option>
	<option>بلازما الايدي والارجل </option>
	<option>ميزوثيرابي معالج البشرة والشعر </option>
	<option>تراكيب صيدلانية وتجميلية</option>
	<option>صابونيات </option>
	<option>تراكيب انكي</option>
	<option>شيل حواجب وجه </option>
	<option>تاتو وتقشير </option>
	<option>كشف الشعر </option>
	<option>قص علاجي للشعر </option>
	<option>تلوين + فرد </option>
       </select>
      </div>
      <SubmitButton />
     </div>
    </form>
  );
}
