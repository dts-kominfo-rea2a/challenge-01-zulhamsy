// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca
const favoriteColor = {
	firstUser: new Set(['Yellow', 'Pink', 'White', 'Purple']),
	secondUser: new Set(['Blue', 'Grey', 'Black'])
}

const favRestaurant = {
	firstUser: new Set(['Bento', 'Sushi', 'Pancake', 'Eggy', 'Tempura', 'Bento', 'Eggy', 'Padang', 'Tteok', 'Sushi', 'Sushi']),
	secondUser: new Set(['Tempura', 'Bento', 'Sushi', 'Pancake', 'Padang', 'Katsu', 'Geprek', 'Pancake', 'Eggy'])
}

const firstUser = {
	name: 'Monica',
	gender: 'Female',
	age: 17,
	email: 'monica@dingdong.com',
	favoriteColor: [...favoriteColor.firstUser],
	isHavePet: true,
	education: [
		{
			name: 'SD 01',
			city: 'Jakarta',
			graduate: 2016
			},
		{
			name: 'SMP 02',
			city: 'Jakarta',
			graduate: 2019
			},
		{
			name: 'SMA 03',
			city: 'Tangerang',
			graduate: null
			}
		],
	favoriteRestaurant: [...favRestaurant.firstUser]
};
const secondUser = {
	name: 'Wendy',
	gender: 'Male',
	age: 23,
	email: 'wendy@dingdong.com',
	favoriteColor: [...favoriteColor.secondUser],
	isHavePet: true,
	education: [
		{
			name: 'SD 02',
			city: 'Jakarta',
			graduate: 2010
			},
		{
			name: 'SMP 03',
			city: 'Bogor',
			graduate: 2013
			},
		{
			name: 'SMA 01',
			city: 'Surabaya',
			graduate: 2016
			}, 
		{
			name: 'Universitas Maju',
			city: 'Tangerang',
			graduate: null
			}
		],
	favoriteRestaurant: [...favRestaurant.secondUser]
};

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [firstUser, secondUser];

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
	console.log(users.length || users.size);
	console.log(users);
}

main();

module.exports = {
	users
};