import axios from 'axios'
import * as apiConstants from '~/constants/api.constants'

export default defineNuxtPlugin(() => {
  const runtimeConfig = useRuntimeConfig()

  const api = axios.create({
    baseURL: runtimeConfig.public.apiBaseUrl,
    timeout: apiConstants.API_TIMEOUT,
    headers: {
      'Content-Type': apiConstants.API_CONTENT_TYPE_JSON,
    },
  })

  api.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('token')
      if (token) {
        config.headers.Authorization = `${apiConstants.API_AUTH_TOKEN_PREFIX} ${token}`
      }
      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )

  api.interceptors.response.use(
    (response) => response,
    (error) => {
      return Promise.reject(error)
    }
  )

  return {
    provide: {
      api,
    },
  }
})
