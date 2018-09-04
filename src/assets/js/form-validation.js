var letters = /^[A-Za-z]+$/;

function validate()
{

	if( document.eventForm.name.value == "")
	{
		alert( "Please provide your name!" );
		document.eventForm.name.focus() ;
		return false;
	} else if (!document.eventForm.name.value.match(letters)) {
		alert('Name must have alphabet characters only');
		document.eventForm.name.focus();
		return false;
	}
	
	if( document.eventForm.place.value == "")
	{
		alert( "Please provide an exact place!" );
		document.eventForm.place.focus() ;
		return false;
	}  else if (!document.eventForm.name.value.match(letters)) {
		alert('Place must have alphabet characters only');
		document.eventForm.place.focus();
		return false;
	}

	if( document.eventForm.service.value == "-1" )
	{
		alert( "Please provide your service!" );
		return false;
	}
	return( true );
}