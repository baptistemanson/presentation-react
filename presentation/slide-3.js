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

export default class Slide3 extends React.Component {
  render() {
  		return <div><Image src={this.props.images.kat.replace("/", "")} margin="0px auto 40px" height="293px"/>
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              Wait what?
            </Heading>
            <Heading size={3} caps fit textColor="primary" textFont="primary"> Js and HTML mixed together?</Heading></div>;
   }
}