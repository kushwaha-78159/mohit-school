import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const studentName = String(body.studentName || "").trim();
    const parentName = String(body.parentName || "").trim();
    const phone = String(body.phone || "").trim();
    const email = String(body.email || "").trim();
    const className = String(body.className || "").trim();
    const message = String(body.message || "").trim();

    if (!studentName || !parentName || !phone || !className) {
      return NextResponse.json(
        { success: false, error: "Please fill all required fields." },
        { status: 400 }
      );
    }

    const enquiry = await prisma.admissionEnquiry.create({
      data: {
        studentName,
        parentName,
        phone,
        email: email || null,
        className,
        message: message || null,
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Admission enquiry submitted successfully.",
        id: enquiry.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("ADMISSION FORM ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Unable to submit your enquiry. Please try again.",
      },
      { status: 500 }
    );
  }
}
