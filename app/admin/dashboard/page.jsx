import { cookies } from "next/headers";
import { verifyToken } from "@/lib/auth";
import { redirect } from "next/navigation";
import { connectDB } from "@/lib/mongodb";
import Contact from "@/models/Contact";

export default async function Dashboard() {
  const cookieStore = await cookies();
  const token = cookieStore.get("adminToken")?.value;

  if (!token) redirect("/admin/login");

  try {
    verifyToken(token);
  } catch {
    redirect("/admin/login");
  }

  await connectDB();
  const contacts = await Contact.find().sort({ createdAt: -1 }).lean();

  const formatToIST = (dateString) => {
    const date = new Date(dateString);

    const options = {
      timeZone: "Asia/Kolkata",
      day: "numeric",
      month: "short",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    };

    const formatted = new Intl.DateTimeFormat("en-IN", options).format(date);

    return formatted.replace(",", "").toLowerCase();
  };

  return (
    <div className="min-h-screen bg-gray-50 p-10">
      <h1 className="text-3xl font-bold mb-8">Contact Submissions</h1>

      <div className="bg-white rounded-2xl shadow overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-4">Name</th>
              <th className="p-4">Phone</th>
              <th className="p-4">Message</th>
              <th className="p-4">Date</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((c) => (
              <tr key={c._id} className="border-t">
                <td className="p-4 font-medium">{c.name}</td>
                <td className="p-4">{c.phone}</td>
                <td className="p-4">{c.message}</td>
                <td className="p-4">
                  {formatToIST(c.createdAt)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}