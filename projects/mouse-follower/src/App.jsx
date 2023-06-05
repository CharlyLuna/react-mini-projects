import { useEffect, useState } from 'react'

const App = () => {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  // Pointer move
  useEffect(() => {
    const handlePointerMove = (event) => {
      const { clientX, clientY } = event
      setPosition({ x: clientX, y: clientY })
    }
    if (enabled) {
      window.addEventListener('pointermove', handlePointerMove)
    }
    return () => {
      window.removeEventListener('pointermove', handlePointerMove)
    }
  }, [enabled])

  // Change body classname
  useEffect(() => {
    document.body.classList.toggle('no-cursor', enabled)

    return () => {
      document.body.classList.remove('no-cursor')
    }
  }, [enabled])

  return (
    <main>
      <div style={
      {
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        border: '1px solid #fff',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 40,
        height: 40,
        transform: `translate(${position.x}px, ${position.y}px)`,
        visibility: enabled ? 'visible' : 'hidden'
      }
    }
      />
      <h3>Mouse follower</h3>
      <button
        onClick={() => setEnabled(!enabled)}
      >
        {enabled ? 'Disable' : 'Enable'} follow pointer
      </button>
    </main>
  )
}

export default App
