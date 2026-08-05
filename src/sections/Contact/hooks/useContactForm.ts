import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { toast } from "sonner";
import { contactSchema, type ContactFormValues } from "../schemas/contactSchema";

import { sendContactEmail } from "../services/contactService";

const useContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: yupResolver(contactSchema),

    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    try {
      await sendContactEmail(data);

      toast.success("Message sent successfully!");

      reset();
    } catch (error) {
      console.error("Failed to send email:", error);

      toast.error("Failed to send message.");
    }
  };

  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
    isSubmitting,
  };
};

export default useContactForm;
