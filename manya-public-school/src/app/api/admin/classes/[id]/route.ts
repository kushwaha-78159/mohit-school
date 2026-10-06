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

  const item = await prisma.classFee.update({
    where: { id },
    data: {
      ...(body.className !== undefined && {
        className: String(body.className).trim(),
      }),
      ...(body.description !== undefined && {
        description: body.description
          ? String(body.description).trim()
          : null,
      }),
      ...(body.admissionFee !== undefined && {
        admissionFee: Number(body.admissionFee) || 0,
      }),
      ...(body.monthlyFee !== undefined && {
        monthlyFee: Number(body.monthlyFee) || 0,
      }),
      ...(body.annualFee !== undefined && {
        annualFee: Number(body.annualFee) || 0,
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

  await prisma.classFee.delete({
    where: { id },
  });

  return NextResponse.json({ success: true });
}
