"use client";

import React from "react";
import EmojiPicker from "emoji-picker-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import useCreateBudget from "../hooks/useCreateBudget";
import { toast } from "@/hooks/use-toast";

interface CreateBudgetFormProps extends React.ComponentProps<"div"> {
  setOpen?: (open: boolean) => void; // Function to close modal/dialog
}

export default function CreateBudgetForm({
  className,
  setOpen,
}: CreateBudgetFormProps) {
  const [name, setName] = React.useState("");
  const [amount, setAmount] = React.useState(0);
  const [emojiIcon, setEmojiIcon] = React.useState("🚗");
  const [openEmojiPicker, setOpenEmojiPicker] = React.useState(false);
  const isDisabled = name.trim() === "" || amount <= 0;

  return (
    <div className={cn("grid items-start gap-4", className)}>
      <div className="grid gap-2">
        <Label htmlFor="name">Name</Label>
        <Input
          type="text"
          id="name"
          placeholder="My new car"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div className="grid gap-2">
          <Label htmlFor="amount">Amount</Label>
          <Input
            min={0}
            type="number"
            id="amount"
            step="0.01"
            onChange={(e) => setAmount(parseFloat(e.target.value))}
            placeholder="e.g. 2000€"
            defaultValue="@shadcn"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="icon">Icon</Label>
          <Button
            variant="outline"
            onClick={(e) => {
              setOpenEmojiPicker(!openEmojiPicker);
              e.preventDefault();
            }}
          >
            {emojiIcon}
          </Button>
          <div className="absolute bottom-1/4 z-10">
            <EmojiPicker
              open={openEmojiPicker}
              onEmojiClick={(e) => {
                setEmojiIcon(e.emoji);
                setOpenEmojiPicker(!openEmojiPicker);
              }}
            />
          </div>
        </div>
      </div>
      <Button
        onClick={(e) => {
          e.preventDefault();
          if (!isDisabled) {
            useCreateBudget({ name, amount, icon: emojiIcon });
            setOpen?.(false);
          }
        }}
        disabled={isDisabled}
        type="submit"
      >
        Create Budget
      </Button>
    </div>
  );
}
