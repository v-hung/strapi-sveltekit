import { env } from "../config";
const HOST_API = env.VITE_HOST_API || ''

export const registerAPI = async ({email,password,username}) => {
  try {
    const response = await fetch(HOST_API + '/api/auth/local/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
        // 'Authorization': 'Bearer ' + jwt,
      },
      body: JSON.stringify({
        email,
        password,
        username
      })
    })

    const data = await response.json()

    if (! response.ok ) {
      if (data.error)
        throw Error(data.error.message) // strapi return error in data
      else
        throw Error(response.statusText)
    }

    return data
  }
  catch (err) {
    throw err
  }
}

export const loginAPI = async ({email,password}) => {
  try {
    const response = await fetch(HOST_API + '/api/auth/local', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({
        identifier: email,
        password
      })
    })

    const data = await response.json()

    if (! response.ok ) {
      if (data.error)
        throw Error(data.error.message) // strapi return error in data
      else
        throw Error(response.statusText)
    }

    return data
  }
  catch (err) {
    throw err
  }
}

export const loggerAPI = async ({jwt}) => {
  try {
    const response = await fetch(HOST_API + '/api/users/me', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Bearer ' + jwt,
      }
    })

    const data = await response.json()

    if (! response.ok ) {
      if (data.error)
        throw Error(data.error.message) // strapi return error in data
      else
        throw Error(response.statusText)
    }

    return data
  }
  catch (err) {
    throw err
  }
}
