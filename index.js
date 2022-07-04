const button = document.querySelector(".list__button");
const input = document.querySelector("#input");
let sendButton = document.querySelector(".sendButton");
let messageBody = document.querySelector('.third');
let newConverseButton = document.querySelector('.convoButton');
let container3 = document.querySelector('.container-3');
let third1 = document.querySelector('.third-1');
let second = document.querySelector('.second');
let third = document.querySelector('.text-container');
let image = document.querySelector('.img');
let section2 = document.querySelector('.section-2');
let img_btn = document.querySelector('.img-btn');


button.addEventListener('click', function () {
    document.querySelector('.list').classList.toggle('hidden');
});


// click and close function on the section-2
image.addEventListener('click', function () {

    section2.classList.toggle('unhide-section-2');

    if (section2.classList.contains('unhide-section-2')) {
        document.querySelector(".img1").src = `https://static.thenounproject.com/png/482160-200.png`;
        
        
    } else {
        document.querySelector(".img1").src = `./images/Sparrow Bird.png`;
       
    }

})

// hide and unhide contents in section two
newConverseButton.addEventListener('click', function () {
    third.classList.add('unhide');
    third1.classList.add('unhide-third-1');
    container3.classList.add('unhide-container-3');
    document.querySelector('.first').children[1].innerHTML = `The team typically replies in a few minutes`;
    second.classList.add('hide-second');

})


// to fetch the API 
var fetchText = async function () {
    let response = await fetch('https://api.adviceslip.com/advice');
    let data = await response.json();
    let r = data.slip.advice;
    return r;
}


let textMsg = async function () {

    if (input.value === '') {
        // let node = [];
    } else {
        // to get the value types in the input field
        let value = input.value;
        let value2 = await fetchText();

        // to create an element and append the content to the element
        let node = document.createElement('h1');
        let textnode = document.createTextNode(`${value}`);
        node.appendChild(textnode);
        messageBody.appendChild(node);
        // to automatically scroll to the newly added/appended element
        node.scrollIntoView();


        // ===================================================
        setTimeout(() => {

            let node2 = document.createElement('h1');
            let textnode2 = document.createTextNode(`${value2}`);
            node2.appendChild(textnode2);
            messageBody.appendChild(node2);
            // to automatically scroll to the newly added/appended element
            node2.scrollIntoView();

            document.querySelector('.third-container').style.display = 'none';

        }, 1500);
        //  ===================================================

       
    }



    // to remove the value from the typing field on clicking the button
    input.value = "";
}


// to send the msg on click
sendButton.addEventListener('click', textMsg);
// to send the msg on pressing Enter key
input.addEventListener('keypress', function (e) {
    if (e.key === "Enter") {
        e.preventDefault;
        sendButton.click();

        // display and remove the animation on pressing enter key
        setTimeout(() => {
            document.querySelector('.third-container').style.display = 'none';
        }, 1500);

    }
     else {
        document.querySelector('.third-container').style.display = 'flex';

    }

});






// var fetch = fetch('https://api.adviceslip.com/advice').then(response => response.json()).then(data => data.slip.advice);