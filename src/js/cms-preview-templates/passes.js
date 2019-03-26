import React from "react";

const Feature = ({name}) =>
    <li class ="is-full column pass-feature">
        {name}
    </li>

const Features = ({data}) => data && data.length > 0
    ? <ul class="is-10 columns is-multiline is-mobile bullet-list">
      {data.map(({name}) => <Feature name={name}/>)}
    </ul>
    : "";

export default class PostPreview extends React.Component {
  render() {
    const {entry} = this.props;
    const entryFeatures = entry.getIn(["data", "features"]);
    const features = entryFeatures ? entryFeatures.toJS() : [];

    return <section id="passes" class="hero is-primary is-fullheight passes">
    <div class="hero-body">
      <div class="container">
        <div class="columns">
                <div class="is-10-mobile is-offset-1-mobile is-offset-1-tablet is-5-tablet column pass-info">
                        <h2 class="title  is-2 is-uppercase">{entry.getIn(["data", "heading"])}</h2>
                        <h3 class="title is-4">{entry.getIn(["data", "subhead"])}</h3>
                        <ul class="is-10 columns is-multiline is-mobile bullet-list">
                          <Features data={features}/>
                        </ul>
                </div>
                <div class="is-10-mobile is-offset-1-mobile is-4-tablet is-4-desktop column is-offset-1-desktop">
                    <h4 class="title  is-6 need-code">{entry.getIn(["data", "apply_headline"])}</h4>
                          <p><small>{entry.getIn(["data", "apply_text"])}</small></p>
                          <a class="button is-white" href="/apply">{entry.getIn(["data", "apply_button"])}</a>
                </div>
      </div>
    </div>
  </div>
  </section>
  ;
  }
}
