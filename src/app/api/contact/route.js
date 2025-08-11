import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "Missing fields" }), {
        status: 400,
      });
    }

    // 配置你的邮箱服务，示例用Gmail SMTP（需开启安全设置）
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER, // 你的邮箱
        pass: process.env.SMTP_PASS, // 邮箱密码或应用专用密码
      },
    });

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.SMTP_USER, // 收件人邮箱，比如你的邮箱
      subject: `New Input from Lavosh Bakery`,
      text: message,
      html: `<p><b>Name:</b> ${name}</p>
             <p><b>Email:</b> ${email}</p>
             <p><b>Message:</b><br/>${message.replace(/\n/g, "<br/>")}</p>`,
    };

    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ message: "Email sent successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Failed to send email" }), {
      status: 500,
    });
  }
}
