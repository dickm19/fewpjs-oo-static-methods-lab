class Formatter {
  
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string){
    return string.replace(/[^0-9a-zA-Z_'' -]/gi , '')
  }

  static titleize(string){
  
    const ignore = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
    
    let array = string.split(' ')
    let newArray = []

     array.forEach(word =>{
      if (!ignore.includes(word) || array[0] == word){
        newArray.push(this.capitalize(word))
      }else{
        newArray.push(word)
      }
    })
    return newArray.join(" ")
    
   

  }
}