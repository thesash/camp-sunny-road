import React from "react";
  
export default class PostPreview extends React.Component {
  render() {
    const {entry, getAsset} = this.props;
    let image = getAsset(entry.getIn(["data", "image"]));


    return <img src="/logo.png"/> ;
  }
}