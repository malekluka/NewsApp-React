// src/EmailForm.jsx
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const EmailForm = () => {
  const [form, setForm] = useState({ email: '', name: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.send('service_v7imnxf', 'template_k52yh76', form,'3LkkT06RbKTFh9lJT')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Email sent successfully!');
      }, (error) => {
        console.log('FAILED...', error);
        alert('Failed to send email. Please try again.');
      });
  };

  return (
    <form id="emailForm" onSubmit={sendEmail} style={{padding:'15px'}}>
      <div className="form-group">
        <label style={{ marginBottom: '5px' }} htmlFor="email">Email address:</label>
        <input type="email" className="form-control" id="email" name="email" placeholder="Enter email" value={form.email} onChange={handleChange} required />
        <small id="emailHelp" className="form-text text-muted">Who should receive the email</small>
      </div>
      <div className="form-group">
        <label style={{ marginBottom: '5px' }} htmlFor="name">Name:</label>
        <input type="text" className="form-control" id="name" name="name" style={{width:'600px'}} placeholder="Name" value={form.name} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label style={{ marginBottom: '5px' }} htmlFor="message">Message:</label>
        <textarea className="form-control" id="message" name="message" placeholder="Message" value={form.message} onChange={handleChange} required></textarea>
      </div>
      <button style={{ marginTop: '15px' }} type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
};

export default EmailForm;
