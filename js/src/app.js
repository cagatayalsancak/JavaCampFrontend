//var, let, const

let sayi1 = 10;
sayi1 = "Test User";
let student = { id: 1, name: "Test User" };
//console.log(student);

function save(puan = 10, ogrenci) {
  console.log(ogrenci.name + " " + puan);
}
//save(undefined,student);

let students = ["Öğrenci 1", "Öğrenci 2", "Öğrenci 3"];


//console.log(students)

let students2 = [
  student,
  { id: 2, name: "Halit" },
  "Ankara",
  { city: "İstanbul" },
];

//console.log(students2)


