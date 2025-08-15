"use client";
import React from 'react'
import { Button } from '../ui/btn/Button.component'
import { useState,useEffect } from 'react';
import'./Container.scss'
import Board01 from './BoardContent/Board01/Board01';
import Board02 from './BoardContent/Board02/Board02';
import Board03 from './BoardContent/Board03/Board03';
import Board04 from './BoardContent/Board04/Board04';
import Board05 from './BoardContent/Board05/Board05';
import Board06 from './BoardContent/Board06/Board06';
import Board07 from './BoardContent/Board07/Board07';
const MainContainer = () =>{
  
  return (
    <div>
        <Board01/>
        <Board02/>
        <Board03/>
        <Board04/>
        <Board05/>
        <Board06/>
        <Board07/>
        <div>
            <h1>Board 08</h1>
        </div>
        <div>
            <h1>Board 09</h1>
        </div>
    </div>

  )
}

export default MainContainer
