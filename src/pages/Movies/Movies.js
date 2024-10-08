import React, {useEffect, useState} from "react";
import Tmdb from '../../Tmdb'
import '../../App.css';
import MovieRow from "../../components/MovieRow/MovieRow";
import FeaturedMovie from "../../components/FeaturedMovie/FeaturedMovie";
import Header from "../../components/Header/Header";

function Movies() {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(()=>{ //Quando recarregar a página, vai ser chamada essa funcao.

    const loadAll = async () =>{
      //Pegando a lista TOTAL
      let list = await Tmdb.getHomeList();
      //console.log(list);
      setMovieList(list);

      //Pegando o filme em destaque - Featured
      let originals = list.filter(i=>i.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv')
      setFeaturedData(chosenInfo);
    }

    loadAll();
  }, []);
  
  useEffect(()=>{
    const scrollListener = () => {
      if(window.scrollY > 10){
        setBlackHeader(true);
      }else{
        setBlackHeader(false);
      }
    }
    window.addEventListener('scroll', scrollListener);

    return() => {
      window.removeEventListener('scroll', scrollListener);
    }
  },[]);

  return(
    <div className="page">

      <Header black={blackHeader}/>
      
      {featuredData &&
        <FeaturedMovie item={featuredData}/>
      }

      <section className="lists">
        {movieList.map((item, key)=>(
          <MovieRow key={key} title={item.title} items={item.items}/>
        ))}  
      </section>
      
      <footer>
        Dados pegos do site Themoviedb.org
      </footer>

      {movieList.length <= 0 &&
        <div className="loading">
          <img src="https://i.gifer.com/origin/36/36527397c208b977fa3ef21f68c0f7b2_w200.gif" alt="Carregando"/>
        </div>
      }
    </div>
  );
}

export default Movies;
