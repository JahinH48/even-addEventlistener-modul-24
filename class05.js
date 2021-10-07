document.getElementById('post-commend').addEventListener('click', function () {
    // console.log('jisan');
    const commend = document.getElementById('new-commend');

    // const UserComment = commend.value;

    const p = document.createElement('p');
    p.innerText = commend.value;

    const commendContainer = document.getElementById('commend-container');

    commendContainer.appendChild(p);

    commend.value = ' ';

})