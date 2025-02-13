"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendConfirmationEmail = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const transporter = nodemailer_1.default.createTransport({
    service: 'SendGrid',
    auth: {
        user: 'gavranamaria@gmail.com',
        pass: 'LQ1gkFUrO96t28IV',
    },
});
function sendConfirmationEmail(email, confirmationLink) {
    const mailOptions = {
        from: 'gavranamaria@gmail.com',
        to: email,
        subject: 'Confirm Your Email Address',
        html: `Click the following link to confirm your email: <a href="${confirmationLink}">${confirmationLink}</a>`,
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email: ', error);
        }
        else {
            console.log('Email sent: ', info.response);
        }
    });
}
exports.sendConfirmationEmail = sendConfirmationEmail;
//# sourceMappingURL=ConfirmEmail.js.map