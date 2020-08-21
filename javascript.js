
		var slideIndex = 0;
		
		carousel();
		function carousel() {
		var j;
		var x = document.getElementsByClassName("myslide");
		for (j = 0; j < x.length; j++) {
			x[j].style.display = "none";
		}
		slideIndex++;
		if (slideIndex > x.length) {slideIndex = 1}
		x[slideIndex-1].style.display = "block";
		setTimeout(carousel, 15000);
		}

		
		function plusDivs(n) {
		  showDivs(slideIndex += n);
		}
		
		function showDivs(n) {
		  var i;
		  var x = document.getElementsByClassName("myslide");
		  if (n > x.length) {slideIndex = 1}
		  if (n < 1) {slideIndex = x.length}
		  for (i = 0; i < x.length; i++) {
			x[i].style.display = "none";  
		  }
		  x[slideIndex-1].style.display = "block";  
		  
		}