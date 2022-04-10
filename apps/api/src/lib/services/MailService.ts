import { createTransport } from 'nodemailer'

export class MailService {
  async execute(_input: any): Promise<any> {
    const transporter = createTransport({
      host: process.env.MAIL_HOST,
      port: parseInt(process.env.MAIL_PORT || ''),
      secure: true, // use TLS
      auth: {
        user: process.env.MAIL_USER || '',
        pass: process.env.MAIL_PASS || ''
      },
      authMethod: 'plain',
      tls: {
        // do not fail on invalid certs
        rejectUnauthorized: false
      }
    })

    const mailRes = await transporter.sendMail({
      from: '',
      to: '',
      subject: '',
      text: ''
    })

    return mailRes
  }
}
