const customData = {
  key: {
    someKey: 'safas'
  },
  somethinElse: {
    arr: [
      'ffsafa',
      'fasfafsa',
      'fsafas'
    ]
  }
}



const str = JSON.stringify(customData).replace(/{/g, 'LL___').replace(/}/g, '___RR')

console.log(str)

const obj = JSON.parse(str.replace(/(LL___)/g, '{').replace(/(___RR)/g, '}'))
console.log(obj)

