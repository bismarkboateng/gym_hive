export const exerciseDBoptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': "07c1b6fb52mshe773721a7011591p109d74jsn53550d3e9cbe",
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};


export const fetchData = async (url, options) => {
    const response = await fetch(`${url}`, options)
    const data = await response.json()

    return data;
}