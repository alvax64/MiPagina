const $btn = document.getElementById('comprar');
const $modal = document.getElementById('modal');
const $close = document.getElementById('close');
const $input = document.getElementById('input');


// cuando preciones la tecla ctrol + u abre el modal
document.addEventListener('keyup', (e) => {
    if (e.key === 'p' && e.shiftKey) {
        $modal.classList.remove('hidden');
    }
});


// $close.addEventListener('click', () => {
//     $modal.classList.add('hidden');
// });


// $btn.addEventListener('click', () => {
//     $modal.classList.remove('hidden');
//     $input.focus();

//     const value = $input.value;

//     // enter key
//     $input.addEventListener('keyup', (e) => {
//         if (e.keyCode === 13) {
//             $modal.classList.add('hidden');
//             $input.value = '';
//             $btn.textContent = value;
//         }
//     });



// });

// 0 = false
// se llama falsy values
// pantalla de aparecer 0
// [] == []
// [] == ![]
// typeof([])
// typeof(![])

// var arr = [1, 2, 3, 4, 5];
// var arr2 = [1, 2, 3, 4, 5];
// arr.length == arr2.length
// arr == arr2