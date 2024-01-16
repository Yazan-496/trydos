import React from 'react'
import "./spinner.css"
function Spinner(props) {
  return ( 
    <div className={"spin-cont "+(props.no&&" no-tran ") + props.className}>
        <svg className='spinner-component' xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15">
            <g id="loading" transform="translate(0)">
                <path id="Path_18912" data-name="Path 18912" d="M7.5,3.2a.531.531,0,0,1-.531-.531V.531a.531.531,0,1,1,1.062,0V2.67A.531.531,0,0,1,7.5,3.2Z"/>
                <path id="Path_18915" data-name="Path 18915" d="M9.325,3.56a.531.531,0,0,1-.491-.732L9.642.847a.531.531,0,0,1,.983.4L9.817,3.229A.531.531,0,0,1,9.325,3.56Z" opacity="0.94"/>
                <path id="Path_18921" data-name="Path 18921" d="M10.915,4.616a.531.531,0,0,1-.375-.906L12.052,2.2a.531.531,0,0,1,.751.751L11.29,4.46A.529.529,0,0,1,10.915,4.616Z" opacity="0.88"/>
                <path id="Path_18918" data-name="Path 18918" d="M11.972,6.206a.531.531,0,0,1-.2-1.023l1.981-.809a.531.531,0,1,1,.4.983l-1.981.809A.529.529,0,0,1,11.972,6.206Z" opacity="0.82"/>
                <path id="Path_18926" data-name="Path 18926" d="M14.469,8.031H12.33a.531.531,0,0,1,0-1.062h2.139a.531.531,0,0,1,0,1.062Z" opacity="0.76"/>
                <path id="Path_18920" data-name="Path 18920" d="M13.952,10.665a.529.529,0,0,1-.2-.04l-1.981-.809a.531.531,0,1,1,.4-.983l1.981.809a.531.531,0,0,1-.2,1.023Z" opacity="0.7"/>
                <path id="Path_18924" data-name="Path 18924" d="M12.428,12.959a.529.529,0,0,1-.375-.156L10.54,11.29a.531.531,0,0,1,.751-.751L12.8,12.052a.531.531,0,0,1-.375.906Z" opacity="0.64"/>
                <path id="Path_18914" data-name="Path 18914" d="M10.134,14.483a.531.531,0,0,1-.492-.33l-.809-1.981a.531.531,0,0,1,.983-.4l.809,1.981a.531.531,0,0,1-.491.732Z" opacity="0.58"/>
                
                <path id="Path_18913" data-name="Path 18913" d="M7.5,15a.531.531,0,0,1-.531-.531V12.33a.531.531,0,0,1,1.062,0v2.14A.531.531,0,0,1,7.5,15Z" opacity="0.52"/>
                <path id="Path_18916" data-name="Path 18916" d="M4.866,14.483a.531.531,0,0,1-.491-.732l.809-1.981a.531.531,0,0,1,.983.4l-.809,1.981A.531.531,0,0,1,4.866,14.483Z" opacity="0.46"/>
                 <path id="Path_18922" data-name="Path 18922" d="M2.572,12.959a.531.531,0,0,1-.375-.906L3.71,10.54a.531.531,0,0,1,.751.751L2.948,12.8a.529.529,0,0,1-.375.156Z" opacity="0.4"/>
                
                <path id="Path_18917" data-name="Path 18917" d="M1.048,10.665a.531.531,0,0,1-.2-1.023l1.981-.809a.531.531,0,1,1,.4.983l-1.981.809A.529.529,0,0,1,1.048,10.665Z" opacity="0.36"/>
                <path id="Path_18925" data-name="Path 18925" d="M2.67,8.031H.531a.531.531,0,1,1,0-1.062H2.67a.531.531,0,1,1,0,1.062Z" opacity="0.3"/>
               
                <path id="Path_18919" data-name="Path 18919" d="M3.028,6.206a.529.529,0,0,1-.2-.04L.847,5.358a.531.531,0,1,1,.4-.983l1.981.809a.531.531,0,0,1-.2,1.023Z" opacity="0.24"/>
                <path id="Path_18923" data-name="Path 18923" d="M4.085,4.616A.529.529,0,0,1,3.71,4.46L2.2,2.948A.531.531,0,0,1,2.948,2.2L4.46,3.71a.531.531,0,0,1-.375.906Z" opacity="0.18"/>
            </g>
            </svg>

    </div>
  )
}

export default Spinner