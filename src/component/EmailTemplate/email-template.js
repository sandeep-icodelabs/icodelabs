// components/email-template.js
import * as React from 'react';

export const EmailTemplate = ({ email }) => (
  <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
    <h2>Thank You for Contacting Us!</h2>
    <p>Dear {email},</p>
    <p>We’ve received your submission and will get back to you soon.</p>
    <p>Best regards,<br />Innovative Code Labs Team</p>
  </div>
);