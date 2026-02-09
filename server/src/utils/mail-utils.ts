// import nodemailer from "nodemailer";
import { configDotenv } from "dotenv";
import { Request } from "express";
import { Resend } from "resend";
configDotenv();

const resend = new Resend(process.env.RESEND_API_KEY);
// const { AUTH_EMAIL, AUTH_PASS } = process.env;
// const transport = nodemailer.createTransport({
//   service: "gmail",
//   host: "smtp.gmail.com",
//   port: 587,
//   secure: false,
//   auth: { user: AUTH_EMAIL, pass: AUTH_PASS },
// });

export const verifyUserEmail = async (receiver: string, verifyLink: string) => {
  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: receiver,
    subject: "Verify user",
    html: `      <body
    style="
      margin: 0;
      padding: 0;
      background-color: #f4f4f4;
      font-family: Arial, Helvetica, sans-serif;
    "
  >
    <!-- Outer wrapper -->
    <table
      width="100%"
      cellpadding="0"
      cellspacing="0"
      style="background-color: #f4f4f4; padding: 40px 0"
    >
      <tr>
        <td align="center">
          <!-- Card -->
          <table
            width="100%"
            cellpadding="0"
            cellspacing="0"
            style="
              max-width: 600px;
              background-color: #ffffff;
              border-radius: 12px;
              padding: 30px;
            "
          >
            <!-- Header -->
            <tr>
              <td align="center" style="padding-bottom: 20px">
                <p style="margin: 0; font-size: 14px; color: #555">
                  Thanks for signing up!
                </p>
                <h2 style="margin: 10px 0 0 0; color: #000">
                  Verify your email address
                </h2>
              </td>
            </tr>

            <!-- Content -->
            <tr>
              <td
                align="center"
                style="
                  font-size: 15px;
                  color: #333;
                  padding: 0 20px 30px 20px;
                  line-height: 1.5;
                "
              >
                You've entered this email address for your account.
                <br />
                Please verify your email address by clicking the button below.
              </td>
            </tr>

            <!-- Button -->
            <tr>
              <td align="center" style="padding-bottom: 30px">
                <a
                  href="${verifyLink}"
                  target="_blank"
                  style="
                    display: inline-block;
                    padding: 15px 30px;
                    background-color: #2563eb;
                    color: #ffffff;
                    text-decoration: none;
                    border-radius: 25px;
                    font-size: 16px;
                    font-weight: bold;
                  "
                >
                  Verify your email
                </a>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td
                align="center"
                style="
                  font-size: 12px;
                  color: #888;
                  border-top: 1px solid #eee;
                  padding-top: 15px;
                "
              >
                Powered by Food Delivery
              </td>
            </tr>
          </table>
          <!-- End Card -->
        </td>
      </tr>
    </table>
    <!-- End Wrapper -->
  </body>
`,
  });
};
