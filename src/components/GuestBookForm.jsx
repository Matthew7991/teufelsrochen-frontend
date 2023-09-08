import React, { useRef } from "react"
import { apiLinkBase, apiLinkGuestBook } from "../api/apiBaseLink"

function GuestBookForm({ refresh }) {
  const firstName = useRef()
  const lastName = useRef()
  const email = useRef()
  const message = useRef()

  const addGuestBookEntry = (event) => {
    event.preventDefault()

    const guestBookEntry = {
      firstName: firstName.current.value,
      lastName: lastName.current.value,
      email: email.current.value,
      message: message.current.value,
      id: crypto.randomUUID(),
    }

    fetch(apiLinkBase + apiLinkGuestBook, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(guestBookEntry),
    }).then((_) => {
      refresh((prev) => !prev)
      firstName.current.value = ""
      lastName.current.value = ""
      email.current.value = ""
      message.current.value = ""
    })
  }

  return (
    <form
      onSubmit={addGuestBookEntry}
      className="flex flex-col w-full gap-2">
      <input
        required
        className="w-full border bg-slate-200 border-slate-700 placeholder:text-gray-600"
        placeholder="Vorname"
        ref={firstName}
        type="text"
      />
      <input
        required
        className="w-full border bg-slate-200 border-slate-700 placeholder:text-gray-600"
        placeholder="Nachname"
        ref={lastName}
        type="text"
      />
      <input
        required
        className="w-full border bg-slate-200 border-slate-700 placeholder:text-gray-600"
        placeholder="E-Mail"
        ref={email}
        type="email"
      />
      <input
        required
        className="w-full border bg-slate-200 border-slate-700 placeholder:text-gray-600"
        placeholder="Nachricht"
        ref={message}
        type="text"
      />
      <button
        type="button"
        onClick={addGuestBookEntry}>
        Send
      </button>
    </form>
  )
}

export default GuestBookForm
