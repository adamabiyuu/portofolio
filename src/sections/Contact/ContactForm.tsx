import Button from "@/components/ui/Button";
import InputField from "@/components/ui/form/InputField";
import TextAreaField from "@/components/ui/form/TextAreaField";

import useContactForm from "./hooks/useContactForm";

const ContactForm = () => {
  const { register, handleSubmit, onSubmit, errors, isSubmitting } = useContactForm();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="
        rounded-2xl
        border
        border-slate-800
        bg-slate-900/40
        p-5
        shadow-lg
        backdrop-blur-sm

        sm:p-6
        lg:p-8
      "
    >
      <div className="space-y-6">
        <div
          className="
            grid
            grid-cols-1
            gap-5

            sm:grid-cols-2
          "
        >
          <InputField label="Name" placeholder="Your name" error={errors.name?.message} {...register("name")} />

          <InputField label="Email" type="email" placeholder="Your email" error={errors.email?.message} {...register("email")} />
        </div>

        <TextAreaField label="Message" rows={6} placeholder="Write your message..." error={errors.message?.message} {...register("message")} />

        <Button type="submit" loading={isSubmitting} className="w-full">
          Send Message
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
