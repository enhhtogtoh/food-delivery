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
    html: `      <div style="width: 100%; height: 100vh; align-items: center">
      <div style="width: auto; height: auto; background-color: white">
        <div
          style="padding-top: 50px; font-family: Arial, Helvetica, sans-serif"
        >
          <p style="margin: 0; text-align: center">Thanks for signing up!</p>
          <h2 style="margin: 0; text-align: center">
            Verify your email address
          </h2>
        </div>
        <p
          style="
            text-align: center;
            font-family: Arial, Helvetica, sans-serif;
            margin-left: 50px;
            margin-right: 50px;
          "
        >
          You've entered as the email address for you account. Please verify
          this email address by clicking button below.
        </p>
        <div
          style="display: flex; align-items: center; justify-content: center"
        >
          <a
            href="${verifyLink}"
            target="_blank"
            style="
              max-width: 300px;
              padding: 20px;
              background-color: blue;
              max-height: 40px;
              color: white;
              text-align: center;

              border-radius: 20px;
              font-size: 20px;
              font-family: Arial, Helvetica, sans-serif;
            "
            >Verify your email</a
          >
        </div>
        <div>
          <p
            style="
              color: gray;
              font-family: Arial, Helvetica, sans-serif;
              text-align: center;
            "
          >
            Powered by Food Delivery
          </p>
        </div>
      </div>
    </div>
`,
  });
};
