const buttons = document.querySelectorAll('.donate-btn');

document.querySelectorAll('.label').forEach(function(el){
    el.addEventListener('click', function() {
        if(this.getAttribute('for') === 'yearly'){
            for (var i = 0; i < buttons.length; i++) {
                buttons[i].classList.remove('monthly', 'once');
                buttons[i].classList.add('yearly');
            }
        } else if(this.getAttribute('for') === 'once'){
            for (var i = 0; i < buttons.length; i++) {
                buttons[i].classList.remove('monthly', 'yearly');
                buttons[i].classList.add('once');
            }
        } else if(this.getAttribute('for') === 'monthly') {
            for (var i = 0; i < buttons.length; i++) {
                buttons[i].classList.remove('once', 'yearly');
                buttons[i].classList.add('monthly');
            }
        }
    });
});
