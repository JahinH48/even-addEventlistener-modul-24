function makeRed() {
    document.body.style.backgroundColor = 'red';

}

const Jisan = document.getElementById('Button-Blue');
Jisan.onclick = makeBlue;

function makeBlue() {
    document.body.style.backgroundColor = 'blue';

}


const jahin = document.getElementById('Button-Green');

console.log(jahin);

jahin.onclick = function () {
    document.body.style.backgroundColor = 'green';
}


// handle by using add ebentlisenter 


const AddColor = document.getElementById('Button-GoldenRod');
AddColor.addEventListener('click', makeGolden);

function makeGolden() {
    document.body.style.backgroundColor = 'goldenrod';
}


// Add event lisner 

const AddHot = document.getElementById('Button-Hotpink');
AddHot.addEventListener('click', function () {
    document.body.style.backgroundColor = 'hotpink';
});


// ak line a 

document.getElementById('Button-LightBlue').addEventListener('click', function () {

    document.body.style.backgroundColor = 'lightblue';
})

