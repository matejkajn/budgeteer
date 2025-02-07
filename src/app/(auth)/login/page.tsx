import { LoginForm } from "@/components/login-form";
import Image from "next/image";
import Link from "next/link";
import wallpaper from "/public/budgeteer.jpeg";

export default function LoginPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <div className="p-2 font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-500">
            <Link href="/" className="flex items-center">
              <h1 className="scroll-m-20 font-extrabold tracking-tight lg:text-2xl">
                Budgeteer
              </h1>
            </Link>
          </div>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>
      <div className="relative hidden bg-muted lg:block h-full w-full ">
        <Image
          src={wallpaper}
          fill
          alt="Finance"
          className="absolute inset-0 object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}
