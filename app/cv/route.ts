import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    // Assuming your PDF is stored in the public directory
    const filePath = path.join(process.cwd(), "public", "CV.pdf");

    // Read the PDF file
    const fileBuffer = fs.readFileSync(filePath);

    // Create response with appropriate headers
    const response = new NextResponse(fileBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": "inline; filename=resume.pdf",
      },
    });

    return response;
  } catch (error) {
    console.error("Error serving PDF:", error);
    return new NextResponse("Resume not found", { status: 404 });
  }
}
