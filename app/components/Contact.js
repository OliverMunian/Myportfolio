"use client";
import { useState } from "react";
import Image from "next/image";
//Assets
import Drone from "../../public/Drone(4).png";

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

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    const newErrors = {};
    if (!form.name) newErrors.name = "Prénom requis";
    if (!form.lastname) newErrors.lastname = "Nom requis";
    if (!form.email || !emailRegex.test(form.email))
      newErrors.email = "Email invalide";
    if (!form.subject) newErrors.subject = "Sujet requis";
    if (!form.message) newErrors.message = "Message requis";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
      console.log("Formulaire envoyé ✅", form);

      // Ici, tu peux faire un appel API ou envoyer un mail
      // fetch('/api/contact', { method: 'POST', body: JSON.stringify(form) })

      // Reset form
      setForm({
        name: "",
        lastname: "",
        email: "",
        subject: "",
        message: "",
      });
    }
  };

  return (
    <div className="flex flex-col relative z-20 py-10 w-full">
      <div className="w-full flex justify-center">
        <h1 className="text-3xl font-bold">Contact me</h1>
      </div>
      <form
        onSubmit={handleSubmit}
        className="relative w-full max-w-xl mx-auto p-6 backdrop-blur-sm border-purple-500 border-[1px] shadow-md rounded-xl space-y-4"
      >
        <div className="flex gap-4">
          <div className="w-1/2">
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
          <div className="w-1/2">
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
            Adresse e-mail
          </label>
          <input
            name="email"
            type="Email"
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
            value={form.message}
            placeholder="Type your message here"
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 min-h-[120px] placeholder:text-zinc-400 outline-none text-black"
          />
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message}</p>
          )}
        </div>
        <div className="w-full flex items-center justify-between">
          <button
            type="submit"
            className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-6 rounded-lg transition duration-200"
          >
            Envoyer
          </button>
          {/* <div className="w-1/4">
            <Image src={Drone} alt="Drone_FPV" />
          </div> */}
        </div>

        {submitted && (
          <p className="text-green-600 font-medium mt-4">
            Message envoyé avec succès ✅
          </p>
        )}
      </form>
      <div className="absolute bottom-0 right-10">
        <Image src={Drone} alt="Drone_FPV" className="w-1/2" />
      </div>
    </div>
  );
}
