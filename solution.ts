const formatValue = (value: string | number | boolean) => {
    if (typeof value === 'string') {
        return value.toUpperCase()
    } else if (typeof value === 'number') {
        return value * 10
    } else if (typeof value === 'boolean') {
        return value === true ? false : true
    }
}


const getLength = (value: string | number[]) => {

    if (typeof value === 'string') {
        return value.length
    } else if (Array.isArray(value)) {
        return value.length
    }

}

class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}`
    }
}


type TBooks = {
    title: string;
    rating: number
}

const filterByRating = (arr: TBooks[]): TBooks[] => {
    return arr.filter(book => book.rating >= 4)
}





type Users = {
    id: number;
    name: string;
    email: string;
    isActive: boolean
}


const filterActiveUsers = (users: Users[]): Users[] => {
    return users.filter(user => user.isActive === true)
}





interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}

const printBookDetails = (books: Book) => {
    return `Title: ${books.title}, Author: ${books.author}, Published: ${books.publishedYear}, Available: ${books.isAvailable ? 'Yes' : 'No'}`
}




const getUniqueValues = (arr1: number[], arr2: number[]) => {
    let newArray: number[] = []
    let array1 = arr1
    let array2 = arr2
    arr1.find(num => {
        if (!newArray.includes(num)) {
            newArray.push(num)
        }
    })
    arr2.find(num => {
        if (!newArray.includes(num)) {
            newArray.push(num)
        }
    })
    return newArray
}




type TPrice = {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
};

const calculateTotalPrice = (products: TPrice[]): number => {
    return products.reduce((total, product) => {
        const { price, quantity, discount = 0 } = product;
        const discountAmount = (price * quantity * discount) / 100;
        const finalPrice = price * quantity - discountAmount;
        return total + finalPrice;
    }, 0);
};