let step = 8
let duvel = 0.36 / step
let vodka = 0.56 / step
let rd = 0.1 / step
let point_list = []
let alcohol_grams = 0

const dataset = [
    /* {rm:duvel, timestamp:2, ttl:1, name:1},     
    {rm:duvel, timestamp:2, ttl:1, name:2}, */
    { rm: vodka, timestamp: 1, ttl: 1, name: 3 }
]


for (let t = 0; t < 10; t += 1 / step) {
    dataset.forEach(element => {
        if (t >= element.timestamp && element.ttl > 0) {
            alcohol_grams += element.rm
            element.ttl -= 1 / step
        }
    });
    alcohol_grams -= rd
    if (alcohol_grams < 0)
        alcohol_grams = 0

    point_list.push({ alcohol_grams, t })
}
console.log(point_list);