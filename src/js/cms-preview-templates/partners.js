import React from "react";

const Partner = ({logo}) =>
    <li class="is-3-mobile is-2-tablet is-2-desktop column"> 
      <img src={getAsset({logo})}/>
    </li>

const Partners= ({data}) => data && data.length > 0
    ? <ul class="is-10 columns is-multiline is-mobile ">
      {data.map(({logo}) => <Partner logo={logo}/>)}
    </ul>
    : "";

export default class PostPreview extends React.Component {
  render() {
    const {entry} = this.props;
    const entryPartners = entry.getIn(["data", "partners"]);
    const partners = entryPartners ? entryActivities.toJS() : [];

    return <section id="partners" class="partners hero is-white is-medium">
      <div class="hero-body">
          <div class="container">
              <div class="columns">
                  <div class="is-10 is-offset-1 is-10-mobile is-offset-1-mobile is-mobile column">
                      <h2 class="is-2 is-uppercase title">Partners</h2>
                      <Partners data={partners}/>
                  </div>
              </div>
          </div>
      </div>
    </section>;
  }
}
