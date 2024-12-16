"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useMutation } from "convex/react";

import { Id } from "../../convex/_generated/dataModel";
import { api } from "../../convex/_generated/api";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface RemoveDialogProps {
  documentId: Id<"documents">;
  children: React.ReactNode;
}

export const RemoveDialog = ({ children, documentId }: RemoveDialogProps) => {
  const router = useRouter();
  const remove = useMutation(api.documents.removeById);
  const [isRemoving, setIsRemoving] = useState(false);

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent onClick={(e) => e.stopPropagation()}>
        <AlertDialogHeader>
          <AlertDialogTitle>您确定吗？</AlertDialogTitle>
          <AlertDialogDescription>
            这个操作不可逆，将永久删除该文档
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={(e) => e.stopPropagation()}>
            取消
          </AlertDialogCancel>
          <AlertDialogAction
            disabled={isRemoving}
            onClick={(e) => {
              e.stopPropagation();
              setIsRemoving(true);
              remove({ id: documentId })
                .catch(() => toast.error("Something went wrong"))
                .then(() => {
                  toast.success("Document removed");
                  router.push("/");
                })
                .finally(() => setIsRemoving(false));
            }}
          >
            删除
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
