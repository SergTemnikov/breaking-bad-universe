export default class FetchService {
  constructor() {
    this._apiBase = 'https://www.breakingbadapi.com/api'
  }

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`)

    if (!res.ok) {
      throw new Error(`Could not fetch ${url} , received ${res.status}`)
    }
    return await res.json()
  }

  getAllCharacters = async () => {
    const res = await this.getResource(`/characters`)
    return res.map(this._transformChar)
  }

  getAllEpisodes = async () => {
    const res = await this.getResource(`/episodes`)
    return res.map(this._transformEpisode)
  }

  getAllQuotes = async () => {
    const res = await this.getResource(`/quotes`)
    return res.map(this._transformQuote)
  }

  getAllDeaths = async () => {
    const res = await this.getResource(`/deaths`)
    return res.map(this._transformDeath)
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

  _transformQuote = (quote) => {
    return {
      id: quote.quote_id,
      quote: quote.quote,
      author: quote.author,
      episode: quote.series 
    }      
  }

  _transformDeath = (death) => {
    return {
      id: death.death_id,
      death: death.death,
      cause: death.cause,
      last: death.last_words
    }
  }
}
