const buttons = document.querySelectorAll('.donate-btn');

//this is for beautiful switching between subscriptions

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

// Fondy API
//
//

buttons.forEach(function(el){
    el.addEventListener('click', function(e) {
        e.preventDefault();
        const amount = this.getAttribute('value');
        var today = new Date();
        today.toISOString().substring(0, 10);
        var button = $ipsp.get('button');
        button.setMerchantId(1445591);
        button.setAmount(amount, 'UAH');
        button.setResponseUrl('https://www.ed-era.com/');
        button.setProtocol("https");
        button.setHost('api.fondy.eu');

        button.addField({
            label: 'Пожертва',
            name: 'Пожертва',
            value: amount
        });
        button.addField({
            label: 'ФИО',
            name: 'fio',
            required: true
        });
        button.addParam("order_desc","Донат");
        if(this.classList.contains('monthly')){
            button.setRecurringState(true);
            button.addRecurringData({
                start_time: today,
                end_time: '',
                amount: amount,
                period: 'month',
                every: 1
            });
        } else if(this.classList.contains('yearly')) {
            button.setRecurringState(true);
            button.addRecurringData({
                start_time: today,
                end_time: '',
                amount: amount,
                period: 'month',
                every: 12
            });
        }
        var url = button.getUrl();
        window.location.href = url;
    });
});

function createOrder(amount, order_desc) {
    var button = $ipsp.get('button');
    button.setMerchantId(1445591);
    button.setAmount(amount, 'UAH');
    button.setResponseUrl('https://www.ed-era.com/');
    button.setProtocol("https");
    button.setHost('api.fondy.eu');
    button.addField({
        label: 'Пожертва',
        name: 'Пожертва',
        value: order_desc
    });
    button.addField({
        label: 'ФИО',
        name: 'fio',
        required: true
    });
    return button.getUrl();
}

function monthlySubscribe(amount, order_desc){
    var button = $ipsp.get('button');
    button.setMerchantId(1396424);
    button.setAmount('200', 'USD', true);
    button.setHost('api.fondy.eu');
    button.setRecurringState(true);
    button.addRecurringData({
        start_time: '2016-10-09',
        end_time: '2018-12-09',
        amount: 200,
        period: 'month',
        every: 1
    });
}





















