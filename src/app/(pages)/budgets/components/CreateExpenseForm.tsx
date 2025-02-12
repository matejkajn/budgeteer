import React from "react";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import useCreateExpense from "../hooks/useCreateExpense";
import type { Expense } from "@/types/types";

export default function CreateExpenseForm({ id }: { id: number }) {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [price, setPrice] = React.useState(0);
  const [date, setDate] = React.useState<Date>();
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Add New Expense</h2>
      <form className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="name">Expense Name</Label>
          <Input
            id="name"
            placeholder="Enter expense name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="description">Description</Label>
          <Input
            id="description"
            type="string"
            placeholder="Enter expense description"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="grid gap-2 grid-cols-2">
          <div>
            <Label htmlFor="price">Price</Label>
            <Input
              min={0}
              type="number"
              step="0.01"
              onChange={(e) => setPrice(parseFloat(e.target.value))}
              placeholder="e.g. €150"
              defaultValue="@shadcn"
            />
          </div>
          <div>
            <Label htmlFor="date">Date</Label>
            <div>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent
                  align="start"
                  className="flex w-auto flex-col space-y-2 p-2"
                >
                  <div className="rounded-md border">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      disabled={(date) =>
                        date > new Date() || date < new Date("1900-01-01")
                      }
                    />
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </div>
        <Button
          onClick={(e) => {
            useCreateExpense({ name, price, description, id, date } as Expense);
            e.preventDefault();
          }}
          type="submit"
        >
          Add Expense
        </Button>
      </form>
    </div>
  );
}
