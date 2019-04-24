window.onload = function(){
	var aclick = document.getElementsByClassName("click");
	var a9 = document.getElementsByClassName("col-md-9")[0];
	var aUl =a9.getElementsByTagName("ul");
	var len=aclick.length;
	var len1=aUl.length;
	for ( var i =0;i < len;i ++) {
		aclick[i].index=i;
		aclick[i].onmouseover = function(){
		 for( var j =0 ;j<len1; j++){
			 aUl[j].index=j;
			 aUl[j].style.display = "none";
			 aUl[this.index].style.display="block";
		 }
		}
	}
}