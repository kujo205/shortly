
import React, { Children,useRef, createContext, useCallback, useContext, useEffect, useReducer,useState } from 'react'

const url = `https://api.shrtco.de/v2/shorten?url=`;

const data: any[] = [];
const initialState = {
  loading: false,
  data: data,
  error: false,
  message: '',
}
export class Url{
  originalUrl:string;
  shortenedUrl:string;
  requestTime:string;
  constructor(originalUrl:string,shortenedUrl:string){
    this.originalUrl=originalUrl;
    this.shortenedUrl=shortenedUrl;
    this.requestTime=new Date().toISOString();
  }
}

type Action = { type: 'RECIEVED', payload: any[] } |
{ type: 'SEND' } |
{ type: 'ERROR', error: boolean, message: string };

const urlContext = createContext<{ state: typeof initialState, fetchHandler: (query: string) => void,urls:Url[] }>
({ state: initialState,
   fetchHandler: (query: string) => {},
   urls:[] 
});

const loadingStateReducer = (state: typeof initialState, action: Action) => {
  switch (action.type) {
    case 'SEND':
      return {
        ...initialState,
        loading: true,
      }
    case 'RECIEVED':
      return {
        ...initialState,
        data: action.payload,
        loading: false,
      }
    case 'ERROR':
      return {
        ...initialState,
        error: true,
        message: action.message,
        loading: false,
      }


  }

}

// const addToLocalStorage=(url:Url)=>{
//     localStorage.setItem('urls',JSON.stringify([]));
// }

const UrlContextProvider: React.FC<{ children: JSX.Element[]|JSX.Element }> = ({ children }) => {

  const [urls,setUrls]=useState<Url[]>([]);
  const mounted=useRef<boolean>(false);
  const [loadingState, dispatchLoadingState] = useReducer(loadingStateReducer, initialState);


  //
  useEffect(()=>{
    if(!mounted.current){
      let fetchedFromLS=localStorage.getItem('urls');
      
      if(fetchedFromLS){
        let localStorageUrls=JSON.parse(fetchedFromLS!);
        setUrls(localStorageUrls);
      }else{
        localStorage.setItem('urls',JSON.stringify([]));
        setUrls([]);
      }
      mounted.current=true;
      return;
    }
    localStorage.removeItem('urls');
    localStorage.setItem('urls',JSON.stringify([...urls]));
  },[urls]);



  const fetchHandler = useCallback(async (query: string) => {
    dispatchLoadingState({ type: 'SEND' });
    let response;
    try {
      response = await fetch(`${url}${query}`);
      response = await response.json();
      console.log(response);
     

      if(!response.ok)throw new Error('error');
      else{
        
        const newUrl=new Url(response.result.original_link,response.result.full_short_link);
        
        
        let exists;
      
        setUrls(pr=>{
          if(pr.some(e=>e.originalUrl===newUrl.originalUrl)){
            dispatchLoadingState({ type: 'ERROR', message: 'url is already shortened', error: true });
            console.log('duplicate')
            return pr;
          }else{

            return [...pr,newUrl];
          }})
          
      }
      dispatchLoadingState({ type: 'RECIEVED', payload:response });
    } catch (error) {
      console.log(response.error_code);
      let message;
      switch (response.error_code) {
        case 1:
          message = 'the field cannot be empty'
          break;
        case 2:
          message = 'invalid url';
          break;
        default:
          message = 'someting bad occured';
          break;
      }
      dispatchLoadingState({ type: 'ERROR', message: message, error: true });
    }

  }, [])

  return (
    <urlContext.Provider value={{ state: loadingState, fetchHandler,urls }}>
      {children}
    </urlContext.Provider>
  )
}


export const useGlobalContext=()=>useContext(urlContext);
export default UrlContextProvider;