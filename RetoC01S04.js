const isKayoSick = false;

const onMyBirthday = (isKayoSick) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(!isKayoSick) {
                resolve(3);
            } else {
                reject(new Error("I am sad"));
            }
        },2000);
    });
};

onMyBirthday(isKayoSick)
    .then(result => console.log(`I have ${result} cakes`))
    .catch(err => console.log(err.message))
    .finally(() => console.log("Party"));