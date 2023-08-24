import connectDB from "@/lib/mongodb";
import Message from "@/models/message";
import { NextResponse } from "next/server";
import mongoose from "mongoose";
const nodemailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");
const email = process.env.GMAIL_EMAIL_ADDRESS;
export const mailOptions = {
  from: email,
  to: email,
};
export async function POST(req, res) {
  const {
    name,

    email,

    message,
  } = await req.json();
  try {
    await connectDB();

    await Message.create({
      name,

      email,

      message,
    });
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      let errorList = [];
      for (let e in error.errors) {
        errorList.push(error.errors[e].message);
      }
      // console.log(errorList);
      return NextResponse.json({ msg: errorList });
    } else {
      return NextResponse.json({ msg: ["Unable to send message."] });
    }
  }
  const mess = {
    from: email,
    to: process.env.GMAIL_EMAIL_ADDRESS,
    subject: `you have received a message from ${name}`,
    text: message,
    html: `<html><p>${message}</p></html>`,
  };

  let transporter = nodemailer.createTransport(
    smtpTransport({
      host: "smtp.gmail.com",
      name: "Example",
      service: 'gmail',
      port: 587,
      secure: false, // use SSL
      auth: {
        user: "phunguyen12111998@gmail.com",
        pass: "lhxeqazhutcfxcrf",
      },
      //   tls: {
      //     ciphers: "SSLv3",
      //   },
    }),
  );

  try {
    const res = await transporter.sendMail(mess);

    // return res.status(200).json({ success: true });
  } catch (err) {
    console.log(err);
  }
  return NextResponse.json({
    msg: ["Message sent successfully"],
    success: true,
  });
}
export async function GET() {
  try {
    await connectDB();
    const messages = await Message.find({});
    return NextResponse.json({ messages });
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      let errorList = [];
      for (let e in error.errors) {
        errorList.push(error.errors[e].message);
      }
      console.log(errorList);
      return NextResponse.json({ msg: errorList });
    } else {
      return NextResponse.json({ msg: ["Unable to send message."] });
    }
  }
}