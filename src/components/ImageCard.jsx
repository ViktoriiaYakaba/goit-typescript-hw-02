import css from './ImageCard.module.css';

 const ImageCard = ({ imageUrl, alt, onClick }) => {
   return (
     <li className={css.card} onClick={onClick}>
       <div className={css.container}>
         <img src={imageUrl} alt={alt}  width="320" height="200"/>
       </div>
     </li>
   );
 };

 export default ImageCard;
