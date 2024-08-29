import { defineMiddleware } from 'astro:middleware'
import { getLangFromUrl } from './utils'

export const onRequest = defineMiddleware((request, next) => {
  const isMaintenanceMode = import.meta.env.MAINTENANCE_MODE === 'true'
  const isMaintenancePath = request.url.pathname.endsWith('/manteniment')

  if (!isMaintenanceMode && isMaintenancePath) {
    const lang = getLangFromUrl(request.url)
    const redirectTo = lang === 'ca' ? '/' : `/${lang}/`
    return Response.redirect(new URL(redirectTo, request.url), 307)
  } else if (isMaintenanceMode && !isMaintenancePath) {
    const lang = getLangFromUrl(request.url)
    const redirectTo = lang === 'ca' ? '/manteniment' : `/${lang}/manteniment`
    return Response.redirect(new URL(redirectTo, request.url), 307)
  }

  return next()
})
