export interface Iuser { 
   page:number ; 
   per_page:number; 
   total:number; 
   total_pages:number;
   data :[{
      id:number ,
     name:string , 
     year:number , 
     color:number,
     pantone_value:string
   }];
   support:{
    url:string, 
    text:string, 

   };

}
