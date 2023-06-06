const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
// Retrieve a cat fact
export const getRandomFact = async () => {
  const res = await fetch(CAT_ENDPOINT_RANDOM_FACT)
  const { fact } = await res.json()
  return fact
}
// Retrieve a cat image
export const getRandomCatImgWithSomeWord = async (word) => {
  const res = await fetch(`https://cataas.com/cat/says/${word}?json=true&width=200`)
  const { url } = await res.json()
  return url
}
