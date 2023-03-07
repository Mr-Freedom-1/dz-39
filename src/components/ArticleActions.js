import React, { Component } from "react";
import LangContext from "./lang-context";

class ArticleActions extends Component {
  static contextType = LangContext;
  
  render() {
    const { lang } = this.context;
    return (
      <div className="article__actions">
        <button className="article__btn">{lang.read}</button>
      </div>
    );
  }
}

export default ArticleActions;