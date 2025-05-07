// © 2025 JoeWork.co

import { redirect } from "next/navigation";

export default function RootPage() {
  // Redirect to the English locale version
  redirect("/en");
}
