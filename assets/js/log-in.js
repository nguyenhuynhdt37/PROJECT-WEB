


var Validator = function (selector) {
    var _this = this;
    var formrules = {};
    /**
     * nếu không có lỗi thì return   `undifine`
     * nếu có lỗi thì trả về 'error message'
     */
    var ValidatoRules = {
        required: function (value) {
            return value ? undefined : 'Vui lòng nhập trường này';
        },
        email: function (value) {
            var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            return emailPattern.test(value) ? undefined : 'Vui lòng nhập đúng định dạng';
        },
        min: function (min) {
            return function (value) {
                return value.length >= min ? undefined : `Vui lòng nhập tối thiểu ${min} ký tự`;
            }
        },
        max: function (max) {
            return function (value) {
                return value.length <= max ? undefined : `Vui lòng nhập tối đa ${max} ký tự`;
            }
        },
        checkpass: function (password) {
            return function (value) {
                return value === password ? undefined : `Vui lòng nhập tối đa ${value} ký tự`;
            }
        },

    };
    function getParentNode(element, select) {
        while (element.parentNode) {
            if (element.parentNode.matches(select)) {
                return element.parentNode;
            }
            element = element.parentNode;
        }
    }

    // lấy ra  Formelement trong DOM 
    var FormElement = document.querySelector(selector);
    // nếu tồn tại formElement thì chạy tiếp
    if (FormElement) {
        // lấy ra tất cả các thẻ input trong Formelement khi trong input có thẻ element 
        var inputs = FormElement.querySelectorAll('[name][rules]');
        for (var input of inputs) {


            var rules = input.getAttribute('rules').split('|');
            for (var rule of rules) {
                var ruleInfo;
                var isRuhasValue = rule.includes(':');
                if (isRuhasValue) {
                    ruleInfo = rule.split(':');
                    rule = ruleInfo[0];

                }

                var ruleFunc = ValidatoRules[rule];
                console.log(rule);
                if (ruleInfo) {
                    ruleFunc = ruleFunc(ruleInfo[1]);
                }
                if (Array.isArray(formrules[input.name])) {
                    formrules[input.name].push(ruleFunc);
                } else {
                    formrules[input.name] = [ruleFunc];
                }
            }

        }
        console.log(formrules)
        // lặp qua các input
        Array.from(inputs).forEach(input => {

            // lắng nghe sự kiện để validate (blur , onchange, ......)
            input.onblur = handleValidate;
            //hàm thực hiện validate
            function handleValidate(event) {
                var rules = formrules[event.target.name];
                console.log(rules);
                for (let i = 0; i < rules.length; i++) {
                    if (rules[i] !== undefined) {
                        var errorMessage = rules[i](event.target.value);
                        console.log(errorMessage)
                        if (errorMessage) {
                            break;
                        }
                    }
                }
                /// nếu có lỗi thì hiển thị message lỗi
                if (errorMessage) {
                    getParentNode(input, '.form-outline').classList.add('invalid')
                    var form_Message = getParentNode(input, '.form-outline').querySelector('.form-message');
                    form_Message.innerText = errorMessage;
                }
            }

            input.oninput = e => {
                if (e.target.value) {
                    getParentNode(input, '.form-outline').classList.remove('invalid');
                    var form_Message = getParentNode(input, '.form-outline').querySelector('.form-message');

                    form_Message.innerText = "";
                }
            }
        })

        // xử lý hành vì submit form

        FormElement.onsubmit = (e => {
            var check = true;
            e.preventDefault();
            var inputs = FormElement.querySelectorAll('[name][rules]');
            console.log(inputs);
            for (let input of inputs) {
                rules = formrules[input.name];
                console.log(rules);
                for (var rule of rules) {
                    var errorMessage = rule(input.value);
                    if (errorMessage) {
                        check = false;
                        break;
                    }
                }
                if (errorMessage) {
                    getParentNode(input, '.form-outline').classList.add('invalid')
                    var form_Message = getParentNode(input, '.form-outline').querySelector('.form-message');
                    form_Message.innerText = errorMessage;
                }
            }

            // khi koong có lỗi thì submit form
            if (check) {
                if (typeof _this.onsubmit === 'function') {
                    var inputs = FormElement.querySelectorAll('[name][rules]');
                    var vip = Array.from(inputs).reduce((value, input) => {
                        value[input.name] = input.value;
                        return value;
                    }, {})
                    _this.onsubmit(vip);
                } else {
                    FormElement.onsubmit();

                }
            }

        })
    }


}