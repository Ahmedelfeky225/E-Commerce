import { useEffect, useState } from "react";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { useForm, ValidationError } from "@formspree/react";
import { toast } from "react-toastify";
import { t } from "i18next";

const ContactPage = () => {
  const [state, handleSubmit] = useForm("xovebkol");
  const [contactUs, setContactUs] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  useEffect(() => {
    if (!state.submitting && state.succeeded) {
      setContactUs({
        fullName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      toast.success("Message sent successfully");
    }
  }, [state.submitting, state.succeeded]);

  useEffect(() => {
    if (
      !state.submitting &&
      Array.isArray(state.errors) &&
      state.errors.length > 0
    ) {
      toast.error("Something went wrong");
    }
  }, [state.submitting, state.errors]);

  const handleInputForm = (e) => {
    const { name, value } = e.target;
    setContactUs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start py-10 px-4">
      <h2 className="text-xl font-semibold mb-10 mt-20">{t("Contact Us")}</h2>

      <div className="text-left w-full max-w-xl mb-6">
        <p className="mb-2">
          <span className="font-medium">{t("Email")}:</span>{" "}
          <a href="mailto:info@briggekw.com">ahmeddattia58@gmail.com</a>
        </p>
        <p>
          <span className="font-medium">{t("Whatsapp")}:</span>{" "}
          <a
            href="https://api.whatsapp.com/send/?phone=%2B96592207174&text=Welcome+to+Brigge%2C+How+we+can+help+you+today%3F&type=phone_number&app_absent=0"
            target="_blank"
          >
            +201005845202
          </a>
        </p>
      </div>

      <form className="w-full max-w-xl space-y-4" onSubmit={handleSubmit}>
        <Input
          type="text"
          name="fullName"
          required
          placeholder={t("Full Name")}
          className="w-full border border-gray-300 hover:border-black 
          "
          value={contactUs.fullName}
          onChange={handleInputForm}
        />
        <div className="flex items-center gap-2 md:flex-row flex-col">
          <Input
            type="email"
            name="email"
            required
            placeholder={t("Email Adresss")}
            className="w-full border border-gray-300 hover:border-black 
          "
            value={contactUs.email}
            onChange={handleInputForm}
          />
          <PhoneInput
            defaultCountry="eg"
            name="phone"
            required
            placeholder={t("Enter phone number")}
            value={contactUs.phone}
            onChange={(value) =>
              setContactUs((prev) => ({ ...prev, phone: value }))
            }
          />
        </div>
        <div
          style={{
            width: "100%",

            transform: "translateX(-2%)",
          }}
        >
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
            style={{
              color: "#e73232",
              fontWeight: "800",
              fontSize: "12px",
              marginTop: "-10px",
              marginLeft: "1rem",
            }}
          />
        </div>
        <Input
          type="text"
          name="subject"
          required
          placeholder={t("Subject")}
          className="w-full border border-gray-300 hover:border-black"
          value={contactUs.subject}
          onChange={handleInputForm}
        />
        <textarea
          rows="5"
          name="message"
          required
          placeholder={t("Your Message")}
          className="w-full border border-gray-300 px-4 py-2 focus:outline-none hover:border-black p-2 bg-transparent dark:focus:border-gray-700  dark:hover:border-gray-700 dark:border-gray-800"
          value={contactUs.message}
          onChange={handleInputForm}
        ></textarea>
        <Button type="submit" disabled={state.submitting}>
          {state.submitting ? "Sending..." : t("Send Message")}
        </Button>
      </form>
    </div>
  );
};

export default ContactPage;
