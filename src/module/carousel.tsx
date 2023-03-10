import { useEffect, useRef, useState } from 'react'
import { Box, BoxContainer, ButtonLogin, Frame, Wrapper } from './style'
import Image1 from './../images/image1.jpg'
import Image2 from './../images/image2.jpg'
import Image3 from './../images/image3.jpg'
import Image4 from './../images/image4.jpg'
import Image5 from './../images/image5.jpg'
import Image6 from './../images/image6.jpg'
import Image7 from './../images/image7.jpg'
import Image8 from './../images/image8.jpg'

const TOTAL_SLIDES = 3

export const Caraousel = () => {
  const [current, setCurrent] = useState(0)
  const ref = useRef(null)
  const message = localStorage.getItem('user') && localStorage.getItem('pass')

  const next = () => {
    if (current >= TOTAL_SLIDES) return
    else setCurrent(current + 1)
  }

  const prev = () => {
    if (current === 0) return
    else setCurrent(current - 1)
  }

  const desired = (e: any) => {
    setCurrent(Number(e.target.id))
  }

  useEffect(() => {
    //@ts-ignore
    ref.current.style.transition = 'all 0.2s ease-in-out'
    //@ts-ignore
    ref.current.style.transform = `translateX(-${current}00%)`

    setTimeout(() => {
      next()
    }, 5000)
  }, [current])

  return (
    <Wrapper>
      <Frame>
        <BoxContainer ref={ref}>
          <Box>
            <img src={message ? Image1 : Image5} />
          </Box>
          <Box>
            <img src={message ? Image2 : Image6} />
          </Box>
          <Box>
            <img src={message ? Image3 : Image7} />
          </Box>
          <Box>
            <img src={message ? Image4 : Image8} />
          </Box>
        </BoxContainer>
      </Frame>
      <BoxContainer>
        <div className='button' onClick={prev}>
          Prev
        </div>
        <div className='button' onClick={next}>
          Next
        </div>
      </BoxContainer>
      <div className='button-2-container'>
        {[0, 1, 2, 3].map((num) => (
          <div
            className={`button-2 ${num === current && 'active'}`}
            onClick={desired}
            id={num.toString()}
            key={num}
          />
        ))}
      </div>
    </Wrapper>
  )
}
