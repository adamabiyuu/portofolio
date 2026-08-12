import { FaEnvelope, FaLocationDot } from "react-icons/fa6";

import ContactItem from "./ContactItem";

const ContactInfo = () => {
  return (
    <div
      className="
        flex
        flex-col

        gap-6

        sm:gap-8

        lg:gap-10
      "
    >
      <ContactItem icon={FaEnvelope} title="Email" value="advmabiyu@gmail.com" />

      <ContactItem icon={FaLocationDot} title="Location" value="Jakarta, Indonesia" />

      <ContactItem icon={FaLocationDot} title="Status" value="Available for Fullstack Developer Opportunities" />
    </div>
  );
};

export default ContactInfo;
