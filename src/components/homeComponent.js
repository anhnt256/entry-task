import React, { Component } from 'react';
import { Views, View, Pages, Page, List, ListItem } from 'framework7-react';

class HomeComponent extends Component {
  constructor(props) {
    super(props);
    // reset login status
    this.props.logout();

    this.state = {
      username: '',
      password: '',
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({ submitted: true });
    const { username, password } = this.state;
    if (username && password) {
      this.props.login(username, password);
    }
  }

  render() {
    const { username, password, submitted } = this.state;
    return (
      <Views>
        <View id="main-view" main url="/">
          <Pages>
            <Page>
              <div className="login">
                <div className="login-sub">FIND THE MOST LOVED ACTIVITIES</div>

                <div className="login-head">BLACK CAT</div>

                <div className="login-logo-wrap">
                  <div className="login-logo">
                    <div className="logo" />
                  </div>
                </div>

                <form className="login-form" onSubmit={this.handleSubmit}>
                  <div className="login-input-container">
                    <div className="login-icon login-img-people" />
                    <input
                      type="text"
                      className="login-input"
                      placeholder="user@blackcat.co"
                      name="username"
                      value={username}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="login-input-container">
                    <div className="login-icon login-img-password" />
                    <input
                      type="password"
                      className="login-input"
                      placeholder="Password"
                      name="password"
                      value={password}
                      onChange={this.handleChange}
                    />
                  </div>
                  {!submitted ? (
                    <div className="btn-login">
                      <button className="btn-cta">SIGN IN</button>
                    </div>
                  ) : null}
                </form>
                <List>
                  <ListItem link="/events/" title="Events" />
                </List>
              </div>
            </Page>
          </Pages>
        </View>
      </Views>
    );
  }
}

export default HomeComponent;
