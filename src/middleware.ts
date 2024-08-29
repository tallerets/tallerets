import { defineMiddleware } from 'astro:middleware'
import { getLangFromUrl } from './utils'

const isMaintenanceMode = import.meta.env.PUBLIC_MAINTENANCE_MODE === 'true'

export const onRequest = defineMiddleware((context, next) => {
  const isMaintenancePath = context.url.pathname.includes('manteniment')
 
   if (isMaintenanceMode && !isMaintenancePath) {
    const lang = getLangFromUrl(context.url)
    const redirectTo = lang === 'ca' ? '/manteniment' : `/${lang}/manteniment`
    return context.redirect(redirectTo, 302);
  }  else if (!isMaintenanceMode && isMaintenancePath) {
    const lang = getLangFromUrl(context.url)
    const redirectTo = lang === 'ca' ? '/' : `/${lang}`
    return context.redirect(redirectTo, 302);
  }

   return next()
})
