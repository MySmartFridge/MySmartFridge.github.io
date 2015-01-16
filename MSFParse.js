function signUpUser() {

      Parse.initialize("kYnpHfKQqce0BYrCOJj3jB0Jz6HxXDjf5f8ggJLL", "RCytSIBImKnGWbgn0KZdGwbdm9LiOmioo87xi1Wv");
          var user = new Parse.User();

	        var username = $("#signup-username").val();
	        var email = $("#signup-email").val();
	        var password = $("#signup-password").val();

	        user.set("username", username);
			user.set("password", password);
			user.set("email", email);

	        user.signUp(null, {
		        success: function(user) {
			        alert("You successfully signed up!");
			        var currentUser = Parse.User.current();  
			        	if(currentUser) {
	  					// TODO: Bring them to the hidden "logged in only" page
  					}  
			     },
			    error: function(user, error) {
				    alert("Error: " + error.code + " " + error.message);
				}
		});
}
function signOut(){

	window.location.href = "fridgeindex.html";

}
function openFridge(){

	var MyClass = Parse.Object.extend("ClassName");
    var object = new MyClass();
    object.save(food: "Carrot", username: "1", options);
}
function signInUser() {

			Parse.initialize("kYnpHfKQqce0BYrCOJj3jB0Jz6HxXDjf5f8ggJLL", "RCytSIBImKnGWbgn0KZdGwbdm9LiOmioo87xi1Wv");
			var username = $("#login-username").val();
			var password = $("#login-password").val();

			Parse.User.logIn(username, password, {
  				success: function(user) {
  					alert("You successfully logged in!");
  					var currentUser = Parse.User.current();
  					if(currentUser) {
	  					window.location.href = "loggedin.html";
  					}  
  				},
 				 error: function(user, error) {
 				 	alert("Error: " + error.code + " " + error.message);
			 	}
		});
}
