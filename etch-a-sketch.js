const container = document.querySelector("#container");
const divGrid = document.createElement('div');
divGrid.classList.add('divGrid');
const fragment = new DocumentFragment();

for (let i=0; i < 16; i++) {
    fragment.appendChild(divGrid.cloneNode(true));
    container.addEventListener('mouseover',
    e => e.target.classList.add('my-color-class')
    )
}



container.appendChild(fragment);

function addBoxes() {
    let number = prompt("Choose a number between 1 and 100", "");
    if (number > 0 && number < 101) {
        container.innerHTML = '';
        for (let i=0; i < (number * number); i++) {
            fragment.appendChild(divGrid.cloneNode(true));
            container.addEventListener('mouseover',
            e => e.target.classList.add('my-color-class')
            )
        }
        container.appendChild(fragment);

        const divBlock = document.querySelectorAll('.divGrid');
        divBlock.forEach(box => {
        box.style.height = `${(40/number)}rem`;
        box.style.width = `${(40/number)}rem`;
})

        for (i = 0; i < divBlock.length; i++) {
            divBlock[i].style.color = red;
            divBlock[i].style.height = (40/number);
        }
     } else {
        alert('Invalid entry, please try again!');
    }
}

// const btn = document.querySelector('#size-o-meter');

// btn.addEventListener('click',
// e => prompt('how many boxes?'));