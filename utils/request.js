
const base_url = 'https://api.themoviedb.org/3'
const api_key = '0ab53c9b19aa3fbb0992ed14e57eda01'
export const getTrendingMovies = async () =>{
    const res = await fetch(`${base_url}/trending/movie/day?language=en-US&api_key=${api_key}`);
    const data = await res.json();
    console.log(data);
    return data.results;
}
export const getTopMovies = async () =>{
    const res = await fetch(`${base_url}/movie/top_rated?language=en-US&page=1&api_key=${api_key}`);
    const data = await res.json();
    console.log(data);
    return data.results;
}
export const getTrendingTv = async () =>{
    const res = await fetch(`${base_url}/trending/tv/day?language=en-US&api_key=${api_key}`);
    const data = await res.json();
    console.log(data);
    data.results.map( (obj) =>{
        obj.title = obj.name
        obj.release_date = obj.first_air_date
    })
    return data.results;
}
export const getTopTv = async () =>{
    const res = await fetch(`${base_url}/tv/top_rated?language=en-US&page=1&api_key=${api_key}`);
    const data = await res.json();
    console.log(data);
    data.results.map( (obj) =>{
        obj.title = obj.name
        obj.release_date = obj.first_air_date
    })
    return data.results;
}

export const getMovieDetails = async (id) =>{
    const res = await fetch(`${base_url}/movie/${id}?language=en-US&api_key=${api_key}`);
    const data = await res.json();
    console.log(data);
    return data;
}
export const getTvDetails = async (id) =>{
    const res = await fetch(`${base_url}/tv/${id}?language=en-US&api_key=${api_key}`);
    const data = await res.json();
    console.log(data);
    return data;
}


export const getMovieCredits = async (id) =>{
    const res = await fetch(`${base_url}/movie/${id}/credits?language=en-US&api_key=${api_key}`);
    const data = await res.json();
    console.log(data);
    return data;
}

export const getTvCredits = async (id) =>{
    const res = await fetch(`${base_url}/tv/${id}/credits?language=en-US&api_key=${api_key}`);
    const data = await res.json();
    console.log(data);
    return data;
}

export const searchMovies = async (query) =>{
    const res = await fetch(`${base_url}/search/movie?query=${query}&api_key=${api_key}`);
    const data = await res.json();
    console.log(data);
    return data.results;
}
export const searchTv = async (query) =>{
    const res = await fetch(`${base_url}/search/tv?query=${query}&api_key=${api_key}`);
    const data = await res.json();
    console.log(data);
    data.results.map( (obj) =>{
        obj.title = obj.name
        obj.release_date = obj.first_air_date
    })
    return data.results;
}

export const getImages= async (id) =>{
    const res = await fetch(`${base_url}/tv/${id}/images?api_key=${api_key}`);
    const data = await res.json();
    console.log(data);
    return data.backdrops;
}

export const getSimilarMovies = async (id) =>{
    const res = await fetch(`${base_url}/movie/${id}/similar?language=en-US&api_key=${api_key}&page=1`);
    const data = await res.json();
    console.log(data);
    return data.results;
}

export const getSimilarTv = async (id) =>{
    const res = await fetch(`${base_url}/tv/${id}/similar?language=en-US&api_key=${api_key}&page=1`);
    const data = await res.json();
    console.log(data);
    data.results.map( (obj) =>{
        obj.title = obj.name
        obj.release_date = obj.first_air_date
    })
    return data.results;
}
