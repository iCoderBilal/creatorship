import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const ContactForm = ({ contactLink }) => {
  const notify = () => toast.success("Successfully toasted!");
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  let name, value;
  const dataUpdate = (event) => {
    name = event.target.name;
    value = event.target.value;
    setUserData({ ...userData, [name]: value });
  };

  const submitData = async (event) => {
    event.preventDefault();
    const { firstName, lastName, email, message } = userData;

    if (firstName && lastName && email && message) {
      try {
        const res = await fetch(
          "https://creatorship-9d7a4-default-rtdb.firebaseio.com/userData.json",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              // Add authentication headers if required, for example:
              // "Authorization": "Bearer YOUR_API_KEY"
            },
            body: JSON.stringify({
              firstName,
              lastName,
              email,
              message,
            }),
          }
        );

        if (res.ok) {
          setUserData({
            firstName: "",
            lastName: "",
            email: "",
            message: "",
          });
          toast.success("Thank you! Your message has been received.");
        } else {
          // Handle error case
          toast.error("Failed to submit data. Please try again.");
        }
      } catch (error) {
        console.error("Error submitting data:", error);
        toast.error("An error occurred. Please try again.");
      }
    } else {
      toast.error("Please fill in all fields.");
    }
  };

  return (
    <section className="contact-form" ref={contactLink}>
      <Toaster />
      {/* Container */}
      <div className="mx-auto max-w-4xl px-5 py-16 text-center md:px-10 md:py-20">
        {/* Component */}
        <h2
          data-aos="fade-up"
          className="text-center text-[9vw] leading-[9.5vw] md:text-[3.5vw] md:leading-[4vw] font-Montserrat font-bold mb-4 text-black"
        >
          Get In Touch Today
        </h2>
        <p
          className="c3z20 c6xyh ceonn font-Montserrat text-gray-600"
          data-aos="fade-up"
          data-aos-anchor="[data-aos-id-3]"
          data-aos-delay="200"
        >
          Get in touch with us for support, inquiries, or feedback. We’re here
          to help you with any questions or concerns you may have
        </p>
        {/* Form */}
        <form
          name="wf-form-name"
          method="get"
          className="mx-auto mb-4 text-left sm:px-4 md:px-20"
        >
          <div className="mb-4 grid w-full grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name-2"
                className="mb-1 font-medium font-Montserrat"
              >
                First Name
              </label>
              <input
                type="text"
                className="mb-4 block h-9 w-full rounded-md border border-solid border-[#8649D0] px-3 py-6 text-sm text-black"
                placeholder="William"
                required
                name="firstName"
                onChange={dataUpdate}
                value={userData.firstName}
              />
            </div>
            <div>
              <label
                htmlFor="name-3"
                className="mb-1 font-medium font-Montserrat"
              >
                Last Name
              </label>
              <input
                type="text"
                className="mb-4 block h-9 w-full rounded-md border border-solid border-[#8649D0] px-3 py-6 text-sm text-black"
                placeholder="Jack"
                required
                name="lastName"
                onChange={dataUpdate}
                value={userData.lastName}
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="field" className="mb-1 font-medium font-Montserrat">
              Email
            </label>
            <input
              type="text"
              className="mb-4 block h-9 w-full rounded-md border border-solid border-[#8649D0] px-3 py-6 text-sm text-black"
              placeholder="william@gmail.com"
              required
              name="email"
              onChange={dataUpdate}
              value={userData.email}
            />
          </div>
          <div className="mb-5 md:mb-6 lg:mb-8">
            <label htmlFor="field" className="mb-1 font-medium font-Montserrat">
              Message
            </label>
            <textarea
              placeholder="Your Message"
              maxLength="5000"
              name="message"
              onChange={dataUpdate}
              value={userData.message}
              className="mb-2.5 block h-auto min-h-36 w-full rounded-md border border-solid border-[#8649D0] px-3 py-2 text-sm text-black"
            ></textarea>
          </div>

          <input
            onClick={submitData}
            value="Get In Touch"
            className="inline-block w-full rounded-md cursor-pointer bg-[#8649D0] px-6 py-3 text-center font-semibold text-white font-Montserrat"
          />
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
