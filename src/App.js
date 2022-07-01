import { useEffect, useState } from 'react';
import { getBasicHeroInfoById } from './requests';
import './App.css';
import Nav from './Components/Nav/Nav';

const featuredHeroesIds = [10, 502, 505];

function App() {
	useEffect(() => {
		fetchAndRenderFeaturedHeroes();
	}, []);

  const [FeaturedHeroesList, setFeaturedHeroesList] = useState([]);

	const fetchAndRenderFeaturedHeroes = async () => {
    let heroes = [];
		for (const heroId of featuredHeroesIds) {

      // getBasicHeroInfoById(heroId).then(hero => {
      //   heroes.push(hero)
      // })

			const data = await getBasicHeroInfoById(heroId);
			heroes.push(data);
		}
    setFeaturedHeroesList(heroes)
    console.log(heroes)
	};

	return (
		<>
			<Nav></Nav>
			<main>
        {FeaturedHeroesList.map(hero => (
          <div>
            <h2>{hero.name}</h2>
            <img src={`https://akabab.github.io/superhero-api/api/images/sm/${hero.slug}.jpg`} alt={`${hero.name} image`} />
          </div>
        ))}
      </main>
			<footer></footer>
		</>
	);
}

export default App;
