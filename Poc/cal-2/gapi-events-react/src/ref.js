gapi.auth2
  .getAuthInstance()
  .signIn()
  .then(() => {
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
        // {
        //   id: '1',
        //   email: 'vaibhav.katariya085@gmail.com',
        //   displayName: 'Vibhu Katariya',
        //   organizer: false,
        //   self: false,
        //   resource: true,
        //   optional: true,
        //   comment: 'Plz attend',
        //   additionalGuests: 2,
        // },
        {
          id: '1',
          email: 'vaibhav.katariya@accionlabs.com',
          displayName: 'Vibhu Katariya',
          organizer: true,
          self: true,
          resource: true,
          optional: true,
          comment: 'Thanks.',
          additionalGuests: 2,
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

    // var event = {
    //   'summary': 'Meet with Vaibhav',
    //   'location': 'Ground floor, 583 K, Saharanpur Rd, Opposite ITI, Niranjanpur, Dehradun, Uttarakhand 248003',
    //   'description': 'Meeting with vaibhav to talk about the new client project and how to add the google calendar API',
    //   'start': {
    //     'dateTime': eventStartTime,
    //     'timeZone': 'America/Los_Angeles'
    //   },
    //   'end': {
    //     'dateTime': eventEndTime,
    //     'timeZone': 'America/Los_Angeles'
    //   },
    //   'colorId': 1,
    //   // 'recurrence': [
    //   //   'RRULE:FREQ=DAILY;COUNT=2'
    //   // ],
    //   'attendees': [
    //     {'email': 'vaibhav.katariya@accionlabs.com'},
    //     {'email': 'vaibhav.katariya085@gmail.com'},
    //     {'email': 'vaibhav.katariya086@gmail.com'}
    //   ],
    //   // 'reminders': {
    //   //   'useDefault': false,
    //   //   'overrides': [
    //   //     {'method': 'email', 'minutes': 24 * 60},
    //   //     {'method': 'popup', 'minutes': 10}
    //   //   ]
    //   // }
    // }

    var request = gapi.client.calendar.events.insert(
      {
        calendarId: 'primary',
        resource: event,
        sendNotifications: true,
      },
      (err) => {
        if (err) return console.log('Calendar Event Creation Error:', err);

        return console.log('Calendar event created.');
      }
    );

    request.execute((event) => {
      setMyevent(event);
      console.log(event);
      window.open(event.htmlLink);
    });

    /*
            Uncomment the following block to get events
        */

    // get events
    gapi.client.calendar.events.list({
      'calendarId': 'primary',
      'timeMin': (new Date()).toISOString(),
      'showDeleted': false,
      'singleEvents': true,
      'maxResults': 10,
      'orderBy': 'startTime'
    }).then(response => {
      const events = response.result.items
      console.log('EVENTS: ', events)
    })
  });
