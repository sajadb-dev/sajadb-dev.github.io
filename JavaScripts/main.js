// JavaScript Document
window.onscroll = function() 
{
	var top = this.pageYOffset;

  var layers = document.getElementsByClassName("parallax");
  var layer, speed, yPos;
  for (var i = 0; i < layers.length; i++) 
  {
    layer = layers[i];
    speed = layer.getAttribute('data-speed');
    yPos = -(top * speed / 100);
    layer.setAttribute('style', 'transform: translate3d(0px, ' + yPos + 'px, 0px)');
  }
};

function navbarOpen(x) {
	x.classList.toggle("open");
	document.getElementById("navbarid").classList.toggle("navbar_open");
	if(document.getElementById("navbarid").classList.contains("navbar"))
		{
		document.getElementById("navbarid").classList.remove("navbar");
		}
	else
		{
			document.getElementById("navbarid").classList.add("navbar");
		}
}

function activeFunc(v)
{
	var e = document.getElementsByClassName("active");
	for ( var i = 0; i < e.length; i++) {
    e[i].classList.remove("active");
  }
	v.classList.toggle("active");
}

function skillsInfo(v)
{
	if (v.getAttribute("class").includes("html"))
		{
			document.querySelector(".triangle").setAttribute('style', 'transform: rotate(-90deg) translate(20px, 11vw)');
			document.getElementById("skillinfoheader").textContent = "HTML 5";
			document.getElementById("skillinfodescription").textContent = "Hypertext Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript, ASP and PHP.Web browsers receive HTML documents from a local or web server or from local storage and render the documents into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for the appearance of the document.";
		}
	else if (v.getAttribute("class").includes("css"))
		{
			document.querySelector(".triangle").setAttribute('style', 'transform: rotate(-90deg) translate(20px, 20.5vw)');
			document.getElementById("skillinfoheader").textContent = "CSS 3";
			document.getElementById("skillinfodescription").textContent = "Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.CSS is designed to enable the separation of presentation and content, including layout, colors, and fonts. This separation can improve content accessibility, provide more flexibility and control in the specification of presentation characteristics, enable multiple web pages to share formatting by specifying the relevant CSS in a separate .css file, and reduce complexity and repetition in the structural content.Separation of formatting and content also makes it feasible to present the same markup page in different styles for different rendering methods, such as on-screen, in print, by voice (via speech-based browser or screen reader), and on Braille-based tactile devices. CSS also has rules for alternate formatting if the content is accessed on a mobile device.";
		}
	else if (v.getAttribute("class").includes("php"))
		{
			document.querySelector(".triangle").setAttribute('style', 'transform: rotate(-90deg) translate(20px, 30vw)');
			document.getElementById("skillinfoheader").textContent = "PHP";
			document.getElementById("skillinfodescription").textContent = "PHP is a popular general-purpose scripting language that is especially suited to web development. It was originally created by Danish-Canadian programmer Rasmus Lerdorf in 1994; the PHP reference implementation is now produced by The PHP Group. PHP originally stood for Personal Home Page, but it now stands for the recursive initialism PHP: Hypertext Preprocessor.PHP code is usually processed on a web server by a PHP interpreter implemented as a module, a daemon or as a Common Gateway Interface (CGI) executable. On a web server, the result of the interpreted and executed PHP code – which may be any type of data, such as generated HTML or binary image data – would form the whole or part of a HTTP response. Various web template systems, web content management systems, and web frameworks exist which can be employed to orchestrate or facilitate the generation of that response. Additionally, PHP can be used for many programming tasks outside of the web context, such as standalone graphical applications and robotic drone control. Arbitrary PHP code can also be interpreted and executed via command-line interface (CLI). ";
		}
	else if (v.getAttribute("class").includes("javascript"))
		{
			document.querySelector(".triangle").setAttribute('style', 'transform: rotate(-90deg) translate(20px, 39.5vw)');
			document.getElementById("skillinfoheader").textContent = "JAVASCRIPT";
			document.getElementById("skillinfodescription").textContent = "JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.Alongside HTML and CSS, JavaScript is one of the core technologies of the World Wide Web. JavaScript enables interactive web pages and is an essential part of web applications. The vast majority of websites use it for client-side page behavior, and all major web browsers have a dedicated JavaScript engine to execute it.As a multi-paradigm language, JavaScript supports event-driven, functional, and imperative programming styles. It has application programming interfaces (APIs) for working with text, dates, regular expressions, standard data structures, and the Document Object Model (DOM). However, the language itself does not include any input/output (I/O), such as networking, storage, or graphics facilities, as the host environment (usually a web browser) provides those APIs.";
		}
	else if (v.getAttribute("class").includes("photoshop"))
		{
			document.querySelector(".triangle").setAttribute('style', 'transform: rotate(-90deg) translate(20px, 49vw)');
			document.getElementById("skillinfoheader").textContent = "PHOTOSHOP";
			document.getElementById("skillinfodescription").textContent = "Adobe Photoshop is a raster graphics editor developed and published by Adobe Inc. for Windows and macOS. It was originally created in 1988 by Thomas and John Knoll. Since then, the software has become the industry standard not only in raster graphics editing, but in digital art as a whole. The software's name has thus become a generic trademark, leading to its usage as a verb (e.g. 'to photoshop an image', 'photoshopping', and 'photoshop contest') although Adobe discourages such use. Photoshop can edit and compose raster images in multiple layers and supports masks, alpha compositing and several color models including RGB, CMYK, CIELAB, spot color, and duotone. Photoshop uses its own PSD and PSB file formats to support these features. In addition to raster graphics, Photoshop has limited abilities to edit or render text and vector graphics (especially through clipping path for the latter), as well as 3D graphics and video. Its feature set can be expanded by plug-ins; programs developed and distributed independently of Photoshop that run inside it and offer new or enhanced features.";
		}
	else if (v.getAttribute("class").includes("illustrator"))
		{
			document.querySelector(".triangle").setAttribute('style', 'transform: rotate(-90deg) translate(20px, 58.5vw)');
			document.getElementById("skillinfoheader").textContent = "ILLUSTRATOR";
			document.getElementById("skillinfodescription").textContent = "Adobe Illustrator is a vector graphics editor developed and marketed by Adobe Inc. Originally designed for the Apple Macintosh, development of Adobe Illustrator began in 1985. Along with Creative Cloud (Adobe's shift to monthly or annual subscription service delivered over the Internet), Illustrator CC was released. The latest version, Illustrator CC 2020, was released on October 24, 2019 and is the 24th generation in the product line. Adobe Illustrator was reviewed as the best vector graphics editing program in 2018 by PC Magazine.";
		}
	else if (v.getAttribute("class").includes("cplusplus"))
		{
			document.querySelector(".triangle").setAttribute('style', 'transform: rotate(-90deg) translate(20px, 68vw)');
			document.getElementById("skillinfoheader").textContent = "C++";
			document.getElementById("skillinfodescription").textContent = "C++ is a general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language, or 'C with Classes'. The language has expanded significantly over time, and modern C++ now has object-oriented, generic, and functional features in addition to facilities for low-level memory manipulation. It is almost always implemented as a compiled language, and many vendors provide C++ compilers, including the Free Software Foundation, LLVM, Microsoft, Intel, Oracle, and IBM, so it is available on many platforms.C++ was designed with a bias toward system programming and embedded, resource-constrained software and large systems, with performance, efficiency, and flexibility of use as its design highlights. C++ has also been found useful in many other contexts, with key strengths being software infrastructure and resource-constrained applications, including desktop applications, video games, servers (e.g. e-commerce, Web search, or SQL servers), and performance-critical applications (e.g. telephone switches or space probes). ";
		}
	else if (v.getAttribute("class").includes("csharp"))
		{
			document.querySelector(".triangle").setAttribute('style', 'transform: rotate(-90deg) translate(20px, 77.5vw)');
			document.getElementById("skillinfoheader").textContent = "C#";
			document.getElementById("skillinfodescription").textContent = "C# is a general-purpose, multi-paradigm programming language encompassing strong typing, lexically scoped, imperative, declarative, functional, generic, object-oriented (class-based), and component-oriented programming disciplines. It was developed around 2000 by Microsoft as part of its .NET initiative and later approved as an international standard by Ecma (ECMA-334) in 2002 and ISO (ISO/IEC 23270) in 2003. Mono is the name of the free and open-source project to develop a compiler and runtime for the language. C# is one of the programming languages designed for the Common Language Infrastructure (CLI).C# was designed by Anders Hejlsberg, and its development team is currently led by Mads Torgersen. The most recent version is 8.0, which was released in 2019 alongside Visual Studio 2019 version 16.3.";
		}
}
