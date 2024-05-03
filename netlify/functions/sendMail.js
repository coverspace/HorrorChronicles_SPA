require("dotenv").config();
const formData = require("form-data");
const Mailgun = require("mailgun.js");
const mailgun = new Mailgun(formData);
const mg = mailgun.client({
  username: "api",
  key: process.env.NETLIFY_EMAILS_PROVIDER_API_KEY,
});

const queryString = require("querystring");
exports.handler = async (event) => {
  try {
    const formData = queryString.parse(event.body);

    // const name = formData.name;
    const email = formData.email;
    // const message = formData.comment;

    const emailData = {
      from: `<${email}>`,
      to: "office@smartstake.ai",
      subject: "New Contact Form Submission",
      text: "A newly signed up member for HorrorChronicles!",
    };

    await mg.messages.create(
      process.env.NETLIFY_EMAILS_MAILGUN_DOMAIN,
      emailData
    );

    let redirectLocation = "/success";
    if (
      event.headers.referer &&
      (event.headers.referer.includes("/ge") ||
        event.headers.referer.includes("/hu"))
    ) {
      redirectLocation = `${event.headers.referer.split("/")[3]}/success`;
    }

    return {
      statusCode: 302,
      headers: {
        Location: redirectLocation,
      },
      body: "", // Empty body is required for a response
    };
  } catch (error) {
    console.error("Error:", error);

    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to send email" }),
    };
  }
};
