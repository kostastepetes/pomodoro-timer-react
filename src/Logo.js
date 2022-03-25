import React, { Component } from 'react';

class Logo extends Component {
  render() {
    return (
      <div className="logo-main">
          <img src="/PomoTasksLogo.png" alt="page_logo" width="70" height="70" style={{ borderRadius: "25px", marginBottom: "10px"}}/>
      </div>
    )
  }
}

export default Logo;