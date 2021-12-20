import { HOST_API } from "../config";

export const getMenuWithSlug = async ({slug}) => {
  try {
    const response = await fetch(HOST_API + `/api/menus?filters[slug][$eq]=${slug}&populate[items][populate]=childrens.childrens`, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      // body: JSON.stringify({
      //   identifier: email,
      //   password
      // })
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
