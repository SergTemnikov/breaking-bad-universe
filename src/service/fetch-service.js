export default class FetchService {
  constructor() {
    this._apiBase = 'https://www.breakingbadapi.com/api/'
  }

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`)

    if (!res.ok) {
      throw new Error(`Could not fetch ${url} , received ${res.status}`)
    }
    return await res.json()
  }

  getAllCharacters = async () => {
    const res = await this.getResource(`characters?limit=10&offset=10`)
    return res.map(this._transformChar)
  }

  getAllEpisodes = async () => {
    const res = await this.getResource(`episodes?limit=10`)
    console.log(res);
    return res.map(this._transformEpisode)
  }

  _transformChar = (char) => {
    return {
      id: char.char_id,
      name: char.name,
      birthday: char.birthday,
      occupation: char.occupation,
      img: char.img,
      status: char.status,
      nickname: char.nickname,
      appearance: char.appearance
    }
  } 

  _transformEpisode = (episode) => {
    return {
      id: episode.episode_id,
      title: episode.title,
      season: episode.season,
      number: episode.episode,
      date: episode.air_date,
      chars: episode.characters 
    }
  }
}