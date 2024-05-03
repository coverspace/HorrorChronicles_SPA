require("dotenv").config();
const formData = require("form-data");
const Mailgun = require("mailgun.js");
const mailgun = new Mailgun(formData);
const mg = mailgun.client({
  username: "api",
  key: process.env.NETLIFY_EMAILS_PROVIDER_API_KEY,
});

exports.handler = async (event) => {
  try {
    const { name, email, message } = JSON.parse(event.body);

    const emailData = {
      from: `${name} <${email}>`,
      to: "office@smartstake.ai",
      subject: "New Contact Form Submission",
      text: message,
    };

    await mg.messages.create(
      process.env.NETLIFY_EMAILS_MAILGUN_DOMAIN,
      emailData
    );

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email sent successfully" }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to send email" }),
    };
  }
};
