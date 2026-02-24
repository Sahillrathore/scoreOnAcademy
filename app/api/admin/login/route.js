import { connectDB } from "@/lib/mongodb";
import Admin from "@/models/Admin";
import bcrypt from "bcryptjs";
import { signToken } from "@/lib/auth";
import { serialize } from "cookie";

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    await connectDB();

    const admin = await Admin.findOne({ email });
    if (!admin) {
      return Response.json({ message: "Invalid credentials" }, { status: 401 });
    }

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return Response.json({ message: "Invalid credentials" }, { status: 401 });
    }

    const token = signToken(admin._id);

    const cookie = serialize("adminToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });

    return new Response(JSON.stringify({ success: true }), {
      headers: { "Set-Cookie": cookie },
    });

  } catch (err) {
    return Response.json({ message: "Login failed" }, { status: 500 });
  }
}