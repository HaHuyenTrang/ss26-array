// // console.log("hello world");

// // let student1 = "Huyền Trang";
// // let student2 = "Bảo Châu";
// // let student3 = "Anh Thư";

// // let studentN = "Thế Thái"



// // let studentList = new Array (student1, student2, student3, studentN);

// // let numberList = [10, 20, 30, 40, 50, 60];

// // let randomList = [ true, false, 1, 13, "helloworld", []];


// // console.log(studentList);
// // console.log(numberList);
// // console.log(randomList);


// // let numbers = [10,20,30,40,50];


// // numbers.length;
// // console.log("numbers.length", numbers.length);


// // console.log("numbers[2]=", numbers[2]);
// // console.log("numbers[4]=", numbers[4]);

// // console.log("numbers[4]=", numbers[numbers.length-1]);


// // for (let i = 0; i<=numbers.length; i++){
// //     console.log(`numbers[${i}]=`, numbers[i]);
// // }


// // for (let number of numbers){
// //     console.log("từng phần tử",numbers);
// // }

// // for (let index in numbers){
// //     console.log(`numbers[${index}]=`, numbers[index]);
// // }  


// // let student =[
// //     "1",
// //     "2",
// //     "3",
// //     "4",
// // ];

// // console.log("danh sach sinh viên ht", student);
// // student.unshift(que);


// // console.log("danh sach sinh viên", student);


// // student.push([mốc]);

// // student.splice(2, 0, "Quang Vinh");

// // console.log("danh sách ", student);


// // //xóa đầu
// // student.shift();
// // console.log("danh sách ", student);
// // //xóa cuối
// // student.pop();
// // console.log("danh sách ", student);
// // //xóa bki
// // student.splice(1,1);
// // console.log("danh sách ", student);




//bài 1
let student1 = "Huyền Trang";
let student2 = "Bảo Châu";
let student3 = "Anh Thư";
let number = "2005";
let number2 = "2013";


let studentList = new Array (student1, student2, student3, number, number2);
console.log(studentList);
//  let hasInteger = false;
 
for (let i = 0; i<=studentList.length; i++){
    console.log(`studentList[${i}]=`,studentList[i]);
    if (Number.isInteger(studentList[i])) {
        hasInteger = true;
        break;
    }
 }
// for (let i = 0; i<=studentList.length; i++){
//     if (!hasInteger) {
//       console.log("Trong mảng không tồn tại số nguyên");
//     }else{
//       console.log("Trong mảng tồn tại số nguyên");

//     }
// }





//bài 2
let numberList = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let user = parseInt(prompt("nhập vào giá trị bất kì"));

for (let i = 0; i<=numberList.length; i++){
    if(user==numberList.length){
        console.log(`numberList[${i}]=`,numberList[i]);
    }else if(user!==numberList.length){
        console.log("giá trị không tồn tại.")
    }
}




//bài 3
let onList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2 ,2 ,3, 1, 1, 9];


let people = parseInt(prompt("nhập số nguyên "));


let count = 0;
for (let i = 0; i < onList.length; i++) {
  if (onList[i] === people) {
    count++;
  }
}

// In ra số lần xuất hiện của số lên màn hình console
console.log(`Số ${people} xuất hiện ${count} lần trong mảng.`);




//bài 4
let t = parseInt(prompt("nhập vào số a"));
let d = parseInt(prompt("nhập vào số b"));

let arr = [];
let arr1 =[];

// Lưu các số chia hết cho b trong khoảng từ 1 đến a
for (let i = 1; i <= t; i++) {
  if (i % d === 0) {
   arr1.push(i);
  }
}

// Lưu các số chia hết cho a trong khoảng từ 1 đến b
for (let i = 1; i <= d; i++) {
  if (i % t === 0 && !arr.includes(i)) {
    arr.push(i);
  }
}

// In mảng các số chia hết ra màn hình console
console.log(arr);
console.log(arr1);



//bài 5
let arrayNum = [1, 2, 3, 4, 5];

// Đảo ngược 
let reversedArray = arrayNum.reverse();

console.log(reversedArray);




//bài 6
let array = [4,-5,7,-3,8,-1];
array.sort((a, b) => {
    if (a < 0 && b >= 0) {
      return -1;
    } else if (a >= 0 && b < 0) {
      return 1;
    } else {
      return 0;
    }
  });
  
//   // In kết quả ra màn hình console
 for(let i =0; i<= array.length; i++){
    console.log(`array[${i}]=`,array[i]);
 }

 
 
 
 
 //bài 8
 var arra = [1, 2, 3, 4, 5, 2, 3, 4, 4, 5];


function printDuplicates(arra) {
 
  var counts = {};
  
  // Đếm số lần xuất hiện của các phần tử trong mảng
  for (var i = 0; i < arra.length; i++) {
    var num = arra[i];
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  }
  
  // In ra các phần tử xuất hiện từ hai lần trở lên
  console.log("Các phần tử xuất hiện từ hai lần trở lên:");
  for (var num in counts) {
    if (counts[num] >= 2) {
      console.log(num);
    }
  }
}

printDuplicates(arra);



//bài 9
function findMissingNumber(arr) {
  var smallestMissing = 1;
  
  // Duyệt qua từng số nguyên từ 1 trở đi
  while (arr.includes(smallestMissing)) {
    smallestMissing++;
  }
  console.log("Phần tử lớn hơn 0 nhỏ nhất chưa xuất hiện trong mảng là:", smallestMissing);
}


var arr3 = [1, 3, 2, 5, 7];
// phần tử lớn hơn 0 nhỏ nhất chưa xuất hiện trong mảng
findMissingNumber(arr3);

var arr2 = [10, 5, 1, 7];
// phần tử lớn hơn 0 nhỏ nhất chưa xuất hiện trong mảng
findMissingNumber(arr2);





//bài 7
function findSum(arr4, get) {
  let currentSum = 0;
  let start = 0;
  
  const arr4 = [1, 5, 6, 3, 2, 1, 1, 5, 6, 7];
  const get = parseInt(prompt("Nhập vào một số:"));

  for (let i = 0; i < arr4.length; i++) {
    currentSum += arr4[i];

    while (currentSum > get) {
      currentSum -= arr4[start];
      start++;
    }

    if (currentSum === get) {
      return arr4.slice(start, i + 1);
    }
  }

  return null;
}

const subarray = findSum(arr4, get);

if (subarray) {
  console.log("Mảng con có tổng bằng", target + ":", subarray);
} else {
  console.log("Không có mảng con thỏa mãn.");
}