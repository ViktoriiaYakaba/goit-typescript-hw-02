import ImageCard from './ImageCard';
import css from "./ImageGallery.module.css";


const ImageGallery = ({ images }) => {

   return (
     <ul className={css.imageGallery}>
       {images.map((image) => (
         <ImageCard key={image.id} imageUrl={image.small} alt={image.alt}/>
       ))}
     </ul>
   );
 };

 export default ImageGallery;
