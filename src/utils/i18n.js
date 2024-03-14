import languageConfig from "./lang.json"

const i18n = ( keyword ,placerholder,value) => {

    const lang = localStorage.getItem("lang") || "en";

    const text = languageConfig[lang][keyword];

   if(placerholder && value){
    return text.replace(placerholder,value);
   }

   return text;

}
export default i18n;