import data from './data/kommune-hero.json' assert { type: 'json' }

export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET')
  res.setHeader('Cache-Control', 's-maxage=3600')
  res.status(200).json(data)
}
