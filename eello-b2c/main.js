function showPage() {
    document.querySelector('body').classList.remove('is-invisible')
    document.querySelector('body').classList.remove('d-none')
}

function makeCopyrightText() {
    const copyrightText = document.getElementById("copyright-text");
    if (copyrightText) {
        const year = new Date().getFullYear();
        copyrightText.innerHTML = `&copy; <strong>eello</strong> ${year}. All rights reserved.`
    }
}

function removeIntoDiv(parentDiv) {
    if(parentDiv) {
        const intro = parentDiv.querySelector('.intro');
        if(intro) { intro.remove(); }
    }
}

function styleRememberMe(form) {
    if (form) {
        let qs;
        qs = form.querySelector('.rememberMe');
        if (qs) { qs.classList.add('my-4'); }
        qs = form.querySelector('#rememberMe');
        if (qs) { qs.classList.add('mr-2'); }
        qs = form.querySelector('label[for=rememberMe]');
        if (qs) { qs.classList.add('mx-2', 'has-text-danger'); }
    }
}

function styleMainDiv(mainDiv) {
    mainDiv.classList.add('card', 'p-5', 'mainDiv');
}

function styleCreateAccount(form) {
    if (form) {

        const createAccountLink = form.querySelector('#createAccount');
        if(createAccountLink) {
            createAccountLink.classList.add('btn', 'btn-dark'/*, 'my-5'*/)
        }

        /*const createAccountSelector = form.querySelector('.create')
        if (createAccountSelector) {
            const createAccountPrompt = createAccountSelector.children[0]
            if (createAccountPrompt) {
                let layoutClass = document.body.clientWidth > 640 ? 'is-flex-direction-row' : 'is-flex-direction-column'
                createAccountPrompt.classList.add('is-flex', layoutClass, 'is-justify-content-center')

                const signUpLink = createAccountPrompt.childNodes[1]

                const promptDiv = document.createElement('div')
                promptDiv.classList.add('mx-2', 'has-text-centered')
                promptDiv.innerText = "Don't have an account?"


                createAccountPrompt.innerHTML = ''
                createAccountPrompt.appendChild(promptDiv)
                if (signUpLink) {
                    createAccountPrompt.appendChild(signUpLink)
                    signUpLink.classList.add('has-text-centered', 'has-text-primary')
                }
            }
        }*/
    }
}

function removeEmailVerificationControlHelp() {
    const prevSibling = document.getElementById('emailVerificationControl');
    const nextEl = prevSibling ? prevSibling.nextElementSibling || prevSibling.nextSibling : undefined;
    if(nextEl) {
        nextEl.parentElement.removeChild(nextEl);
    }
}

function removeEmailAddressIndent() {
    const emailInput = document.getElementById('email')
    if(emailInput) {
        const parentDiv = emailInput.parentElement;
        if(parentDiv) {
            const parentLI = parentDiv.parentElement;
            if(parentLI) {
                const parentUL = parentLI.parentElement;
                if(parentUL) {
                    parentUL.style.paddingLeft = "0px";
                }
            }
        }
    }

}

function modifyActionButton(button, icon, text) {
    if (text === undefined) {
        text = button.innerText
    }

    button.classList.add('button', 'is-flex-grow-1')
    button.classList.add('btn', 'btn-dark')

    const iconSpan = document.createElement('span')
    iconSpan.classList.add('icon', 'mx-1')
    iconSpan.innerHTML = `<i class="${icon}"></i>`

    const textSpan = document.createElement('span')
    textSpan.classList.add('mx-1')
    textSpan.innerText = text

    button.replaceChildren(iconSpan, textSpan)
}

function styleErrorElement(element) {
    if(element) {
        element.classList.add('errorStyle');
    }
/*
    const messageElement = (message) => {
        const body = document.createElement('div')
        body.classList.add('message-body')
        body.innerText = message
        return body
    }

    if (element) {
        element.classList.add('alert', 'alert-danger', 'align-items-center')
        const messageBody = element.querySelector('div')
        if (!messageBody) {
            const errorMessage = element.innerText
            element.replaceChildren(messageElement(errorMessage))
        }
    }
*/    
}

function makePwdToggler(pwd) {
    const  div = document.createElement('div');
    div.classList.add('form-check', 'form-switch', 'my-4')

    const  checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    const  id = pwd.id + 'toggler';
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

function styleSocialSignInPage() {
    const unifiedSelectorDiv = document.querySelector('#SocialSignIn #api[data-name="Unified"]')
    if (unifiedSelectorDiv) {
        styleMainDiv(unifiedSelectorDiv);
        unifiedSelectorDiv.querySelector('.claims-provider-list-buttons > .options')
            .childNodes
            .forEach((e) => {
                if (e.nodeType === Node.ELEMENT_NODE) {
                    e.classList.add('is-flex', 'mb-2', 'px-6', 'mx-7')
                }
            })

        const googleAccountButton = unifiedSelectorDiv.querySelector('.accountButton#GoogleExchange')
        modifyActionButton(googleAccountButton, 'fab fa-google', 'Sign in with Google')

        const amazonAccountButton = unifiedSelectorDiv.querySelector('.accountButton#AmazonExchange')
        modifyActionButton(amazonAccountButton, 'fab fa-amazon', 'Login with Amazon')

        const appleAccountButton = unifiedSelectorDiv.querySelector('.accountButton#AppleExchange')
        modifyActionButton(appleAccountButton, 'fab fa-apple', 'Sign in with Apple')

        const facebookAccountButton = unifiedSelectorDiv.querySelector('.accountButton#FacebookExchange')
        modifyActionButton(facebookAccountButton, 'fab fa-facebook-f', 'Facebook')
    }
}

function styleLinkSocialLoginPage() {
    const localSignInDiv = document.querySelector('#LinkSocialLogins #localAccountForm')
    if (localSignInDiv) {
        styleMainDiv(localSignInDiv);
        localSignInDiv.querySelector('.intro').remove();
        const form = localSignInDiv
        form.classList.add('is-flex', 'is-flex-direction-column')
        form.childNodes.forEach((e) => {
            if (e.nodeType === Node.ELEMENT_NODE) {
                e.classList.add('is-flex-grow-1', 'm-2', 'p-2')
            }
        })

        const errorDivs = localSignInDiv.querySelectorAll('.error')
        errorDivs.forEach(errorDiv => {
            styleErrorElement(errorDiv)
        })

        form.querySelector('label[for=signInName]').classList.add('d-none')
        form.querySelector('#signInName').classList.add('input', 'my-2')
        form.querySelector('label[for=password]').classList.add('d-none')
        form.querySelector('#forgotPassword').classList.add('is-pulled-right', 'button', 'is-inverted', 'is-rounded', 'is-small', 'is-danger', 'my-4', 'forgotPasswordButton')
        form.querySelector('#password').classList.add('input', 'my-2')

        styleRememberMe(form);

        form.querySelectorAll('button').forEach(e => {
            e.classList.add('button', 'is-flex-grow-1', 'is-primary'/*, 'my-5'*/)
        })

        form.querySelector('.divider').classList.add('has-text-centered');

        styleCreateAccount(form);
    }
    const unifiedSelectorDiv = document.querySelector('#LinkSocialLogins #api[data-name="Unified"]')
    if (unifiedSelectorDiv) {
        styleMainDiv(unifiedSelectorDiv);
        unifiedSelectorDiv.querySelector('.claims-provider-list-buttons > .options')
            .childNodes
            .forEach((e) => {
                if (e.nodeType === Node.ELEMENT_NODE) {
                    e.classList.add('is-flex', 'mb-2', 'px-6', 'mx-7')
                }
            })

        const googleAccountButton = unifiedSelectorDiv.querySelector('.accountButton#GoogleExchange')
        modifyActionButton(googleAccountButton, 'fab fa-google', 'Sign in with Google')

        const amazonAccountButton = unifiedSelectorDiv.querySelector('.accountButton#AmazonExchange')
        modifyActionButton(amazonAccountButton, 'fab fa-amazon', 'Login with Amazon')

        const appleAccountButton = unifiedSelectorDiv.querySelector('.accountButton#AppleExchange')
        modifyActionButton(appleAccountButton, 'fab fa-apple', 'Sign in with Apple')

        const facebookAccountButton = unifiedSelectorDiv.querySelector('.accountButton#FacebookExchange')
        modifyActionButton(facebookAccountButton, 'fab fa-facebook-f', 'Facebook')
    }
}

function styleLocalSignInPage() {
    const localSignInDiv = document.querySelector('#LocalSignIn #api[data-name="Unified"]')
    if (localSignInDiv) {
        styleMainDiv(localSignInDiv);
        localSignInDiv.querySelector('.intro').remove();

        const form = localSignInDiv.querySelector('form');
        if(form) {
            form.classList.add('is-flex', 'is-flex-direction-column');
            form.childNodes.forEach((e) => { if (e.nodeType === Node.ELEMENT_NODE) { e.classList.add('m-2'); } });
            form.querySelector('#signInName').classList.add('form-control', 'my-2')
            form.querySelector('#password').classList.add('form-control', 'my-2')
            form.querySelector('#forgotPassword').classList.add('btn', 'btn-outline-danger', 'my-4', 'forgotPasswordButton')
            styleRememberMe(form);
            form.querySelector('#next').classList.add('btn', 'btn-dark'/*, 'my-5'*/)
            form.querySelector('.divider').classList.add('has-text-centered');
            styleCreateAccount(form);
            form.querySelectorAll('input').forEach(e => { e.classList.add('input', 'editField') });
        }

        const errorDivs = localSignInDiv.querySelectorAll('.error');
        errorDivs.forEach(errorDiv => { styleErrorElement(errorDiv); });
        setupPwdTogglers();
    }
}

function styleLocalSignUpPage() {
    const localSignUpDiv = document.querySelector('#LocalSignUp #api[data-name="Unified"]')
    if (localSignUpDiv) {
        styleMainDiv(localSignUpDiv);
        localSignUpDiv.querySelector('.intro').remove();

        removeEmailVerificationControlHelp();
        removeEmailAddressIndent();

        const form = localSignUpDiv.querySelector('form')
        if (form) {
            form.querySelectorAll('input').forEach(e => { e.classList.add('input', 'editField', 'form-control', 'my-2') });
            //form.querySelectorAll('input').forEach(e => { e.classList.add('input', 'editField') });
            form.querySelectorAll('button').forEach(e => e.classList.add('button', 'btn', 'btn-dark'))
            form.querySelectorAll('a').forEach(e => {
                //e.style.textDecoration = "none";
                //e.innerHTML = "help?"
                e.remove();
            })
            form.querySelector('.buttons').classList.add('columns');
            form.querySelectorAll('button').forEach(e => { e.classList.add('column', 'm-5', 'p-3', 'buttonExtraFormat') });
            //form.querySelector('#forgotPassword').classList.add('btn', 'btn-outline-danger', 'my-4', 'forgotPasswordButton')
        }

        const errorDivs = localSignUpDiv.querySelectorAll('#attributeVerification > .error.pageLevel')
        errorDivs.forEach(errorDiv => { styleErrorElement(errorDiv) });
    }
}

function styleGALinkPage() {
    const pageMainDiv = document.querySelector('#GALink #api[data-name="Unified"]')
    if (pageMainDiv) {
        removeIntoDiv(pageMainDiv);

        styleMainDiv(pageMainDiv);

        const form = pageMainDiv.querySelector('form')

        if(form) {
            form.classList.add('is-flex', 'is-flex-direction-column')
            form.childNodes.forEach((e) => {
                if (e.nodeType === Node.ELEMENT_NODE) {
                    e.classList.add('m-2')
                }
            })

            const errorDivs = pageMainDiv.querySelectorAll('.error')
            errorDivs.forEach(errorDiv => {
                styleErrorElement(errorDiv)
            })

            setupPwdTogglers();

            form.querySelector('#signInName').classList.add('form-control', 'my-2')

            form.querySelector('#password').classList.add('form-control', 'my-2')
            //form.querySelector('#forgotPassword').classList.add('btn', 'btn-outline-danger', 'my-4')

            const nextElement = form.querySelector('#next');

            if(nextElement) {
                nextElement.classList.add('btn', 'btn-dark'/*, 'my-5'*/)
            }
        }
    }
}

function styleLocalPasswordResetPage() {
    const pageMainDiv = document.querySelector('#LocalPasswordReset #api[data-name="Unified"]')
    if(pageMainDiv) {
        removeIntoDiv(pageMainDiv);

        styleMainDiv(pageMainDiv);

        const form = pageMainDiv.querySelector('form')

        if(form) {
            form.classList.add('is-flex', 'is-flex-direction-column')
            form.childNodes.forEach((e) => {
                if (e.nodeType === Node.ELEMENT_NODE) {
                    e.classList.add('m-2')
                }
            })

            const errorDivs = pageMainDiv.querySelectorAll('.error')
            errorDivs.forEach(errorDiv => { styleErrorElement(errorDiv) })

            setupPwdTogglers();

            //form.querySelector('#signInName').classList.add('form-control', 'my-2')

            //form.querySelector('#password').classList.add('form-control', 'my-2')

            const nextElement = form.querySelector('#next');

            if(nextElement) {
                nextElement.classList.add('btn', 'btn-dark'/*, 'my-5'*/)
            }

            form.querySelectorAll('input').forEach(e => {
                e.classList.add('input', 'editField')
            })

            form.querySelectorAll('button').forEach(e => e.classList.add('button', 'btn', 'btn-dark'))

            form.querySelectorAll('a').forEach(e => {
                //e.style.textDecoration = "none";
                //e.innerHTML = "help?"
                e.remove();
            })

            form.querySelector('.buttons').classList.add('columns')
            form.querySelectorAll('button').forEach(e => {
                e.classList.add('column', 'm-5', 'p-3', 'buttonExtraFormat')
            })

            removeEmailVerificationControlHelp();

            removeEmailAddressIndent();
        }
    }
}

function stylePages() {
    //styleSocialSignInPage();
    styleLocalSignInPage();
    styleLocalSignUpPage();
    //styleLinkSocialLoginPage();
    styleLocalPasswordResetPage();
    styleGALinkPage();
    makeCopyrightText();
    showPage();
}

if (document.readyState === 'loading') {
    if (window.jQuery !== undefined) {
        $(() => { stylePages(); });
    } else {
        document.addEventListener("DOMContentLoaded", () => {
            stylePages();
        });
    }
} else {
    stylePages();
}
