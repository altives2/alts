
function toggleMore(e){
let parent = e.parentNode;

let moreLinks = parent.getElementsByTagName("span")[0];
if(moreLinks.style.display=="none" || moreLinks.style.display==""){
	moreLinks.style.display="inline";
	//console.log(e)
	e.innerHTML="<< hide";
}else{
	moreLinks.style.display="none";
	e.innerHTML="more >>";

}

}

