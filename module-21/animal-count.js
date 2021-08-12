function animalCount(km) {

    if (km <= 10) {
        const animal = km * 10;
        return animal;
    } else if (km <= 20) {
        const first10kmAnimal = 10 * 10;
        const restKm = km - 10;
        const Second10KmAnimal = restKm * 50;
        const totalAnimal = first10kmAnimal + Second10KmAnimal;
        return totalAnimal;

    } else if (km <= 30) {
        const first10kmAnimal = 10 * 10;
        const Second10KmAnimal = 10 * 50;
        const restKm = km - 20;
        const third10KmAnimal = restKm * 100;
        const totalAnimal = first10kmAnimal + Second10KmAnimal + third10KmAnimal;
        return totalAnimal;


    } else {
        const first10kmAnimal = 10 * 10;
        const Second10KmAnimal = 10 * 50;
        const third10KmAnimal = 10 * 100;
        const restKm = km - 30;
        const restKmAnimal = restKm * 100;
        const totalAnimal = first10kmAnimal + Second10KmAnimal + third10KmAnimal + restKmAnimal;
        return totalAnimal;
    }

}



const result = animalCount(33);
console.log(result);