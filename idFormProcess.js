//idFormProcess

function idFormProcess()
{
	var idFormObj = document.getElementById("idForm");
	if(idFormValidate(idFormObj))
	{
		alert("Your sign up process is now complete");
	}
}