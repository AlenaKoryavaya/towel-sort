module.exports = function towelSort(matrix) {
    if (typeof matrix === "undefined") {
        return [];
    } else {
        let sortedMatrix = [];
        // Сортируем массивы внутри массива
        matrix.forEach((elem, index) => {
            (index + 2) % 2 === 0
                ? sortedMatrix.push(elem)
                : sortedMatrix.push(elem.sort((a, b) => b - a));
        });

        let oneCommanArray = [];
        // Превращаем отсортированный саммив массивов в один массив
        sortedMatrix.forEach((elem) => oneCommanArray.push(...elem));
        return oneCommanArray;
    }
};
