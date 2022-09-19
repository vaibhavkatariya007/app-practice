import React, { useState, useEffect } from 'react';
import {
  Row,
  Form,
  Input,
  Button,
  DatePicker,
  Table,
  Space,
  message,
} from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import './App.css';

const { TextArea } = Input;
const { Column, ColumnGroup } = Table;

const gapi = window.gapi;
var CLIENT_ID =
  '688209528612-sqrbmdlqi1rjatfcgq7lvcd6ra9bosd9.apps.googleusercontent.com';
var API_KEY = 'AIzaSyBeYnMaUQAMHXe3aeYwyWWaM5aLCLXeXRc';
const DISCOVERY_DOCS = [
  'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest',
];
const SCOPES = 'https://www.googleapis.com/auth/calendar.events';

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
  const [form] = Form.useForm();
  const [allEvents, setAllEvents] = useState(null);

  useEffect(() => {
    gapi.load('client:auth2', () => {
      console.log('Client loaded!');
      gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES,
      });

      gapi.auth2
        .getAuthInstance()
        .signIn()
        .then((res) => {
          console.log('LOGGED IN::', res);
          fetchEventList();
        });
    });
  }, []);

  const onDelete = (event_id) => {
    gapi.client &&
      gapi.client.load('calendar', 'v3', function () {
        console.log(gapi.client);
        //Clear all events
        // const request = gapi.client.calendar.calendars.clear({
        //   calendarId: 'primary',
        // });

        // Delete Single Event base on eventId

        const request = gapi.client.calendar.events.delete({
          calendarId: 'primary',
          eventId: event_id,
          sendNotifications: true,
        });
        //console.log(request)
        request.execute(function (response) {
          if (response.error || response == false) {
            console.log('Error:::', response.error);
            message.error(response.error.message);
            fetchEventList();
          } else {
            console.log('Event deleted successfully!', response);
            message.success('Event deleted Successfully!');
            fetchEventList();
          }
        });
      });
  };

  const onSubmit = (values) => {
    const attendees = [
      {
        id: '1',
        email: 'vaibhav.katariya@accionlabs.com',
        displayName: 'Vibhu Katariya',
        organizer: true,
        self: true,
        resource: true,
        optional: false,
        comment: 'I am an organizer for an event.',
        additionalGuests: 1,
      },
    ];
    values &&
      values.attendees.map((email, id) => {
        attendees.push({
          id: id + 2,
          email,
          displayName: email,
          organizer: false,
          self: false,
          resource: true,
          optional: true,
          comment: 'Kindly, Confirm your availability for an event.',
          additionalGuests: 1,
        });
      });

    const MY_EVENT = Object.assign(
      {},
      event,
      values,
      {
        start: {
          dateTime: values.start.toISOString(),
          timeZone: 'IST',
        },
      },
      {
        end: {
          dateTime: values.end.toISOString(),
          timeZone: 'IST',
        },
      },
      {
        attendees,
      }
    );
    console.log('MY EVENT ::', MY_EVENT);

    gapi.client.load('calendar', 'v3', () => {
      console.log('Calendar initialized!');
      const request = gapi.client.calendar.events.insert(
        {
          calendarId: 'primary',
          resource: MY_EVENT,
          sendNotifications: true,
        },
        (err) => {
          if (err) return console.log('Calendar Event Creation Error:', err);
          return console.log('Calendar event created.');
        }
      );
      request.execute((event) => {
        message.success('Event Created Successfully!');
        form.resetFields();
        window.open(event.htmlLink);
        fetchEventList();
      });
    });
  };

  const fetchEventList = () => {
    gapi.client &&
      gapi.client.calendar.events
        .list({
          calendarId: 'primary',
          timeMin: new Date().toISOString(),
          showDeleted: false,
          singleEvents: true,
          maxResults: 10,
          orderBy: 'startTime',
        })
        .then((response) => {
          const events = response.result.items;
          console.log('EVENTS: ', events);
          setAllEvents(events);
        });
  };
  return (
    <div className="App">
      <Row className="App-base">
        <p style={{ fontSize: 18 }}>Create Google Events.</p>
        <Form
          {...formItemLayout}
          form={form}
          layout="horizontal"
          onFinish={onSubmit}
          scrollToFirstError
        >
          <Form.Item
            label="Event Title"
            name="summary"
            rules={[
              {
                required: true,
                message: 'Please input event title.',
              },
            ]}
          >
            <Input placeholder="Title" />
          </Form.Item>
          <Form.Item
            label="Description"
            name="description"
            rules={[
              {
                required: true,
                message: 'Please input event description.',
              },
            ]}
          >
            <TextArea rows={4} placeholder="Description" />
          </Form.Item>
          <Form.Item
            label="Location"
            name="location"
            rules={[
              {
                required: true,
                message: 'Please input location.',
              },
            ]}
          >
            <Input placeholder="Location" />
          </Form.Item>
          <Form.Item
            label="Start Date"
            name="start"
            rules={[
              {
                required: true,
                message: 'Please input start date.',
              },
            ]}
          >
            <DatePicker placeholder="Start Date" />
          </Form.Item>
          <Form.Item
            label="End Date"
            name="end"
            rules={[
              {
                required: true,
                message: 'Please input end date.',
              },
            ]}
          >
            <DatePicker placeholder="End Date" />
          </Form.Item>

          <Form.List
            name="attendees"
            rules={[
              {
                validator: async (_, names) => {
                  if (!names || names.length < 1) {
                    return Promise.reject(
                      new Error('Add  atleast 1 attendee.')
                    );
                  }
                },
              },
            ]}
          >
            {(fields, { add, remove }, { errors }) => {
              return (
                <div>
                  {fields.map((field, index) => (
                    <Form.Item
                      label={`Attendees(${index + 1})`}
                      required={false}
                      key={field.key}
                    >
                      <Form.Item
                        {...field}
                        validateTrigger={['onChange', 'onBlur']}
                        rules={[
                          {
                            required: true,
                            whitespace: true,
                            message:
                              'Please input attendee email or delete this field.',
                          },
                        ]}
                        noStyle
                      >
                        <Input
                          placeholder="Attendee email"
                          style={{ width: fields.length > 1 ? '93%' : '100%' }}
                        />
                      </Form.Item>
                      {fields.length > 1 ? (
                        <MinusCircleOutlined
                          className="dynamic-delete-button"
                          style={{ margin: '0 8px' }}
                          onClick={() => {
                            remove(field.name);
                          }}
                        />
                      ) : null}
                    </Form.Item>
                  ))}
                  <Form.Item label="...">
                    <Button
                      type="dashed"
                      onClick={() => {
                        add();
                      }}
                      style={{
                        width: '100%',
                      }}
                    >
                      <PlusOutlined /> Add Attendee
                    </Button>
                    <Form.ErrorList errors={errors} />
                  </Form.Item>
                </div>
              );
            }}
          </Form.List>
          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit" style={{ float: 'right' }}>
              Create Event
            </Button>
          </Form.Item>
        </Form>
        <Row className="data-table" style={{ width: '60%' }}>
          <Table
            dataSource={allEvents}
            style={{ width: '100%' }}
            // rowKey={(record, index) => `${index + 1}-row`}
          >
            <Column title="Title" dataIndex="summary" key="summary" />
            <Column
              title="Description"
              dataIndex="description"
              key="description"
            />
            <Column title="Location" dataIndex="location" key="location" />
            <Column
              title="Action"
              key="action"
              render={(text, record) => (
                <Space size="middle">
                  <a onClick={() => onDelete(record.id)}>Delete</a>
                </Space>
              )}
            />
          </Table>
        </Row>
      </Row>
    </div>
  );
}

export default App;

/**
Questions: Need to clarify

1 -  What is the use/purpose of this feature? .

     Is it only for setting a reminder for himself? If, YES
     -- then, I think we can include a Push notification service in our system.

2 -  As per the current required to achieve this, we have to create a copy 
     of an event and insert it in a google calendar.

    If any modification is done by a user on google calendar, 
    then How the Organizer know about the activity? (vice-versa).
    (Make sync is difficult).

3 - Need to bring social login i.e,(google login etc.) to make this process smooth.
    (In my Opinion).

    Reason for doing this: To use the google service user need to authenticate via google.
    //larly for other platforms.
 */
