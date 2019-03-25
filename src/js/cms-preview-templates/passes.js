import React from "react";

const Feature = ({feature}) =>
    <li class ="is-full column pass-feature">
        {feature}
    </li>

const Features = ({data}) => data && data.length > 0
    ? <ul class="is-10 columns is-multiline is-mobile bullet-list">
      {data.map(({feature}) => <Feature feature={feature}/>)}
    </ul>
    : "";

export default class PostPreview extends React.Component {
  render() {
    const {entry, widgetFor, getAsset} = this.props;
    let image = getAsset(entry.getIn(["data", "image"]));

    return <section id="passes" class="hero is-primary is-fullheight passes">
    <div class="hero-body">
      <div class="container">
        <div class="columns">
                <div class="is-10-mobile is-offset-1-mobile is-offset-1-tablet is-5-tablet column pass-info">
                        <h2 class="title  is-2 is-uppercase">{entry.getIn(["data", "heading"])}</h2>
                        <h3 class="title is-4">{entry.getIn(["data", "subhead"])}</h3>
                        <Features/>
                        <h2 class="title  is-4 need-code">{entry.getIn(["data", "apply_headline"])}</h2>
                        <p>{entry.getIn(["data", "apply_text"])}</p>
                        <a class="button is-white is-medium" href="/apply">{entry.getIn(["data", "apply_button"])}</a>
                </div>
                <div class="is-12-mobile is-4-tablet is-4-desktop column is-offset-1-desktop">
                </div>
      </div>
    </div>
    </div>
  </section>;
  }
}
