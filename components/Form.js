import React from "react"

function Form() {
  return (
    <form action="https://formsubmit.co/k.chausheva@gmail.com" method="POST">
      <input
        type="text"
        name="message"
        placeholder="write your message here"
        required
      />
      <input type="email" name="email" placeholder="email" required />
      <input type="hidden" name="_subject" value="New email!"></input>
      <input
        type="hidden"
        name="_next"
        value="https://kristinachausheva.github.io/nextjs-test/thanks.html"
      />
      <input type="hidden" name="_captcha" value="false"></input>
      <button type="submit">Send</button>
    </form>
  )
}

export default Form
