import React from "react";
import format from "date-fns/format";
  
export default class PostPreview extends React.Component {
  render() {
    const {entry, getAsset} = this.props;
    let image = getAsset(entry.getIn(["data", "image"]));

    // Bit of a nasty hack to make relative paths work as expected as a background image here
    if (image && !image.fileObj) {
        image = window.parent.location.protocol + "//" + window.parent.location.host + image;
    }

    return <section class="hero is-link map-image is-fullheight home-cta">
            <div class="hero-head">
              <nav class="navbar">
                <div class="container">
                  <div class="navbar-brand">
                    <a class="navbar-item">
                      <img src="/img/logo.png" alt="Logo"/>
                    </a>
                    <span class="navbar-item is-hidden-desktop right">
                            <a href="/apply" class="button is-white is-inverted">
                                Request Code
                            </a>
                      </span>
                  </div>
                  <div id="navbarMenuHeroA" class="navbar-menu">
                    <div class="navbar-end">
                    <span class="navbar-item">
                            <a href="/apply" class="button is-white is-inverted">
                                Request Code
                            </a>
                      </span>
                      <span class="navbar-item">
                        <a href="https://www.instagram.com/campsunnyroad/" class="button is-white is-inverted">
                          <span class="icon">
                            <i class="fab fa-instagram"></i>
                          </span>
                        </a>
                      </span>
                      <span href="https://www.facebook.com/campsunnyroad " class="navbar-item">
                            <a class="button is-white is-inverted">
                              <span class="icon">
                                <i class="fab fa-facebook"></i>
                              </span>
                            </a>
                    </span>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          
            <div class="hero-body">
              <div class="container has-text-centered">
                <h1 class="title is-1 uppercase">{entry.getIn(["data", "heading"])}</h1>
                <h2 class="title is-4">{entry.getIn(["data", "subhead"])}</h2>
                <h3 class="subtitle">{entry.getIn(["data", "subtitle"])}</h3>
                <a href={entry.getIn(["data", "url"])} class="button is-large is-primary">
                        <strong>{entry.getIn(["data", "button"])}</strong>
                    </a>
              </div>
            </div>
          
            <div class="hero-foot">
              <nav class="tabs">
                <div class="container">
                  <ul>
                    <li><a href="#passes">Passes</a></li>
                    <li><a href="#partners">Partners</a></li>
                    <li><a href="#activities">Activities</a></li>
                    <li><a href="#our-story">Our Story</a></li>
                    <li><a href="#location">Location</a></li>
                    <li><a href="#contact">Contact</a></li>
                  </ul>
                </div>
              </nav>
            </div>
      </section>
  }
}