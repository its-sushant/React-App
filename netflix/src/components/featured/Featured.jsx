import { InfoOutlined, PlayArrow } from '@material-ui/icons';
import React from 'react'
import "./featured.scss";

export default function Featured({type}) {
  return (
    <div className='featured'>
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
        <img src="https://wallpaper.dog/large/969723.jpg" alt="" />
        <div className="info">
          <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/eb009c12-1c19-447b-b3b8-1c85659e0556/d2um2vo-88f6b19e-7acc-4026-89a2-0977b38094e8.jpg" alt="" />
          <span className='desc'>
            bdhfhdmvbdvjdhfjkghdj,hhjdhjddjgdjfgjkdhfguksdhkfsj,dnfshmj,hmsfhffwgksdjybbfuyegflhddyd sggsjkdhgsygdccj,svdkuuhxhjsjbstfuywgkbsdyfgsdjgfsjdbdjmdgfuhsdukusdfsd sdvsdffgsydgfjsdkusgddkjfhsdyifd 
            mnfdhhdgkhjdfjshdfjhsd,gfsjjdfkshdlkjsdukhfkshdfsdjdfkhsldhstdfywnaskhs sytssdjlisho8wepeu sfjhdfkdgfishduhsddjsdd
            jsdhkfhsddfhskdjfusdghfljsdujs;dkf;osdklisdfo;isodjfkusddfytdhfiuhfkuhdlifd
            dhfuhdljodkf;odkffidjlfjddffjliifuudhljflijdldfjdlifjlidjkuhdfsdtfysldidjfoudyd duhfisdufudujlijldidfoisdudflih
          </span>
          <div className="buttons">
            <button className="play">
              <PlayArrow/>
              <span>Play</span>
            </button>
            <button className="more">
              <InfoOutlined/>
              <span>Info</span>
            </button>
          </div>
        </div>
    </div>
  )
}
