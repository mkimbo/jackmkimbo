"use server";

import { revalidatePath } from "next/cache";
const nodemailer = require("nodemailer");
export async function SendMail(data: FormData) {
  const msg = data.get("message") as string;
  const subject = data.get("subject") as string;
  const email = data.get("email") as string;

  const message = {
    from: email,
    to: "admin@jackmkimbo.dev",
    subject: subject,
    text: msg,
    html: `<p>${msg}</p>`,
  };

  const transporter = nodemailer.createTransport({
    host: "smtp.mandrillapp.com",
    port: process.env.NEXT_MAILCHIMP_PORT,
    secure: false,
    auth: {
      user: "Jack Mkimbo",
      pass: process.env.NEXT_MAILCHIMP_API_KEY,
    },
  });

  const info = await transporter.sendMail(message);

  console.log("Message sent: %s", info.messageId);
  // revalidatePath("/contact");
}
