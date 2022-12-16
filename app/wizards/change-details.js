import { wizard } from 'govuk-prototype-rig'

export function changeDetails (req) {
  const journey = {
    '/change-name/enter-name': {},
    '/change-name/cnfirmation': {}
  }

  return wizard(journey, req)
}
