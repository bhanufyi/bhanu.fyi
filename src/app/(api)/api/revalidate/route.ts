// app/api/revalidate/route.ts
import { revalidatePath } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get("secret");

  if (secret !== process.env.REVALIDATION_TOKEN) {
    return NextResponse.json({ message: "Invalid token" }, { status: 401 });
  }

  const path = request.nextUrl.searchParams.get("path") || "/";

  revalidatePath(path);

  return NextResponse.json({ revalidated: true, now: Date.now() });
}
