import React from "react";

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

export default class Slide1 extends React.Component {
  render() {
  		return <div>
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              React
            </Heading>
            <Heading size={1} fit caps>
              A rendering library in Javascript
            </Heading>
            <Text textSize="1.5em" margin="20px 0px 0px" bold>JS -> HTML, VR or native code.</Text>
            </div>
          ;
  }
}
