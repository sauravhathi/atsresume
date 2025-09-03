import React, {  } from "react";

const ContactInfo = ({ mainclass, linkclass, teldata, emaildata, addressdata, telicon, emailicon, addressicon }) => {
    return (
      <div className={mainclass}>
        <a className={linkclass}
          aria-label="Phone Number"
          href={`tel:${teldata}`}>
          {telicon}  {teldata}
        </a>
        <a className={linkclass}
          aria-label="Email Address"
          href={`mailto:${emaildata}`}>
          {emailicon} {emaildata}
        </a>
        <address
          aria-label="Address"
          className={linkclass + " not-italic"} >
          {addressicon} {addressdata}
        </address>
      </div>
    );
  }

export default ContactInfo;