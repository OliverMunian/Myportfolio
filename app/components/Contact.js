"use client";
import { useState } from "react";
import { toast } from "react-toastify";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    lastname: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    const newErrors = {};
    if (!form.name) newErrors.name = "Name is required";
    if (!form.lastname) newErrors.lastname = "Lastname is required";
    if (!form.email || !emailRegex.test(form.email))
      newErrors.email = "Invalid email";
    if (!form.subject) newErrors.subject = "The subject is required";
    if (!form.message) newErrors.message = "The message is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_URL_APP}/api/contact`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(form),
          }
        );
        const data = await response.json();

        if (!response.ok) {
          throw new Error(
            data.message || "Erreur lors de l'envoi du formulaire"
          );
        }
        toast.success("Your message has been sent successfully", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          style: {
            background: "#1E293B",
            color: "white",
            borderRadius: "10px",
            padding: "10px",
          },
        });
        setSubmitted(false);
        setForm({
          name: "",
          lastname: "",
          email: "",
          subject: "",
          message: "",
        });
      } catch {
        console.log("Erreur de soumission");
        toast.error("An error has been occured, please try later", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          style: {
            background: "#1E293B",
            color: "white",
            borderRadius: "10px",
            padding: "10px",
            marginTop: "5px",
          },
        });
        setSubmitted(false);
      }
    }
  };

  return (
    <div className="flex flex-col relative z-20 mb-5 w-full max-sm:px-6">
      {/* <div className="w-full flex justify-center">
        <h1 className="text-3xl font-bold">Contact me</h1>
      </div> */}
      <form
        onSubmit={handleSubmit}
        className="relative w-full max-w-2xl mx-auto p-4 sm:p-6 backdrop-blur-sm border-purple-500 border-[1px] shadow-md rounded-xl space-y-4"
      >
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="w-full sm:w-1/2">
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              name="name"
              type="text"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 placeholder:text-zinc-400 outline-none text-black"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>

          <div className="w-full sm:w-1/2">
            <label className="block text-sm font-medium mb-1">Lastname</label>
            <input
              name="lastname"
              type="text"
              placeholder="Lastname"
              value={form.lastname}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 placeholder:text-zinc-400 outline-none text-black"
            />
            {errors.lastname && (
              <p className="text-red-500 text-sm">{errors.lastname}</p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Email address
          </label>
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 placeholder:text-zinc-400 outline-none text-black"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Subject</label>
          <input
            name="subject"
            type="text"
            placeholder="Subject"
            value={form.subject}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 placeholder:text-zinc-400 outline-none text-black"
          />
          {errors.subject && (
            <p className="text-red-500 text-sm">{errors.subject}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Message</label>
          <textarea
            name="message"
            placeholder="Type your message here"
            value={form.message}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 min-h-[120px] placeholder:text-zinc-400 outline-none text-black"
          />
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message}</p>
          )}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            type="submit"
            disabled={submitted}
            className={`w-full sm:w-auto text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300
    ${
      submitted
        ? "bg-green-500 cursor-not-allowed"
        : "bg-purple-500 hover:bg-purple-600"
    }`}
          >
            {submitted ? (
              <div className="flex items-center gap-2">
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 01-8 8z"
                  />
                </svg>
                Sending...
              </div>
            ) : (
              "Send"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
