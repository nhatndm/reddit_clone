import React, { Component } from "react";
import { CardView, ClassicView, CompactView } from "../../components/View";

import { connect } from "react-redux";
import { CLASSICVIEW, COMPACTVIEW, CARDVIEW } from "../../redux/app/type";
import "./index.scss";

class DotaPage extends Component {
  handleRenderContent() {
    const { viewMode } = this.props;

    switch (viewMode) {
      case COMPACTVIEW:
        return <CompactView />;
      case CLASSICVIEW:
        return <ClassicView />;
      default:
        return <CardView />;
    }
  }

  render() {
    const { viewMode } = this.props;

    return (
      <div
        className={`dota-page ${
          viewMode === CARDVIEW ? "container" : "container-fluid"
        }`}
      >
        {this.handleRenderContent()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    viewMode: state.app.viewMode
  };
};

export default connect(
  mapStateToProps,
  null
)(DotaPage);
