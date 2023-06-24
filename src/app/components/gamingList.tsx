'use client'

import { Alert, Checkbox, CircularProgress } from "@mui/material"
import axios from "axios"
import React, { ChangeEvent, useEffect, useRef, useState } from "react"

export default function GamingList(){

  const [gamingList, setGamingList] = useState<any>([])
  const [genreList, setGenreList] = useState<any>([])
  const [loader, setLoader] = useState(false)
  const [writeLabel, setWriteLabel] = useState('')
  const [error, setError] = useState('')
  const [checked, setChecked] = useState<any>([]);
  const [selectedId, setSelectedId] = useState(null)

  interface gamesData {
    title: string, 
    thumbnail: string, 
    genre: string, 
    short_description: string, 
    game_url: string, 
    publisher: string,
    platform: string,
  }
  
  useEffect(() => {
    const gamingApi = async () => {
      try {
        const response = await axios.get('https://games-test-api-81e9fb0d564a.herokuapp.com/api/data/', {
          headers: {
            'dev-email-address': 'wendeson.gomes@live.com'
          },
          timeout: 5000
        });
        const games = response.data;
        setLoader(true);
        console.log(games)
        setGamingList(games);
      } catch (error) {
        // @ts-ignore: Unreachable code error
        if (error.code === 'ECONNABORTED') {
          setError('O servidor demorou para responder, tente mais tarde');
        // @ts-ignore: Unreachable code error
        } else if (error.response && error.response.status >= 500 && error.response.status <= 509) {
          setError('O servidor falhou em responder, tente recarregar a página');
        } else {
          setError('O servidor não conseguiu responder por agora, tente voltar novamente mais tarde');
        }
      }
    };

    gamingApi();
  }, []);

  function searchGaming(event: ChangeEvent<HTMLInputElement>){
    if(event.target.value.trim() === ''){
      event.target.value = '';
    }
    setWriteLabel(event.target.value.toLowerCase())
  }

  const generateGenre = gamingList.map(({ genre }: {genre: string}) => genre)
  const updatedGenreList = [...generateGenre];

  const removeRepeatGenreList = updatedGenreList.filter((valor, indice) => {
    return updatedGenreList.indexOf(valor) === indice
  })

  const filterRemovedGenre = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setGenreList([...genreList, event.target.name]);
    } else {
      const removeGenreList = genreList.filter((element: string) => element !== event.target.name);
      setGenreList(removeGenreList);
    }
  };

  const filter = gamingList.filter(({ title, genre }: { title: string, genre: string }) => {
    const titleLowercase = title.toLowerCase();
    const genreMap = genreList.map((item: { item: string }) => item);
  
    if (genreList.length === 0) {
      return titleLowercase.includes(writeLabel);
    } else if (genreMap.includes(genre)) {
      return titleLowercase.includes(writeLabel);
    }
  });

  const handleLabelClick = (name: {name: string}) => {
    if (checked.includes(name)) {
      setChecked(checked.filter((item: {name: string}) => item !== name));
    } else {
      setChecked([...checked, name]);
    }
  };

  const isCheckedLabel = (name: {name: string}) => {
    return checked.includes(name);
  };

  return (
    <div>
     {loader ?   
     <div className="flex flex-col justify-center items-center overflow-y-hidden">
      <input type="text" name="" id="" onChange={searchGaming} placeholder="Digite o nome do jogo" className="m-4 p-2 w-3/6 bg-white outline-none rounded-lg"/>
      <div className="grid grid-cols-3 sm:grid-cols-5 xl:flex content-center justify-items-center text-sm rounded-lg bg-[#030205] text-[#f2f2f2]">
        {removeRepeatGenreList.map((item) => (
          <div key={item} className="flex justify-center items-center font-bold p-1">
            <Checkbox
              id={item}
              style={{color: 'white', display: 'none'}}
              name={item}
              onChange={filterRemovedGenre}
              inputProps={{ 'aria-label': 'controlled' }}
            />  
            <label htmlFor={item} className={isCheckedLabel(item) ? 'bg-[#ecbe40] p-2 rounded-lg my-1 text-[#0b0913] cursor-pointer' : 'p-2 rounded-lg cursor-pointer'} onClick={() => handleLabelClick(item)}>{item} </label>
          </div>
        ))}
      </div>
      <div className="grid w-4/6 grid-cols-1 content-center justify-items-center gap-1 mt-5 sm:grid-cols-2 xl:grid-cols-3">
        {filter.map((item: gamesData) => (
        <div key={item.title} className="bg-[#030205] text-[#f2f2f2] m-2 flex flex-col rounded-lg overflow-hidden hover:scale-105">
          <a href={item.game_url} target="_blank">
            <p className="m-2 p-2 inline-block bg-[#f2f2f2] text-[#030205] rounded-lg text-xs absolute">{item.platform}</p>  
            <img src={item.thumbnail} alt={item.title} className="w-full h-5/12"/>
            <div className="flex justify-between items-center m-2 bg-[#f2f2f2] rounded-lg">
              <h1 className="p-2 font-bold text-[#0b0913]">{item.title.toUpperCase()}</h1>
              <p className="m-2 p-2 inline-block bg-[#ec4040] rounded-lg text-xs">{item.publisher}</p>
            </div>
            <p className="m-2 text-sm">{item.short_description}</p>
            <p className="m-2 p-2 inline-block bg-[#ecbe40] rounded-lg text-xs">{item.genre}</p>  
          </a>
        </div>
        ))}
      </div> 
     </div >
    : 
    <div className='flex flex-col justify-center items-center overflow-y-hidden'>
      {error !== '' && <Alert className="m-4 w-3/6" severity="error">{error}</Alert>}
      <input type="text" name="" id="" onChange={searchGaming} className="m-4 p-2 w-3/6 bg-[#d6d6d6] outline-none rounded-lg" disabled/>
      <CircularProgress className="mt-5" />
    </div>
    }
    </div>
  )
}