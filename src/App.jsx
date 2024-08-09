import { useState } from 'react'
import { allHeroes } from './HeroData';

const App = () => {

  const [favourites, setFavourites] = useState([]);

const handleAddToFav = (hero) => {
  let newFavArr = {...favourites};
  newFavArr.push(hero);
  setFavourites(newFavArr);

};

const handleRemoveToFav = (index) => {
  let newFavArr = {...favourites};
  newFavArr.splice(index, 1);
  setFavourites(newFavArr);

};

  return (
    <>
      <h1>Superhero Wiki</h1>

      <div>
        <h3>FAVOURITES HEROES</h3>
        {favourites.maop((favHero, index) => {
          return <Favourties key={index} favHeroData={favHero} removeFunc={()=> {handleRemove(index)}} />
        })}

      </div>

      <h3>ALL HEROES</h3>

      {allHeroes.map((heroInfo, index)=> {
        return <HeroCard key={index}heroObj={heroInfo} favFunc={handleAddToFav}/>
      })}

    </>
  )
};

const Favourites = ({favHeroData, removefunc}) => {
  return (
    <div className="faves">
      <p>{favHeroData.hero}</p>
      <button id="button" onClick={removeFunc}>X</button>
    </div>
  )
}
const HeroCard = (props) => {
  const [show, setShow] = useState(false)

  return (
    <>
  <p>HERO: {props.heroObj.hero}</p>

  { show && (
      <div>
  <p>INFO: {props.heroObj.info}</p>
  <p>VILLIAN: {props.heroObj.villain}</p>
  </div>

  )
  }

    <button onClick={() => setShow(!show)}>{show ? "HIDE INFO" : "SHOW INFO"}</button>
    <button onClick={() => props.favFunc(props.heroObj)}>ADD TO FAVOURITES</button>
    </>
  )
};
export default App
