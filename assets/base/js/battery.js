
/*let btn5 = document.getElementById('btn5');

let btn50 = document.getElementById('btn50');

let btn100 = document.getElementById('btn100');





btn5.addEventListener('click', function() {

	progress.style.height + '2px'

});



btn50.addEventListener('click', function() {

  progress.style.height - '2px'

});
*/


/*btn100.addEventListener('click', function() {

  progress.style.height = '132px'

});
*/



let progress = document.getElementById('progress');

progress.style.backgroundColor = '#41dc9a';


function increaseHeight() {

    let height = progress.offsetHeight;

    let newHeight = height + 2;

    progress.style.height = newHeight + 'px';

    /*console.log(progress.style.height);
  */

}

/*
function changeHeight() {

	console.log(progress.style.height);

	if (progress.style.height >= '30px') {

		console.log("deu certo!")
	}

	 else if (progress.style.height <= '80px') {

		progress.style.backgroundColor = 'yellow';

		console.log('amarelo');

	} else if (progress.style.height <= '130px') {

		progress.style.backgroundColor = 'red';

		console.log('vermelho');

	}
}
*/