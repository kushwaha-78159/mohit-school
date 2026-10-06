import { NextResponse } from "next/server";
import { isAdminLoggedIn } from "@/lib/admin-auth";
import { prisma } from "@/lib/prisma";

export async function PATCH(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  if (!(await isAdminLoggedIn())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await context.params;
  const body = await request.json();

  const item = await prisma.galleryItem.update({
    where: { id },
    data: {
      ...(body.title !== undefined && {
        title: String(body.title).trim(),
      }),
      ...(body.imageUrl !== undefined && {
        imageUrl: String(body.imageUrl).trim(),
      }),
      ...(body.description !== undefined && {
        description: body.description
          ? String(body.description).trim()
          : null,
      }),
      ...(body.isPublished !== undefined && {
        isPublished: Boolean(body.isPublished),
      }),
    },
  });

  return NextResponse.json(item);
}

export async function DELETE(
  _request: Request,
  context: { params: Promise<{ id: string }> }
) {
  if (!(await isAdminLoggedIn())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await context.params;

  await prisma.galleryItem.delete({
    where: { id },
  });

  return NextResponse.json({ success: true });
}
