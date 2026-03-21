import { useState, useCallback } from 'react'
import { Button } from './Button'


export function ParentExample() {
    const [count, ssetCount] = useState(0)
    const [text, setText] = useState('')

    const handleClick = useCallback(() => {
        console.log('button clicked')
    }, [])


    const handleIncrement = useCallback(() => {
        ssetCount(c => c + 1)
    }, [])


    console.log('ParentExample render')


    return (
        <div style = {{ padding: '10px', border: '1px solid #ddd', borderRadius: '4px'}}>
            <p>Count: [count]</p>
            <input
                type = "text"
                value = {text}
                onChange = {(e) => setText(e.target.value)}
                placeholder = "Type something..."
                style = {{ padding: '8px', marginRight: '10px'}}
            />
            <Button onClick = {handleClick} label="Click me"/>
            <Button onClick = {handleIncrement} label = "Increment" />
            <p style = {{ marginTop: '10px', color: '#666', fontSize: '12px'}}>
                Typing in input changes parent state, but buttons don't re-render because callbsck sre stable
            </p>
        </div>
    )
}