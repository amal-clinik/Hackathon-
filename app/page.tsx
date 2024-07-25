import Forms from "@/components/Forms";
import GetTodos from "@/components/GetTodos";

export default function Home() {
  return (
    <main className="flex min-w-screen min-h-screen flex-col items-center justify-between p-24 bg-zinc-950">
     <h1 className="glow"> د/ أمـــــــل الهــــــادي</h1>
      <div className="z-10 w-full max-w-5xl items-center justify-between text-sm lg:flex">
       <div className="flex mb-20 gap-5 italic font-black"> 
       </div>
       <Forms/>
      </div>
      <div className="flex  flex-col items-center h-1/2 ">
        <GetTodos/>
      </div>
    </main>
  );
}
