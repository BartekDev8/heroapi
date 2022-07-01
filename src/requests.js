import axios from 'axios';

export const getBasicHeroInfoById = async id => {
	// get NAME
    const { data: name} = await axios.get(`https://akabab.github.io/superhero-api/api/id/${id}.json`);

    // get POWERSTATS
    const { data: powerstats} = await axios.get(`https://akabab.github.io/superhero-api/api/powerstats/${id}.json`);

    // get IMAGE
	const { data: slug} = await axios.get(`https://akabab.github.io/superhero-api/api/id/${id}.json`);

    // console.log(image, powerstats, powerstats.name)
    return { name: name.name, powerstats, slug: slug.slug }
};
