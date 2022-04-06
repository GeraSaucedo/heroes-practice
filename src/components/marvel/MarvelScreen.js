import React from 'react'
import { HeroesList } from '../hero/HeroesList'

export const MarvelScreen = () => {
  return (
    <div>
        <h1>MarvelScreen</h1>
        <HeroesList publisher={'Marvel Comics'} />
    </div>
  )
}
