// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

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


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/facepalm.gif"),
  what: require("../assets/what.gif"),
  vdom: require("../assets/virtualDOM.png"),
  architecture: require("../assets/react-architecture.png"),
  immutable: require("../assets/immutable-tree.png"),
  logo: require("../assets/react-logo.png")
};

preloader(images);

const theme = createTheme({
  primary: "#59C9E7"
});


const tableStyle = {padding:'10px',width:'100%'};

import Slide3 from './slide-3';
import Slide4 from './slide-4';

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
        <Slide transition={["zoom"]}  bgImage={images.city.replace("/", "")} bgDarken={0.50}>
          <Heading fit caps lineHeight={1} textColor="primary">
              React
            </Heading>
            <Heading size={1} fit caps>
              Steam Learn presentation 2016
            </Heading>
        </Slide>



          <Slide bgImage={images.logo.replace("/", "")} transition={["slide"]} bgColor="primary" notes="You can even put notes on your slide. How awesome is that?">
            <Text textSize="1.5em" margin="20px 0px 0px" bold>It is a rendering library.</Text>
            <Text textSize="1.5em" margin="20px 0px 0px" bold>It is only the V of MVC. </Text> 
            <Appear><Text>Not a framework. You still have important decisions to make. </Text></Appear>          
          </Slide>


          <Slide>
             <List>
              <Appear><ListItem>The JSX language</ListItem></Appear>
              <Appear><ListItem>How to extend JSX</ListItem></Appear>
              <Appear><ListItem>The engine itself</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="primary">
             <Image src={images.architecture.replace("/", "")} margin="0px auto 40px" />
          </Slide>
          

          <Slide transition={["slide"]} bgColor="primary">            
          <CodePane
              lang="jsx"
              source={ require("raw!../presentation/component-simple.example") }
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
             
             <List>
                <Appear><ListItem>No templating langage to learn - any JS statement will do.</ListItem></Appear>
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
             <Appear><div>It looks like the <b>DOM Api</b> ... </div></Appear>
          </Slide>
          
          <Slide transition={["slide"]} bgColor="primary">
          <Heading fit size={2} textColor="black">
             Iterating on elements
            </Heading>
          <CodePane
              lang="jsx"
              source={ require("raw!../presentation/component.example") }
              margin="20px auto"
            />
          </Slide>
           <Slide>
            <Heading fit size={2} textColor="black">
              Extend with your own components
            </Heading>
            <CodePane
              lang="jsx"
              source={ require("raw!../presentation/component-extend-js.example") }
              margin="20px auto"
            />
          </Slide>

          <Slide transition={["slide"]}>
            <Heading fit size={4} textColor="black">React is descriptive</Heading>
            <List>
             <Appear><ListItem>We express the full DOM, not only the HTML to be added/removed. </ListItem></Appear>
             <Appear><ListItem>render() with same params == same results</ListItem></Appear>
            </List>
            <Appear><Heading fit textColor="black">Render() re-computes the full "DOM" when there is a change.</Heading></Appear>
          </Slide>

           <Slide transition={["zoom", "fade"]} bgColor="black">
            <Slide4 images={images} />
          </Slide>

           <Slide transition={["slide"]}>
           <Heading fit size={2} textColor="black">
             first trick: the Virtual DOM
            </Heading>
           <Image src={images.vdom.replace("/", "")} margin="0px auto 40px" />
          </Slide>

           <Slide transition={["slide"]}>
           <Heading fit size={2} textColor="black">
             Virtual DOM (continued)
            </Heading>
           <List textColor="black">
                <Appear><ListItem>Comparing JS and JS is faster than JS and DOM</ListItem></Appear>
                <Appear><ListItem>JS can be exported to VR, iOS, HTML... </ListItem></Appear>
                <Appear><ListItem>Server side with no browser</ListItem></Appear>
            </List>
          </Slide>

           <Slide transition={["slide"]}>
           <Heading fit size={2} textColor="black">
             second trick: Immutability
            </Heading>
           <Image src={images.immutable.replace("/", "")} margin="0px auto 40px" />
          </Slide>

          <Slide>
           <Heading fit size={2} textColor="black">
             Immutability (continued)
            </Heading>
             <CodePane lang="js" source={require("raw!../presentation/immutable.example")} margin="20px auto"/>
          </Slide>

          <Slide transition={["slide"]} bgColor="black">
           <Heading fit size={2} textColor="primary">
             Immutability
            </Heading> 
           <List textColor="primary">
                <Appear><ListItem>Avoid mutating props directly, has to call "this.setProps" </ListItem></Appear>
                <Appear><ListItem>So React knows easily if something changed (===) </ListItem></Appear>
                <Appear><ListItem>Tools to do it more easily (redux, immutable.js)</ListItem></Appear>
            </List>
          </Slide>

           <Slide>
           <Heading fit size={2} textColor="black">
              The cool demos from the Community
            </Heading>
            <List textColor="black">
                <Appear><ListItem> webpack-dev-server </ListItem></Appear>
                <Appear><ListItem> redux: http://r-cube-cold.c9users.io/game/1 </ListItem></Appear>
                <Appear><ListItem> react-web-worker: http://web-perf.github.io/react-worker-dom/ </ListItem></Appear>
            </List>
           </Slide>
          <Slide bgColor="black">
           <Heading fit size={2} textColor="primary">Core concepts</Heading>
           <List textColor="primary">
                <Appear><ListItem>A descriptive view engine</ListItem></Appear>
                <Appear><ListItem>Based around modular Components</ListItem></Appear>
                <Appear><ListItem>For mobile, web, VR (virtual DOM)</ListItem></Appear>
                <Appear><ListItem>Uses immutability to go super fast</ListItem></Appear>
            </List>
          </Slide>

          <Slide>
            <Heading fit size={2} >That's all folks!</Heading>
            <Appear><Text>For React</Text></Appear>
            <Appear><Text>Tomorrow we will have an open-to-all workshop, just bring a laptop. We will learn JSX, React, webpack, babel, ES2015 and redux.</Text></Appear>
          </Slide>

        </Deck>
      </Spectacle>
    );
  }
}
