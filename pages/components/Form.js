import React from "react"

function Form() {
  return (
    <form action="https://formsubmit.co/your@email.com" method="POST">
      <input type="text" name="name" required />
      <input type="email" name="email" required />
      <button type="submit">Send</button>
    </form>
  )
}

export default Form
