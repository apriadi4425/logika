
const HurufBesarDiawalSetiapHuruf = (str) => {
  return str
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.substring(1))
    .join(' ')
}

let string = 'inI adAlah StrinG bErantakan'
console.log(HurufBesarDiawalSetiapHuruf(string))