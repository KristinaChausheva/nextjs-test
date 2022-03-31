import React from "react"

function Form() {
  return (
    //   <div class="login-box">
    //   <h2>Login</h2>
    //   <form>
    //     <div class="user-box">
    //       <input type="text" name="" required="" />
    //       <label>Username</label>
    //     </div>
    //     <div class="user-box">
    //       <input type="password" name="" required="" />
    //       <label>Password</label>
    //     </div>
    //     <a href="#">
    //       <span></span>
    //       <span></span>
    //       <span></span>
    //       <span></span>
    //       Submit
    //     </a>
    //   </form>
    // </div>

    <form
      action="https://formsubmit.co/k.chausheva@gmail.com"
      method="POST"
      className="form"
    >
      <div className="box">
        <h2>Send message</h2>
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
        Send
      </button>
    </form>
  )
}

export default Form
