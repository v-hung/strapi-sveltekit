import { HOST_API } from "../config";

export const getArticleByBlog = async ({slug, limit = 10}) => {
  try {
    const response = await fetch(HOST_API + `/api/articles?filters[blogs][slug][$eq]=${slug}&populate=images&pagination[limit]=${limit}`, {
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
