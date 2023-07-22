document.addEventListener('DOMContentLoaded', () => {
    //set initial count
    let count = 0


    //select value and buttons
    const value = document.querySelector('#value');
    const btns = document.querySelectorAll('.btn')
    const prize = document.querySelector(".prize")

    btns.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            const styles = (e.currentTarget.classList);

            if (styles.contains('decrease')) {
                count--;
            } else if (styles.contains('increase')) {
                count++;
            } else if (styles.contains('random')) {
                count = Math.floor(Math.random() * 999);
            }
            else (styles.contains('reset'))
            value.textContent = 0;

            value.textContent = count;


            if (count === 5) {
                prize.textContent = "You get a prize!!!"
            } else {
                prize.textContent = 'Guess the number and win a prize'
            }
        })
    });



});
