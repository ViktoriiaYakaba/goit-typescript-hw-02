import css from './ImageCard.module.css';

 const ImageCard = ({ imageUrl, alt }) => {
   return (
     <li className={css.card}>
       <div className={css.container}>
         <img src={imageUrl} alt={alt}  width="320" height="200"/>
       </div>
     </li>
   );
 };

 export default ImageCard;
