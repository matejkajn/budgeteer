import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { FaTrashCan } from "react-icons/fa6";
import { Budget } from "@/types/types";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React from "react";
import useDeleteBudget from "../hooks/useDeleteBudget";

type Props = Budget & {
  onDelete: (id: number) => void;
};

export function BudgetCard({ ...props }: Props) {
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  //const percentage = Math.min(Math.round((amount / total) * 100), 100);

  return (
    <Card className="w-full relative">
      <CardContent className="pt-10 px-6 pb-6">
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center space-x-4">
            <div className="text-xl w-10 h-10 flex items-center justify-center bg-primary/10 rounded-full">
              {props.icon}
            </div>
            <Link key={props.id} href={`/budgets/${props.id}`}>
              <h3 className="text-lg font-semibold">{props.name}</h3>
            </Link>
          </div>
          <span className="text-lg text-muted-foreground">
            €{props.amount.toFixed(2)}
            {/* ${amount.toFixed(2)} / ${total.toFixed(2)} */}
          </span>
        </div>
        <Progress value={10} className="h-2 w-full" />
        <p className="text-xs text-right mt-2 text-muted-foreground">
          {10}% spent
        </p>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-3 right-3 text-muted-foreground hover:text-destructive"
            >
              <FaTrashCan className="h-5 w-5" />
              <span className="sr-only">Delete</span>
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>
                {`Are you sure you want to delete ${props.name} ${props.icon}?`}
              </DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete
                budget "{props.name} {props.icon}".
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                Cancel
              </Button>
              <Button
                variant="destructive"
                onClick={() => {
                  useDeleteBudget({ ...props });
                  if (props.id !== undefined) {
                    props.onDelete(props.id);
                  }
                }}
              >
                Delete
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
}
