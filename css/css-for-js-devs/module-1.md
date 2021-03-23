#Module 1

## Built in Declarations and Inheritance

Each web browser comes with a built-in style sheet called the user-agent stylesheet. You can see what chrome's looks like 
by default [here](https://source.chromium.org/chromium/chromium/src/+/master:third_party/blink/renderer/core/html/resources/html.css).

There's a thing called a CSS reset, which is a copy pasta to completely do away with any user-agent styles. 

## Inheritance

Many properties (mostly typographical ones) will be inerited by children and grand-children html nodes. So watch out! 
It's tricky because not all properties will be inherited. 

The specific properties that he illustrated as being inherited were color, background-color, text-size, text-shadow. But things like
border are not inherited by children nodes. 

He makes a big point about how CSS inheritance is almost like JavaScript prototypal inheritance. It's a point I didn't 
completely understand, though. 

If you must have a property be inherited, there is always the inherit value, which will force that property to look up the DOM to the nearest parent with that property 
and use the value set there. 



