import emailjs from "@emailjs/browser";
import { useState } from "react";

const Contact = () => {
  const [ firstName, setFirstName ] = useState("")
  const [ lastName, setLastName ] = useState("")
  const [ message, setMessage ] = useState("")
  const [contact, setContact] = useState("")

  const handleSubmit = (e:  any) => {
    e.preventDefault();
    emailjs
      .send(
        'service_z50zxqw',
        'template_4d5s9uq',
        {
          from_name: firstName+" "+lastName,
          to_name: 'Eshwar Reddy Thummala',
          from_email: contact,
          to_email: 'ethummal@asu.edu',
          message: message+ "\nContact : "+contact,
        },
        'okYJuWuDG_xloLsiu'
      )
      .then(
        () => {
          alert('Thank you. I will get back to you as soon as possible.');
          setFirstName("")
          setLastName("")
          setMessage("")
          setContact("")
        },
        (error) => {
          console.log(error);
          alert('Something went wrong. Please try again.');
        }
      );
  };

  return (
    <section
      id="contact"
      className="max-w-contentContainer mx-auto py-10 xl:py-32 flex flex-col gap-4 items-center justify-center"
    >
      <p className="font-titleFont text-lg text-textGreen font-semibold flex items-center tracking-wide">
        What’s Next?
      </p>
      <h2 className="font-titleFont text-5xl font-semibold">Get In Touch</h2>
      <p className="max-w-[600px] text-center text-textDark">
        I’m am always in the pursuit of learning opportunities, my inbox is
        always open. Whether you want some help or have a question or just want
        to say hi, I’ll try my best to get back to you!
      </p>
      <form className="w-full max-w-lg bg-textDark p-10 rounded-md mt-4">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-bodyColor text-xs font-bold mb-2">
              First Name
            </label>
            <input
              className="appearance-none block w-full bg-textLight text-textDark border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-bodyColor border-textLight duration-500"
              id="grid-first-name"
              type="text"
              placeholder="Jane"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            {/*<p className="text-red-500 text-xs italic">
                Please fill out this field.
  </p>*/}
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-bodyColor text-xs font-bold mb-2">
              Last Name
            </label>
            <input
              className="appearance-none block w-full bg-textLight text-textDark border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-bodyColor border-textLight duration-500"
              id="grid-last-name"
              type="text"
              placeholder="Doe"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="w-full px-3">
            <label className="block mb-2 text-sm text-bodyColor font-bold">
              Message to Eshwar
            </label>
            <textarea
              id="message"
              className="block p-2.5 w-full text-sm text-textDark bg-textLight rounded-lg outline-none focus:bg-bodyColor duration-300 mb-3"
              placeholder="Write your message here..."
              rows={10}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-bodyColor text-xs font-bold mb-2">
              How do I reach out to you?
            </label>
            <input
              className="appearance-none block w-full bg-textLight text-textDark border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-bodyColor border-textLight duration-500"
              id="grid-last-name"
              type="text"
              placeholder="Email, Phone, Linkedin..."
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
          </div>
          <div className="w-full px-3 flex justify-center">
            <button
              className="w-40 h-14 border border-bodyColor mt-6 font-titleFont text-sm text-bodyColor tracking-wider rounded-md hover:bg-bodyColor hover:text-textDark hover:scale-110 duration-300"
              onClick={(e) => handleSubmit(e)}
            >
              Send to Eshwar
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Contact;
