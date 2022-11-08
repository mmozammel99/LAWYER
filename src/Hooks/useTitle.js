import { useEffect } from 'react';

const useTitle = title => {
   useEffect(()=>{
    document.title =`${title} - LAWYER`
   }
    ,[title])
};

export default useTitle;