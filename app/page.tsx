import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default function Home() {
  const { userId } =auth();
  if(userId){
    redirect('/dashboard');
  }
  return (
    <main>
      <div className ="flex items-center justify-center p-24">
        <h1>Next.js Auth</h1>
      </div>
    </main>
  );
}
