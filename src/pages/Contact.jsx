import { useState } from "react";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

const ContactPage = () => {
  const [value, setValue] = useState("");

  return (
    <div className="min-h-screen flex flex-col items-center justify-start py-10 px-4">
      <h2 className="text-xl font-semibold mb-10 mt-20">Contact Us</h2>

      <div className="text-left w-full max-w-xl mb-6">
        <p className="mb-2">
          <span className="font-medium">Email:</span>{" "}
          <a href="mailto:info@briggekw.com">info@briggekw.com</a>
        </p>
        <p>
          <span className="font-medium">Whatsapp:</span>{" "}
          <a
            href="https://api.whatsapp.com/send/?phone=%2B96592207174&text=Welcome+to+Brigge%2C+How+we+can+help+you+today%3F&type=phone_number&app_absent=0"
            target="_blank"
          >
            +96592207174
          </a>
        </p>
      </div>

      <form className="w-full max-w-xl space-y-4">
        <Input
          type="text"
          placeholder="Full Name"
          className="w-full border border-gray-300 hover:border-black 
          "
        />
        <div className="flex items-center gap-2 md:flex-row flex-col">
          <Input
            type="email"
            placeholder="Email Adresss"
            className="w-full border border-gray-300 hover:border-black 
          "
          />
          <PhoneInput
            defaultCountry="eg"
            placeholder="Enter phone number"
            value={value}
            onChange={setValue}
          />
        </div>
        <Input
          type="text"
          placeholder="Subject"
          className="w-full border border-gray-300 hover:border-black"
        />
        <textarea
          rows="5"
          placeholder="Your Message"
          className="w-full border border-gray-300 px-4 py-2 hover:border-black p-2 bg-transparent"
        ></textarea>
        <Button type="submit">Send Message</Button>
      </form>
    </div>
  );
};

export default ContactPage;
