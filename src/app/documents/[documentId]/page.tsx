import { preloadQuery } from "convex/nextjs";
import { auth } from "@clerk/nextjs/server";

import { Document } from "./document";

import { api } from "../../../../convex/_generated/api";
import { Id } from "../../../../convex/_generated/dataModel";
interface DocumentIdPageProps {
  params: Promise<{ documentId: Id<"documents"> }>;
}

const DocumentIdPage = async ({ params }: DocumentIdPageProps) => {
  const { documentId } = await params;

  const { getToken } = await auth();
  const token = (await getToken({ template: "convex" })) ?? undefined;

  if (!token) {
    throw new Error("账户错误");
  }

  const preloadedDocument = await preloadQuery(
    api.documents.getById,
    {
      id: documentId,
    },
    { token }
  );

  if (!preloadedDocument) {
    throw new Error("文档未找到");
  }

  return <Document preloadedDocument={preloadedDocument} />;
};

export default DocumentIdPage;
