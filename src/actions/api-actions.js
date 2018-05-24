import axios from 'axios'

/* axios is better supported by browsers with nicer format to deal with than the fetch...
For time and simplicity sake I will use this!
*/

export function fetchImages () {
  const url = 'http://thecatapi.com/api/images/get?format=xml&results_per_page=25'
  return getRequest(url).then((result) => {
    const imgCollection = xmlParser(result.data)
    const results = []

    for (let i of (new Array(imgCollection.length)).keys()) {
      results.push({
        url: imgCollection[i].getElementsByTagName('url')[0].textContent,
        id: imgCollection[i].getElementsByTagName('id')[0].textContent,
        source_url: imgCollection[i].getElementsByTagName('source_url')[0].textContent
      })
    }

    return results
  })
}

export function fetchInfo () {
  const url = 'https://cors-proxy.htmldriven.com/?url=https://catfact.ninja/facts?limit=25'

  return getRequest(url).then((resp) => {
    return JSON.parse(resp.data.body).data
  })
}

function getRequest (url) {
  return axios.get(url)
}

function xmlParser (content, xmlType = 'image') {
  let parsed = new DOMParser().parseFromString(content, 'application/xml')

  return parsed.getElementsByTagName(xmlType)
}