import React from 'react';
var dayjs = require('dayjs')

function Contact(props) {
  return (
    <>
    <article className="contact" data-testid="contact">
        <span className="contact__avatar">
          <img src={props.data.avatar} alt={props.data.name} />
        </span>
        <span className="contact__data" data-testid="contact-name">{props.data.name}</span>
        <span className="contact__data" data-testid="contact-phone">{props.data.phone}</span>
        <span className="contact__data" data-testid="contact-country">{props.data.country}</span>
        <span className="contact__data" data-testid="contact-date">{dayjs(props.data.admissionDate).format("DD/MM/YYYY")}</span>
        <span className="contact__data" data-testid="contact-company">{props.data.company}</span>
        <span className="contact__data">{props.data.department}</span>
      </article>
    </>
  )
}

export default Contact;
