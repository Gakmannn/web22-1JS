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

type User = {
  age: number,
  name: string
}

user = {} as any // синтаксис "литерал объекта"
console.log({...user})
user.age = 18
console.log({...user})
user.name = 'Vasya'
console.log({...user})
user.height = 180


console.log(user.age)
console.log({...user})

const user1 = {
  age: 18,
  name: 'Vasya',
  height: 180,
  'master pass': '[admin}',
} as any

for (let key in user1) {
  console.log(key, user1[key])
}

user1.age = 20
console.log(user1['age'])
let key = 'master pass'
console.log(user1[key])
delete user1['master pass']
console.log(user1)

let name = '123'
let age = 20

const user3 = {
  name, 
  age,
}
console.log(user3)

// оператор «in» позволяет проверить, существует ли ключ в объекте
console.log('age' in user3)
console.log('tall' in user3)
