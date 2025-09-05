import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.json();

  await new Promise((r) => setTimeout(r, 800));

  if (!data?.name || !data?.email || !data?.address) {
    return NextResponse.json(
      { ok: false, message: "Invalid payload" },
      { status: 400 }
    );
  }

  return NextResponse.json({
    ok: true,
    orderId: Math.random().toString(36).slice(2),
  });
}
