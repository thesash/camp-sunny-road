import React from "react";
  
export default class PostPreview extends React.Component {
  render() {
    const {entry, getAsset} = this.props;
    let image = getAsset(entry.getIn(["data", "image"]));


    return <section class="hero is-link map-image is-fullheight home-cta has-navbar-fixed-top">   
        <div class="hero-body">
          <div class="container has-text-centered">
            <h1 class="title is-1 uppercase">{entry.getIn(["data", "heading"])}</h1>
            <h2 class="title is-4">{entry.getIn(["data", "subhead"])}</h2>
            <h3 class="subtitle">{entry.getIn(["data", "subtitle"])}</h3>
                <a href="{{.url}}" class="button is-large is-primary">
                    <strong>{entry.getIn(["data", "button"])}</strong>
                </a>
            </div>
          </div>
    </section>;
  }
}