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

const html = `<div><p>Hello</p></div>`
const html2 = `<div></div>`

console.log(html)

// Методы и свойства строк

console.log('Длина строки html', html.length) // length — это свойство, возвращающее число. Добавлять скобки не нужно
console.log('Разница длин строк', html.length - html2.length)

// Получить символ, который занимает позицию pos, можно с помощью квадратных скобок: [pos]. 
// Также можно использовать метод str.at(pos). Первый символ занимает нулевую позицию:

console.log('Получим первый символ строки html:', html[0])
console.log('Получим первый символ строки html:', html.at(0)) // Метод at работает тодлько в 
console.log('Получим последний символ строки html:', html[html.length-1])
console.log('Получим последний символ строки html:', html.at(-1)) // Удобно получать последний символ

const hello = 'Hello'
console.log('Получим все символы слова', hello)
console.log('Длина слова', hello, hello.length, 'символов')

// Получим все символы строки
for (let i = 0; i < hello.length; i++) {
  console.log('индекс', i, ', символ', hello[i])
  // console.log('номер символа', i+1, ', символ', hello[i])
}

// Перебор строки
for (let char of "Hello") {
  console.log(char); // H,e,l,l,o (char — сначала "H", потом "e", потом "l" и т.д.)
}

// Строки всегда константы и менять их нельзя. Можно создать только новую строку
let strHi = 'Hi mother'
// strHi[0] = 'h' // ошибка
strHi = 'h' + strHi.slice(1) 
console.log(strHi)

// Задача из реального мира. Поменять во всех строках первую букву на верхний регистр
const strArr = ['abc','def','ghi','jkl']
const newArr = []
for (let el of strArr) {
  if (el) newArr.push(el[0].toUpperCase() + el.slice(1))
}
console.log(strArr)
console.log(newArr)



// Методы toLowerCase() и toUpperCase() меняют регистр символов:
console.log('Interface'.toUpperCase()) // INTERFACE
console.log('Interface'.toLowerCase()) // interface

// Если мы захотим перевести в нижний регистр какой - то конкретный символ:
console.log('Interface'[0].toLowerCase()) // 'i'

// Поиск подстроки в строке
let strToFind = 'Widget id with id'

console.log(strToFind.includes('with')) // true Возвращает истину или ложь
console.log(strToFind.indexOf('with'))  // 10 Возвращает индекс первого совпадения или -1, если нет совпадений

console.log(strToFind.indexOf('id'))  // 1
console.log(strToFind.lastIndexOf('id'))  // 15 Ищет первое совпадение с конца

// Найдём все индексы 'id'
let i = 0
let findIndex
do {
  findIndex = strToFind.indexOf('id', i)
  if (findIndex != -1) {
    console.log('Нашли \'id\' на индексе', findIndex)
    i = findIndex + 1
  }
} while (findIndex != -1)

// includes, startsWith, endsWith

// includes - Более современный метод str.includes(substr, pos) возвращает true, если в строке str есть подстрока substr, либо false, если нет
// startsWith - возвращает true, если строка начинается с подстроки, иначе,- false
// endsWith - возвращает true, если строка заканчивается подстрокой, иначе,- false

// Получение подстроки
// В JavaScript есть 3 метода для получения подстроки: substring, substr и slice

// str.slice(start[, end]) Возвращает часть строки от start до(не включая) end
// let str = "stringify"
console.log(str.slice(0, 5)) // 'strin', символы от 0 до 5 (не включая 5)
console.log(str.slice(0, 1)) // 's', от 0 до 1, не включая 1, т. е. только один символ на позиции 0
console.log(str.slice(-4, -1)); // gif // начинаем с позиции 4 справа, а заканчиваем на позиции 1 справа
// Если аргумент end отсутствует, slice возвращает символы до конца строки:
console.log(str.slice(2)) // ringify, с позиции 2 и до конца



// str.substring(start [, end])
// Возвращает часть строки между start и end(не включая) end.
// Это — почти то же, что и slice, но можно задавать start больше end.
// Если start больше end, то метод substring сработает так, как если бы аргументы были поменяны местами
console.log(str.substring(2, 6)) // "ring"
console.log(str.substring(6, 2)) // "ring"

// str.substr(start[, length])
// Возвращает часть строки от start длины length.
// В противоположность предыдущим методам, этот позволяет указать длину вместо конечной позиции:

console.log(str.substr(2, 4)) // ring, получаем 4 символа, начиная с позиции 2
// Значение первого аргумента может быть отрицательным, тогда позиция определяется с конца:
console.log(str.substr(-4, 2)) // gi, получаем 2 символа, начиная с позиции 4 с конца строки


// Простая замена подстроки
const strToReplace = 'Ослик Иа-Иа посмотрел на виадук'
// str.replace('что меняем', 'на что меняем') - находит и меняет только первое вхождения искомой подстроки
// str.replaceAll('что меняем', 'на что меняем') - находит все вхождения искомой подстроки и меняет их
console.log(strToReplace.replace('Иа-Иа', 'Ю-ю') + ' и обалдел')
console.log(strToReplace.split('Иа-Иа').join('Ю-ю') + ' и обалдел')
console.log(strToReplace.replaceAll(' ','_'))
console.log(strToReplace.split(' ').join('_'))
console.log(strToReplace.split('жираф').join('Ю-ю')) // Ничего не произойдёт, подстроки 'жираф' нет в строке strToReplace

// Сравнение строк
console.log('z' > 'Z') // true
// str.codePointAt(pos)
// Возвращает код для символа, находящегося на позиции pos:
console.log("z".codePointAt(0)) // 122
console.log("Z".codePointAt(0)) // 90
console.log("🍋".codePointAt(0)) // 127819

// String.fromCodePoint(code)
// Создаёт символ по его коду code
console.log(String.fromCodePoint(90)); // Z
console.log(String.fromCodePoint(127819)); // 🍋

// Правильное сравнение
// «Правильный» алгоритм сравнения строк сложнее, чем может показаться, так как разные языки используют разные алфавиты.
// Вызов str.localeCompare(str2) возвращает число, которое показывает, какая строка больше в соответствии с правилами языка:
// -1, если str меньше str2.
// 1, если str больше str2.
// 0, если строки равны.
console.log('aaaa'.localeCompare('aazaaa'))

// Строки также имеют ещё кое - какие полезные методы:
// str.trim() — убирает пробелы в начале и конце строки
// str.repeat(n) — повторяет строку n раз

console.log('    Niko     '.trim())
console.log('Fffff'.repeat(3))

// ############# Массивы ############# 

// Два варианта создания массива
let arr = new Array()
arr = []

// Практически всегда используется второй вариант синтаксиса.В скобках мы можем указать начальные значения элементов:

let fruits = ["Яблоко", "Апельсин", "Слива"];
// Элементы массива нумеруются, начиная с нуля.

// Мы можем получить элемент, указав его номер в квадратных скобках:

fruits = ["Яблоко", "Апельсин", "Слива"]

console.log(fruits[0]) // Яблоко
console.log(fruits[1]) // Апельсин
console.log(fruits[2]) // Слива

// Мы можем заменить элемент:

fruits[2] = 'Груша' // теперь ["Яблоко", "Апельсин", "Груша"]
// …Или добавить новый к существующему массиву:

fruits[3] = 'Лимон' // теперь ["Яблоко", "Апельсин", "Груша", "Лимон"]
// Общее число элементов массива содержится в его свойстве length:

fruits = ["Яблоко", "Апельсин", "Слива"]

fruits[1] = fruits[1].slice(0, 4) + fruits[1][4].toUpperCase() + fruits[1].slice(5) + ', яблоко'
console.log(fruits[1])

console.log(fruits.length) // 3

console.log(fruits)
console.log(fruits.toString())

fruits = [
  "Апельсин",
  "Слива",
  "Яблоко", // висячая запятая
]
// «Висячая запятая» упрощает процесс добавления/удаления элементов, так как все строки становятся идентичными.


// получить последний элемент массива, динамической длины
console.log(fruits[fruits.length-1])
console.log(fruits.at(-1))

// Методы pop/push, shift/unshift

let newLenth = fruits.push('Груша') // Добавляет элемент в конец массива, возвращает новую длину масиива
console.log("fruits.push('Груша')", fruits, 'newLenth', newLenth)

let lastElement = fruits.pop() // Убирает последний элемент массива и возвращает его значение
console.log('lastElement = fruits.pop()', fruits, 'lastElement', lastElement)

newLenth = fruits.unshift('Груша') // Добавляет элемент в начало массива, возвращает новую длину масиива
console.log("fruits.unshift('Груша')", fruits, 'newLenth', newLenth)

let firstElement = fruits.shift() // Убирает первый элемент массива и возвращает его значение
console.log('lastElement = fruits.shift()', fruits, 'firstElement', firstElement)

const newFruits = fruits
newFruits.push('Алыча')
console.log('fruits', fruits)
console.log('newFruits', newFruits)
// Массивы хранят значения по ссылке как и объекты, т.к. их прототип - простой объект
// @ts-ignore
console.log('[]==[]', []==[])

// Движок JavaScript старается хранить элементы массива в непрерывной области памяти, один за другим. Это очень большой плюс массивов
// Но массивы утратят эффективность, если мы перестанем работать с массивом как с «упорядоченной коллекцией данных» и начнём использовать его как обычный объект

// Варианты неправильного применения массива:

// Добавление нечислового свойства, например: arr.test = 5.
// Создание «дыр», например: добавление arr[0], затем arr[1000](между ними ничего нет).
// Заполнение массива в обратном порядке, например: arr[1000], arr[999] и т.д.

// Массив следует считать особой структурой, позволяющей работать с упорядоченными данными.Для этого массивы предоставляют специальные методы.Массивы тщательно настроены в движках JavaScript для работы с однотипными упорядоченными данными, поэтому, пожалуйста, используйте их именно в таких случаях.Если вам нужны произвольные ключи, вполне возможно, лучше подойдёт обычный объект { }.

// Способы очистки 
const myArray = ['erter','sdfsd','fghfg']
// myArray = [] Нельзя для константы, можно для переменной (let)
// Самый просстой способ очистить массив
myArray.length = 0
console.log(myArray)

// Методы push/pop выполняются быстро, а методы shift/unshift – медленно.

// как выглядит примерная реализация методов push и pop
function push(arr: any, el:any) {
  arr[arr.length] = el
  return arr.length
}

function pop(arr: any) {
  const el = arr[arr.length-1]
  arr.length = arr.length - 1
  return el
}

// как выглядит примерная реализация методов unshift и shift
function unshift(arr: any, el:any) {
  const newArr = [el, ...arr]
  return newArr.length
}

function shift(arr: any) {
  const el = arr[0]
  arr.slice(1)
  return el
}

// Остановились на переборе элементов

// 3 варианта перебора элементов массива

arr = ["Яблоко", "Апельсин", "Груша"]

console.log('### Классический цикл for, если нужны индексы ###')
for (
  let i = 0; 
  i < arr.length; 
  i++
  ) {
  console.log('arr['+i+']', arr[i])
}

// Проходит по значениям
// Цикл for..of не предоставляет доступа к номеру текущего элемента, только к его значению, но в большинстве случаев этого достаточно.А также это короче.
console.log('### Цикл for .. of, если нужны только значения ###')
for (let fruit of fruits) {
  console.log('fruit', fruit)
}

// Технически, так как массив является объектом, можно использовать и вариант for..in:
console.log('### Цикл for .. in. !!!!Не использовать для массивов!!! ###')
// arr.name = 'массив фруктов'
for (let key in arr) {
  console.log('arr['+key+']', arr[key])
}

// Но на самом деле это – плохая идея.Существуют скрытые недостатки этого способа:

// Цикл for..in выполняет перебор всех свойств объекта, а не только цифровых.

// В браузере и других программных средах также существуют так называемые «псевдомассивы» – объекты, которые выглядят, как массив.То есть, у них есть свойство length и индексы, но они также могут иметь дополнительные нечисловые свойства и методы, которые нам обычно не нужны.Тем не менее, цикл for..in выведет и их.Поэтому, если нам приходится иметь дело с объектами, похожими на массив, такие «лишние» свойства могут стать проблемой.

// Цикл for..in оптимизирован под произвольные объекты, не массивы, и поэтому в 10 - 100 раз медленнее.Увеличение скорости выполнения может иметь значение только при возникновении узких мест.Но мы всё же должны представлять разницу.

// !!!НЕ СЛЕДУЕТ использовать цикл for..in для массивов.
// ### for..in используется ТОЛЬКО ДЛЯ обхода ключей (значений) ОБЪЕКТОВ ###

// Сравнение масиивов с ПРИМИТИВАМИ

const arrA = [0,1,52,5,{a:0}]
const arrB = [0,1,52,5,{c:11}]

// !!!НЕ ПОДХОДИТ ДЛЯ СРАВНЕНИЯ МАССИВОВ С ОБЪЕКТАМИ, Т.К. ЛЮБОЙ ОБЪЕКТ ПРЕОБРАЗУЕТСЯ В [object Object]

console.log('arrA==arrB', arrA == arrB) // false, т.к. объекты сравниваются по ссылке
console.log('arrA.toString()==arrB.toString()', arrA.toString() == arrB.toString()) // true

// Самы простой способ сделать массив, значения которого примитивы, или массивы примитивов, плоским: 

console.log('[1,2,3,[4,5,6,[7,8,9]]].toString().split(\',\')', [1, 2, 3, [4, 5, 6, [7, 8, 9]]].toString().split(','))

// Так как же сравнить массивы ?

// Это просто: не используйте оператор ==.Вместо этого сравните их по элементам в цикле или используя методы итерации, которые рассмотрим позже.

// ###### Многомерные массивы ######
// Массивы могут содержать элементы, которые тоже являются массивами.Это можно использовать для создания многомерных массивов, например, для хранения матриц:

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log(matrix[1][1]); // 5, центральный элемент

// Написать функцию, которая принимает двузначное число 
// и возвращает его в текстовом виде.
// Например: 35 – тридцать пять, 89 – восемьдесят девять, 12 – двенадцать.

function oneNumber(n:number) {
  switch (n) {
    case 0:
      return 'ноль'
    case 1:
      return 'один'
    case 2:
      return 'два'
    case 3:
      return 'три'
    case 4:
      return 'четыре'
    case 5:
      return 'пять'
    case 6:
      return 'шесть'
    case 7:
      return 'семь'
    case 8:
      return 'восемь'
    case 9:
      return 'девять'
  }
}

function secondOfTen(n:number) {
  switch (n) {
    case 0:
      return 'десять'
    case 1:
      return 'одиннадцать'
    case 2:
      return 'двенадцать'
    case 3:
      return 'тринадцать'
    case 4:
      return 'четырнадцать'
    case 5:
      return 'пятьнадцать'
    case 6:
      return 'шестьнадцать'
    case 7:
      return 'семьнадцать'
    case 8:
      return 'восемьнадцать'
    case 9:
      return 'девятьнадцать'
  }
}

function firstOfMoreTen(n:number) {
  switch (n) {
    case 2:
      return 'двадцать'
    case 3:
      return 'тридцать'
    case 4:
      return 'сорок'
    case 5:
      return 'пятьдесят'
    case 6:
      return 'шестьдесят'
    case 7:
      return 'семьдесят'
    case 8:
      return 'восемьдесят'
    case 9:
      return 'девяносто'
  }
}

function numberToText(n:number) {
  if (n<-99 || n>99) return 'Неверное число'
  let minusStr = ''
  let sN = ''
  const numberWithMinus = n.toString()
  if (numberWithMinus[0]=='-') {
    minusStr = 'минус '
    sN = numberWithMinus.slice(1)
  } else {
    sN = n.toString()
  }
  
  if (sN.length==1) {
    return minusStr + oneNumber(+sN[0])
  }
  if (sN.length == 2) {
    if (sN[0]=='1') {
      return minusStr + secondOfTen(+sN[1])
    }
    if (sN[1]=='0') {
      return minusStr + firstOfMoreTen(+sN[0])
    }
    return minusStr + firstOfMoreTen(+sN[0]) + ' ' + oneNumber(+sN[1])
  }
}

// alert(numberToText(+(prompt('введите двузначное число') as string)))

console.log(numberToText(18))
console.log(numberToText(0))
console.log(numberToText(9))
console.log(numberToText(34))
console.log(numberToText(68))

// Задача 3
// Создать массив css-стилей (цвет, размер шрифта, выравнивание, подчеркивание и т.д.). Каждый элемент массива – это объект, состоящий из двух свойств: название стиля и значение стиля.
// Написать функцию, которая принимает массив стилей и текст, и выводит этот текст с помощью document.write() в тегах <p> </p>, добавив в открывающий тег атрибут style со всеми стилями, перечисленными в массиве.

const colorRed = [
  {
    name: 'color',
    value: 'red'
  },
  {
    name: 'text-decoration',
    value: 'underline'
  },
]
const colorGreen = [
  {
    name: 'color',
    value: 'green'
  },
  {
    name: 'font-size',
    value: '20px'
  },
]

const printTextDiv = document.querySelector('.printText')

function printText(styleArr:Record<string,string>[],text:string) {
  let styleStr = ''
  for (let el of styleArr) {
    styleStr += `${el.name}:${el.value};`
  }
  if (printTextDiv) {
    printTextDiv.innerHTML += `<p style="${styleStr}">${text}</p>`
  }
}

printText(colorRed, 'dfjkghjkdfgjhkdfgjkndfjkgnjkn sfgmlkdfnjglknjdflk')
printText(colorGreen, 'dfjkghjkdfgjhkdfgjkndfjkgnjkn sfgmlkdfnjglknjdflk')

// Задача 1
// Создать массив «Список покупок». Каждый элемент массива является объектом, который содержит название продукта, необходимое количество и куплен или нет.Написать несколько функций для работы с таким массивом.
// 1 Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, а потом – купленные.
// 2 Добавление покупки в список.Учтите, что при добавлении покупки с уже существующим в списке продуктом, необходимо увеличивать количество в существующей покупке, а не добавлять новую.
// 3 Покупка продукта.Функция принимает название продукта и отмечает его как купленный.

const purchase = [
  {
    name: 'a',
    count: 12,
    purchased: true,
  },
  {
    name: 'b',
    count: 6,
    purchased: false,
  },
  {
    name: 'c',
    count: 1,
    purchased: true,
  },
]

const addPurchaseButton = document.querySelector('.addPurchase')
const setPurchasedButton = document.querySelector('.setPurchased')

function whatToBuy(arr:any[]) {
  let n = 1
  for (let el of arr) {
    if (!el.purchased) {
      console.log(`${n}. ${el.name} Надо купить ${el.count} штук`)
      n++
      // console.log(n + ". " +el.name+" Надо купить "+el.cont+"штук")
    }
  }
  for (let el of arr) {
    if (el.purchased) {
      console.log(`${n}. ${el.name} Куплено ${el.count} штук`)
      n++
      // console.log(n + ". " +el.name+" Надо купить "+el.cont+"штук")
    }
  }
}

function addPurchase() {
  const name = prompt('Введите название') as string
  const count = +(prompt('Введите количество') as string)
  let find = false
  for (let el of purchase) {
    if (el.name == name) {
      el.count += count
      find = true
    }
  }
  if (!find) {
    purchase.push({ name:name, count, purchased: false })
  }
  whatToBuy(purchase)
}

function setPurchased() {
  const name = prompt('Введите название купленного товара') as string
  for (let el of purchase) {
    if (el.name == name) {
      el.purchased = true
    }
  }
  whatToBuy(purchase)
}

addPurchaseButton?.addEventListener('click', addPurchase)
setPurchasedButton?.addEventListener('click', setPurchased)

whatToBuy(purchase)

// ########## Методы массивов ##########

// Метод arr.splice(str) – это универсальный «швейцарский нож» для работы с массивами.Умеет всё: добавлять, удалять и заменять элементы.

// arr.splice(start[, deleteCount, elem1, ..., elemN])
// Он изменяет arr начиная с индекса start: удаляет deleteCount элементов и затем вставляет elem1, ..., elemN на их место.Возвращает массив из удалённых элементов.

const mainArr = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"]
arr = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"]
// удалить 3 первых элемента и заменить их другими
arr = mainArr.slice()
arr.splice(0, 3, "Давай", "танцевать")
console.log(arr) // теперь ["Давай", "танцевать", "прямо", "сейчас"]

// Добавим новые элементы по индексу 3
arr = [...mainArr]
arr.splice(3, 0, "Давай", "танцевать")
console.log(arr) // теперь ["Я", "изучаю", "JavaScript", "Давай", "танцевать", "прямо", "сейчас"]

// Добавим новые элементы по индексу 3 через отрицательный индекс (-2)
arr = mainArr.slice()
arr.splice(-2, 0, "Давай", "танцевать")
console.log(arr) // теперь ["Я", "изучаю", "JavaScript", "Давай", "танцевать", "прямо", "сейчас"]

// Удалим первые 2 элемента
arr = [...mainArr]
const deleted = arr.splice(0, 2)
console.log('deleted', deleted) // ["Я", "изучаю"]
console.log(arr) // теперь ["JavaScript", "прямо", "сейчас"]

// Как происходит копирование через развёртывание (spred оператор)
console.log("Я", "изучаю", "JavaScript", "прямо", "сейчас") 
console.log(...mainArr) 
// То есть это создание нового массива с переписыванием всех значений разворачиваемого
arr = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"]
arr = [...mainArr]
arr = {...mainArr} // Делаем из массива объект
console.log(arr) 
arr = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"]
console.log('index',-1,arr[arr.length-1]) 
console.log('index',-1,arr.at(-1)) 
console.log('index',-2,arr[arr.length-2]) 
console.log('index', -2, arr.at(-2))

// Он возвращает новый массив, в который копирует все элементы с индекса start до end (не включая end). start и end могут быть отрицательными, в этом случае отсчёт позиции будет вестись с конца массива.

// Это похоже на строковый метод str.slice, но вместо подстрок возвращает подмассивы.
console.log('index', -2, arr.slice(-2)) // ["прямо", "сейчас"]
// То же самое, что spred. Создаём копию масиива
console.log(arr.slice())

// Метод arr.concat создаёт новый массив, в который копирует данные из других массивов и дополнительные значения.


// arr.concat(arg1, arg2...)
// Он принимает любое количество аргументов, которые могут быть как массивами, так и простыми значениями.

// В результате – новый массив, включающий в себя элементы из arr, затем arg1, arg2 и так далее.

// Если аргумент argN – массив, то копируются все его элементы.Иначе копируется сам аргумент.

arr = [1, 2]

// создать массив из: arr и [3,4]
console.log(arr.concat([3, 4])) // 1,2,3,4

// создать массив из: arr и [3,4] и [5,6]
console.log(arr.concat([3, 4], [5, 6])) // 1,2,3,4,5,6

// создать массив из: arr и [3,4], потом добавить значения 5 и 6
console.log(arr.concat([3, 4], 5, 6)) // 1,2,3,4,5,6

// Перебор: forEach
// Метод arr.forEach позволяет запускать функцию для каждого элемента массива.
arr = ["Бильбо", "Гэндальф", "Назгул"]
// нужна точка с запятой, т.к. строка начинает с литерала массива
;["Бильбо", "Гэндальф", "Назгул"].forEach(function(item, index, array) {
  console.log(`У ${item} индекс ${index} в ${array}`)
});
arr.forEach(logArrayElements)

function logArrayElements(value:any, i:number) {
  console.log(`У ${value} индекс ${i}`)
}

// indexOf / lastIndexOf и includes. Работатет точно так же как со строками
// У методов arr.indexOf и arr.includes одинаковый синтаксис и они делают по сути то же самое, что и их строковые аналоги, но работают с элементами вместо символов:

// arr.indexOf(item, from) ищет item начиная с индекса from и возвращает номер индекса, на котором был найден искомый элемент, в противном случае - 1.
// arr.includes(item, from) ищет item начиная с индекса from и возвращает true, если поиск успешен.
// Обычно эти методы используются только с одним аргументом: искомым item.По умолчанию поиск ведется с начала.

arr = [1, 0, false];

console.log(arr.indexOf(0)); // 1
console.log(arr.indexOf(false)); // 2
console.log(arr.indexOf(null)); // -1

console.log(arr.includes(1)); // true

// Обратите внимание, что методы используют строгое сравнение ===.Таким образом, если мы ищем false, он находит именно false, а не ноль.

// Если мы хотим проверить наличие элемента в массиве и нет необходимости знать его индекс, предпочтительно использовать arr.includes.

// Метод arr.lastIndexOf похож на indexOf, но ищет справа налево.

fruits = ['Яблоко', 'Апельсин', 'Яблоко']

console.log(fruits.indexOf('Яблоко')); // 0 (первый 'Яблоко')
console.log(fruits.lastIndexOf('Яблоко')); // 2 (последний 'Яблоко')
// Метод includes правильно обрабатывает NaN
// Незначительная, но заслуживающая внимания особенность includes – он правильно обрабатывает NaN, в отличие от indexOf:

arr = [NaN];
console.log(arr.indexOf(NaN)); // -1 (неверно, должен быть 0)
console.log(arr.includes(NaN));// true (верно)
// Это связано с тем, что includes был добавлен в JavaScript гораздо позже и использует более современный алгоритм сравнения.


// find и findIndex / findLastIndex Поиск объетов в массиве
// Представьте, что у нас есть массив объектов.Как нам найти объект с определённым условием ?

// let result = arr.find(function (item, index, array) {
  // если true - возвращается текущий элемент и перебор прерывается
  // если все итерации оказались ложными, возвращается undefined
// });
// Функция вызывается по очереди для каждого элемента массива:
// item – очередной элемент.
// index – его индекс.
// array – сам массив.

// Мы можем опускать index и array, если они нам не нужны

// Если функция возвращает true, поиск прерывается и возвращается item.Если ничего не найдено, возвращается undefined.

  // Например, у нас есть массив пользователей, каждый из которых имеет поля id и name.Найдем пользователя с id == 1:

let usersArr = [
  { id: 1, name: "Вася" },
  { id: 2, name: "Петя" },
  { id: 3, name: "Маша" }
];

user = usersArr.find(item => item.id == 1);
// Опциональная цепочка необходима, чтобы не поймать ошибку, в случае, если элемент не найден и user=undefined
console.log(user?.name); // Вася

// В реальной жизни массивы объектов – обычное дело, поэтому метод find крайне полезен.

// Обратите внимание, что в данном примере мы передаём find функцию item => item.id == 1 с одним аргументом.Это типично, другие аргументы этой функции используются редко.

// У метода arr.findIndex такой же синтаксис, но он возвращает индекс, на котором был найден элемент, а не сам элемент.Значение -1 возвращается, если ничего не найдено.

// Метод arr.findLastIndex похож на findIndex, но ищет справа налево, наподобие lastIndexOf.

usersArr = [
  { id: 1, name: "Вася" },
  { id: 2, name: "Петя" },
  { id: 3, name: "Маша" },
  { id: 4, name: "Вася" }
];

// Найти индекс первого Васи
console.log(usersArr.findIndex(user => user.name == 'Вася')); // 0

// Найти индекс последнего Васи
console.log(usersArr.findLastIndex(user => user.name == 'Вася')); // 3


// filter
// Метод find ищет один(первый) элемент, который заставит функцию вернуть true.

// Если найденных элементов может быть много, можно использовать arr.filter(fn).

// Синтаксис схож с find, но filter возвращает массив из всех подходящих элементов:

// let results = arr.filter(function (item, index, array) {
  // если `true` -- элемент добавляется к results и перебор продолжается
  // возвращается пустой массив в случае, если ничего не найдено
// });

usersArr = [
  { id: 1, name: "Вася" },
  { id: 2, name: "Петя" },
  { id: 3, name: "Маша" }
]

// возвращает массив, состоящий из двух первых пользователей
let someUsers = usersArr.filter(item => item.id < 3);

console.log(someUsers.length); // 2

// запись стрелочной функции поиска в виде обычной
const arrowF = (item:any) => item.id < 3
const arrowFTruelyReturn = (item:any) => {return item.id < 3}
const regularF = function(item:any) {return item.id < 3}

// Преобразование массива
// Методам преобразования и упорядочения массива.

// map
// Метод arr.map является одним из наиболее полезных и часто используемых.
// Он вызывает функцию для каждого элемента массива и возвращает массив результатов выполнения этой функции.

// let result = arr.map(function (item, index, array) {
  // возвращается новое значение вместо элемента
// });
// Например, здесь мы преобразуем каждый элемент в его длину:
usersArr = [
  { id: 1, name: "Вася" },
  { id: 1, name: "вася" },
  { id: 2, name: "Петя" },
  { id: 3, name: "Маша" },
  { id: 4, name: "Артур" },
  { id: 5, name: "Dimon" },
]

let names = usersArr.map(item => item.name)
console.log(names) 

// sort(fn)
// Вызов arr.sort() сортирует массив на месте, меняя в нём порядок элементов.
// Он также возвращает отсортированный массив, но обычно возвращаемое значение игнорируется, так как изменяется сам arr.

arr = [1, 2, 15];

// метод сортирует содержимое arr
arr.sort()
console.log(arr) // 1, 15, 2

// Порядок стал 1, 15, 2. Это неправильно.Но почему ?
// По умолчанию элементы сортируются как строки.
// Буквально, элементы преобразуются в строки при сравнении.Для строк применяется лексикографический порядок, и действительно выходит, что "2" > "15".
// Чтобы использовать наш собственный порядок сортировки, нам нужно предоставить функцию в качестве аргумента arr.sort().
// Функция должна для пары значений возвращать:
function compare(a:any, b:any) {
  if (a > b) return 1; // если первое значение больше второго
  if (a == b) return 0; // если равны
  if (a < b) return -1; // если первое значение меньше второго
  return -1
}
function reverseCompare(a:any, b:any) {
  if (a > b) return -1; // если первое значение больше второго
  if (a == b) return 0; // если равны
  if (a < b) return 1; // если первое значение меньше второго
  return 1
}
console.log(names.sort())
console.log(names.sort((a, b) => a.localeCompare(b))) // Правильный метод сортировки строк по возрастанию
console.log(names.sort((a, b) => -a.localeCompare(b))) // Правильный метод сортировки строк по убыванию
console.log(arr.sort(compare)) // Правильный метод сортировки чисел по возрастанию
console.log(arr.sort(reverseCompare)) // Правильный метод сортировки чисел по убыванию

// На самом деле от функции сравнения требуется любое положительное число, чтобы сказать «больше», и отрицательное число, чтобы сказать «меньше».
console.log(arr.sort(function (a, b) { return a - b })) // Короткий метод сортировки чисел по возрастанию
console.log(arr.sort(function (a, b) { return -a + b })) // Короткий метод сортировки чисел по убыванию
console.log(arr.sort((a, b) => -a + b ))

// reverse
// Метод arr.reverse меняет порядок элементов в arr на обратный.
// Можно не писать метод обратной сортировки, а просто перевернуть отсортированный массив
console.log(names.reverse()) 
// Он также возвращает массив arr с изменённым порядком элементов.

// split и join
// Ситуация из реальной жизни.Мы пишем приложение для обмена сообщениями, и посетитель вводит имена тех, кому его отправить, через запятую: Вася, Петя, Маша.Но нам - то гораздо удобнее работать с массивом имён, чем с одной строкой.Как его получить ?

// Метод str.split(delim) именно это и делает.Он разбивает строку на массив по заданному разделителю delim.

// В примере ниже таким разделителем является строка из запятой и пробела.

let namesStr = 'Вася, Петя, Маша'

arr = namesStr.split(', ')

console.log(arr)

// У метода split есть необязательный второй числовой аргумент – ограничение на количество элементов в массиве.Если их больше, чем указано, то остаток массива будет отброшен.На практике это редко используется:

arr = 'Вася, Петя, Маша, Саша'.split(', ', 2)

console.log(arr) // Вася, Петя

// Разбивка по буквам
// Вызов split(s) с пустым аргументом s разбил бы строку на массив букв:

str = "тест"
console.log(str.split('')) // т,е,с,т

// Вызов arr.join(glue) делает в точности противоположное split.Он создаёт строку из элементов arr, вставляя glue между ними.

arr = ['Вася', 'Петя', 'Маша']

str = arr.join(';') // объединить массив в строку через ;

console.log(str) // Вася;Петя;Маша

// reduce / reduceRight
// Когда нам нужно перебрать массив – мы можем использовать forEach, for или for..of.
// Когда нам нужно перебрать массив и вернуть данные для каждого элемента – мы можем использовать map.

// Методы arr.reduce и arr.reduceRight похожи на методы выше, но они немного сложнее.Они используются для вычисления единого значения на основе всего массива.

// let value = arr.reduce(function (accumulator, item, index, array) {
  // ...
// }, [initial]);
// Функция применяется по очереди ко всем элементам массива и «переносит» свой результат на следующий вызов.

// Аргументы:
// accumulator – результат предыдущего вызова этой функции, равен initial при первом вызове(если передан initial),
// item – очередной элемент массива,
// index – его позиция,
// array – сам массив.
// При вызове функции результат её предыдущего вызова передаётся на следующий вызов в качестве первого аргумента.

// Так, первый аргумент является по сути аккумулятором, который хранит объединённый результат всех предыдущих вызовов функции.По окончании он становится результатом reduce.

// Тут мы получим сумму всех элементов массива одной строкой:

arr = [1, 2, 3, 4, 5]

let result = arr.reduce((sum, current) => sum + current, 0)

console.log(result) // 15
// Функция, переданная в reduce, использует только два аргумента, этого обычно достаточно.

// Разберём детально как это работает.

// При первом запуске sum равен initial(последний аргумент reduce), то есть 0, а current – первый элемент массива, равный 1. Таким образом, результат функции равен 1.
// При втором запуске sum = 1, к нему мы добавляем второй элемент массива(2) и возвращаем.
// При третьем запуске sum = 3, к которому мы добавляем следующий элемент, и так далее…

// Мы также можем опустить начальное значение:

arr = [1, 2, 3, 4, 5]

// убрано начальное значение (нет 0 в конце)
result = arr.reduce((sum, current) => sum + current)
console.log(result) // 15

// Результат – точно такой же! Это потому, что при отсутствии initial в качестве первого значения берётся первый элемент массива, а перебор стартует со второго.

// Но такое использование требует крайней осторожности.Если массив пуст, то вызов reduce без начального значения выдаст ошибку.

// Вот пример:
arr = []

// Error: Reduce of empty array with no initial value
// если бы существовало начальное значение, reduce вернул бы его для пустого массива.
// arr.reduce((sum, current) => sum + current)
// Поэтому рекомендуется всегда указывать начальное значение.
// Метод arr.reduceRight работает аналогично, но проходит по массиву справа налево.

// Array.isArray
// Массивы не образуют отдельный тип языка.Они основаны на объектах.
// Поэтому typeof не может отличить простой объект от массива:

console.log(typeof {}); // object
console.log(typeof []); // тоже object

// …Но массивы используются настолько часто, что для этого придумали специальный метод: Array.isArray(value).Он возвращает true, если value массив, и false, если нет.

console.log(Array.isArray({})); // false
console.log(Array.isArray([])); // true

// Большинство методов поддерживают «thisArg»
// Почти все методы массива, которые вызывают функции – такие как find, filter, map, за исключением метода sort, принимают необязательный параметр thisArg.

// Этот параметр не объяснялся выше, так как очень редко используется, но для наиболее полного понимания темы мы обязаны его рассмотреть.
// Вот полный синтаксис этих методов:

// arr.find(func, thisArg);
// arr.filter(func, thisArg);
// arr.map(func, thisArg);
// ...
// thisArg -- необязательный последний аргумент
// Значение параметра thisArg становится this для func.
// Например, тут мы используем метод объекта army как фильтр, и thisArg передаёт ему контекст:

let army = {
  minAge: 18,
  maxAge: 27,
  canJoin(user:any) {
    return user.age >= this.minAge && user.age < this.maxAge;
  }
};

let users = [
  { age: 16 },
  { age: 20 },
  { age: 23 },
  { age: 30 }
];

// найти пользователей, для которых army.canJoin возвращает true
let soldiers = users.filter(army.canJoin, army);

console.log(soldiers.length); // 2
console.log(soldiers[0].age); // 20
console.log(soldiers[1].age); // 23

// Если бы мы в примере выше использовали просто users.filter(army.canJoin), то вызов army.canJoin был бы в режиме отдельной функции, с this = undefined.Это тут же привело бы к ошибке.

// Вызов users.filter(army.canJoin, army) можно заменить на users.filter(user => army.canJoin(user)), который делает то же самое.Последняя запись используется даже чаще, так как функция - стрелка более наглядна.


//  ################ Итого ################
// Шпаргалка по методам массива:

// Для добавления / удаления элементов:

// push(...items) – добавляет элементы в конец,
// pop() – извлекает элемент с конца,
// shift() – извлекает элемент с начала,
// unshift(...items) – добавляет элементы в начало.
// splice(pos, deleteCount, ...items) – начиная с индекса pos удаляет deleteCount элементов и вставляет items.
// slice(start, end) – создаёт новый массив, копируя в него элементы с индекса start до end(не включая end).
// concat(...items) – возвращает новый массив: копирует все члены текущего массива и добавляет к нему items.Если какой - то из items является массивом, тогда берутся его элементы.

// Для поиска среди элементов:

// indexOf / lastIndexOf(item, pos) – ищет item, начиная с позиции pos, и возвращает его индекс или - 1, если ничего не найдено.
// includes(value) – возвращает true, если в массиве имеется элемент value, в противном случае false.
// find / filter(func) – фильтрует элементы через функцию и отдаёт первое / все значения, при прохождении которых через функцию возвращается true.
// findIndex похож на find, но возвращает индекс вместо значения.
// Для перебора элементов:

// forEach(func) – вызывает func для каждого элемента.Ничего не возвращает.
// Для преобразования массива:

// map(func) – создаёт новый массив из результатов вызова func для каждого элемента.
// sort(func) – сортирует массив «на месте», а потом возвращает его.
// reverse() – «на месте» меняет порядок следования элементов на противоположный и возвращает изменённый массив.
// split / join – преобразует строку в массив и обратно.
// reduce / reduceRight(func, initial) – вычисляет одно значение на основе всего массива, вызывая func для каждого элемента и передавая промежуточный результат между вызовами.

// Дополнительно:
// Array.isArray(arr) проверяет, является ли arr массивом.
// Пожалуйста, обратите внимание, что методы sort, reverse и splice изменяют исходный массив.

// Эти методы – самые используемые, их достаточно в 99 % случаев.Но существуют и другие:

// arr.some(fn) / arr.every(fn) проверяет массив.

// Функция fn вызывается для каждого элемента массива аналогично map.Если какие - либо / все результаты вызовов являются true, то метод возвращает true, иначе false.

// Эти методы ведут себя примерно так же, как операторы || и &&: если fn возвращает истинное значение, arr.some() немедленно возвращает true и останавливает перебор остальных элементов; если fn возвращает ложное значение, arr.every() немедленно возвращает false и также прекращает перебор остальных элементов.

// Мы можем использовать every для сравнения массивов:

function arraysEqual(arr1:any, arr2:any) {
  return arr1.length === arr2.length && arr1.every((value:any, index:number) => value === arr2[index]);
}

console.log(arraysEqual([1, 2], [1, 2])); // true

// arr.fill(value, start, end) – заполняет массив повторяющимися value, начиная с индекса start до end.

// arr.copyWithin(target, start, end) – копирует свои элементы, начиная с позиции start и заканчивая end, в себя, на позицию target(перезаписывая существующие).

// arr.flat(depth) / arr.flatMap(fn) создаёт новый плоский массив из многомерного массива.

// Полный список есть в справочнике MDN.

// На первый взгляд может показаться, что существует очень много разных методов, которые довольно сложно запомнить.Но это гораздо проще, чем кажется.

// Внимательно изучите шпаргалку, представленную выше, а затем, чтобы попрактиковаться, решите задачи, предложенные в данной главе.Так вы получите необходимый опыт в правильном использовании методов массива.

// Всякий раз, когда вам будет необходимо что - то сделать с массивом, а вы не знаете, как это сделать – приходите сюда, смотрите на таблицу и ищите правильный метод.Примеры помогут вам всё сделать правильно, и вскоре вы быстро запомните методы без особых усилий.

// ############ this и цепочка вызовов ###########
let ladder = {
  step: 0,
  up() {
    this.step++
    return this
  },
  down() {
    this.step--
    return this
  },
  showStep: function () { // показывает текущую ступеньку
    console.log(this.step)
    return this
  }
}
ladder.up().up().down().showStep().down().showStep()

console.log(parseInt('sdfsdf'.split('s').join('67').toUpperCase()).toFixed(2))

function pow(x: number, n: number):number {
  console.log('x',x,'n',n)
  if (n == 1) {
    return x
  } else {
    return x * pow(x, n - 1)
    // return 2 * pow(2, 3 - 1) => return 2 * 2 * pow(2, 2 - 1) => return 2 * 2 * 2
    // 2**3 = 2 * 2**(3-1)
    // 2**3 = 2 * 2 * 2**(2-1)
    // 2**3 = 2 * 2 * 2
  }
}

// короткая версия записи
function pow2(x: number, n: number): number {
  return (n == 1) ? x : (x * pow(x, n - 1));
}

// Максимальная глубина рекурсии ограничена движком JavaScript.Точно можно рассчитывать на 10000
// Рекурсия широко распространена: для решения большого числа задач рекурсивный способ решения даёт более простой код, который легче поддерживать
console.log(pow(2, 3))

function fib(n:number) {
  let a = 1
  let b = 1
  for (let i = 3; i <= n; i++) {
    let c = a + b
    a = b
    b = c
  }
  return b
}

function cachedFibonache() {
  const fibMemory:any = {}
  return function(n:number) {
    if (n <= 1) {
      console.log(fibMemory)
      return n  
    } else {
      if (!fibMemory[n]) {
        fibMemory[n] = recursiveFib(n - 1) + recursiveFib(n - 2)
      }
      return fibMemory[n]
    } 
  }
}

const recursiveFib = cachedFibonache()
const recursiveFib2 = cachedFibonache()

console.log(fib(3)) // 2
console.log(fib(7)) // 13
console.log(fib(77)) // 5527939700884757
console.log(recursiveFib2(3))
console.log(recursiveFib(77))

const click1Btn = document.querySelector('.click1')
const click2Btn = document.querySelector('.click2')

function cachedClicker() {
  let memory = 0
  return function() {
    return memory ++
  }
}

const click1fn = cachedClicker()
click1Btn?.addEventListener('click', ()=>{
  if (click1Btn) click1Btn.innerHTML = String(click1fn())
})
const click2fn = cachedClicker()
click2Btn?.addEventListener('click', ()=>{
  if (click2Btn) click2Btn.innerHTML = String(click2fn())
})

;[0, 1, 2].forEach((el, i, arr)=>console.log(el,i,arr))

function forEach(arr:any[], callback:Function) {
  for (let i=0; i<arr.length; i++) {
    callback(arr[i],i,arr)
  }
}

forEach([0, 1, 2], (el:any, i:number, arr:any[]) => console.log(el, i, arr))

user = {
  name: 'Andrey',
  isAdmin: true,
  sayHi() {
    console.log('My name is '+ this.name + ' and i\'m is ' + this.isAdmin? 'admin' : 'not admin' )
  }
} 
let user2 = {
  name: 'Andrey',
  isAdmin: true,
  sayHi() {
    console.log('My name is '+ this.name)
  }
} 

// localStorage.user = JSON.stringify(user)
// console.log(JSON.parse(localStorage.user))
console.log(user)
console.log(user2)

const User = (function(this:any, name:string, isAdmin:boolean=false) {
  // this = {};  (неявно)

  // добавляет свойства к this
  this.name = name
  this.isAdmin = isAdmin
  this.sayHi = function() {
    console.log('My name is ' + this.name + ' and i\'m is ' + this.isAdmin ? 'admin' : 'not admin')
  }
  // return this;  (неявно)
}) as any

user = new User("Jack")
user2 = new User("Jack2", true)
console.log(user)
console.log(user2)

declare global {
  interface String {
    reverse(): string;
  }
}

// ?############# Описание объектов, методов JSDoc ##############
// https://jsdoc.app/index.html

/**
 * @method
 * Тут можем создать описание функции
 *
 * @param {string} this - так описываются параметры. Т.к. это метод, опишем только this, который передавать не нужно
 */
String.prototype.reverse = function (this: string) {
  return this.split('').reverse().join('')
}
console.log('sffgdfgdfg'.reverse())

/**
 * Объект с числом и методом
 */
const myObj = {
  /**
   * @argument
   * Просто число
   */
  a:10,
  /**
   * @method
   * Увеличивает a на 1
   */
  count() {
    this.a++
  }
}

myObj.count()
myObj.a
console.log(myObj)

// ?############# Prototypes ################

// Прототип даёт нам немного «магии». Когда мы хотим прочитать свойство из object, а оно отсутствует, JavaScript автоматически берёт его из прототипа. В программировании такой механизм называется «прототипным наследованием». Многие интересные возможности языка и техники программирования основываются на нём

const animal = {
  eats: true,
  sound: null,
  hunger: null,
  move() {
    console.log('top-top')
  },
  makeSound() {
    console.log(this.sound)
  },
  eat() {
    this.hunger = false
  },
  sleep() {
    this.hunger = true
  },
} as any

const fury = {
  soft: 'very',
  __proto__: animal,
} as any

const rabbit = {
  jumps: true,
  eats: 'carrot',
} as any

// fury.__proto__ = animal
rabbit.__proto__ = fury
// Цикличное прототипное наследование приводит к ошибке
// animal.__proto__ = rabbit
console.log('rabbit', { ...rabbit, __proto__: fury })
rabbit.eats = 'carrot'
console.log('animal.eats', animal.eats)
console.log('rabbit.eats', rabbit.eats)
console.log('rabbit.soft', rabbit.soft)
console.log('rabbit.move()')
rabbit.move()
rabbit.move = ()=>{
  console.log('jump-jump')
}
console.log('rabbit.move()')
rabbit.move()
// ?Неважно, где находится метод: в объекте или его прототипе. При вызове метода this — всегда объект перед точкой
// sound берётся из animal
console.log('rabbit.makeSound()') 
rabbit.makeSound()
rabbit.sound = 'fr-fr'
// sound берётся из rabbit
console.log('rabbit.makeSound()')
rabbit.makeSound()
console.log('rabbit', { ...rabbit, __proto__: fury })
console.log('rabbit.sleep()')
rabbit.sleep()
console.log('rabbit', { ...rabbit, __proto__: fury })
console.log('rabbit.eat()')
rabbit.eat()
console.log('rabbit', { ...rabbit, __proto__: fury })
console.log('animal', animal)


user = {
  name: "John",
  surname: "Smith",
  // Метод-Сеттер устанавливает значение свойства fullName. Срабатывает при присваивании
  set fullName(value) {
    this.name = value.split(" ")[0]
    this.surname = value.split(" ")[1]
    // ;[this.name, this.surname] = value.split(" ")
  },
  // Метод-Геттер возвращает значение свойства fullName. Срабатывает обращении
  get fullName() {
    return `${this.name} ${this.surname}`
  },
}

let admin = {
  __proto__: user,
  isAdmin: true
} as any

console.log(admin.fullName) // Сработал Геттер
console.log(admin)

console.log(user.isPrototypeOf(admin))

// срабатывает сеттер!
admin.fullName = "Alice Cooper Js" // Сработал Сеттер
console.log(admin.name)     // Alice
console.log(admin.surname)  // Cooper

console.log(admin)
console.log(user)
console.log('Object.keys(admin)', Object.keys(admin))

// Цикл for…in
// Цикл for..in проходит не только по собственным, но и по унаследованным свойствам объекта.

for (let prop in admin) console.log(prop)

console.log('Object.keys(rabbit)', Object.keys(rabbit))

// rabbit.pinkNose = true

Object.defineProperty(rabbit, "pinkNose", {
  // Будет ли свойство перечислимым (появляться в for..in и Object.keys)
  enumerable: false,
  configurable: true,
  // Можно ли свойство изменить
  writable: true,
  // Задаём свойство
  value: 'yes'
})
console.log('rabbit.pinkNose', rabbit.pinkNose)

console.log('Object.keys(rabbit)', Object.keys(rabbit))
for (let prop in rabbit) console.log(prop)

// Если унаследованные свойства нам не нужны, то мы можем отфильтровать их при помощи встроенного метода obj.hasOwnProperty(key): он возвращает true, если у obj есть собственное, не унаследованное, свойство с именем key.

for (let prop in rabbit) {
  let isOwn = rabbit.hasOwnProperty(prop);

  if (isOwn) {
    console.log(`Our: ${prop}`); // Our: jumps
  } else {
    console.log(`Inherited: ${prop}`); // Inherited: eats
  }
}

const Rabbit = (function (this:any, name:string) {
  this.name = name
}) as any

/* прототип по умолчанию
Rabbit.prototype = { constructor: Rabbit }
*/
console.log('Rabbit.prototype.constructor == Rabbit', Rabbit.prototype.constructor == Rabbit)
let sipleRabbit = new Rabbit('simple')
let newSipleRabbit = new sipleRabbit.constructor('new simple')
console.log('sipleRabbit.constructor == Rabbit', sipleRabbit.constructor == Rabbit)
console.log('newSipleRabbit.constructor == Rabbit', newSipleRabbit.constructor == Rabbit)
console.log('newSipleRabbit', newSipleRabbit)


// Устанавливаем для новых созданных объектов прототип animal
Rabbit.prototype = {
  ...animal,
  constructor: Rabbit,
}

let whiteRabbit = new Rabbit("White Rabbit") //  WhiteRabbit.__proto__ == animal
console.log('whiteRabbit.constructor == Rabbit', whiteRabbit.constructor == Rabbit)

console.log('whiteRabbit.eats', whiteRabbit.eats) // true
console.log(whiteRabbit)

// Теперь прототип новых созданных объектов будут базовым объектом js
Rabbit.prototype = null

let BlackRabbit = new Rabbit("Black Rabbit") //  BlackRabbit.__proto__ == null
console.log(BlackRabbit)

newSipleRabbit = new BlackRabbit.constructor('new simple')
console.log(newSipleRabbit)
console.log(newSipleRabbit.toUpperCase())
newSipleRabbit = new BlackRabbit.constructor(1)
console.log(newSipleRabbit)

console.log(obj.__proto__ === Object.prototype); // true
// obj.toString === obj.__proto__.toString === Object.prototype.toString

arr = [1, 2, 3]

// наследует ли от Array.prototype?
// @ts-ignore
console.log('arr.__proto__ === Array.prototype',arr.__proto__ === Array.prototype) // true

// затем наследует ли от Object.prototype?
// @ts-ignore
console.log('arr.__proto__.__proto__ === Object.prototype',arr.__proto__.__proto__ === Object.prototype) // true

// и null на вершине иерархии
// @ts-ignore
console.log('arr.__proto__.__proto__.__proto__',arr.__proto__.__proto__.__proto__) // null

console.log([1, 2, 3])

// Заимствование у прототипов
// Это когда мы берём метод из одного объекта и копируем его в другой.
// Некоторые методы встроенных прототипов часто одалживают.

// Например, если мы создаём объект, похожий на массив(псевдомассив), мы можем скопировать некоторые методы из Array в этот объект.

let newObj = {
  0: "Hello",
  1: "world!",
  length: 2,
} as any
console.log({...newObj})
// newObj.join = Array.prototype.join
newObj.__proto__ = Array.prototype
newObj.push('Aaaaaa')
console.log(newObj.join(',')) // Hello,world!,Aaaaaa
console.log(newObj)

// Свойство __proto__ считается устаревшим, и по стандарту оно должно поддерживаться только браузерами.

// Современные же методы это:

// Object.create(proto, [descriptors]) – создаёт пустой объект со свойством[[Prototype]], указанным как proto, и необязательными дескрипторами свойств descriptors.
// Object.getPrototypeOf(obj) – возвращает свойство[[Prototype]] объекта obj.
// Object.setPrototypeOf(obj, proto) – устанавливает свойство[[Prototype]] объекта obj как proto.

// создаём новый объект с прототипом animal
let rabbit5 = Object.create(animal);

console.log(rabbit5.eats); // true

console.log(Object.getPrototypeOf(rabbit5) === animal); // получаем прототип объекта rabbit

Object.setPrototypeOf(rabbit5, {}); // заменяем прототип объекта rabbit на {}

// Мы также можем использовать Object.create для «продвинутого» клонирования объекта, более мощного, чем копирование свойств в цикле for..in:

// клон obj c тем же прототипом (с поверхностным копированием свойств)
let clone = Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj));
// Такой вызов создаёт точную копию объекта obj, включая все свойства: перечисляемые и неперечисляемые, геттеры / сеттеры для свойств – и всё это с правильным свойством[[Prototype]].

// Синтаксис «class»
// Базовый синтаксис выглядит так:

class MyClass {
  prop = value // свойство
  constructor() { // конструктор
    // ...
  }
  method() { } // метод
  get something() { return '' } // геттер
  set something(a:any) { } // сеттер
  [Symbol.iterator]() { } // метод с вычисляемым именем (здесь - символом)
  // ...
}

class ClassUser {
  // не надо объявлять переменную (let, const)
  // Значения свойст врисваиваются объекту при вызове new ClassName
  name
  #age = 18
  // При создании нового объекта в первую очередь срабатывает конструктор
  constructor(name:string) {
    this.name = name
  }
  // геттер срабатывает, когда мы обращаемся к этому свойству
  // Например, user.age
  get age() {
    return this.#age
  }
  // cеттер срабатывает, когда мы устанавливаем это свойству
  // Например, user.age = 18
  set age(age:number) {
    if (age<0) {
      alert('невозможно')
    } else {
      this.#age = age
    }
  }
  sayHi() {
    console.log(this.name)
  }
}

// Использование:
user = new ClassUser("Иван")
user.sayHi()
console.log(user)
user.age = 16
console.log(user)
console.log('typeof ClassUser', typeof ClassUser)

// Вот что на самом деле делает конструкция class User {... }:

// Создаёт функцию с именем User, которая становится результатом объявления класса.Код функции берётся из метода constructor(она будет пустой, если такого метода нет).
// Сохраняет все методы, такие как sayHi, в User.prototype.
// При вызове метода объекта new User он будет взят из прототипа, как описано в главе F.prototype.Таким образом, объекты new User имеют доступ к методам класса.

console.log('ClassUser === ClassUser.prototype.constructor', 
  ClassUser === ClassUser.prototype.constructor) // true

// Методы находятся в User.prototype, например:
console.log('ClassUser.prototype.sayHi', ClassUser.prototype.sayHi) // sayHi() { alert(this.name); }

console.log('Object.getOwnPropertyNames(ClassUser.prototype)',
  Object.getOwnPropertyNames(ClassUser.prototype)) // constructor, sayHi

// Не просто синтаксический сахар
// Иногда говорят, что class – это просто «синтаксический сахар» в JavaScript(синтаксис для улучшения читаемости кода, но не делающий ничего принципиально нового), потому что мы можем сделать всё то же самое без конструкции class:

// перепишем класс User на чистых функциях

// 1. Создаём функцию constructor
const FunctionUser = (function (this:any,name:string) {
  this.name = name
}) as any
// каждый прототип функции имеет свойство constructor по умолчанию,
// поэтому нам нет необходимости его создавать

// 2. Добавляем метод в прототип
FunctionUser.prototype.sayHi = function () {
  console.log(this.name)
}

// Использование:
user = new FunctionUser("Иван")
user.sayHi()
// Результат этого кода очень похож.Поэтому, действительно, есть причины, по которым class можно считать синтаксическим сахаром для определения конструктора вместе с методами прототипа.

// Однако есть важные отличия:

// Во - первых, функция, созданная с помощью class, помечена специальным внутренним свойством[[IsClassConstructor]]: true.Поэтому это не совсем то же самое, что создавать её вручную.

// В отличие от обычных функций, конструктор класса не может быть вызван без new:

class User2 {
  constructor() { }
}

console.log(typeof User2); // function \
//User(); // Error: Class constructor User cannot be invoked without 'new'
// Кроме того, строковое представление конструктора класса в большинстве движков JavaScript начинается с «class …»

// Методы класса являются неперечислимыми.Определение класса устанавливает флаг enumerable в false для всех методов в "prototype".

// И это хорошо, так как если мы проходимся циклом for..in по объекту, то обычно мы не хотим при этом получать методы класса.

// Классы всегда используют use strict.Весь код внутри класса автоматически находится в строгом режиме.

// Также в дополнение к основной, описанной выше, функциональности, синтаксис class даёт ряд других интересных возможностей, с которыми мы познакомимся чуть позже.


