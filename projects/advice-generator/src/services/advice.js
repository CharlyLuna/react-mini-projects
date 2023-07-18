export const getRandomAdvice = async () => {
  try {
    const response = await fetch('https://api.adviceslip.com/advice')
    const data = await response.json()
    return data.slip
  } catch (e) {
    throw new Error('Error getting advice')
  }
}
