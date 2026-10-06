import { NextResponse } from "next/server";
import { isAdminLoggedIn } from "@/lib/admin-auth";
import { writeFile } from "fs/promises";
import path from "path";
import crypto from "crypto";

export async function POST(request: Request) {
  if (!(await isAdminLoggedIn())) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

  const formData = await request.formData();
  const file = formData.get("file");

  if (!(file instanceof File)) {
    return NextResponse.json(
      { error: "Image file is required" },
      { status: 400 }
    );
  }

  const allowedTypes = [
    "image/jpeg",
    "image/png",
    "image/webp",
    "image/gif",
  ];

  if (!allowedTypes.includes(file.type)) {
    return NextResponse.json(
      { error: "Only JPG, PNG, WEBP and GIF images are allowed" },
      { status: 400 }
    );
  }

  const maxSize = 10 * 1024 * 1024;

  if (file.size > maxSize) {
    return NextResponse.json(
      { error: "Maximum image size is 10MB" },
      { status: 400 }
    );
  }

  const extension =
    file.type === "image/jpeg"
      ? "jpg"
      : file.type.split("/")[1];

  const filename = `${Date.now()}-${crypto.randomBytes(6).toString("hex")}.${extension}`;

  const uploadDir = path.join(
    process.cwd(),
    "public",
    "uploads",
    "gallery"
  );

  await writeFile(
    path.join(uploadDir, filename),
    Buffer.from(await file.arrayBuffer())
  );

  return NextResponse.json({
    success: true,
    imageUrl: `/uploads/gallery/${filename}`,
  });
}
