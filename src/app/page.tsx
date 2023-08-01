import { db } from "@/lib/db";

export default async function Home() {
  await db.set("test", "test");
  return <div className="text-red-500">Hello World </div>;
}
