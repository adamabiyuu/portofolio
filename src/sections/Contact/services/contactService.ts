import emailjs from "@emailjs/browser";

import { env } from "@/config/env";

import type { ContactFormValues } from "../schemas/contactSchema";

export const sendContactEmail = (data: ContactFormValues) => {
  return emailjs.send(
    env.emailServiceId,
    env.emailTemplateId,
    {
      name: data.name,
      email: data.email,
      message: data.message,
    },
    {
      publicKey: env.emailPublicKey,
    },
  );
};
