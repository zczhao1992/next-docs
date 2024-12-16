"use client";

import { useState } from "react";
import { toast } from "sonner";
import { useMutation } from "convex/react";

import { Id } from "../../convex/_generated/dataModel";
import { api } from "../../convex/_generated/api";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface RenameDialogProps {
  documentId: Id<"documents">;
  initialTitle: string;
  children: React.ReactNode;
}

export const RenameDialog = ({
  children,
  documentId,
  initialTitle,
}: RenameDialogProps) => {
  const update = useMutation(api.documents.updateById);
  const [isUpdating, setIsUpdating] = useState(false);

  const [newTitle, setNewTitle] = useState(initialTitle);
  const [open, setOpen] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsUpdating(true);

    update({
      id: documentId,
      title: newTitle.trim() || "Untitled",
    })
      .catch(() => toast.error("重命名失败"))
      .then(() => {
        setOpen(false);
        toast.success("文档已重命名");
      })
      .finally(() => {
        setIsUpdating(false);
      });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <form onSubmit={onSubmit}>
          <DialogHeader>
            <DialogTitle>重命名文档</DialogTitle>
            <DialogDescription>输入新的名称</DialogDescription>
          </DialogHeader>
          <div className="my-4">
            <Input
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              placeholder="文档名称"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
          <DialogFooter>
            <Button
              type="button"
              variant="ghost"
              disabled={isUpdating}
              onClick={(e) => {
                e.stopPropagation();
                setOpen(false);
              }}
            >
              取消
            </Button>
            <Button
              disabled={isUpdating}
              type="submit"
              onClick={(e) => e.stopPropagation()}
            >
              保存
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
