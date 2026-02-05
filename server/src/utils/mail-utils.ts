import nodemailer from "nodemailer";
import { configDotenv } from "dotenv";
configDotenv();
const { AUTH_EMAIL, AUTH_PASS } = process.env;
const transport = nodemailer.createTransport({
  service: "gmail",
  auth: { user: AUTH_EMAIL, pass: AUTH_PASS },
});

export const verifyUserEmail = async (receiver: string, verifyLink: string) => {
  await transport.sendMail({
    from: `"Food Delivery" ${AUTH_EMAIL}`,
    to: receiver,
    subject: "Verify user",
    html: `<div style="width: 300px; height: 250px; border-radius: 8px">
  <a
    href="${verifyLink}" target="_blank"
    style="
      width: 100px;
      height: 100px;
      color: black;
      background-color: aqua;
      border-radius: 10px;
    "
    >verify dar llraa</a
  >
</div>
`,
  });
};
