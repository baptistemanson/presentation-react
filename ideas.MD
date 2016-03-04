Presentation React Ideas

---

What is React?
--
React is a rendering library in Javascript.
It takes some js  and produce HTML, VR or native code.
Let's talk about HTML first.

It is only the V of MVC. It is a library, not a framework. 
It still requires you to make really important choices.

___

React focuses on simplicity.
--

```
render(myList)  {
   <ul>
     for(myElement in myList) {
		<li>{myElement}</li>
	 }
   </ul>
}
```

JS objects
____



You use plain javascript.

* No new templating langage to learn.
* Use any js object you have, no wrapper, no inheritance, no interface.
* No binding, the { } are like "hello $var" in PHP.

* (like phtml in PHP, but wrapped in a function.).

____
Descriptive
--
Thinking in delta is hard

"Our intellectual powers are rather geared to master static relations and that our powers to visualize processes evolving in time are relatively poorly developed. "
Dijkstra

example a table with two simple columns "Alice, Bob, Charly " with money.

So in that way, React is simple because it a simple function turning js objects into DOM.
Calling the function with the same parameter == same results.

____
Compose with classes
___

```
class MyMainComponent extends React.Component {
	render() {
		return <div>
			<MySubComponent />
			</div>;
	}

}

class MySubComponent extends React.Component {
	render() {
		return <div>I'm the subcomponent.</div>
	}
}
}
```
Separate your logic or embed it in your component, it is YOUR call.
____

How does that work?



