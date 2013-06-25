shuriken
========

Minimal (Less than 900 bytes) Left-right content slider jQuery plugin

Minimal HTML required:

Any HTML element with children will do. As an example:
```
<div id="slider">
	<div>Hello</div>
	<div>This</div>
	<div>Is</div>
	<div>A Cool</div>
	<div>Slider</div>
</div>
```
  Some sample CSS to use with this:
``` 
#slider {
	width: 50%;
	height:100px;
	margin:auto;
	background-color: green;
}
#slider div {
	text-align: center;
	color: white;
}
```
  
  And finally, how to call Shuriken:
  (Speed is the only option right now)
```
slider = $("#slider").shuriken({
	speed: 600
});
```
    
    How to shuffle to a different slide:
```
//2 is the index of the child element
slider.ninjaStarSlice(2);
```
