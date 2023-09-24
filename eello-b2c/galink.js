function makeCopyrightText() {
    const copyrightText = document.getElementById("copyright-text");
    if (copyrightText) {
        copyrightText.innerHTML = `&copy; <strong>eello</strong> ${new Date().getFullYear()}. All rights reserved.`
    }
}

function makePwdToggler(pwd) {
    const div = document.createElement('div');
    div.classList.add('form-check', 'form-switch', 'my-4')

    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    const id = pwd.id + 'toggler';
    checkbox.setAttribute('id', id);
    checkbox.classList.add('form-check-input', 'mr-2')
    div.appendChild(checkbox);

    const label = document.createElement('label');
    label.setAttribute('for', id);
    label.appendChild(document.createTextNode('Show Password'));
    label.classList.add('form-check-label', 'mx-2')
    div.appendChild(label);

    pwd.insertAdjacentElement('afterend', div);

    const toggle = () => {
        pwd.type = pwd.type === 'password' ? 'text' : 'password';
    }
    checkbox.addEventListener('click', toggle)
    checkbox.addEventListener('keydown', toggle)
}

function setupPwdTogglers() {
    var pwdInputs = document.querySelectorAll('input[type=password]');
    for (var i = 0; i < pwdInputs.length; i++) {
        makePwdToggler(pwdInputs[i]);
    }
}

function styleErrorElement(element) {

    const messageElement = (message) => {
        const body = document.createElement('div')
        body.classList.add('message-body')
        body.innerText = message
        return body
    }

    if (element) {
        element.classList.add('alert', 'alert-danger')
        const messageBody = element.querySelector('div')
        if (!messageBody) {
            const errorMessage = element.innerText
            element.replaceChildren(messageElement(errorMessage))
        }
    }
}

function stylePage() {
    const localSignInDiv = document.querySelector('#GALink #api[data-name="Unified"]')
    if (localSignInDiv) {
        localSignInDiv.classList.add('card', 'p-5')
        const intro = localSignInDiv.querySelector('.intro');

        if(intro) {
            intro.remove();
        }
        else {
            console.log("intro not found");
        }

        const form = localSignInDiv.querySelector('form')

        if(form) {
            form.classList.add('is-flex', 'is-flex-direction-column')
            form.childNodes.forEach((e) => {
                if (e.nodeType === Node.ELEMENT_NODE) {
                    e.classList.add('m-2')
                }
            })

            const errorDivs = localSignInDiv.querySelectorAll('.error')
            errorDivs.forEach(errorDiv => {
                styleErrorElement(errorDiv)
            })

            setupPwdTogglers();

            form.querySelector('#signInName').classList.add('form-control', 'my-2')

            form.querySelector('#password').classList.add('form-control', 'my-2')
            //form.querySelector('#forgotPassword').classList.add('btn', 'btn-outline-danger', 'my-4')

            const nextElement = form.querySelector('#next');

            if(nextElement) {
                console.log("found nextElement");
                nextElement.classList.add('btn', 'btn-dark', 'my-5')
            }
            else {
                console.log("nextElement not found ");
            }
        }
        else {
            console.log("form not found");
        }
    }
    makeCopyrightText()
}

function showPage() {
    document.querySelector('body').classList.remove('d-none')
}

function stylePageAndShow() {
    console.log("style page and show");
    stylePage();
    showPage();
}

if (document.readyState === 'loading') {
    if (window.jQuery !== undefined) {
        $(() => { stylePageAndShow(); });
    } else {
        document.addEventListener("DOMContentLoaded", () => {
            stylePageAndShow();
        });
    }
} else {
    stylePageAndShow();
    setTimeout(()=> { stylePageAndShow(); }, 1000);
}