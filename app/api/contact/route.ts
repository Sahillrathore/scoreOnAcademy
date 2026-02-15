import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, phone, message } = body;

    console.log(process.env.EMAIL_USER, process.env.EMAIL_PASS);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.RECEIVING_MAIL,
      subject: "New Contact Form Submission",
      html: `
        <h3>New Contact Message</h3>
        <p>Name: ${name}</p>
        <p>phone: ${phone}</p>
        <p>Message: ${message}</p>
      `
    });

    return Response.json({ success: true });

  } catch (err) {
    console.log(err)
    return Response.json({ success: false }, { status: 500 });
  }
}
