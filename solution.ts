const formatValue = (value: string | number | boolean): string | number | boolean => {
    if (typeof value === 'string') {
        return value.toUpperCase()
    } else if (typeof value === 'number') {
        return value * 10
    } else if (typeof value === 'boolean') {
        return value === true ? false : true
    }
    return value
}



const getLength = (value: string | number[] | string[]): number => {

    if (typeof value === 'string') {
        return value.length
    } else if (Array.isArray(value)) {
        return value.length
    }
    return value

}



class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
    getDetails() {
        return `'Name: ${this.name}, Age: ${this.age}'`
    }
}



type TBooks = {
    title: string;
    rating: number
}

const filterByRating = (arr: TBooks[]): TBooks[] => {
    return arr.filter(book => {
        if (book.rating > 5) {
            return
        }
        return book.rating >= 4
    })
}



type Users = {
    id: number;
    name: string;
    email: string;
    isActive: boolean
}


const filterActiveUsers = (users: Users[]): Users[] => {
    let activeUser: Users[] = []
    for (let i = 0; i < users.length; i++) {
        const element = users[i];
        if (element.isActive === true) {
            activeUser[activeUser.length] = element
        }

    }
    return activeUser
}




interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}

const printBookDetails = (books: Book) => {
    const { title, author, publishedYear, isAvailable } = books
    return `Title: ${title}, Author: ${author}, Published: ${publishedYear}, Available: ${isAvailable ? 'Yes' : 'No'}`
}



const getUniqueValues = (arr1: number[] | string[], arr2: number[] | string[]): number[] => {

    let mergedArray: number[] = []

    for (let i = 0; i < arr1.length; i++) {
        const element = arr1[i];
        mergedArray[mergedArray.length] = Number(element)
    }
    for (let i = 0; i < arr2.length; i++) {
        const element = arr2[i];
        mergedArray[mergedArray.length] = Number(element)
    }


    let newArray: number[] = []

    for (let index = 0; index < mergedArray.length; index++) {
        const indexItem = mergedArray[index];
        let matched = false
        for (let i = 0; i < newArray.length; i++) {
            const element = newArray[i];
            if (indexItem === element) {
                matched = true
            }
        }
        if (matched === false) {
            newArray[newArray.length] = indexItem
        }
    }

    return newArray
}



type TPrice = {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
};

const calculateTotalPrice = (products: TPrice[]): number => {
    if (products.length) {
        return products.reduce((total, product) => {
            const discountedAmount = (product.price * product.quantity * (product.discount ?? 0)) / 100;
            const totalPrice = product.price * product.quantity - discountedAmount;
            return total + totalPrice;
        }, 0);
    }
    return 0
};