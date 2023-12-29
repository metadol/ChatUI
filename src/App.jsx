import Header from './components/Header'
import Chat from './components/Chat'
import Send from './components/Send'

const App = () => {
  return (
    <div className='max-w-3xl mx-auto '>
      <Header/>
      <Chat/>
      <Send/>
    </div>
  )
}

export default App