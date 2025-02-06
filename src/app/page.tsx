import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";

export default function Home() {
  return (
    <section className="space-y-6 py-12 sm:py-20 lg:py-24 text-center m-auto">
      <div className="container flex max-w-screen-md flex-col items-center gap-5 text-center m-auto">
        <h1 className="text-balance font-satoshi text-2xl font-extrabold leading-[1.15] tracking-tight sm:text-5xl md:text-6xl md:leading-[1.15]">
          Smart budgeting{" "}
          <span className="bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
            simply with Budgeteer!
          </span>
        </h1>

        <p className="max-w-2xl text-balance text-muted-foreground text-lg">
          Minimalist. Simple. <b>Open Source</b>. <br /> Manage your spending
          and… Nothing else!
        </p>

        <div className="flex justify-center space-x-2">
          <Button className="font-bold">Get Started</Button>
          <Link href="https://github.com/matejkajn/budgeteer" target="_blank">
            <Button variant={"outline"} className="font-bold">
              <FaGithub /> Star on GitHub
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
