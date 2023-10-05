const nodemailer = require('nodemailer');
import axios from 'axios';
import config from '../components/config';
const apiURL = config.api_url;

//-----------------------------------------------------------------------------

const emailSettings = async () => {
  try {
    return await axios.get(`${apiURL}/settings`, {
      headers: {
        'Accept-Language': `en`,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
export async function sendMail(subject, toEmail, otpText, attachments) {
  const { data } = await emailSettings();
  console.log('mailSettings', data.mail);

  if (data.mail) {
    const transporter = nodemailer.createTransport({
      host: data.mail.mail_host,
      port: 587,
      secure: true,
      auth: {
        user: data.mail.mail_username,
        pass: data.mail.mail_password,
      },
      tls: {
        // do not fail on invalid certs
        rejectUnauthorized: false,
      },
    });

    var mailOptions = {
      from: data.mail.mail_from_address,
      to: toEmail,
      subject: subject,
      text: otpText,
      attachments: attachments,
    };
    await new Promise((resolve, reject) => {
      // send mail
      transporter.sendMail(mailOptions, (err, response) => {
        if (err) {
          reject(err);
        } else {
          resolve(response);
          return {
            status: 200,
            message: 'Success',
          };
        }
      });
    });
  }
}
