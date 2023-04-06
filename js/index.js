
const cards = document.getElementsByClassName("card");
const oldName = "Sajad Baghdadi"
const newName = "Sajad B."

for(const card of cards)
      {
            card.onmousemove = (e) => 
            {

            const rect = card.getBoundingClientRect(),
                  x = e.clientX - rect.left,
                  y = e.clientY - rect.top;
  
            card.style.setProperty("--mouse-x", `${x}px`);
            card.style.setProperty("--mouse-y", `${y}px`);
            }
      }


function navbarOpen(x) 
{
	x.classList.toggle("open");
      if(document.getElementsByClassName("navbar_mobile")[0].classList.contains("navbaropen"))
		{
                  document.getElementsByClassName("navbar_mobile")[0].classList.remove("navbaropen");
		}
	else
		{
			document.getElementsByClassName("navbar_mobile")[0].classList.add("navbaropen");
		}

}

function nameChange (x) 
{
      const winWidth = window.innerWidth;
      console.log(winWidth)
      if(winWidth < 485)
            document.getElementById("span1").innerHTML = newName;
      if(winWidth > 485)
            document.getElementById("span1").innerHTML = oldName;
}
