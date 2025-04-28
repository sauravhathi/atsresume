import React, {  } from "react";

const ContactInfo = ({ mainclass, linkclass, teldata, emaildata, addressdata }) => {
    return (
      <div className={mainclass}>
        {teldata && (
            <a className={linkclass}
            aria-label="Phone Number"
            href={`tel:${teldata}`}>
            {teldata}
            </a>
        )}
        {emaildata && (
            <a className={linkclass}
            aria-label="Email Address"
            href={`mailto:${emaildata}`}>
            {emaildata}
            </a>
        )}
        {addressdata && (
            <address
            aria-label="Address"
            className={linkclass + " not-italic"} >
            {addressdata}
            </address>
        )}
      </div>
    );
  }

export default ContactInfo;