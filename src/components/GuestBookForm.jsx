import React from "react"
import { apiLinkBase, apiLinkGuestBook } from "../api/apiBaseLink"

function GuestBookForm({ refresh }) {
  const addGuestBookEntry = (event) => {
    event.preventDefault()
    const formular = new FormData(event.target)

    fetch(apiLinkBase + apiLinkGuestBook, {
      method: "POST",
      body: formular,
    }).then((_) => {
      event.target.reset()
      refresh((prev) => !prev)
    })
  }

  // guestBookEntrie Example = {firstName: "Ulrike", lastName: "Schmidt", email: "mike@ekim.de", message: "Hallo.", id: crypto.randomUUID()}

  return (
    <form
      onSubmit={addGuestBookEntry}
      encType="multipart/form-data"
      className="flex flex-col w-full gap-2">
      <input
        required
        name="firstName"
        className="w-full border bg-slate-200 border-slate-700 placeholder:text-gray-600"
        placeholder="Vorname"
        type="text"
      />
      <input
        required
        className="w-full border bg-slate-200 border-slate-700 placeholder:text-gray-600"
        name="lastName"
        placeholder="Nachname"
        type="text"
      />
      <input
        required
        className="w-full border bg-slate-200 border-slate-700 placeholder:text-gray-600"
        name="email"
        placeholder="E-Mail"
        type="email"
      />
      <input
        required
        className="w-full border bg-slate-200 border-slate-700 placeholder:text-gray-600"
        name="message"
        placeholder="Nachricht"
        type="text"
      />
      <button type="submit">Send</button>
    </form>
  )
}

export default GuestBookForm
