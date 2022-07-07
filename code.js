const multiply15 = (price) => price * multiply15.name.match(/\d/g).join('')
const divide10 = (price) => price / divide10.name.match(/\d/g).join('')
const normalize = (price) => price.toFixed(2)
const added15 = (price) => price + +added15.name.match(/\d/g).join('')
const sub100 = (price) => price - sub100.name.match(/\d/g).join('')


const compose = (...rest) => (x) => {
    return rest.reduceRight((value, current) => current(value), x)
}
console.log(compose(multiply15, added15, sub100, divide10)(100))




