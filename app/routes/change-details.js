import { changeDetails } from '../wizards/change-details.js'

export const changeDetailsRoutes = router => {
  /**
   * Example routes to demonstrate using wizard helper.
   */
  router.all([
    '/change-name',
    '/change-name/:view'
  ], (req, res, next) => {
    res.locals.paths = changeDetails(req)
    next()
  })

  router.post('/change-name/:view', (req, res) => {
    res.redirect(res.locals.paths.next)
  })
}
