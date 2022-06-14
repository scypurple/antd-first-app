import React from 'react'
import { NavLink, Routes, Route } from 'react-router-dom'
import ListItem from './ListItem/ListItem'

// routes
import Home from '../../pages/Home'
import Search from '../../pages/Search'
import Library from '../../pages/Library'

// antd
import {  } from 'antd'
import {HomeOutlined, SearchOutlined, UnorderedListOutlined} from '@ant-design/icons'


function Sidebar() {
  return (
    <div>
      <header style={{margin: "20px auto"}}>
        <img 
        width={100} 
        alt='spotify-logo'  
        src='https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg'
        />
      </header>
      <NavLink to='/'>
        <ListItem name='主页' icon={<HomeOutlined/>} />
      </NavLink>
      <NavLink to='/search'>
        <ListItem name='搜索' icon={<SearchOutlined />} />
      </NavLink>
      <NavLink to='/library'>
        <ListItem name='音乐库' icon={<UnorderedListOutlined />} />
      </NavLink>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/search' element={<Search />} />
        <Route path='/library' element={<Library />} />
      </Routes>
    </div>

  )
}

export default Sidebar