const nodemailer = require("nodemailer");
//-----------------------------------------------------------------------------
export async function sendMail(subject, toEmail, otpText) {
    const transporter = nodemailer.createTransport({
        host: process.env.nodemailerHost,
        port: process.env.nodemailerPort,
        secure: true,
        auth: {
            user: process.env.nodemailerUser,
            pass: process.env.nodemailerPass,
        },
    });

    var mailOptions = {
        from: process.env.nodemailerFrom,
        to: toEmail,
        subject: subject,
        text: otpText,
    };
    await new Promise((resolve, reject) => {
        // send mail
        transporter.sendMail(mailOptions, (err, response) => {
            if (err) {
                reject(err);
            } else {
                resolve(response);
            }
        });
    });
}