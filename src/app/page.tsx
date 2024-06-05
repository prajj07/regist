import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
      <Link href="/auth/register">
            <button className="px-4 py-2 bg-pink-500 text-white rounded">
              Register
            </button>
        </Link>
      </div>
    </main>
  );
}
