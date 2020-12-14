function myFunction() {
	var x = document.getElementById('myDropdown');
	var y = document.getElementById('cont-main');
	if (x.style.display === 'none') {
	  x.style.display = 'flex';
	  y.style.zIndex='0';
	} else {
	  x.style.display = 'none';
	  y.style.zIndex='1';
	}
  }
   var timer;

   $(".parent").on("mouseover", function() {
 	clearTimeout(timer);
 	openSubmenu();
   }).on("mouseleave", function() {
 	timer = setTimeout(
 	  closeSubmenu
 	, 1000);
  });

   function openSubmenu() {
 	$(".submenu").addClass("open");
 }
  function closeSubmenu() {
	$(".submenu").removeClass("open");
  }


  var menuKontrol = 0;

  function showNav() {
	var x = document.getElementById('home');
	var a = document.getElementById('top-nav-bar');
	var y = document.getElementById('icon1');
		x.style.display = 'none';
		a.style.width = "100%"
		y.style.display = 'none';
	reset()
	}

function reset()
{
			var x = document.getElementById('top-bottomheader');
			x.style.display ="flex";
			var p = document.getElementById('menu-input');
			p.style.display="none";
			var h = document.getElementById('top-logo');
			h.style.display="flex";
			var y = document.getElementById('surf-menu');
			y.style.display ="flex";
			var z = document.getElementById('menu-detay');
			z.style.display ="none";
			var t = document.getElementById('detay-Logo');
			t.setAttribute('style', 'display:flex !important');
			var u = document.getElementById('detay-Title');
			u.style.display ="none";
			menuKontrol = 0;
			console.log(menuKontrol);
}
		function exit()
		{
			var x = document.getElementById('home');
		var a = document.getElementById('top-nav-bar');
		var y = document.getElementById('icon1');
			x.style.display = 'block';
			a.style.width = "0"
			y.style.display = 'block';
		}
		function hideNav() {
		if(menuKontrol == 0)
		{
		var x = document.getElementById('home');
		var a = document.getElementById('top-nav-bar');
		var y = document.getElementById('icon1');
			x.style.display = 'block';
			a.style.width = "0"
			y.style.display = 'block';
		}

		else if(menuKontrol == 1)
		{
		var z = document.getElementById('iconsearchBox');
		z.style.display="flex";
		var x = document.getElementById('menu-input');
		x.style.display="none";
		var y = document.getElementById('top-logo');
		y.style.display="flex";
		menuKontrol=2
		}

		else if(menuKontrol == 2)
		{
			var x = document.getElementById('top-bottomheader');
			x.style.display ="flex";
			var p = document.getElementById('menu-input');
			p.style.display="none";
			var h = document.getElementById('top-logo');
			h.style.display="flex";
			var y = document.getElementById('surf-menu');
			y.style.display ="flex";
			var z = document.getElementById('menu-detay');
			z.style.display ="none";
			var t = document.getElementById('detay-Logo');
			t.setAttribute('style', 'display:flex !important');
			var u = document.getElementById('detay-Title');
			u.style.display ="none";
			menuKontrol = 0;
			console.log(menuKontrol);
		}
	}

function showSearch() {
	var z = document.getElementById('iconsearchBox');
	var x = document.getElementById('menu-input');
	var y = document.getElementById('top-logo');
	z.style.display="none";
	x.style.display="block";
	y.style.display="none";
	y.style.width="80%"
	menuKontrol = 1;
	console.log(menuKontrol);
}

function showDetay(obj)
{
	var x = document.getElementById('top-bottomheader');
	x.style.display ="none";
	var y = document.getElementById('top-menu');
	y.style.display ="none";
	var z = document.getElementById('menu-detay');
	z.setAttribute('style', 'display:flex !important');
	var t = document.getElementById('detay-Logo');
	t.style.display ="none";
	var u = document.getElementById('detay-Title');
	id = obj.getAttribute("id");
	u.textContent=id;
	u.setAttribute('style', 'display:flex !important');
	menuKontrol = 2;
	console.log(menuKontrol);

}

function txtFocus()
{
	var x = document.getElementById('top-bottomheader');
	x.style.display ="none";
	var y = document.getElementById('top-menu');
	y.style.display ="none";
	var z = document.getElementById('menu-detay');
	z.setAttribute('style', 'display:none !important');
	var z = document.getElementById('last-searches');
	z.setAttribute('style', 'display:flex !important');
}

function txtFocusoff()
{
	var z = document.getElementById('last-searches');
	z.setAttribute('style', 'display:none !important');
}
var slider = document.getElementsByClassName("slider");
var button1 = document.getElementById("btn-surf");
var button2 = document.getElementById("btn-surf2");


 var sliderCount = slider.length;
 var sliderNo = 0;
   showSlider(sliderNo);
   function prev() {

	   sliderNo=0;
       showSlider(sliderNo);
       button1.style.backgroundColor = "grey";
	   button2.style.backgroundColor = "black";
   }
    function next() {

	   sliderNo=1;
       showSlider(sliderNo);
       button2.style.backgroundColor = "grey";
	   button1.style.backgroundColor = "black";
   }
  function showSlider(sliderNumber) {
	    sliderNo = sliderNumber;
		if(sliderNumber >= sliderCount){

			sliderNo = 0;

		}
		if(sliderNumber < 0){

			sliderNo = sliderCount -1;
		}
	    for(i = 0; i< sliderCount; i++) {

			slider[i].style.display = "none";

		}
		slider[sliderNo].style.display = "block";

  }
