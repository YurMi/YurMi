const input_name = document.getElementById('input_name');
const input_serName = document.getElementById('input_serName');
const input_age = document.getElementById('input_age');
const input_boyFriend = document.getElementById('input_boyFriend');
const input_contactBook = document.getElementById('input_contactBook');
const btn = document.querySelector('.btn');
const popup_gift = document.querySelector('.popup_gift');

function chackForm() {
    let res_name = 0;
    let res_serName = 0;
    let res_age = 0;
    let res_boyFriend = 0;
    let res_contactBook = 0;


    if (input_name.value === 'Лена' || input_name.value === 'Елена' || input_name.value === 'ЛЕНА' || input_name.value === 'ЕЛЕНА') {
        res_name = 1;
    }
    if (input_serName.value === 'Cтужко' || input_serName.value === 'стужко' || input_serName.value === 'СТУЖКО') {
        res_serName = 1;
    }
    if (input_age.value === '28' || input_age.value === 28) {
        res_age = 1;
    }
    if (input_boyFriend.value === 'Юра' || input_boyFriend.value === 'Юрий' || input_boyFriend.value === 'ЮРА') {
        res_boyFriend = 1;
    }
    if (input_contactBook.value === 'Кроха' || input_contactBook.value === 'КРОХА') {
        res_contactBook = 1;
    }

    let result = res_name + res_serName + res_age + res_boyFriend + res_contactBook;

    if (result === 4) {
        btn.disabled = false;
    }
}
chackForm();
/* start popup*/
const start_popup = document.querySelector('.start_popup');
const start_hand = start_popup.querySelector('.hand');


start_hand.addEventListener('click', function () {
    start_popup.classList.add('hidden')
})



btn.addEventListener('click', function (e) {
    e.preventDefault;

    if (btn.disabled === false) {
        e.preventDefault;
        popup_gift.classList.remove('hidden');
    }
})