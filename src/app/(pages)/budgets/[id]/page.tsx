import type { Budget } from "@/types/types";

export default function Budget({ ...props }: Budget) {
  return (
    <div>
      <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl">
        {props.name}
      </h1>
    </div>
  );
}
