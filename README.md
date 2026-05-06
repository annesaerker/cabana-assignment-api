# Cabana Hero API

Simpelt Vercel API endpoint til kandidatopgaven.

## Deploy

1. Gå til [vercel.com](https://vercel.com) og opret et nyt projekt
2. Upload denne mappe eller push til et GitHub repo og connect det til Vercel
3. Deploy — endpointet er live på:

```
https://dit-projekt.vercel.app/api/hero
```

## Endpoint

```
GET /api/hero
```

Returnerer hero-data med to artikler og en søgebar.

## Eksempel (fetch)

```js
const res = await fetch('https://dit-projekt.vercel.app/api/hero')
const data = await res.json()
```
