import React, { Component } from "react";
import LangContext from "./lang-context";
import ArticleActions from "./ArticleActions";
import ArticleBody from "./ArticleBody";

class Article extends Component {
  static contextType = LangContext;
  
  render() {
    const { lang } = this.context;
    return (
      <div className="article">
        <div className="article__title">
          <h2>{lang.title_state}</h2>
        </div>
        <ArticleBody />
        <ArticleActions />
      </div>
    );
  }
}

export default Article;