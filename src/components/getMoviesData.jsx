export const getMoviesData=async({params})=>{
    console.log(params);
    try{
     const response=await fetch(`https://www.omdbapi.com/?i=${params.movieID}&apikey=${import.meta.env.VITE_API_KEY}`);
     const data= await response.json();
     return data;
    }catch(error){
        console.log(error);
    }
}