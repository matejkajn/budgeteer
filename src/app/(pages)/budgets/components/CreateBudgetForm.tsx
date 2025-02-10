"use client";

import React from "react";
import EmojiPicker from "emoji-picker-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import useCreateBudget from "../hooks/useCreateBudget";

type Props = React.ComponentProps<"div"> & {
  setOpen?: (open: boolean) => void;
  onCreation?: (event: void) => void;
};

export default function CreateBudgetForm({
  className,
  setOpen,
  onCreation,
}: Props) {
  const [name, setName] = React.useState("");
  const [amount, setAmount] = React.useState(0);
  const [emojiIcon, setEmojiIcon] = React.useState("🚗");
  const [openEmojiPicker, setOpenEmojiPicker] = React.useState(false);
  const isDisabled = name.trim() === "" || amount <= 0;

  return (
    <div className={cn("grid items-start gap-4", className)}>
      <div className="grid gap-2">
        <Label>Name</Label>
        <Input
          type="text"
          placeholder="My new car"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div className="grid gap-2">
          <Label>Amount</Label>
          <Input
            min={0}
            type="number"
            step="0.01"
            onChange={(e) => setAmount(parseFloat(e.target.value))}
            placeholder="e.g. €2000"
            defaultValue="@shadcn"
          />
        </div>
        <div className="grid gap-2">
          <Label>Icon</Label>
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
            onCreation?.();
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
