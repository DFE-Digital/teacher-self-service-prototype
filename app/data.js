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
  
  'email-address': 'calvincheng810@gmail.com',
  'date-of-birth-initial': { day: 31, month: 1, year: 1990 },
  'national-insurance': 'JL0034AD',
  'telephone-number': '07827 996 233',
  'first-name-initial': 'Ho',
  'last-name-initial': 'Cheng',
  'middle-name-initial': '',
  'date-of-birth': { day: 31, month: 1, year: 1990 },
}
