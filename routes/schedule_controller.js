// client id 99ll6szal2clc37scmkxnuinb




const Nylas = require('nylas');

Nylas.config({
    clientId: "99ll6szal2clc37scmkxnuinb" ,
    clientSecret: "2wb5qxy4rwmvsocl329twjsks" ,
  });
  
 
  options = {
    loginHint: 'jskye429@gmail.com',
    redirectURI: 'https://localhost/callback',
    scopes: ['email.read_only', 'email.send'],
  };


  auth_url = Nylas.urlForAuthentication(options);

console.log("wassup",auth_url)












// const Nylas = require('nylas');
// Nylas.config({clientId: 'clientId', clientSecret: 'clientSecret'});
// const nylas = Nylas.with('access_token');

// // Get all calendars found in the user's account
// nylas.calendars.list().then(calendars => console.log(calendars));

// // Get a count of all the users' calendars
// nylas.calendars.count().then(calendarCount => console.log(calendarCount));

// // Get the first calendar
// nylas.calendars.first().then(calendar => console.log(calendar));

// // The following attributes are available for the Calendar object
// calendar.id
// calendar.object
// calendar.accountId
// calendar.name
// calendar.description
// calendar.readOnly



// // Return all events found for the user's account
// nylas.events.list().then(events => console.log(events));

// // Return events that are filtered by specified arguments
// nylas.events.list({title: 'Birthday Party!'}).then(events => console.log(events));
// // Available filters: show_cancelled, event_id, calendar_id, description, title, 
// // location, starts_before, starts_after, ends_before, ends_after

// // Use offset, and limit to paginate the results
// nylas.events.list({limit: 10, offset: 5}).then(events => console.log(events));

// // Expand recurring events into multiple event objects.
// nylas.events.list({expand_recurring: true}).then(events => console.log(events));

// // Return the first event
// nylas.events.first().then(event => console.log(event));

// // The following attributes are available for the event object
// event.id
// event.object
// event.accountId
// event.calendarId
// event.messageId
// event.title
// event.description
// event.owner
// event.participants
// event.readOnly
// event.location
// event.when
// event.start
// event.end
// event.busy
// event.status