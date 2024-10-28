import '../resources/tailwind.css'
import { render } from 'solid-js/web'

function App() {
  return(
    <div class="my-28">

      <h1 class="text-4xl lg:text-6xl text-blue-500 text-center italic">
        Welcome! </h1>

    </div>
  )
}

render(App,document.getElementById('webapp')!)
