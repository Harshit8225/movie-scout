export const getAPIData=async()=>{
    try{
     const response=await fetch(`https://www.omdbapi.com/?s=marvel&apikey=${import.meta.env.VITE_API_KEY}`);
     const data= await response.json();
     return data;
    }catch(error){
        console.log(error);
    }
}