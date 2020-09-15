//pakai arrow function
let janjian =  new Promise((resolve, reject) =>{
	setTimeout(()=> {
		resolve({
			nama: 'Arif Prambudi',
			kelas: 18
		})
	}, 6000)
	setTimeout(()=>{
		reject(new Error('Connection Timeout'))
	}, 1500) //1,5 detik
	setTimeout(()=>{
		reject(new Error('Connection Timeout'))
	}, 3000) //3 detik
});

// janjian.then((result)=>{
// 	if (result.kelas == 18) {
// 		console.log('benar')
// 	}else{
// 		console.log('salah')
// 	}
// }).catch((error) => {
// 	console.log(error.message)
// }).finally(()=>{ 
// 	console.log('selesai')//selesai program
// })

// async function manggilJanjian(){
// try{

// 	let result = await janjian
// 	console.log(result)
// } catch (error){
// 	console.log(error.message)
// }finally{
// 	console.log('selesai')
// }
// }

// manggilJanjian()


// arrow function
const manggilJanjian = async() => {
	try{

	let result = await janjian
	console.log(result)
	} catch (error){
	console.log(error.message)
	}finally{
	console.log('selesai')
	}
	
}
manggilJanjian()


// //self invoked function
// (async() => { //tidakada nama fungsinya
// 	try{

// 	let result = await janjian
// 	console.log(result)
// 	} catch (error){
// 	console.log(error.message)
// 	}finally{
// 	console.log('selesai')
// 	}
	
// })()