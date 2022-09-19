import React, { useState, useEffect } from 'react';

import { google } from 'googleapis';

import './App.css';

// const { OAuth2 } = google.auth;

// const OAuth2Client = new OAuth2(
//   '688209528612-sqrbmdlqi1rjatfcgq7lvcd6ra9bosd9.apps.googleusercontent.com',
//   'TLoGWMTRIYSibiMjHfHLR7Fj',
//   'http://localhost:3000'
// );
// const { google } = require('googleapis');

// const scopes = [
//   'https://www.googleapis.com/auth/blogger',
//   'https://www.googleapis.com/auth/calendar',
// ];

const eventStartTime = new Date();
eventStartTime.setDate(eventStartTime.getDay() + 7);
console.log('START TIME::', eventStartTime);

const eventEndTime = new Date();
eventEndTime.setDate(eventEndTime.getDay() + 7);
eventEndTime.setMinutes(eventEndTime.getMinutes() + 45);
console.log('END TIME::', eventEndTime);

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const event = {
  summary: 'Event C.',
  location:
    'Ground floor, 583 K, Saharanpur Rd, Opposite ITI, Niranjanpur, Dehradun, Uttarakhand 248003',

  description:
    'Meeting with vaibhav to talk about the new client project and how to add the google calendar API',
  start: {
    dateTime: eventStartTime,
    timeZone: 'IST',
  },
  end: {
    dateTime: eventEndTime,
    timeZone: 'IST',
  },
  attendees: [
    {
      id: '1',
      email: 'vaibhav.katariya@accionlabs.com',
      displayName: 'Vibhu Katariya',
      organizer: true,
      self: true,
      resource: true,
      optional: false,
      comment: 'I am the organizer for an event.',
      additionalGuests: 1,
    },
  ],
  colorId: 1,
  recurrence: ['RRULE:FREQ=DAILY;COUNT=2'],
  reminders: {
    useDefault: false,
    overrides: [
      { method: 'email', minutes: 24 * 60 },
      { method: 'popup', minutes: 10 },
    ],
  },
};

function App() {
  useEffect(() => {}, []);

  return <div className="App">Calendar App</div>;
}

export default App;
