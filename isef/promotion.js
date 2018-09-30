(function () {
    "use strict";

    var modalBodyHTML, modalFooterHTML, liqPayButtonHTML, modal;

    /**
     * Validates code
     * @param {String} code
     * @returns {Promise}
     */
    function validateCode(code, email, name) {
        return sendCodeRequest(code, email, name);
    }

    /**
     * Validates email
     *
     * @param email
     * @returns {*|boolean}
     */
    function validateEmail(email) {
        return _.isString(email) && email.length > 0 && email.indexOf("@") > 0;
    }
    /**
     * Validates name
     *
     * @param name
     * @returns {*|boolean}
     */
    function validateName(name) {
        return _.isString(name) && name.length > 0;
    }
    /**
     * Sends request with the code
     * @param {string} code
     * @returns {Promise}
     */
    function sendCodeRequest(code, email, name) {
        return $.ajax("/api/voucher/" + code + "/redeem", {
            method: "PUT",
            dataType: "json",
            contentType: "application/json",
            data: JSON.stringify({
                email: email,
                name: name
            })
        });
    }

    /**
     * Send an email with message
     * @param message
     * @returns {Promise}
     */
    function sendEmail(message) {
        return $.ajax({
            method: "POST",
            url: "/api2/send_email.php",
            data: {
                message: message
            }
        })
    }
    /**
     * What will happen on successful code submit
     * @param {Object} codeJSON
     */
    function successfulCodeSubmit(codeJSON, email) {
        $(".alert-success").removeClass("hidden").text("Ваш код було підтверджено! Очікуйте на емейл!");
        $(".content .insert-code").addClass("hidden");
    }

    /**
     * Accordingly to the order of the quarter enables or disables the respective waves
     * @param order
     */
    function enableOrDisableWaveOptions(order) {
        $("#wave option").prop("disabled", false);

        switch(order) {
            case 1:
                break;
            case 2:
                $("#wave option[value=1]").prop("disabled", true);
                break;
            case 3:
                $("#wave option[value=1]").prop("disabled", true);
                $("#wave option[value=2]").prop("disabled", true);
                break;
            default:
                $("#wave option[value=1]").prop("disabled", true);
                $("#wave option[value=2]").prop("disabled", true);
                $("#wave option[value=3]").prop("disabled", true);
                break;
        }
        if ($("#wave option:selected").is(":disabled")) {
            $("#wave option:not(:disabled)").first().prop("selected", true);
        }
    }

    /**
     * Handler on change subject button
     */
    //$("#subject").change(function () {
    //    var order;
    //
    //    order = $("#subject option:selected").data("order");
    //    enableOrDisableWaveOptions(order);
    //});

    /**
     * Handler on submit code
     */
    $(".submit-code").click(function (ev) {
        var code, email, name, result;

        ev.preventDefault();
        ev.stopPropagation();
        code = $("#code").val();
        email = $("#email").val();
        name = $("#name").val();
        result = validateName(name);
        if (result === false) {
            $("#name").parents(".form-group").addClass("has-error");
            return;
        }
        result = validateEmail(email);
        if (result === false) {
            $("#email").parents(".form-group").addClass("has-error");
            return;
        }
        result = validateCode(code, email, name);

        result.success(function (codeJSON) {
            successfulCodeSubmit(codeJSON, email);
        }).error(function () {
            $("#code").parents(".form-group").addClass("has-error");
        });
    });

    /**
     * Handler on subscribe button
     */
    $(".subscribe").click(function (ev) {
        var studentName, courseName, wave, waveText, liqPayBtn, code;

        ev.preventDefault();
        ev.stopPropagation();
        studentName = $("#name").val();
        courseName = $("#subject option:selected").val() + " - " + $("#subject option:selected").text();
        wave = $("#wave").val();
        waveText = $("#wave option:selected").text();
        code = $("#voucherCode").html();

        if (studentName.length === 0) {
            $("#name").parents(".form-group").addClass("has-error");
            return;
        } else {
            $("#name").parents(".form-group").removeClass("has-error");
        }

        // WINNER
        if ($("#voucherCode").data("winner")) {
            sendEmail("student:" + studentName + " ;course:" + courseName + " ;code:" + code)
                .success(function () {
                $(".content").html("<p class=\"registration-success bg-success\">Реєстрація виграшного коду ваучеру пройшла успішно! " +
                    "Очікуйте лист на вашу електронну адресу з підтвердженням реєстрації на обраний курс. <br/><br/><strong>Увага!</strong> Цей процесс може зайняти від 1 до 10 годин.</p>");
            });
            return;
        }

        if (modal === undefined) {
            modal = $("#paymentModal").modal({show: false});
        }

        $("#paymentModal .modal-body").html(modalBodyHTML({
            studentName: studentName,
            courseName: courseName,
            waveText: waveText,
            code: code
        }));

        liqPayBtn = liqPayButtonHTML({
            courseName: courseName,
            studentName: studentName,
            wave: wave,
            code: code
        });
        $("#paymentModal .modal-footer").html(modalFooterHTML({liqPayBtn: liqPayBtn}));
        modal.modal("show");
    });

    modalBodyHTML = _.template("<div>" +
        "<div class=\"container-fluid\">" +
        "<label class=\"col-md-3\">Код Ваучеру</label>" +
        "<span class=\"col-md-9\"><%=code%></span>" +
        "</div>" +
        "<div class=\"container-fluid\">" +
        "<label class=\"col-md-3\">Ваше Ім’я</label>" +
        "<span class=\"col-md-9\"><%=studentName%></span>" +
        "</div>" +
        "<div class=\"container-fluid\">" +
        "<label class=\"col-md-3\">Курс</label>" +
        "<span class=\"col-md-9\"><%=courseName%></span>" +
        "</div>" +
        "<div class=\"container-fluid\">" +
        "<label class=\"col-md-3\">Хвиля</label>" +
        "<span class=\"col-md-9\"><%=waveText%></span>" +
        "</div>" +
        "</div>");

    modalFooterHTML = _.template("<button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Закрити</button><%=liqPayBtn%>");

    liqPayButtonHTML = _.template(
            '<form class="liqPayForm" method="POST" accept-charset="utf-8"  target="_blank" action="https://www.liqpay.com/api/pay">'  +
            '<input type="hidden" name="public_key" value="i36499461501" />'                                    +
            '<input type="hidden" name="amount" value="200" />'                                                 +
            '<input type="hidden" name="currency" value="UAH" />'                                               +
            '<input type="hidden" name="description" value="Ваучер:<%=code%>; <%=courseName%> <%=studentName%> хвиля: <%=wave%>" />' +
            '<input type="hidden" name="type" value="buy" />'                                                   +
            '<input type="hidden" name="pay_way" value="card,delayed" />'                                       +
            '<input type="hidden" name="language" value="ru" />'                                                +
            '<button style="white-space: normal;" name="btn_text" class="btn btn-primary pay-now">Оплатити зараз!</button>'                                                                                         +
            '</form>'
    );

}());