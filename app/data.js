/**
 * Default values for user session data
 *
 * These are automatically added via the `autoStoreData` middleware. A values
 * will only be added to the session if it doesn't already exist. This may be
 * useful for testing journeys where users are returning or logging in to an
 * existing application.
 */
export default {
  // Set feature flags using the `features` key
  
  'email-address': 'sarah.jones123@gmail.com',
  'date-of-birth': { day: 27, month: 3, year: 1987 },
  'national-insurance': 'JL0034AD',
  'telephone-number': '07827996233',

}
