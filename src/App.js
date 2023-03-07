import React, {Component} from "react";
import ArticleBody from "./components/ArticleBody";
import ArticleActions from "./components/ArticleActions";
import Article from "./components/Article";
import LangContext from "./components/lang-context";

let EN = {
  description: 'Article description:',
  description_text: 'NVIDIA on Azure is bringing AI, networking, and high-performance computing to the enterprise.',
  current_lang: 'EN',
  title: 'NVIDIA NEWS',
  title_state: 'NVIDIA Accelerated AI on Azure',
  read: 'Read'
}

let UA = {
  description: 'Опис статті:',
  description_text: 'NVIDIA на Azure надає підприємствам можливості штучного інтелекту, мереж та високопродуктивних обчислень.',
  current_lang: 'UA',
  title: 'НОВИНИ NVIDIA',
  title_state: 'Прискорений штучний інтелект NVIDIA в Azure',
  read: 'Читати'
}

let langBtns;
class App extends Component{
  constructor(){
    super()
    let savedLang = localStorage.getItem('lang');
    if (savedLang === null) {
      savedLang = 'EN';
    }
    this.state = {
      lang: savedLang === 'UA' ? UA : EN,
    };
  }

  componentDidMount(){
    langBtns = document.querySelectorAll('.lang-btn');
    langBtns[1].classList.add('active');
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.lang !== this.state.lang){
    langBtns.forEach(btn => btn.classList.remove('active'));
    this.state.lang.current_lang === 'UA' ? langBtns[0].classList.add('active')
                                          : langBtns[1].classList.add('active') 
    }
  } 

  SetLangEN(){
    this.setState({lang: EN});
    localStorage.setItem('lang', 'EN');
  }

  SetLangUA(){
    this.setState({lang: UA});
    localStorage.setItem('lang', 'UA');
  }

  render(){
    return (
      <LangContext.Provider value={{lang: this.state.lang}}>
        <div className="wrapper">
          <h1 className="title">{this.state.lang.title}</h1>
          <Article>
            <div className="article__title">
              <h2>{this.state.lang.title_state}</h2>
            </div>
          </Article>
          <div className="lang">
            <button onClick={this.SetLangUA.bind(this)} className="lang-btn">UA</button>
            <button onClick={this.SetLangEN.bind(this)} className="lang-btn">EN</button>
          </div>
        </div>
      </LangContext.Provider>
    )
  }
}

export default App;