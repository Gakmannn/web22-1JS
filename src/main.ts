import './style.scss'
import './style.css'
import 'lite-youtube-embed/src/lite-yt-embed.css'
import 'lite-youtube-embed/src/lite-yt-embed.js'

let value=10
console.log(value)

// При описании функции мы указываем параметры, которые ожидаем получить как аргументы при вызове
const showMessage = function(n:number, a = ' Я значение по умолчанию аргумента "а"') {
  let local = 6
  let value = 5
  console.log('локальная переменная вместо глобальной',value)
  console.log(local)
  // console.log(n)
  n++
  console.log('Всем привет!' + a + ' ' + local + ' ' + n)
  return n
}

// При вызове функции в неё передаются аргументы
showMessage(value,' Я аргумент "a"')
console.log('Возвращаемое значение функции', showMessage(value))
console.log(value)
// showMessage()

// Мы объявляем функции со списком параметров, затем вызываем их, передавая аргументы

// Несколько вариантов возврата значения по условию
function checkAge(age:number) {
  return age>18||confirm('Родители разрешили?')
  return (age > 18) ? true : confirm('Родители разрешили?')
  if (age > 18) {
    return true;
  } else {
    return confirm('Родители разрешили?');
  }
}

console.log(checkAge)

function ask(question: string, yes: Function, no: Function) {
  if (confirm(question)) yes()
  else no();
}
ask


// Анонимные функции-колбэки
// ask(
//   "Вы согласны?",
//   function () { alert("Вы согласились."); },
//   function () { alert("Вы отменили выполнение."); }
// )

// ask(
//   "Вы согласны?",
//   () => alert('Вы согласились.') :
//   () => alert("Вы отменили выполнение.")
// )


// Стрелочная функция
// let func = (arg1, arg2, ...argN) => expression
// let func = function (arg1, arg2, ...argN) {
//   return expression
// }

// Отсутствие фигурных скобок после стрелки, НЕЯВНО (не пишем return) возвращает результат
let func1 = (a: number, b: number) => a+b;
// let func1 = (a: number, b: number) => { return a }
let func2 = function (a: number, b: number) {
  return a+b
}
// Стрелочная функция с логикой и явным возвратом
let func3 = (a: number, b: number) => { 
  const c = a + b
  return c 
}

console.log('func1', func1(1,2))
console.log('func2', func2(1,2))
console.log('func3', func3(1,2))


// ################### OBJECTS ######################
let user
user = new Object() // синтаксис "конструктор объекта"

// type User = {
//   age: number,
//   name: string
// }

user = {} as any // синтаксис "литерал объекта"
console.log({...user})
user.age = 18
console.log({...user})
user.name = 'Vasya'
console.log({...user})
user.height = 180


// console.log(user.age)
// console.log({...user})

const user1 = {
  age: 18,
  name: 'Vasya',
  height: 180,
  'master pass': '[admin}',
} as any

user1.dfs = 152
user1['master pass']

// user1?.sdf
// if (user1.sdf) {
//   user1.sdf
// }

// for (let key in user1) {
//   console.log(key, user1[key])
// }

user1.age = 20
// console.log(user1['age'])
// let key = 'master pass'
// console.log(user1[key])
delete user1['master pass']
// console.log(user1)

let name = {n:'123'}
let age = 20

const user3 = {
  name:name.n, 
  age,
}
user3
// console.log(user3)

// оператор «in» позволяет проверить, существует ли ключ в объекте
// console.log('age' in user3)
// console.log('tall' in user3)

interface SpaceObject{
  name: string
  galaxy: string
  weight: number
  live?: boolean // свойство? - необязательное свойство
}
let obj2: SpaceObject = {
  name: "Земля",
  galaxy:"Milky Way",
  weight: 1000000,
}
console.log(obj2.galaxy)

// let obj: { name: string; age: number} = { name: "Vasja", age: 23}

// console.log(obj.name)

const obj = {
  name: "Denis",
  age: 23,
  obj3: {
    name: 'Alex',
    age: 3,
  },
  arr: [1,1,2],
  sayHi() {
    console.log("Hello my name " + this.name + " My sun " + this.obj3.name)
  },
} as any

obj.sayHi()

let objCopy = {} as any
// Четыре варианта копирования объектов
// 1 Циклом вручную. Подходит для плоских объектов (без вложенных объектов)
// for(let i in obj){
//   objCopy[i] = obj[i]
// }
// 2 Spred оператор (разворачивание)
objCopy = { ...obj, arr2: [45], ...{ arr: [45] }, obj3: {...obj.obj3} } // Подходит для плоских объектов (без вложенных объектов)
// 3 Object.assign
// Object.assign(objCopy,obj,{arr2:[45]}) // Подходит для плоских объектов (без вложенных объектов)
// 4 JSON (не копирует методы, но копирует вложенные объекты)
// objCopy = JSON.parse(JSON.stringify(obj))
// 5 structuredClone() (При копировании метода вызывается ошибка, копирует вложенные объекты)
// objCopy = structuredClone(obj)
objCopy.obj3.name = "Vasja"
objCopy.sayHi()
console.log(objCopy)
console.log(obj.obj3.name)

const obj4 = Object.assign({}, obj)

obj4.obj3.name = "Petja"
console.log(obj.obj3.name)

const obj5 = {...obj}
console.log(obj5)

let JSONstr = JSON.stringify(obj)
console.log(JSONstr)

const obj6 = JSON.parse(JSON.stringify(obj))

console.log(obj6)

obj6.obj3.name = "Vika"
console.log(obj.obj3.name)

let codes = {
  "49": "Германия",
  "41": "Швейцария",
  "44": "Великобритания",
  "1": "США"
}

for (let i in codes) {
  console.log(i)
}

Object.keys(obj) //– возвращает массив ключей.
Object.values(obj) //– возвращает массив значений.
Object.entries(obj) //– возвращает массив пар [ключ, значение].


let id = Symbol("id");

let user5 = {
  name: "Вася",
  [id]: 123 // просто "id: 123" не сработает
}
user5
let num = 12.346
num
//var num2 = '3';
let num2 = Number("66")
let num3 = Number(6) + Number(6)
console.log(typeof(num2))
console.log(num3)
let num4: number = 6
let num5: number = 6
let num6 = num4+num5
console.log(num6)
console.log(Math.random())
Math.max(3, 5, -10, 0, 1)

console.log('Тут')

// let a = prompt('Введите число a')
// let b = prompt('Введите число b')
// let choi = prompt('Введите + - / *')
// let c = 0
// switch (choi) {
//   case '+':
//     c = Number(a) + Number(b)
//     console.log(c)
//     break;
//   case '-':
//     c = Number(a) - Number(b)
//     console.log(c)
//     break;
//   case '*':
//     c = Number(a) * Number(b)
//     console.log(c)
//     break;
//   case '/':
//     c = Number(a) / Number(b)
//     console.log(c)
//     break;
// }
  
let str = "stringify";
str
// str.trim()// — убирает пробелы в начале и конце строки.
// str.repeat()// — повторяет строку n раз.

// console.log('{}=={}', {}=={}) false
// Никогда не будет равно, т.к. оба пустые объекта ссылаются на разные ячейки памяти
const cell = {} as any
const cell2 = cell
console.log('cell==cell2', cell == cell2)
cell2.name = 'Aaaaaaaa'
console.log('cell', cell)

codes = {
  "49": "Германия",
  "41": "Швейцария",
  "44": "Великобритания",
  // ..,
  "1": "США"
};

for (let code in codes) {
  console.log(code); // 1, 41, 44, 49
}

// Напишите код, выполнив задание из каждого пункта отдельной строкой:

// Создайте пустой объект newUser.
// Добавьте свойство name со значением John.
// Добавьте свойство surname со значением Smith.
// Измените значение свойства name на Pete.
// Удалите свойство name из объекта.
const newUser = {} as any
newUser.name = 'John'
newUser.surname = 'Smith'
newUser.name = 'Pete'
delete newUser.name

// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

const emptyObj = {}
const notEmptyObj = {a:1}

function isEmpty(obj:Record<string,any>) {
  // 1
  // for (let key in obj) {
  //   return false
  // }
  // return true
  // 2
  // return JSON.stringify(obj)=='{}' ? true : false
  // 3
  return Object.keys(obj).length ? false : true
}

console.log(isEmpty(emptyObj))
console.log(isEmpty(notEmptyObj))

// У нас есть объект, в котором хранятся зарплаты нашей команды:

// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum.Должно получиться 390.

// Если объект salaries пуст, то результат должен быть 0.

const salaries = {
  John: 100,
  Ann: '160$',
  Pete: 130
} as Record<string, any>

let sum = 0
for (let key in salaries) {
  sum += parseFloat(salaries[key])
  if (typeof(salaries[key]) == 'number') salaries[key] *= 2
}
console.log(sum)
console.log(salaries)

//! Вернуться к темам
//! 4.4. Методы объекта, "this"
//! 4.5. Конструктор, оператор "new"
//! 4.6. Опциональная цепочка '?.'
//! 4.7. Тип данных Symbol


// 4.8. Преобразование объектов в примитивы 
let billion = 1000000000
billion = 1e9 // e9 - 9 нолей
console.log(billion.toLocaleString('ru-RU'))
let ms = 0.000001
ms = 1e-6 // шесть нулей, слева от 1

num = 12.34
console.log(num.toFixed(5)) // "12.34000", добавлены нули, чтобы получить 5 знаков после запятой
num = +num.toFixed(1) // Округлённое число

// isNaN(value) преобразует значение в число и проверяет является ли оно NaN
// Значение NaN уникально тем, что оно не является равным ничему другому, даже самому себе:
// @ts-ignore
console.log(NaN === NaN) // false

// isFinite(value) преобразует аргумент в число и возвращает true, если оно является обычным числом, т.е.не NaN / Infinity / -Infinity
isFinite(+"15") // true

// Помните, что пустая строка интерпретируется как 0 во всех числовых функциях, включаяisFinite.

// Объект Number и его методы
// Number.isNaN(value) возвращает true только в том случае, если аргумент принадлежит к типу number и является NaN.Во всех остальных случаях возвращает false
// Number.isFinite(value) возвращает true только в том случае, если аргумент принадлежит к типу number и не является NaN/Infinity/-Infinity. Во всех остальных случаях возвращает false.

// Не стоит считать Number.isNaN и Number.isFinite более «корректными» версиями функций isNaN и isFinite. Это дополняющие друг-друга инструменты для разных задач.


// Сравнение Object.is
// Существует специальный метод Object.is, который сравнивает значения примерно как ===, но более надёжен в двух особых ситуациях:

// Работает с NaN: Object.is(NaN, NaN) === true, здесь он хорош.
//   Значения 0 и - 0 разные: Object.is(0, -0) === false, это редко используется, но технически эти значения разные.
// Во всех других случаях Object.is(a, b) идентичен a === b.

// Этот способ сравнения часто используется в спецификации JavaScript.Когда внутреннему алгоритму необходимо сравнить 2 значения на предмет точного совпадения, он использует Object.is(Определение SameValue).

// функции для работы с числами parseInt и parseFloat

// Второй аргумент parseInt(str, radix)
// Функция parseInt() имеет необязательный второй параметр.Он определяет систему счисления, таким образом parseInt может также читать строки с шестнадцатеричными числами, двоичными числами и т.д.:

// console.log(parseInt('0xff', 16)); // 255
// console.log(parseInt('ff', 16)); // 255, без 0x тоже работает
// console.log(parseInt('2n9c', 36)); // 123456

Math.random() //Возвращает псевдослучайное число в диапазоне от 0 (включительно) до 1 (но не включая 1)

function randomInt(min:number, max:number) {
  return Math.floor(Math.random() * (max - min) + min)
}

// Math.max(a, b, c...) / Math.min(a, b, c...)
// Возвращает наибольшее / наименьшее число из перечисленных аргументов.

Math.max(3, 5, -10, 0, 1) // 5
Math.min(1, 2) // 1
Math.max(...[0, 1, 2, 3]) //3