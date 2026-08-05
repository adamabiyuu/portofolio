import * as Yup from "yup";

export const contactSchema = Yup.object({
  name: Yup.string().required("Name is required.").min(2, "Name must be at least 2 characters."),

  email: Yup.string().required("Email is required.").email("Please enter a valid email."),

  message: Yup.string().required("Message is required.").min(10, "Message must be at least 10 characters."),
});

export type ContactFormValues = Yup.InferType<typeof contactSchema>;
