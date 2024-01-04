import 'bulma/css/bulma.css';
import './App.css';
import  { Course }  from './Course';
import Angular from './images/Angular.jpg';
import Bootstrap from './images/Bootstrap.jpg';
import C from './images/C.jpg';
import FrontEnd from './images/FrontEnd.jpg';

function App() {
  return (
    <div className="App">
      <section className="hero is-link">
        <div className="hero-body">
          <p className="title">
            KURSLARIM
          </p>
        </div>
      </section>
      <div className='container'>
        <section className='section'>
        <div className='columns'>
          <div className='column'>
            <Course image={ Angular } title="Angular" description="Lorem ipsum  dolor sit amet consectetur adipisicing elit. Esse rerum quibusdam  rem dignissimos quae omnis magni minus quaerat earum soluta dolorum  est cum, nostrum recusandae sapiente consequatur dolores! Quod,  suscipit." />
          </div>
          <div className='column'>
            <Course image={ Bootstrap } title="Bootstrap 5" description="Lorem  ipsum dolor sit amet consectetur adipisicing elit. Esse rerum  quibusdam rem dignissimos quae omnis magni minus quaerat earum   soluta dolorum est cum, nostrum recusandae sapiente consequatur   dolores! Quod, suscipit." />
          </div>
          <div className='column'>
            <Course image={ C } title="Komple Web" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse rerum   quibusdam rem dignissimos quae omnis magni minus quaerat earum  soluta dolorum est cum, nostrum recusandae sapiente consequatur  dolores! Quod, suscipit." />
          </div>
          <div className='column'>
            <Course image={ FrontEnd } title="Front-End" description="Lorem   ipsum dolor sit amet consectetur adipisicing elit. Esse rerum   quibusdam rem dignissimos quae omnis magni minus quaerat earum  soluta dolorum est cum, nostrum recusandae sapiente consequatur  dolores! Quod, suscipit." />
          </div>
        </div>
        </section>
      </div>
    </div>
  );
}

export default App;

