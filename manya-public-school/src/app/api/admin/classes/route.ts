import { NextResponse } from "next/server";
import { isAdminLoggedIn } from "@/lib/admin-auth";
import { prisma } from "@/lib/prisma";

export async function GET() {
  if (!(await isAdminLoggedIn())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const classes = await prisma.classFee.findMany({
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json(classes);
}

export async function POST(request: Request) {
  if (!(await isAdminLoggedIn())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const className = String(body.className || "").trim();

  if (!className) {
    return NextResponse.json(
      { error: "Class name is required" },
      { status: 400 }
    );
  }

  const item = await prisma.classFee.create({
    data: {
      className,
      description: body.description
        ? String(body.description).trim()
        : null,
      admissionFee: Number(body.admissionFee) || 0,
      monthlyFee: Number(body.monthlyFee) || 0,
      annualFee: Number(body.annualFee) || 0,
      isPublished: body.isPublished !== false,
    },
  });

  return NextResponse.json(item, { status: 201 });
}
