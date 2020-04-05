const workshop = [...document.querySelectorAll('.workshop')];
const workshopWrap = [...document.querySelectorAll('.list__wrapper')];
const step = [...document.querySelectorAll('.step')];
const tamplate = document.querySelector('body');
const openForm = document.querySelectorAll('.workshop__openform');
const form = document.querySelector('.popup');


if (document.body.clientWidth <= 812) {
    console.log('test');
}

for (let i = 0; i < workshop.length; i++) {
    step[i].addEventListener('click', () => {
        workshop[i].classList.add('active');
        workshopWrap[i].classList.add('active');
    })
    
}

function removeClass () {
    for (let i = 0; i < workshop.length; i++) {
        workshop[i].classList.remove('active');
        workshopWrap[i].classList.remove('active');
    }
    // if (form.classList.contains('active')){
    //     form.classList.remove('active');
    // }
}

function hide (e) {
    if (e.target.classList.contains('close')) {
       removeClass();
    }
}

openForm.forEach(openFormBtn => {
    openFormBtn.addEventListener('click', () => {
        removeClass();
    })
})

tamplate.addEventListener('click', hide);



// $(document).ready(function() {
// 	$('#form').submit(function() {
// 		if (document.form.name.value == '' || document.form.phone.value == '' ) {
// 			valid = false;
// 			return valid;
// 		}
// 		$.ajax({
// 			type: "POST",
// 			url: "mail/mail.php",
// 			data: $(this).serialize()
// 		}).done(function() {
// 			$(this).find('input').val('');
// 			$('#form').trigger('reset');
// 		});
// 		return false;
// 	});
// });