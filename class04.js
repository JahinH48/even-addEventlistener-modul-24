

function AddBlog() {

    const jisan = document.getElementById('Blog-id');
    // console.log(jisan);

    jisan.innerText = 'Create a beautiful blog that fits your style. Choose from a selection of easy-to-use templates – all with flexible layouts and hundreds of background images – or design something new.';
}

document.getElementById('blog2').addEventListener('click', function () {
    const k = document.getElementById('Blog-ide');

    k.innerText = 'all with flexible layouts and hundreds of background images – or design something new';

})

document.getElementById('update-data').addEventListener('click', function () {
    const UpdateInpute = document.getElementById('text-name-update');

    const k = document.getElementById('Blog-ide');

    k.innerText = UpdateInpute.value;
    UpdateInpute.value = ' ';

})