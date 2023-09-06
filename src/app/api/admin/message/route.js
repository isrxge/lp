import connectDB from "@/lib/mongodb";
import Message from "@/models/message";
import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { getServerSession } from "next-auth";
export async function POST(req, res) {
  const session = await getServerSession({ req });
  try {
    if (session) {
      await connectDB();
      const messages = await Message.find(
        {},
        { name: 1, email: 1, message: 1 },
      );
      return NextResponse.json({ messages });
    } else {
      return NextResponse.json({
        msg: ["You are not allowed to perform this action."],
      });
    }
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
