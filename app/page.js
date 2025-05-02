import Image from "next/image";
import Link from "next/link";
import LoginForm from "@/components/LoginForm";
export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center m-4">
      <h1 className="text-3xl my-3">Hey, time to Sign In</h1>
      <LoginForm />
      <Link href="/home" className="p-4 bg-pink-400 rounded-lg text-white my-5">
        {" "}
        go to gome
      </Link>
    </div>
  );
}
