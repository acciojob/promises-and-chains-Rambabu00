//your JS code here. If required.
function submit (){
	var age=document.getElementById("age").value;
	var name =document.getElementById("name").value;
	if(age=="" || name==""){
		alert("inputs cannot be empty");
	}
	else{
		return new Promise((resolve, reject)=>{
			setTimeout(()=>{
				if(age>18){
					resolve("Welcome, "+name+". You can vote");
				}
				else{
					reject("Oh sorry "+name+". You aren't old enough");
				}
			},4000);
		}).then((data)=>{
			alert(data);
})
		.catch((err)=>{
			alert(err);
		})
	}
}
