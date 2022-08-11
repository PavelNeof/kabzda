// 1. Функция sum принимает параметром целые положительные
// числа (неопределённое кол-во) и возвращает их сумму (rest).

export function sum(...nums: Array<number>): number {
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    return nums.reduce(
        (acc, el) => acc + el,
        0
    )


}


// 2. Функция getTriangleType принимает три параметра:
// длины сторон треугольника.
// Функция должна возвращать:
//  - "10", если треугольник равносторонний,
//  - "01", если треугольник равнобедренный,
//  - "11", если треугольник обычный,
//  - "00", если такого треугольника не существует.

export function getTriangleType(a: number, b: number, c: number) {
    if (a === b && a === c) {
        return "10"
    }
    if (a + b < c || a + c < b || b + c < a) {
        return "00"
    } else {
        if ((a === b && a !== c) || (a === c && a !== b) || (b === c && b !== a)) {
            return "01"
        }
        if (a + b > c || a + c > b || b + c > a) {
            return "11"
        }
    }
}


// 3. Функция getSum принимает параметром целое число и возвращает
// сумму цифр этого числа

export function getSum(number: number): number {
    //...здесь пишем код.


    let arr = number.toString().split('');
    let initArr = []
    for (let i = 0; i < arr.length; i++) {
        initArr.push(+arr[i])
    }
    return initArr.reduce((acc, el) => acc + el, 0)

}


// 4. Функция isEvenIndexSumGreater принимает  параметром массив чисел.
// Если сумма чисел с чётными ИНДЕКСАМИ!!! (0 как чётный индекс) больше
// суммы чисел с нечётными ИНДЕКСАМИ!!!, то функция возвращает true.
// В противном случае - false.

export const isEvenIndexSumGreater = (arr: Array<number>) => {
    let chetn = 0;
    let nechetn = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            chetn += arr[i]
        } else {
            nechetn += arr[i]
        }
        return (chetn > nechetn)
    }
}

// 5. Функция getSquarePositiveIntegers принимает параметром массив чисел и возвращает новый массив. 
// Новый массив состоит из квадратов целых положительных чисел, котрые являются элементами исходгого массива.
// Исходный массив не мутирует.


export function getSquarePositiveIntegers(array: Array<number>): Array<number> {
    let newArr = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0 && Number.isInteger(array[i])) {
            newArr.push(array[i])
        }
    }
    return newArr.map(el => el ** 2)
}

// 6. Функция принимает параметром целое не отрицательное число N и возвращает сумму всех чисел от 0 до N включительно
// Попробуйте реализовать функцию без использования перебирающих методов.

export function sumFirstNumbers(N: number): number {
    return (N * (N + 1)) / 2
}
// ...и "лапку" вверх!!!!



// Д.З.:
// 7. Функция-банкомат принимает параметром целое натуральное число (сумму).
// Возвращает массив с наименьшим количеством купюр, которыми можно выдать эту
// сумму. Доступны банкноты следующих номиналов:
// const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1].
// Считаем, что количество банкнот каждого номинала не ограничено

export function getBanknoteList(amountOfMoney: number): Array<number> {
    let arr = []
    if (amountOfMoney - 1000 >= 0)
        do {
            amountOfMoney = amountOfMoney - 1000
            arr.push(1000)
        }
        while (amountOfMoney - 1000 > 0)

    if (amountOfMoney - 500 >= 0)
        do {
            amountOfMoney = amountOfMoney - 500
            arr.push(500)
        }
        while (amountOfMoney - 500 > 0)

    if (amountOfMoney - 100 >= 0)
        do {
            amountOfMoney = amountOfMoney - 100
            arr.push(100)
        }
        while (amountOfMoney - 100 > 0)

    if (amountOfMoney - 50 >= 0)
        do {
            amountOfMoney = amountOfMoney - 50
            arr.push(50)
        }
        while (amountOfMoney - 50 > 0)

    if (amountOfMoney - 20 >= 0)
        do {
            amountOfMoney = amountOfMoney - 20
            arr.push(20)
        }
        while (amountOfMoney - 20 > 0)

    if (amountOfMoney - 10 >= 0)
        do {
            amountOfMoney = amountOfMoney - 10
            arr.push(10)
        }
        while (amountOfMoney - 10 > 0)

    if (amountOfMoney - 5 >= 0)
        do {
            amountOfMoney = amountOfMoney - 5
            arr.push(5)
        }
        while (amountOfMoney - 5 >= 0)

    if (amountOfMoney - 2 >= 0)
        do {
            amountOfMoney = amountOfMoney - 2
            arr.push(2)
        }
        while (amountOfMoney - 2 > 0)

    if (amountOfMoney - 1 > 0)
        do {
            amountOfMoney = amountOfMoney - 1
            arr.push(1)
        }
        while (amountOfMoney - 1 > 0)

    else {
        arr.push(1)
    }
    return arr
}