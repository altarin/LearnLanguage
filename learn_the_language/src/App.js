import styles from './App.css';
import './style.scss';
import React from 'react';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import WordCardFront from './components/wordCardFront/wordCardFront';
import WordCardBack from './components/wordCardBack/wordCardBack';
import WordList from './components/wordList/wordList';

const words = [
  {
      id: 1,
      text: 'authoring',
      transl: 'создание'
  },
  {
      id: 2,
      text: 'initialization',
      transl: 'инициализация'
  },
  {
      id: 3,
      text: 'compatibility',
      transl: 'совместимость'
  },
  {
      id: 4,
      text: 'deprecation',
      transl: 'устаревание'
  }
]


function App() {
  return (
    <div className={styles.App}>
      
        <Header name="Learning the Language" login=""></Header>
          <div className='container'>
            <div className="button-back">Назад</div>

              <div className='card'>
                  <div className='front'>
                    <WordCardFront word="developer" transcription="[dəˈveləpər]"></WordCardFront>
                  </div>

                  <div className='back'>
                    <WordCardBack translation="Разработчик"></WordCardBack>
                  </div>
              </div>

            <div className="button-forward">Вперед</div>
          </div>

          <div className='App-table'>
            {words.map(item => <WordList key={item.id} text={item.text} transl={item.transl}/>)}
          </div> 
        
        
        <Footer name="Learning the Language" copyright="Copyright © 2023 Study-Alt  All rights reserved." home="home" about="about" faq="faq" contacts="contacts" ></Footer>
        
    </div>
  );
}

export default App;