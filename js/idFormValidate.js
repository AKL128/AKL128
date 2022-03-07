//idFormValidate.js

function idFormValidate(idFormObj)
{
	var email = idFormObj.email.value;
	emailOK = emailValid(email);
	
	return emailOK;
	
}

function emailValid(address)
{
	var p = address.search(/.+@.+/);
    if (p == 0)
        return true;
    else
    {
        alert("Error: Invalid e-mail address.");
        return false;
    }
}
