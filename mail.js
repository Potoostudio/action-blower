const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const auth = {
  auth: {
    api_key: '73e7ae666364e8e658f5a0a7f7e59941-ffefc4e4-59d2f359',
    domain: 'sandbox606698c8a6c74a37b9792118e087baa6.mailgun.org',
  },
};

const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail = (email, subject, text, cb) => {
  const mailOptions = {
    from: email, // TODO replace this with your own email
    to: 'randyhouchins@actionblower.com', // TODO: the receiver email has to be authorized for the free tier
    subject,
    text,
  };

  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      return cb(err, null);
    }
    return cb(null, data);
  });
};

module.exports = sendMail;
