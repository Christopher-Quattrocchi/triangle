// Make a web page that allows the user to input the lengths of the sides of a triangle, and returns whether these sides form an equilateral, isosceles, or scalene triangle, or if the sides cannot make a triangle at all.

function getSides(event) {
    event.preventDefault();
    const length1 = parseInt(document.querySelector("input#input1").value);
    console.log(length1);
    const length2 = parseInt(document.querySelector("input#input2").value);
    console.log(length2);
    const length3 = parseInt(document.querySelector("input#input3").value);
    console.log(length3);

    let result;

    if (((length1 + length2) <= length3) || ((length1 + length3) <= length2) || ((length2 + length3) <= length1)) {
        result = "Not a triangle";
    } else if (length1 === length2 && length2 === length3) {
        result = "Equilateral";
    } else if (length1 === length2 || length1 === length3 || length2 === length3) {
        result = "Isoceles";
    } else if (length1 != length2 && length1 != length3 && length2 != length3) {
        result = "Scalene"
    }

    document.getElementById("output").innerText = result.toString();
}





window.addEventListener("load", function () {
    const form = document.getElementById("triangle");
    form.addEventListener("submit", getSides);
});

// Equilateral: all sides are equal.
// Isosceles: exactly 2 sides are equal.
// Scalene: no sides are equal.
// NOT a triangle: the sum of the lengths of any two sides of a triangle is less than or equal to the length of the third side.
