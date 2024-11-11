export interface NEWSData {
  id:   number,
  day:  String,
  news: String,
  img:  string,
  url:  String
}

export interface GALLERYData {
  id:       number,    
  category: String,
  year:     String,
  title:    String,
  content:  String,
  img:      string
}

export interface MEMBERData{
  id:         number,
  graduation: String,
  number:     String,
  name:       String,
}