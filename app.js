// let a = "abdullah";
export {};
// let arr:[number,string] = [1,"azeem"]
// function add(a: number, b: number): number {
//    return a + b;
// }
// function subtract(a:number , b : number): number{
//     return a - b;
// }
// console.log(add(40 , 40));
// console.log(subtract(20,10))
//======================= basic type ============================
// let name:string = "Abdullah";
// let age:number = 18
// let isLoggedIn:boolean = true
// console.log(name,age,isLoggedIn)
// =================== Arrays =======================
// let name:string[] = ["Abdullah" , "Azeem" , "Misba"]
// console.log(name);
// let number:number[] = [11 ,22 ,33]
// console.log(number)
// let data:(string | number)[] = ["abdullah" ,"azeem", "age" ,18]
// console.log(data)
// =============== tuple ======================
// tuple ma fix order aur fixed types defined kar sakta hu
// let user:[string,number] = ["abdullah", 18]
// console.log(user)
// let products:[number,string,number] = [
//     1,
//     "laptop",
//     50000
// ]
// console.log(products)
// =================  object  ==================
// let user:{
//     name:string,
//     age:number,
//     isLoggedIn:boolean
// }={
//     name:"Abdullah",
//     age:18,
//     isLoggedIn:true
// }
// console.log(user)
// =========== interface ================================
// interface user {
//     name:string,
//     age:number,
//     email:string
// }
// const user:user = {
//     name:"abdullah",
//     age:18,
//     email:"abdullahazeemkhi@gmail.com"
// }
// console.log(user)
// =========== union ==============
// multi type variable accept kar sakta ha
// let id : string | number | boolean ;
// id = 10;
// id = "ponka"
// id = true
// console.log(id)
// ============= Literal Types============
// let color: "green" | "yellow" | "black";
// color = "green"
// =========== function parameters ===========
// function user(name : string){
//     console.log(`Hello ${name}`)
// }
// console.log(user("abdullah"))
// ========== function return type ===============
// function add(a:number,b:number):number{
//     return a + b
// }
// console.log(add(20,20))
// ============= void =============
// function greet( name : string): void{
//  console.log("Hello" + name)
// }
// greet("misba")
//============ return vs void ========================
// function num():number{
//     return 100;
// }
// console.log(num())
// function num(): void{
//     console.log(100)
// }
// ================ Optional Property ? ====================
// interface User{
//     name:string,
//     phone:number,
//     age:number,
//     isLoggedIn?:boolean
// }
// const user1: User = {
//     name:"Misba",
//     phone:3178357024,
//     age:17,
//     isLoggedIn:true
// }
// const user2: User = {
//     name:"Abdullah",
//     phone:3122699533,
//     age:18,
//     isLoggedIn:true
// }
// console.log([user1 , user2])
// ======== any ===================
// let data: any = {
//   name: "abdullah",
// };
// let info: any = "abdullah";
// info = 19;
// info = true;
// info = [
//   {
//     name: "Abdullah",
//     phone: 3122699533,
//     age: 18,
//     isLoggedIn: true,
//   },
//   {
//     name: "Misba",
//     phone: 3178357024,
//     age: 17,
//     isLoggedIn: true,
//   },
// ];
// console.log(info)
//========== unknown =========
// let test:unknown = "abdullah";
// test = 10,
// test = true
// if(typeof test === "boolean"){
//   console.log(test = false)
// }
// ============== never ====================
// function error(massage : string) : never{
//      throw new Error(massage)
// }
// try {
//    error("Kuch galat ho gaya hai!"); 
// } catch (err:any) {
//    console.warn("Mera custom error handle ho gaya:", err.message);
// }
// console.log("Program crash nahi hua, aage chal raha hai!");
// ============== type alias ==================
// type User = {
//    name:string,
//    age: number,
// }
// const user1 :User = {
//   name : "abdullah",
//   age : 18
// }
// const user2 :User = {
//   name : "misba",
//   age : 17
// }
// console.log([user1,user2])
// type ID = string | number;
// let id : ID = Date.now()
// console.log(id)
