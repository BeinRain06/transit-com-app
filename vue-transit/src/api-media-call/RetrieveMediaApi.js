async function retrieveMediaApi(label) {
  switch (label) {
    case 'google':
      googleApiHandler(label)
      break
    case 'facebook':
      facebookApiHandler(label)
      break
    case 'likedin':
      linkedinApiHandler(label)
      break
    case 'twitter':
      twitterApiHandler(label)
      break
    default:
      throw new Error('There is something wron in retrieveMediaApi Fn ! ')
  }
}

const googleApiHandler = async (label) => {
  //do something
  console.log('googleApiHandler label :', label)
  const request_url = 'http://localhost:8000'

  const catch_promise = await fetch(request_url)

  const result = await catch_promise.json()

  console.log(result)
}

const facebookApiHandler = (label) => {
  //do something
  console.log(label)
}
const linkedinApiHandler = (label) => {
  //do something
  console.log(label)
}
const twitterApiHandler = (label) => {
  //do something
  console.log(label)
}

export default retrieveMediaApi
