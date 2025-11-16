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

//--------------------------------------------------Problem 4 --------------------------------------------

type Books = {
    title : string;
    rating : number
}

const filterByRating = (arr : Books[]) : Books[] => {
    return arr.filter(book => book.rating >= 4)
}






// -------------------------------- problem 5 --------------------------------------------------
