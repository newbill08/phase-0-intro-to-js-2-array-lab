const cats = ["Milo", "Otis", "Garfield"]


function beforeEach() {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
    return cats;
};

function destructivelyAppendCat(){
    cats.push("Ralph");
    return cats;
};

function destructivelyPrependCat(){
    cats.unshift("Bob");
    return cats;
}

function destructivelyRemoveLastCat(){
    cats.pop();
    return cats;
}

function destructivelyRemoveFirstCat(){
    cats.shift();
    return cats;
}

 function appendCat(name){
    const newArray = [...cats, name]
    
    return newArray;
}
 
function prependCat(name){
    const newArray = [name, ...cats]
    
    return newArray;
}

function removeLastCat(){
    const newArray = [...cats]
    newArray.splice(2,2)
    return newArray;
}

function removeFirstCat(){
    const newArray = [...cats]
    newArray.splice(0,1)
    return newArray;
}


beforeEach();
destructivelyAppendCat();
beforeEach();
console.log(cats);
destructivelyPrependCat();
console.log(cats);
beforeEach();
destructivelyRemoveLastCat();
beforeEach();
destructivelyRemoveFirstCat();
beforeEach();
appendCat('Broom')
beforeEach();
prependCat("Arnold")
beforeEach();
removeLastCat()
beforeEach();
removeFirstCat();
