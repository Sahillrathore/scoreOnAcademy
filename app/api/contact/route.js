import { connectDB } from "@/lib/mongodb";
import Contact from "@/models/Contact";
import { verifyToken } from "@/lib/auth";
import { cookies } from "next/headers";


// ==========================
// CREATE CONTACT (Public)
// ==========================
export async function POST(req) {
  try {
    const body = await req.json();
    let { name, phone, message } = body;

    // Trim inputs
    name = name?.trim();
    phone = phone?.toString().trim();
    message = message?.trim();

    // Validation
    if (!name || !phone || !message) {
      return Response.json(
        { success: false, message: "All fields are required" },
        { status: 400 }
      );
    }

    // Strict phone validation (10 digits only)
    if (!/^\d{10}$/.test(phone)) {
      return Response.json(
        { success: false, message: "Phone must be exactly 10 digits" },
        { status: 400 }
      );
    }

    await connectDB();

    const contact = await Contact.create({
      name,
      phone,
      message,
    });

    return Response.json({
      success: true,
      message: "Contact saved successfully",
      data: {
        id: contact._id,
        name: contact.name,
        phone: contact.phone,
        createdAt: contact.createdAt,
      },
    });

  } catch (error) {
    console.error("Contact Save Error:", error);

    return Response.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}



// ==========================
// GET CONTACTS (Admin Only)
// ==========================
export async function GET() {
  try {
    const cookieStore = cookies();
    const token = cookieStore.get("adminToken")?.value;

    if (!token) {
      return Response.json(
        { success: false, message: "Unauthorized" },
        { status: 401 }
      );
    }

    // Verify JWT
    verifyToken(token);

    await connectDB();

    const contacts = await Contact.find()
      .sort({ createdAt: -1 })
      .lean();

    return Response.json({
      success: true,
      count: contacts.length,
      contacts,
    });

  } catch (error) {
    return Response.json(
      { success: false, message: "Unauthorized" },
      { status: 401 }
    );
  }
}