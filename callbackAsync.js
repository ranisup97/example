//pakai arrow function
let showGretings = (message) =>{
	console.log(message)
}
let janjian =(showGretings) =>  new Promise((resolve, reject) =>{
	let success = true
	if (success) {
		resolve("Data berhasil")
		showGretings("Halo Selamat Siang")
	}else{
		reject ("Error")
	}
});

janjian(showGretings) //jalankan fungsi showgreetings
.then((res)=> console.log(res))
.catch((err) => console.log(err))
