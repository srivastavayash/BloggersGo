import {Navbar,News,Jobs,Blogs,Events,Hero,Footer} from './Components'
const App = () => (
  <div className='scroll-smooth'>
    <div>
      <Navbar />
    </div>
    <div>
      <Hero />
    </div>
    <div>
      <Blogs />
      </div>
      <div>
      <Events />
      </div>
      <div>
      <Jobs />
      <News />
      <Footer />
    </div>
  </div>
);

export default App
