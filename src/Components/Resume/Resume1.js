import React from 'react';
import { Education } from './Education';
import { Skill } from './Skills';
import { Tour } from './Tour';
import { Nav } from '../Home/NavHome';
export function Resume1(){
    return(
        <div>
            <Nav />
            <Education></Education>
            <Skill></Skill>
            <Tour></Tour>
        </div>
    )
}