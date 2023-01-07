import axios from "axios";

const SearchImage = async (item) => {
  const res = await axios.get("https://api.unsplash.com/search/photos/", {
    headers: {
      Authorization: "Client-ID V0K-4f2525khPyY-79lbXwUMhS2STF2OJPZYiWMvXso",
    },
    params: {
      query:item,
    },
  });
   
  return   res.data.results;  
};
export default SearchImage;