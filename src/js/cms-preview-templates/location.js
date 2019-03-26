import React from "react";
  
export default class PostPreview extends React.Component {
  render() {
    const {entry, getAsset} = this.props;
    let image = getAsset(entry.getIn(["data", "image"]));


    return <section class="info-module">
    <div class="container">
      <div class="columns">
        <div class="is-10-mobile is-offset-1-mobile is-8-tablet is-offset-2-tablet is-6-desktop column">
          <h2 class="is-2 is-uppercase title">{{.heading}}</h2>
          <p>{{.text | safeHTML}}</p>
        </div>
      </div>
    </div>
  </section>
  ;
  }
}