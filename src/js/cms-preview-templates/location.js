import React from "react";
  
export default class PostPreview extends React.Component {
  render() {
    const {entry, getAsset} = this.props;
    const htmlText = entry.getIn(["data", "text"]);


    return <section class="info-module">
        <div class="container">
          <div class="columns">
            <div class="is-10-mobile is-offset-1-mobile is-8-tablet is-offset-2-tablet is-6-desktop column">
              <h2 class="is-2 is-uppercase title">{entry.getIn(["data","heading"])}</h2>
              <p>dangerouslySetInnerHTML={{__html: htmlText}}</p>
            </div>
          </div>
        </div>
      </section>
    ;
  }
}