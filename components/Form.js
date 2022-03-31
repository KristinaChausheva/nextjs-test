import React from "react"

function Form() {
  return (
    <form
      action="https://formsubmit.co/k.chausheva@gmail.com"
      method="POST"
      className="form"
    >
      <input
        className="formInput"
        type="text"
        name="message"
        placeholder="write your message here"
        required
      />
      <input
        className="formInput"
        type="email"
        name="email"
        placeholder="email"
        required
      />
      <input
        className="formInput"
        type="hidden"
        name="_subject"
        value="New email!"
      ></input>
      <input
        className="formInput"
        type="hidden"
        name="_next"
        value="https://kristinachausheva.github.io/nextjs-test/thanks.html"
      />
      <input type="hidden" name="_captcha" value="false"></input>
      <button className="formButton" type="submit">
        Send
      </button>
    </form>
  )
}

export default Form
