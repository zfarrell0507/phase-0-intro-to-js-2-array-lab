const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(`${name}`)
}

function destructivelyPrependCat(name) {
    cats.unshift(`${name}`)
}

function destructivelyRemoveLastCat(name) {
    cats.pop(`${name}`)
}

function destructivelyRemoveFirstCat(name) {
    cats.shift(`${name}`)
}

function appendCat(name) {
    const appendCat = [...cats, `${name}`];
    return appendCat;
}

function prependCat(name) {
    const prependCat = [`${name}`, ...cats];
    return prependCat;
}

function removeLastCat() {
    const removeLastCat = cats.slice(0, -1);
    return removeLastCat;
}

function removeFirstCat() {
    const removeFirstCat = cats.slice(1);
    return removeFirstCat;
} 


