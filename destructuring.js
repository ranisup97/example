//destructuring object
const student ={
    firstName: 'Tova',
    lastName: 'Maulana Irvan',
    nomor: 5
}
//desctructuring
const{
    firstName,
    lastName,
    nomor
} = student

console.log(student.firstName) //bukan destructuring
console.log(nomor) //pemanggilan destructuring


//decstructurng array
const rgb = [255, 279, 50, 70 , 80]

//tanpa dectructuring array
console.log(rgb[1])

//destructuring array
const [red, green, blue, , abu] = rgb

console.log(red)
console.log(abu)
