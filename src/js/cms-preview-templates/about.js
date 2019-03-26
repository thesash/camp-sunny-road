import React from "react";
  
export default class PostPreview extends React.Component {
  render() {
    const {entry, widgetFor} = this.props;


    return <section id={entry.getIn(["data","label"])} class="text-section hero is-{{.height}} {{.label}}">
        <div class="hero-body">
            <div class="container">
              <div class="columns">
                <div class="is-10-mobile is-offset-1-mobile is-8-tablet is-offset-2-tablet is-6-desktop is-offset-3-desktop column">
                  <h2 class="is-2 is-uppercase title">{entry.getIn(["data","heading"])}</h2>
                  { widgetFor("body") }
                </div>
              </div>
            </div>
          </div>
    </section>
    ;
  }
}