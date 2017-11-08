export class Result {
    constructor(
      public feed: Feed
    ){}
  }
  
  class Feed {
    constructor(
      public entry: any
    ){}
  }
  
//   class Entry {
//     constructor(
//       public category: any[],
//       public content: any[],
//       public gsx$comment: any[],
//       public gsx$name: any[],
//       public gsx$timestamp: any[],
//       public id,
//       public link,
//       public title,
//       public updated
//     ){}
//   }