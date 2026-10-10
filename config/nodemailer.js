import nodemailer from "nodemailer";
import { EMAIL_PASSWORD } from "./env.js";

export const accountEmail = "heitorino1@gmail.com"

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'heitorino1@gmail.com',
        pass: EMAIL_PASSWORD
    }
})






export default transporter