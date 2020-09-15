// //pakai arrow function
// let janjian =  new Promise((resolve, reject) =>{
// 	let success = true
// 	if (success ) {
// 		resolve('berhasil')
// 	}else{
// 		reject(new Error('janji dibatalkan'))//pesan error
// 	}
// })

// janjian.then((result)=>{
// 	console.log(result)
// }).catch((error) => {
// 	console.log(error.message)
// })



//jika pakai fungsi biasa

// let janjian = new Promise(function(resolve, reject){
// 	let success = false;
// 	if (success) {
// 		resolve("berhasil");
// 	}else{
// 		reject(new Error("janji dibatalkan"));
// 	}
// });

// janjian
// .then(function(result){
// 	console.log(result);
// })
// .catch(function(error){
// 	console.log(error.message);
// })

//pakai arrow function
let janjian =  new Promise((resolve, reject) =>{
	setTimeout(()=> {
		resolve({
			nama: 'Arif Prambudi',
			kelas: 18
		})
	}, 500)
	setTimeout(()=>{
		reject(new Error('Connection Timeout'))
	}, 1500) //1,5 detik
	setTimeout(()=>{
		reject(new Error('Connection Timeout'))
	}, 3000) //3 detik
});

janjian.then((result)=>{
	if (result.kelas == 18) {
		console.log('benar')
	}else{
		console.log('salah')
	}
}).catch((error) => {
	console.log(error.message)
}).finally(()=>{ 
	console.log('selesai')//selesai program
})