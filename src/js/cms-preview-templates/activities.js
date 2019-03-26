import React from "react";

const Activity = ({name}) =>
  <li class="title is-6-mobile is-4-tablet is-3-desktop column activities-list">
        {name}
    </li>

const Features = ({data}) => data && data.length > 0
    ? <ul class="is-10 columns is-multiline is-mobile bullet-list">
      {data.map(({name}) => <Activity name={name}/>)}
    </ul>
    : "";

export default class PostPreview extends React.Component {
  render() {
    const {entry} = this.props;
    const entryActivities = entry.getIn(["data", "activities"]);
    const activities = entryActivities ? entryActivities.toJS() : [];

    return <section id="activities" class="hero is-info is-fullheight activities">
        <div class="hero-body">
            <div class="container">
                <div class="columns">
                        <div class="is-10-mobile is-offset-1-mobile is-10-tablet is-offset-1-tablet column">
                            <h2 class="is-2 is-uppercase title">{entry.getIn(["data","heading"])}</h2>
                            <Activities data={activities}/>
                        </div>
                </div>
            </div>
        </div>
    </section>;
  }
}
