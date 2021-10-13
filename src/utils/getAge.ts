export const getAge = (date: Date): number =>  {
  const today = new Date()
  const birthDate = new Date(date)
  const age = today.getFullYear() - birthDate.getFullYear()
  const month = today.getMonth() - birthDate.getMonth()

  if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
    return age - 1
  }

  return age
}