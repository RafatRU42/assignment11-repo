import React, { useEffect } from 'react';

const UseTitle = (title) => {
 useEffect(()=>{
    document.title=`${title}-Service Review`
 },[title])
};

export default UseTitle;