export const subscribeEmail = async (email: string) => {
  const res = await fetch('/api/subscribe', {
    body: JSON.stringify({
      email,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
  })

  await res.json()
}
