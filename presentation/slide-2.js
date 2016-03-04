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

export default class Slide2 extends React.Component {
  render() {
  		return <div>
                 <Text textSize="1.5em" margin="20px 0px 0px" bold>It is only the V of MVC. </Text>
                 <Text textSize="1.5em" margin="20px 0px 0px" bold>It is a library, not a framework. You still have important decisions to make. </Text>            
            </div>;
        }
}