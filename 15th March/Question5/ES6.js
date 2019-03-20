const pie = 3.14159

let circle = () =>
{
    let radius = 3;
    return pie * radius * radius;
}

let rectangle = () =>
{
    let length = 5;
    let breadth = 6;
    return length * breadth;
}

let cylinder = () =>
{
    let radius = 5;
    let height = 7;
    return 2 * pie * radius * (height + radius);
}

document.getElementById("circle").innerHTML = "Area of circle = " + circle();
document.getElementById("rectangle").innerHTML = "Area of rectangle = " + rectangle();
document.getElementById("cylinder").innerHTML = "Area of cylinder = " + cylinder();