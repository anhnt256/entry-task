import React from 'react';
import PropTypes from 'prop-types';
import { GridRow, GridCol } from 'framework7-react';

const EventItem = props => (
  <div className="article-block" onClick={props.onClick}>
    <GridRow noGutter className="user-container">
      <GridCol width="50">
        <img
          className="avatar"
          src={props.event.Article.avatar}
          alt={props.event.Article.name}
        />
        <span className="username">{props.event.Article.name}</span>
      </GridCol>
      <GridCol width="50" className="text-align-right">
        <a className="btn-tag">{props.event.Channel.name}</a>
      </GridCol>
    </GridRow>
    {props.event.avatar != null ? (
      <div>
        <div className="left-panel">
          <GridRow noGutter className="list-title">
            <GridCol width="100">
              <h2>{props.event.title}</h2>
            </GridCol>
          </GridRow>
          <GridRow noGutter className="time-container">
            <GridCol width="100">
              <div className="icon time-icon" />
              <div className="article-datetime">
                {props.event.from} - {props.event.to}
              </div>
            </GridCol>
          </GridRow>
          <GridRow noGutter className="description-container">
            <GridCol width="100">{props.event.description}</GridCol>
          </GridRow>
          <GridRow noGutter className="action-container">
            <GridCol width="100">
              {props.event.isGoing ? (
                <div className="btn-container">
                  <div className="icon going-icon" />
                  I'm going
                </div>
              ) : (
                <div className="btn-container">
                  <div className="icon dont-going-icon" />
                  {props.event.totalGoing} Going
                </div>
              )}
              {props.event.isLiked ? (
                <div className="btn-container">
                  <div className="icon like-icon" />
                  I like it
                </div>
              ) : (
                <div className="btn-container">
                  <div className="icon dont-like-icon" />
                  {props.event.totalLike}{' '}
                  {props.event.totalLike > 1 ? 'Like' : 'Likes'}
                </div>
              )}
            </GridCol>
          </GridRow>
        </div>
        <div className="right-panel">
          <img src={props.event.avatar} alt={props.event.title} />
        </div>
      </div>
    ) : (
      <div>
        <GridRow noGutter className="list-title">
          <GridCol width="100">
            <h2>{props.event.title}</h2>
          </GridCol>
        </GridRow>
        <GridRow noGutter className="time-container">
          <GridCol width="100">
            <div className="icon time-icon" />
            <div className="article-datetime">
              {props.event.from} - {props.event.to}
            </div>
          </GridCol>
        </GridRow>
        <GridRow noGutter className="description-container">
          <GridCol width="100">{props.event.description}</GridCol>
        </GridRow>
        <GridRow noGutter className="action-container">
          <GridCol width="100">
            {props.event.isGoing ? (
              <div className="btn-container">
                <div className="icon going-icon" />
                I'm going
              </div>
            ) : (
              <div className="btn-container">
                <div className="icon dont-going-icon" />
                {props.event.totalGoing} Going
              </div>
            )}
            {props.event.isLiked ? (
              <div className="btn-container">
                <div className="icon like-icon" />
                I like it
              </div>
            ) : (
              <div className="btn-container">
                <div className="icon dont-like-icon" />
                {props.event.totalLike}{' '}
                {props.event.totalLike > 1 ? 'Like' : 'Likes'}
              </div>
            )}
          </GridCol>
        </GridRow>
      </div>
    )}
  </div>
);

EventItem.propTypes = {
  event: PropTypes.object.isRequired
};

export default EventItem;
