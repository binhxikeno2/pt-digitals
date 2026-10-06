const contactRecipient = "legal@ptdigitals.com";
const resendEndpoint = "https://api.resend.com/emails";

function getStringValue(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const record = body as Record<string, unknown>;
  const email = getStringValue(record.email);
  const phone = getStringValue(record.phone);
  const message = getStringValue(record.message);

  if (!email || !message) {
    return Response.json(
      { error: "Email and message are required." },
      { status: 400 },
    );
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const fromEmail =
    process.env.CONTACT_FROM_EMAIL ?? "PT Digitals <onboarding@resend.dev>";

  if (!resendApiKey) {
    return Response.json(
      { error: "Email service is not configured." },
      { status: 503 },
    );
  }

  const text = [
    "New contact form message from PT Digitals.",
    "",
    `Email: ${email}`,
    `Phone: ${phone || "Not provided"}`,
    "",
    "Message:",
    message,
  ].join("\n");

  const html = `
    <h2>New contact form message from PT Digitals</h2>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(phone || "Not provided")}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(message).replaceAll("\n", "<br />")}</p>
  `;

  try {
    const resendResponse = await fetch(resendEndpoint, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [contactRecipient],
        reply_to: email,
        subject: "New message from PT Digitals contact form",
        text,
        html,
      }),
    });

    if (resendResponse.ok) {
      return Response.json({ ok: true });
    }
  } catch {
    return Response.json(
      { error: "Unable to send message right now." },
      { status: 502 },
    );
  }

  return Response.json(
    { error: "Unable to send message right now." },
    { status: 502 },
  );
}
