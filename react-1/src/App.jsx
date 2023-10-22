import { useState } from 'react'
import './App.css'
import { BaiTapLayoutComponent } from './BaiTapLayoutComponent/BaiTapLayoutComponent'

function App() {
  const [count, setCount] = useState(0)
    return (
      <div className="description" tabIndex="1">
        <BaiTapLayoutComponent/>
      </div>
  )
  }

export default App
