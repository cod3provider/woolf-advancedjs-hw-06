/*
  Вам потрібно реалізувати інтерфейс KeyValuePair, який описує пару ключ-значення. 
  Використовуйте generics, щоб цей інтерфейс міг працювати з будь-якими типами ключів та значень.
*/

interface KeyValuePair<T, U> {
  key: T;
  value: U;
}

const Pair1: KeyValuePair<string, number> = {key: "firstPair", value: 123}
const Pair2: KeyValuePair<string, boolean> = {key: "secondPair", value: true}

export {};
