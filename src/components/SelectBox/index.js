import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./index.scss";

const SelectItem = ({ Icon, text, onClick, value, defaultItem }) => {
  if (defaultItem) {
    return (
      <div className="select-item default" onClick={onClick}>
        <Icon height={20} width={20} />
        {text}
      </div>
    );
  } else {
    return (
      <div className="select-item">
        <Link to={value} onClick={onClick}>
          <Icon height={20} width={20} />
          {text}
        </Link>
      </div>
    );
  }
};

const SelectComponentTitle = ({ showTitle, title }) => {
  if (showTitle) {
    return <p className="select-component-title">{title}</p>;
  }

  return null;
};

export default class Select extends Component {
  state = {
    showList: false
  };

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
    this.handleOnClickItem = this.handleOnClickItem.bind(this);
  }

  showList = e => {
    if (this.node.contains(e.target)) {
      return this.setState(preState => {
        return { showList: !preState.showList };
      });
    }

    this.setState({ showList: false });
  };

  handleClick() {
    if (!this.state.showList) {
      // attach/remove event handler
      document.addEventListener("click", this.handleOutsideClick, false);
    } else {
      document.removeEventListener("click", this.handleOutsideClick, false);
    }

    this.setState(prevState => ({
      showList: !prevState.showList
    }));
  }

  handleOutsideClick(e) {
    // ignore clicks on the component itself
    if (this.node.contains(e.target)) {
      return;
    }

    this.handleClick();
  }

  handleOnClickItem(v) {
    const { onClickItem } = this.props;
    return () => {
      onClickItem(v);
    };
  }

  render() {
    const { showList } = this.state;
    const { data, defaultItem, showTitle, title } = this.props;
    return (
      <div className="select-component" ref={node => (this.node = node)}>
        <SelectComponentTitle showTitle={showTitle} title={title} />
        {Object.keys(defaultItem).length > 0 ? (
          <SelectItem
            Icon={defaultItem.icon}
            text={defaultItem.text}
            onClick={this.handleClick}
            defaultItem
          />
        ) : (
          "Please select item"
        )}
        {showList ? (
          <div className="list-wrapper">
            {data.map(v => (
              <SelectItem
                key={v.id}
                Icon={v.icon}
                text={v.text}
                value={v.value}
                onClick={this.handleOnClickItem(v)}
              />
            ))}
          </div>
        ) : null}
      </div>
    );
  }
}
