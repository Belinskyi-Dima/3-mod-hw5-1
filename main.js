"use strict";
const urlUser = "https://ajax.test-danit.com/api/json/users";
const urlPost ="https://ajax.test-danit.com/api/json/posts";

const root = document.querySelector('#root')

class Request {
	constructor(urlUser,urlPost){
		this.urlUser = urlUser;
		this.urlPost = urlPost;
	}
	



	getUser() {
		axios.get(this.urlUser).then(({data}) => {
			data.forEach(element => {

				axios.get(this.urlPost).then(({data}) => {
					data.map(el => {
						console.log(el);
					
						if(element.id == el.userId) {
							
					
							const ul = document.createElement("ul");
							const li = document.createElement("li");
							const name = document.createElement("p");
							const email = document.createElement("p")
							const title = document.createElement("p");
							const body  = document.createElement("p");


							const btn = document.createElement("button");
							btn.addEventListener('click', function (e) {
								
								const usid= el.id;
								console.log(usid);

								e.preventDefault();
								ul.style.display = 'none';
								deletePost(usid);
							})




							name.innerHTML+=  `${element.name}`;
							email.innerHTML+=`${element.email}`;
							title.innerHTML+=` ${el.title}`;
							body.textContent+= `${el.body}`;
							btn.textContent= `Dellete cart`;
							
							li.append(name,email)
							
							ul.append(li,title,body,btn)
							root.append(ul)

							



						
					
						}


					})
				})
				
			});
		
		});
		
	}


}
const request = new Request(urlUser,urlPost);
request.getUser();


function deletePost (userId) {
	return axios.delete(urlPost + "/"+ userId).then(({data})=>  {
		console.log(this);
		
	})
}




