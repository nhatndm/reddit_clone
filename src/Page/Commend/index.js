import React, { Component } from "react";
import "./index.scss";

const data = [
  {
    id: 1,
    content: "this is the reply id 1",
    replies: [
      {
        id: 2,
        content: "this is the reply id 2 belong to id 1",
        replies: []
      }
    ]
  },
  {
    id: 3,
    content: "this is the reply id 3",
    replies: [
      {
        id: 4,
        content: "this is the reply id 4 belong to id 3",
        replies: [
          {
            id: 5,
            content: "this is the reply id 5 belong id 4",
            replies: [
              {
                id: 6,
                content: "this is the reply id 6 belong to id 5",
                replies: []
              },
              {
                id: 7,
                content: "this is the reply id 6 belong to id 5",
                replies: []
              }
            ]
          }
        ]
      }
    ]
  }
];

let sortedCommend = [];

export default class Commend extends Component {
  constructor(props) {
    super(props);
    this.renderHtml = this.renderHtml.bind(this);
    this.sortArray = this.sortArray.bind(this);
  }

  sortArray(data) {
    const dataLength = data.length;

    for (let i = 0; i < dataLength; i++) {
      sortedCommend.push({
        id: data[i].id,
        content: data[i].content
      });

      if (data[i].replies.length > 0) {
        this.sortArray(data[i].replies);
      }
    }
  }

  renderHtml() {
    this.sortArray(data);

    return sortedCommend.map(v => (
      <div className="children" key={v.id} style={{ left: v.left }}>
        <p>id: {v.id}</p>
        <p>content: {v.content}</p>
      </div>
    ));
  }

  render() {
    return <div className="parent">{this.renderHtml()}</div>;
  }
}
