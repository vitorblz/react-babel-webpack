class DataApi{

  constructor(rawData){
    this.rawData = rawData;
  }

  mapIntoObject(array){
    return array.reduce((prev,current)=>{
      prev[current.id] = current;
      return prev;
    },{});
  }

  getArticles(){
    return this.mapIntoObject(this.rawData.articles);
  }

  getAuthors(){
    return this.mapIntoObject(this.rawData.authors);
  }
}

export default DataApi;