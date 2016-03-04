// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  what: require("../assets/what.gif"),
  vdom: require("../assets/virtualDOM.png")
};

preloader(images);

const theme = createTheme({
  primary: "#59C9E7"
});


const tableStyle = {padding:'10px',width:'100%'};
import Slide1 from './slide-1';

import Slide2 from './slide-2';
import Slide3 from './slide-3';
import Slide4 from './slide-4';

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
        <Slide transition={["zoom"]}  bgColor="primary">
          <Slide1 />
        </Slide>



          <Slide transition={["slide"]} bgColor="primary" notes="You can even put notes on your slide. How awesome is that?">
           <Slide2 images={images} />
          </Slide>




          <Slide transition={["slide"]} bgColor="primary">            
          <CodePane
              lang="jsx"
              source={ require("raw!../presentation/component.example") }
              margin="20px auto"
            />
          </Slide>
           <Slide transition={["zoom", "fade"]} bgColor="black">
            <Slide3 images={images} />
          </Slide>



          <Slide transition={["slide"]} bgColor="primary">
            <Heading fit size={2} textColor="black">
             Logic is in plain JS
            </Heading>
             <CodePane
              lang="jsx"
              source={ require("raw!../presentation/component.example") }
              margin="20px auto"
            /> 
             <List>
                <Appear><ListItem>No templating langage to learn - any JS will do.</ListItem></Appear>
                <Appear><ListItem>Use any JS object you have (no interface).</ListItem></Appear>
                <Appear><ListItem>No binding, as simple as echo "hello $name" in PHP.</ListItem></Appear>
            </List>
             <Appear><div>It is like <b>phtml.</b> </div></Appear>
          </Slide>



          <Slide transition={["slide"]} bgColor="black">
          <BlockQuote>
              <Quote size={3}>"Our intellectual powers are rather geared to master static relations."</Quote>
              <Cite>Dijkstra</Cite>
            </BlockQuote>
          </Slide>



          <Slide transition={["slide"]}>

          <Layout>
             <table style={tableStyle}>
             <thead><th>Name</th><th># JellyBeans</th></thead>
             <tbody>
             <tr><td>Alice</td><td>12</td></tr>
             <tr><td>Bob</td><td>10</td></tr>
             <tr><td>Charlie</td><td>13</td></tr>
             </tbody>
             </table>
            </Layout>
          </Slide>
          <Slide transition={["slide"]}>
            <Heading  size={4} textColor="black">Alice eats 6 jellybeans.</Heading>
          </Slide>
          <Slide transition={["slide"]}>
            <Heading  size={4} textColor="black">Charlie gives 2 to Bob.</Heading>
          </Slide>
           <Slide transition={["slide"]}>
            <Heading  size={4} textColor="black">Bobs eats 1 and give 3 to Alice.</Heading>
          </Slide>
           <Slide transition={["slide"]}>
            <Heading  size={4} textColor="black">Alice gives equally her jellybeans to Bob and Charlie.</Heading>
          </Slide>
          <Slide transition={["slide"]}>
            <Heading  size={4} textColor="black">How many jellybeans Bob has?</Heading>
          </Slide>


          <Slide transition={["slide"]}>
            <Heading fit size={4} textColor="black">React is descriptive</Heading>
            <List>
             <Appear><ListItem>render() with same params == same results</ListItem></Appear>
             <Appear><ListItem>No side effect</ListItem></Appear>
             <Appear><ListItem>It gives the full DOM, not only the new elements</ListItem></Appear>
            </List>
            <Appear><div>React re-computes the full DOM when there is a change</div></Appear>
          </Slide>

           <Slide transition={["zoom", "fade"]} bgColor="black">
            <Slide4 images={images} />
          </Slide>

          <Slide transition={["slide"]}>
            <Heading fit size={4} textColor="black">The Virtual DOM</Heading>
          </Slide>

          <Slide transition={["slide"]}>
           <Image src={images.vdom.replace("/", "")} margin="0px auto 40px" />
          </Slide>

           <Slide transition={["slide"]}>
            <Layout>React assumes the DOM is smaller than the amount of JS data. We display less than we know.</Layout>
          </Slide>

          <Slide>
          <div>
          To sum up, React is a descriptive rendering library with pluggable engine. It aims at being simple and fast.
          </div>
          </Slide>

        </Deck>
      </Spectacle>
    );
  }
}
