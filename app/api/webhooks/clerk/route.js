import { Webhook } from "svix";
import { headers } from "next/headers";
import { db } from "@/lib/prisma";

export async function POST(req) {
  const SIGNING_SECRET = process.env.CLERK_WEBHOOK_SIGNING_SECRET;
  if (!SIGNING_SECRET) {
    return new Response("Missing CLERK_WEBHOOK_SIGNING_SECRET", { status: 500 });
  }

  const headerPayload = await headers();
  const svixId = headerPayload.get("svix-id");
  const svixTimestamp = headerPayload.get("svix-timestamp");
  const svixSignature = headerPayload.get("svix-signature");

  if (!svixId || !svixTimestamp || !svixSignature) {
    return new Response("Missing svix headers", { status: 400 });
  }

  const payload = await req.text();
  const wh = new Webhook(SIGNING_SECRET);

  let evt;
  try {
    evt = wh.verify(payload, {
      "svix-id": svixId,
      "svix-timestamp": svixTimestamp,
      "svix-signature": svixSignature,
    });
  } catch (err) {
    return new Response("Invalid signature", { status: 400 });
  }

  const { type: eventType, data } = evt;

  if (eventType === "user.created" || eventType === "user.updated") {
    await db.user.upsert({
      where: { clerkId: data.id },
      update: {
        email: data.email_addresses?.[0]?.email_address,
        fullName: `${data.first_name ?? ""} ${data.last_name ?? ""}`.trim(),
        avatarUrl: data.image_url,
      },
      create: {
        clerkId: data.id,
        email: data.email_addresses?.[0]?.email_address,
        fullName: `${data.first_name ?? ""} ${data.last_name ?? ""}`.trim(),
        avatarUrl: data.image_url,
      },
    });
  }

  if (eventType === "user.deleted") {
    await db.user.delete({ where: { clerkId: data.id } }).catch(() => {});
  }

  return new Response("OK", { status: 200 });
}
