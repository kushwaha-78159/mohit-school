import { cookies } from "next/headers";
import { jwtVerify, SignJWT } from "jose";

const COOKIE_NAME = "manya_admin_session";

function getSecret() {
  const secret = process.env.AUTH_SECRET;

  if (!secret) {
    throw new Error("AUTH_SECRET is not configured");
  }

  return new TextEncoder().encode(secret);
}

export async function createAdminSession() {
  return new SignJWT({
    role: "admin",
    email: process.env.ADMIN_EMAIL,
  })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(getSecret());
}

export async function isAdminLoggedIn() {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;

  if (!token) return false;

  try {
    const { payload } = await jwtVerify(token, getSecret());

    return (
      payload.role === "admin" &&
      payload.email === process.env.ADMIN_EMAIL
    );
  } catch {
    return false;
  }
}

export { COOKIE_NAME };
