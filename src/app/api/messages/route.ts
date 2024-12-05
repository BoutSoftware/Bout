import { hasMissingFields } from "@/utils";
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
    const { name, email, company, message } = await req.json();

    if (hasMissingFields({ name, email, company, message })) {
        return NextResponse.json({ code: "MISSING_FIELDS", message: "Some fields are missing" })
    }

    const messageResult = await prisma.message.create({
        data: {
            name,
            email,
            company,
            message,
        },
    });

    return NextResponse.json({ code: "OK", message: "Message sent", data: messageResult });
}