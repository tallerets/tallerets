import { defineMiddleware } from 'astro:middleware'
import { getLangFromUrl } from './utils'

export const onRequest = defineMiddleware((request, next) => {
  const isMaintenanceMode = import.meta.env.MAINTENANCE_MODE === 'true'

  if (isMaintenanceMode && !request.url.pathname.endsWith('/manteniment')) {
    const lang = getLangFromUrl(request.url)
    const redirectTo = lang === 'ca' ? '/manteniment' : `/${lang}/manteniment`
    return Response.redirect(new URL(redirectTo, request.url), 307)
  }

  return next()
})
