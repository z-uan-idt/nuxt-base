export default defineNuxtRouteMiddleware((to) => {
  const isAuthenticated: boolean = true
  const publicRoutes: string[] = ['/', '/login', '/register']

  if (!publicRoutes.includes(to.path) && !isAuthenticated) {
    return navigateTo('/login')
  }
})
