import { NextResponse } from "next/server";
import { isAdminLoggedIn } from "@/lib/admin-auth";
import { prisma } from "@/lib/prisma";

export async function GET() {
  if (!(await isAdminLoggedIn())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const items = await prisma.galleryItem.findMany({
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json(items);
}

export async function POST(request: Request) {
  if (!(await isAdminLoggedIn())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const title = String(body.title || "").trim();
  const imageUrl = String(body.imageUrl || "").trim();

  if (!title || !imageUrl) {
    return NextResponse.json(
      { error: "Title and image URL are required" },
      { status: 400 }
    );
  }

  const item = await prisma.galleryItem.create({
    data: {
      title,
      imageUrl,
      description: body.description
        ? String(body.description).trim()
        : null,
      isPublished: body.isPublished !== false,
    },
  });

  return NextResponse.json(item, { status: 201 });
}
