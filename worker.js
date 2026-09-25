const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json",
      ...corsHeaders,
    },
  });
}

async function sendBrevoEmail(env, payload) {
  const response = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "api-key": env.BREVO_API_KEY,
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    console.error("Brevo API error:", data);

    throw new Error(
      data.message || "Brevo email sending failed."
    );
  }

  return data;
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // CORS
    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: corsHeaders,
      });
    }

    // Health check
    if (url.pathname === "/api/health") {
      return jsonResponse({
        success: true,
        message: "TechEsp Worker is running",
      });
    }

    // Contact API
    if (url.pathname === "/api/contact") {
      if (request.method !== "POST") {
        return jsonResponse(
          {
            success: false,
            message: "Method not allowed.",
          },
          405
        );
      }

      try {
        const {
          name,
          company,
          email,
          phone,
          service,
          message,
        } = await request.json();

        // Required fields
        if (!name || !email || !phone || !message) {
          return jsonResponse(
            {
              success: false,
              message:
                "Name, email, phone and message are required.",
            },
            400
          );
        }

        // --------------------------------------------------
        // ADMIN EMAIL
        // --------------------------------------------------

        const adminEmail = {
          sender: {
            name: "TechEsp",
            email: "support.techesp@gmail.com",
          },

          to: [
            {
              email: "support.techesp@gmail.com",
            },
          ],

          replyTo: {
            email,
            name,
          },

          subject: `New TechEsp Enquiry - ${name}`,

          textContent: `
New TechEsp Website Enquiry

Name: ${name}
Company: ${company || "Not provided"}
Email: ${email}
Phone: ${phone}
Service: ${service || "Not selected"}

Message:
${message}
          `.trim(),

          htmlContent: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>

<body style="margin:0; padding:0; background:#08080c; font-family:Arial,Helvetica,sans-serif; color:#ffffff;">

  <div style="width:100%; background:#08080c; padding:40px 0;">

    <div style="max-width:650px; margin:0 auto; background:#111116; border:1px solid #29202f; border-radius:18px; overflow:hidden;">

      <div style="padding:30px; background:linear-gradient(135deg,#17101f,#0d0d12); border-bottom:1px solid #302039;">

        <div style="display:inline-block; padding:10px 13px; border-radius:10px; background:linear-gradient(135deg,#8b5cf6,#6d28d9); color:#ffffff; font-size:18px; font-weight:bold;">
          TE
        </div>

        <span style="margin-left:10px; font-size:20px; font-weight:bold; color:#ffffff;">
          TechEsp
        </span>

        <div style="margin-top:28px;">

          <div style="font-size:12px; letter-spacing:2px; text-transform:uppercase; color:#a78bfa; font-weight:bold;">
            Website Enquiry
          </div>

          <h1 style="margin:10px 0 0; font-size:28px; color:#ffffff;">
            New enquiry received
          </h1>

          <p style="margin:10px 0 0; color:#aaa5b5; font-size:14px; line-height:1.6;">
            A new enquiry has been submitted through the TechEsp website.
          </p>

        </div>

      </div>

      <div style="padding:30px;">

        <div style="background:#181820; border:1px solid #292935; border-radius:12px; padding:22px;">

          <div style="margin-bottom:18px;">
            <div style="font-size:11px; text-transform:uppercase; letter-spacing:1px; color:#8b5cf6;">
              Name
            </div>
            <div style="margin-top:5px; font-size:16px; color:#ffffff;">
              ${name}
            </div>
          </div>

          <div style="margin-bottom:18px;">
            <div style="font-size:11px; text-transform:uppercase; letter-spacing:1px; color:#8b5cf6;">
              Company
            </div>
            <div style="margin-top:5px; font-size:16px; color:#ffffff;">
              ${company || "Not provided"}
            </div>
          </div>

          <div style="margin-bottom:18px;">
            <div style="font-size:11px; text-transform:uppercase; letter-spacing:1px; color:#8b5cf6;">
              Email
            </div>
            <div style="margin-top:5px; font-size:16px; color:#ffffff;">
              ${email}
            </div>
          </div>

          <div style="margin-bottom:18px;">
            <div style="font-size:11px; text-transform:uppercase; letter-spacing:1px; color:#8b5cf6;">
              Phone
            </div>
            <div style="margin-top:5px; font-size:16px; color:#ffffff;">
              ${phone}
            </div>
          </div>

          <div>
            <div style="font-size:11px; text-transform:uppercase; letter-spacing:1px; color:#8b5cf6;">
              Service
            </div>
            <div style="margin-top:5px; font-size:16px; color:#ffffff;">
              ${service || "Not selected"}
            </div>
          </div>

        </div>

        <div style="margin-top:24px;">

          <div style="font-size:11px; text-transform:uppercase; letter-spacing:1px; color:#8b5cf6; font-weight:bold;">
            Message
          </div>

          <div style="margin-top:10px; padding:20px; background:#0c0c11; border-left:3px solid #8b5cf6; border-radius:8px; color:#d8d4df; font-size:15px; line-height:1.7; white-space:pre-wrap;">
            ${message}
          </div>

        </div>

      </div>

      <div style="padding:22px 30px; background:#0c0c11; border-top:1px solid #29202f;">

        <div style="font-size:13px; color:#77727f;">
          TechEsp
        </div>

        <div style="margin-top:5px; font-size:12px; color:#5f5a66;">
          Technology • Infrastructure • Security
        </div>

      </div>

    </div>

  </div>

</body>
</html>
          `,
        };

        // Send enquiry to TechEsp
        await sendBrevoEmail(env, adminEmail);

        // --------------------------------------------------
        // CLIENT AUTO-REPLY
        // --------------------------------------------------

        try {
          const autoReplyEmail = {
            sender: {
              name: "TechEsp",
              email: "support.techesp@gmail.com",
            },

            to: [
              {
                email,
                name,
              },
            ],

            subject: "We've received your enquiry — TechEsp",

            textContent: `
Hi ${name},

Thank you for getting in touch with TechEsp.

Your enquiry has been successfully received by our team.

We have received the following details:

Company: ${company || "Not provided"}
Service: ${service || "Not selected"}

Our team will review your requirements and get back to you as soon as possible.

Regards,
TechEsp Team
Technology • Infrastructure • Security

support.techesp@gmail.com
            `.trim(),

            htmlContent: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>

<body style="margin:0; padding:0; background:#07070a; font-family:Arial,Helvetica,sans-serif; color:#ffffff;">

  <div style="width:100%; background:#07070a; padding:40px 15px;">

    <div style="max-width:620px; margin:0 auto; background:#101014; border:1px solid #29202f; border-radius:20px; overflow:hidden;">

      <!-- HEADER -->

      <div style="padding:32px 30px; background:linear-gradient(135deg,#181021 0%,#0c0b10 100%); border-bottom:1px solid #302039;">

        <div>

          <span style="display:inline-block; vertical-align:middle; padding:10px 12px; border-radius:10px; background:linear-gradient(135deg,#a855f7,#6d28d9); color:#ffffff; font-size:18px; font-weight:bold; letter-spacing:-1px;">
            TE
          </span>

          <span style="display:inline-block; vertical-align:middle; margin-left:10px; color:#ffffff; font-size:21px; font-weight:bold;">
            TechEsp
          </span>

        </div>

        <div style="margin-top:32px;">

          <div style="font-size:11px; letter-spacing:2.5px; text-transform:uppercase; color:#a78bfa; font-weight:bold;">
            ENQUIRY RECEIVED
          </div>

          <h1 style="margin:12px 0 0; color:#ffffff; font-size:30px; line-height:1.25; font-weight:700;">
            Thanks for reaching out.
          </h1>

          <p style="margin:12px 0 0; color:#aaa5b5; font-size:14px; line-height:1.7;">
            Your message is safely with our team.
          </p>

        </div>

      </div>

      <!-- MAIN CONTENT -->

      <div style="padding:32px 30px;">

        <div style="font-size:18px; color:#ffffff; font-weight:600;">
          Hi ${name},
        </div>

        <div style="margin-top:18px; color:#c4bfca; font-size:15px; line-height:1.8;">

          <p style="margin:0 0 15px;">
            Thank you for getting in touch with
            <strong style="color:#ffffff;">TechEsp</strong>.
          </p>

          <p style="margin:0 0 15px;">
            We have successfully received your enquiry and our team will review your requirements shortly.
          </p>

          <p style="margin:0;">
            We appreciate your interest in TechEsp and will get back to you as soon as possible.
          </p>

        </div>

        <!-- ENQUIRY SUMMARY -->

        <div style="margin-top:28px; padding:20px; background:#17171e; border:1px solid #292935; border-radius:12px;">

          <div style="font-size:11px; letter-spacing:1.5px; text-transform:uppercase; color:#a78bfa; font-weight:bold;">
            Your enquiry
          </div>

          <div style="margin-top:16px;">

            <div style="margin-bottom:12px;">
              <span style="color:#77727f; font-size:12px;">
                Company
              </span>

              <div style="margin-top:3px; color:#eeeeF2; font-size:14px;">
                ${company || "Not provided"}
              </div>
            </div>

            <div>
              <span style="color:#77727f; font-size:12px;">
                Service
              </span>

              <div style="margin-top:3px; color:#eeeeF2; font-size:14px;">
                ${service || "Not selected"}
              </div>
            </div>

          </div>

        </div>

        <!-- NEXT STEP -->

        <div style="margin-top:28px; padding:20px; border-radius:12px; background:linear-gradient(135deg,#1b1225,#111117); border:1px solid #3a2848;">

          <div style="color:#ffffff; font-size:15px; font-weight:600;">
            What's next?
          </div>

          <div style="margin-top:8px; color:#aaa5b5; font-size:13px; line-height:1.7;">
            Our team will review your enquiry and contact you regarding the next steps.
          </div>

        </div>

      </div>

      <!-- FOOTER -->

      <div style="padding:25px 30px; background:#0b0b0f; border-top:1px solid #29202f;">

        <div style="color:#ffffff; font-size:15px; font-weight:600;">
          TechEsp Team
        </div>

        <div style="margin-top:7px; color:#77727f; font-size:12px;">
          Technology • Infrastructure • Security
        </div>

        <div style="margin-top:15px;">

          <a
            href="mailto:support.techesp@gmail.com"
            style="color:#a78bfa; text-decoration:none; font-size:12px;"
          >
            support.techesp@gmail.com
          </a>

        </div>

        <div style="margin-top:20px; color:#4f4b55; font-size:11px;">
          This is an automated confirmation email from TechEsp.
        </div>

      </div>

    </div>

  </div>

</body>
</html>
            `,
          };

          await sendBrevoEmail(env, autoReplyEmail);
        } catch (error) {
          // Auto-reply failure should not fail the enquiry
          console.error("Auto-reply email error:", error);
        }

        return jsonResponse({
          success: true,
          message: "Your enquiry has been sent successfully.",
        });

      } catch (error) {
        console.error("Contact API error:", error);

        return jsonResponse(
          {
            success: false,
            message: "Unable to send enquiry right now.",
          },
          500
        );
      }
    }

    // Serve React website
    return env.ASSETS.fetch(request);
  },
};