import { useEffect, useState } from "react"
import "./App.css"
import { apiLinkBase, apiLinkGuestBook } from "./api/apiBaseLink"
import GuestBookForm from "./components/GuestBookForm"

function App() {
  const [guestBookEntries, setGuestBookEntries] = useState([])
  const [refresh, setRefresh] = useState()

  useEffect(() => {
    console.log(apiLinkBase + apiLinkGuestBook)
    fetch(apiLinkBase + apiLinkGuestBook)
      .then((response) => {
        // console.log(response)
        return response.json()
      })
      .then((data) => {
        console.log(data)
        setGuestBookEntries(data)
      })
  }, [refresh])
  return (
    <>
      <section className="w-fit">
        <GuestBookForm refresh={setRefresh} />
        <div className="flex flex-col gap-4">
          {guestBookEntries.map((entry, index) => {
            return (
              <div
                key={index}
                className="px-2">
                <p>
                  <span className="font-bold">{entry.firstName} </span>
                  <a
                    className="text-blue-600 underline"
                    href={`mailto:${entry.email}`}>
                    {entry.email}
                  </a>
                  <span> schreibt:</span>
                </p>
                <p>{entry.message}</p>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default App
