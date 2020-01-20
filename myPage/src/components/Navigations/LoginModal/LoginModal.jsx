import React, { Component } from 'react'

export default class LoginModal extends Component {
  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div className="LoginModal">
        <form action="">

          <div class="imgcontainer">
            <img src=
              "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190710102234/download3.png"
              alt="Avatar" class="avatar" />
          </div>

          <div class="container">
            <label><b>Username</b></label>
            <input type="text" placeholder="Enter Username" name="uname" required />

            <label><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required />

            <button type="submit">Login</button>
            <input type="checkbox" checked="checked" /> Remember me
      </div>

          <div class="container" style={{ backgroundColor: "#f1f1f1" }}>
            <button type="button" class="cancelbtn">Cancel</button>
            <span class="psw">Forgot <a href="/password">password?</a></span>
          </div>

        </form>
      </div>

    )
  }
}
