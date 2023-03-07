import React, { Component } from "react";
import LangContext from "./lang-context";

class ArticleBody extends Component {
  static contextType = LangContext;
  
  render() {
    const { lang } = this.context;
    return (
      <div className="article__body">
        <h3 className="article__description">{lang.description}</h3>
        <p className="article__description--text">{lang.description_text}</p>
      </div>
    );
  }
}

export default ArticleBody;