import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = String(body.name || "").trim();
    const phone = String(body.phone || "").trim();
    const email = String(body.email || "").trim();
    const message = String(body.message || "").trim();

    if (!name || !phone || !message) {
      return NextResponse.json(
        { success: false, error: "Please fill all required fields." },
        { status: 400 }
      );
    }

    const savedMessage = await prisma.contactMessage.create({
      data: {
        name,
        phone,
        email: email || null,
        message,
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Your message has been sent successfully.",
        id: savedMessage.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("CONTACT FORM ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Unable to send your message. Please try again.",
      },
      { status: 500 }
    );
  }
}
