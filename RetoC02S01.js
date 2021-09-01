/*let {name, email} = {
    name: "John",
    email: "john@example.com"
}

console.log(name);
console.log(email);*/

let {name, email, ...rest} = {
    name: "John",
    email: "john@example.com",
    city: "Phoenix",
    state: "AZ",
    country: "USA"
}

console.log(rest)