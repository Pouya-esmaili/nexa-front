export const SIGNATURE_HTML = `
  <table cellpadding="0" cellspacing="0" border="0" style="margin-top: 28px; font-family: -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;">
    <tr>
      <td style="padding-bottom: 4px;">
        <span style="font-size: 20px; font-weight: 700; color: #8F27FF;">Nexa Team</span>
      </td>
    </tr>
    <tr>
      <td style="padding-bottom: 12px; font-size: 13px; color: #222;">
        <a href="https://www.nexavc.com" style="color: #8F27FF; text-decoration: underline;">www.NexaVC.com</a>
      </td>
    </tr>
    <tr>
      <td style="border-top: 1px dotted #ccc; padding-top: 12px; font-size: 12px; color: #444; line-height: 1.7;">
        <strong>Address:</strong> 301-1414 Barclay St., Vancouver, British Columbia, Canada
      </td>
    </tr>
    <tr>
      <td style="padding-top: 14px;">
        <img src="https://www.nexavc.com/images/logo.svg" alt="Nexa" width="70" style="display: block;" />
      </td>
    </tr>
    <tr>
      <td style="padding-top: 18px; font-size: 10.5px; color: #b8a97a; line-height: 1.6;">
        This message is intended only for the use of the individual or entity to which it is addressed and may contain
        information which is privileged, confidential or subject to copyright. Internet communications cannot be guaranteed
        to be secure or error-free, as information could be intercepted, corrupted, lost, arrive late or contain viruses.
        The information contained in this e-mail is prepared using hardware and drawn from sources believed to be reliable,
        but the accuracy and completeness of the information is not guaranteed, nor in providing it does Nexa Venture Inc
        assume any liability for its contents.
      </td>
    </tr>
  </table>
`

export function confirmationEmailHtml(firstName: string) {
  const name = firstName || 'there'
  return `
    <div style="font-family: -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif; max-width: 480px; margin: 0 auto; color: #222;">
      <p style="font-size: 16px;">Hi ${name},</p>
      <p style="font-size: 15px; line-height: 1.6;">
        Thank you for reaching out to Nexa. We've received your message and a member of our advisory team
        will get back to you within 24–48 hours.
      </p>
      <p style="font-size: 15px; line-height: 1.6;">
        If your inquiry is urgent, feel free to reply directly to this email.
      </p>
      <p style="font-size: 15px; line-height: 1.6; margin-top: 24px;">
        Best regards,<br />
        <strong>The Nexa Team</strong>
      </p>
      <hr style="border: none; border-top: 1px solid #eee; margin: 28px 0;" />
      <p dir="rtl" style="font-size: 15px; line-height: 1.9; text-align: right;">
        ${name} عزیز،<br />
        از تماس شما با نکسا سپاسگزاریم. پیام شما دریافت شد و یکی از مشاوران ما ظرف ۲۴ تا ۴۸ ساعت آینده با شما تماس خواهد گرفت.
        در صورت فوریت، می‌توانید مستقیماً به همین ایمیل پاسخ دهید.
      </p>
      <p dir="rtl" style="font-size: 15px; text-align: right;">
        با احترام،<br />
        <strong>تیم نکسا</strong>
      </p>
      ${SIGNATURE_HTML}
    </div>
  `
}

export function confirmationEmailHtmlFunding(firstName: string) {
  const name = firstName || 'there'
  return `
    <div style="font-family: -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif; max-width: 480px; margin: 0 auto; color: #222;">
      <p style="font-size: 16px;">Hi ${name},</p>
      <p style="font-size: 15px; line-height: 1.6;">
        Thank you for applying for funding with Nexa. We've received your application, including your pitch deck,
        and our team will review it and get back to you within 2–3 business days.
      </p>
      <p style="font-size: 15px; line-height: 1.6;">
        If you have any questions in the meantime, feel free to reply directly to this email.
      </p>
      <p style="font-size: 15px; line-height: 1.6; margin-top: 24px;">
        Best regards,<br />
        <strong>The Nexa Team</strong>
      </p>
      <hr style="border: none; border-top: 1px solid #eee; margin: 28px 0;" />
      <p dir="rtl" style="font-size: 15px; line-height: 1.9; text-align: right;">
        ${name} عزیز،<br />
        از ارسال درخواست جذب سرمایه به نکسا سپاسگزاریم. درخواست شما به همراه ارائه‌ی پیوست‌شده دریافت شد و
        تیم ما ظرف ۲ تا ۳ روز کاری آن را بررسی و با شما تماس خواهد گرفت.
      </p>
      <p dir="rtl" style="font-size: 15px; text-align: right;">
        با احترام،<br />
        <strong>تیم نکسا</strong>
      </p>
      ${SIGNATURE_HTML}
    </div>
  `
}
