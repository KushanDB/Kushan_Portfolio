import React, {useEffect, useState} from 'react'

export default function Typewriter({words=[], speed=80, pause=1500}){
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [blink, setBlink] = useState(true)
  const [reverse, setReverse] = useState(false)

  useEffect(()=>{
    if(index >= words.length) setIndex(0)

    const timeout = setTimeout(()=>{
      setSubIndex(prev => prev + (reverse ? -1 : 1))
    }, speed)

    return ()=> clearTimeout(timeout)
  },[subIndex, index, reverse, words, speed])

  useEffect(()=>{
    if(!reverse && subIndex === words[index].length){
      setTimeout(()=> setReverse(true), pause)
    }
    if(reverse && subIndex === 0){
      setReverse(false)
      setIndex(prev => (prev + 1) % words.length)
    }
  },[subIndex, reverse, index, words, pause])

  useEffect(()=>{
    const blinkTimeout = setInterval(()=> setBlink(b => !b), 500)
    return ()=> clearInterval(blinkTimeout)
  },[])

  return (
    <span className="typewriter">
      {words[index].substring(0, subIndex)}<span className={`cursor ${blink? 'blink':''}`}>|</span>
    </span>
  )
}
