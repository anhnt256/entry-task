import React, { Component } from 'react';
import { Page, Navbar, NavLeft, NavCenter, NavRight } from 'framework7-react';

import EventItem from './helper/events/eventItem';

class ListComponent extends Component {
  constructor(props) {
    super(props);
    this.onInfiniteScroll = this.onInfiniteScroll.bind(this);
    this.bindData = this.bindData.bind(this);
  }

  bindData() {
    console.log('asdasd');
  }
  onInfiniteScroll() {
    console.log('scroll');

    // let self = this;
    // let newItems = this.state.items.slice();
    // let newCounter = this.state.counter;

    // if (this.timeout) {
    //   clearTimeout(this.timeout);
    // }

    // this.timeout = setTimeout(function () {
    //   for (let i = newCounter; i < newCounter + 25; i++) {
    //     newItems.push(i + 1);
    //   }

    //   self.setState({
    //     counter: newCounter + 25,
    //     items: newItems
    //   });
    // }, 500);
  }

  componentWillMount() {
    this.props.getListEvent();
  }

  componentDidMount() {
    console.log('here');
    const { data } = this.props;
    this.setState({
      counter: data.events.length,
      items: data.events
    });
    console.log(this.props);
  }
  componentWillReceiveProps(nextProps) {
    console.log('props changed');
    console.log(this.nextProps);
  }
  render() {
    const { data, get_event_detail } = this.props;
    console.log(this.state);
    console.log(data);
    console.log('render');
    return (
      <Page className="list-page" infiniteScroll onInfinite={this.bindData}>
        <Navbar className="nav-container">
          <NavLeft>
            <a className="open-panel" data-panel="left">
              <div className="search-icon" />
            </a>
          </NavLeft>
          <NavCenter sliding>
            <div className="logo-icon" />
          </NavCenter>
          <NavRight>
            <a>
              <img
                className="avatar"
                src="https://images.foody.vn/usr/g47/467309/avt/c100x100/foody-avatar-632-636372034600353185.jpg"
                alt=""
              />
            </a>
          </NavRight>
        </Navbar>
        <div className="main-content">
          {data.events.map((event, i) => {
            return (
              <EventItem
                key={i}
                event={event}
                onClick={() => get_event_detail(event)}
              />
            );
          })}
        </div>
      </Page>
    );
  }
}

export default ListComponent;
