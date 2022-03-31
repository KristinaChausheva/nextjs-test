import React from "react"

function Form() {
  return (
    <div className="form-box">
      <h2>Send message</h2>
      <form
        action="https://formsubmit.co/k.chausheva@gmail.com"
        method="POST"
        className="form"
      >
        <div className="user-box">
          <input className="formInput" type="email" name="email" required />
          <label>email</label>
        </div>
        <div className="user-box">
          <input
            className="formInput"
            type="text"
            name="message"
            placeholder=""
            required
          />
          <label>write your message here</label>
        </div>

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
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Send
        </button>
      </form>
    </div>
  )
}

export default Form
