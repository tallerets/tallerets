import { defineMiddleware } from 'astro:middleware'
import { getLangFromUrl } from './utils'

const isMaintenanceMode = true

export const onRequest = defineMiddleware((context, next) => {
  const isMaintenancePath = context.url.pathname.endsWith('/manteniment')
  const host = context.request.headers.get('host')

  console.log('isMaintenanceMode', isMaintenanceMode)
  console.log('context', context)

  if (!isMaintenanceMode && isMaintenancePath) {
    const lang = getLangFromUrl(context.url)
    const redirectTo = lang === 'ca' ? '/' : `/${lang}/`
    return context.redirect(redirectTo, 302);
    return Response.redirect(`https://${host}/${redirectTo}`, 307)
  } else if (isMaintenanceMode && !isMaintenancePath) {
    const lang = getLangFromUrl(context.url)
    const redirectTo = lang === 'ca' ? '/manteniment' : `/${lang}/manteniment`
    return context.redirect(redirectTo, 302);
    return Response.redirect(`https://${host}/${redirectTo}`, 307)
  }
})
