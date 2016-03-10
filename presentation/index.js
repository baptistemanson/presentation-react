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


          <Slide>
             <List>
             <Appear><ListItem>The JSX language</ListItem></Appear>
             <Appear><ListItem>Modular via components</ListItem></Appear>   
             <Appear><ListItem>Architecture of the engine itself</ListItem></Appear>
            </List>
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
                <Appear><ListItem>Use any JS object you have.</ListItem></Appear>
                <Appear><ListItem>No binding, as simple as echo "hello $name" in PHP.</ListItem></Appear>
            </List>
             <Appear><div>It is like <b>phtml.</b> </div></Appear>
          </Slide>
          


          <Slide>
            <Heading fit size={2} textColor="black">
             Behind the scene...
            </Heading>
            <CodePane
              lang="jsx"
              source={ require("raw!../presentation/component-js.example") }
              margin="20px auto"
            />
             <Appear><div>It looks like the <b>DOM Api</b> but... </div></Appear>
          </Slide>


          <Slide transition={["slide"]}>
            <Heading fit size={4} textColor="black">React is descriptive</Heading>
            <List>
             <Appear><ListItem>We express the full DOM, not only the HTML to be added/removed. </ListItem></Appear>
             <Appear><ListItem>render() with same params == same results</ListItem></Appear>
            </List>
            <Appear><Heading fit textColor="black">Render() re-computes the full "DOM" when there is a change</Heading></Appear>
          </Slide>

           <Slide transition={["zoom", "fade"]} bgColor="black">
            <Slide4 images={images} />
          </Slide>

          <Slide transition={["slide"]}>
            <Heading fit size={4} textColor="black">The Virtual DOM</Heading>
          </Slide>

           <Slide transition={["slide"]}>
            <Heading fit><a href="https://t.co/tfaSHawOCI">DOM Api is slower than doing them in pure js.</a> </Heading>
          </Slide>

          <Slide transition={["slide"]}>
           <Image src={images.vdom.replace("/", "")} margin="0px auto 40px" />
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
