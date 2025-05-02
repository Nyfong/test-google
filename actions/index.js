"use server";
import toast from "react-hot-toast";

import { signIn, signOut } from "@/auth";

export async function doSocialLogin(formData) {
  const action = formData.get("action");
  await signIn(action, { redirectTo: "/home" });
  toast.success("Successfully toasted!");
}

export async function doLogout() {
  await signOut({ redirectTo: "/" });
}
