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

export default class Slide4 extends React.Component {
  render() {
  		return <div><Image src={this.props.images.what.replace("/", "")} margin="0px auto 40px" height="293px"/>
            <Heading size={3} fit textColor="primary" textFont="primary"> You re-render everything at each change?!!!</Heading>
            <Heading size={3} fit textColor="primary" textFont="primary">It's more convenient sure but...</Heading>
            </div>;
   }
}