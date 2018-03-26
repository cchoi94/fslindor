import React from 'react';
import { render } from 'react-dom';
import Gallery from 'react-grid-gallery';
import Navbar from '../navbar/navbar';

class PhotoGallery extends React.Component { 

    
    render () { 
        const IMAGES =
    [{
            src: "/assets/images/gallery/1.jpeg",
            thumbnail: "/assets/images/gallery/1.jpeg",
            thumbnailWidth: 320,
            thumbnailHeight: 320,
    },{
            src: "/assets/images/gallery/2.jpeg",
            thumbnail: "/assets/images/gallery/2.jpeg",
            thumbnailWidth: 320,
            thumbnailHeight: 320,
    },{
            src: "/assets/images/gallery/3.png",
            thumbnail: "/assets/images/gallery/3.png",
            thumbnailWidth: 320,
            thumbnailHeight: 320
    },{
        src: "/assets/images/gallery/4.jpg",
        thumbnail: "/assets/images/gallery/4.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 320,
    },{
        src: "/assets/images/gallery/5.jpg",
        thumbnail: "/assets/images/gallery/5.jpg",
        thumbnailWidth: 420,
        thumbnailHeight: 420,
    },{
        src: "/assets/images/gallery/6.jpg",
        thumbnail: "/assets/images/gallery/6.jpg",
        thumbnailWidth: 420,
        thumbnailHeight: 420,
    },{
        src: "/assets/images/gallery/7.jpg",
        thumbnail: "/assets/images/gallery/7.jpg",
        thumbnailWidth: 420,
        thumbnailHeight: 420,
    },{
        src: "/assets/images/gallery/8.jpg",
        thumbnail: "/assets/images/gallery/8.jpg",
        thumbnailWidth: 420,
        thumbnailHeight: 420,
    },{
        src: "/assets/images/gallery/9.jpg",
        thumbnail: "/assets/images/gallery/9.jpg",
        thumbnailWidth: 420,
        thumbnailHeight: 420,
    },{
        src: "/assets/images/gallery/10.jpg",
        thumbnail: "/assets/images/gallery/10.jpg",
        thumbnailWidth: 420,
        thumbnailHeight: 420,
    },
    {
        src: "/assets/images/gallery/11.jpg",
        thumbnail: "/assets/images/gallery/11.jpg",
        thumbnailWidth: 420,
        thumbnailHeight: 420,
    },
    {
        src: "/assets/images/gallery/12.jpg",
        thumbnail: "/assets/images/gallery/12.jpg",
        thumbnailWidth: 420,
        thumbnailHeight: 420,
    },{
        src: "/assets/images/gallery/13.jpg",
        thumbnail: "/assets/images/gallery/13.jpg",
        thumbnailWidth: 420,
        thumbnailHeight: 420,
    },{
        src: "/assets/images/gallery/14.jpg",
        thumbnail: "/assets/images/gallery/14.jpg",
        thumbnailWidth: 420,
        thumbnailHeight: 420,
    },{
        src: "/assets/images/gallery/15.jpg",
        thumbnail: "/assets/images/gallery/15.jpg",
        thumbnailWidth: 420,
        thumbnailHeight: 420,
    },{
        src: "/assets/images/gallery/16.jpg",
        thumbnail: "/assets/images/gallery/16.jpg",
        thumbnailWidth: 420,
        thumbnailHeight: 420,
    },{
        src: "/assets/images/gallery/17.jpg",
        thumbnail: "/assets/images/gallery/17.jpg",
        thumbnailWidth: 420,
        thumbnailHeight: 420,
    },{
        src: "/assets/images/gallery/18.jpg",
        thumbnail: "/assets/images/gallery/18.jpg",
        thumbnailWidth: 420,
        thumbnailHeight: 420,
    },{
        src: "/assets/images/gallery/19.jpg",
        thumbnail: "/assets/images/gallery/19.jpg",
        thumbnailWidth: 420,
        thumbnailHeight: 420,
    },{
        src: "/assets/images/gallery/20.jpg",
        thumbnail: "/assets/images/gallery/20.jpg",
        thumbnailWidth: 420,
        thumbnailHeight: 420,
    },{
        src: "/assets/images/gallery/21.jpg",
        thumbnail: "/assets/images/gallery/21.jpg",
        thumbnailWidth: 420,
        thumbnailHeight: 420,
    },{
        src: "/assets/images/gallery/22.jpg",
        thumbnail: "/assets/images/gallery/22.jpg",
        thumbnailWidth: 420,
        thumbnailHeight: 420,
    },{
        src: "/assets/images/gallery/23.jpg",
        thumbnail: "/assets/images/gallery/23.jpg",
        thumbnailWidth: 420,
        thumbnailHeight: 420,
    },{
        src: "/assets/images/gallery/24.jpg",
        thumbnail: "/assets/images/gallery/24.jpg",
        thumbnailWidth: 420,
        thumbnailHeight: 420,
    },{
        src: "/assets/images/gallery/25.jpg",
        thumbnail: "/assets/images/gallery/25.jpg",
        thumbnailWidth: 420,
        thumbnailHeight: 420,
    },{
        src: "/assets/images/gallery/26.jpg",
        thumbnail: "/assets/images/gallery/26.jpg",
        thumbnailWidth: 420,
        thumbnailHeight: 420,
    },{
        src: "/assets/images/gallery/27.jpg",
        thumbnail: "/assets/images/gallery/27.jpg",
        thumbnailWidth: 420,
        thumbnailHeight: 420,
    },{
        src: "/assets/images/gallery/28.jpg",
        thumbnail: "/assets/images/gallery/28.jpg",
        thumbnailWidth: 420,
        thumbnailHeight: 420,
    },{
        src: "/assets/images/gallery/29.jpg",
        thumbnail: "/assets/images/gallery/29.jpg",
        thumbnailWidth: 420,
        thumbnailHeight: 420,
    },{
        src: "/assets/images/gallery/30.jpg",
        thumbnail: "/assets/images/gallery/30.jpg",
        thumbnailWidth: 420,
        thumbnailHeight: 420,
},{
    src: "/assets/images/gallery/31.jpeg",
    thumbnail: "/assets/images/gallery/31.jpeg",
    thumbnailWidth: 420,
    thumbnailHeight: 420,
},{
    src: "/assets/images/gallery/32.jpeg",
    thumbnail: "/assets/images/gallery/32.jpeg",
    thumbnailWidth: 420,
    thumbnailHeight: 420,
},{
    src: "/assets/images/gallery/33.jpeg",
    thumbnail: "/assets/images/gallery/33.jpeg",
    thumbnailWidth: 420,
    thumbnailHeight: 420,
},{
    src: "/assets/images/gallery/34.jpeg",
    thumbnail: "/assets/images/gallery/34.jpeg",
    thumbnailWidth: 420,
    thumbnailHeight: 420,
},{
    src: "/assets/images/gallery/35.jpeg",
    thumbnail: "/assets/images/gallery/35.jpeg",
    thumbnailWidth: 420,
    thumbnailHeight: 420,
},{
    src: "/assets/images/gallery/36.jpeg",
    thumbnail: "/assets/images/gallery/36.jpeg",
    thumbnailWidth: 420,
    thumbnailHeight: 420,
},{
    src: "/assets/images/gallery/37.jpeg",
    thumbnail: "/assets/images/gallery/37.jpeg",
    thumbnailWidth: 420,
    thumbnailHeight: 420,
},{
    src: "/assets/images/gallery/38.jpeg",
    thumbnail: "/assets/images/gallery/38.jpeg",
    thumbnailWidth: 420,
    thumbnailHeight: 420,
},{
    src: "/assets/images/gallery/39.jpeg",
    thumbnail: "/assets/images/gallery/39.jpeg",
    thumbnailWidth: 420,
    thumbnailHeight: 420,
},{
    src: "/assets/images/gallery/40.jpeg",
    thumbnail: "/assets/images/gallery/40.jpeg",
    thumbnailWidth: 420,
    thumbnailHeight: 420,
},{
    src: "/assets/images/gallery/41.jpeg",
    thumbnail: "/assets/images/gallery/41.jpeg",
    thumbnailWidth: 420,
    thumbnailHeight: 420,
},{
    src: "/assets/images/gallery/42.jpeg",
    thumbnail: "/assets/images/gallery/42.jpeg",
    thumbnailWidth: 420,
    thumbnailHeight: 420,
},{
    src: "/assets/images/gallery/43.jpeg",
    thumbnail: "/assets/images/gallery/43.jpeg",
    thumbnailWidth: 420,
    thumbnailHeight: 420,
},{
    src: "/assets/images/gallery/44.jpeg",
    thumbnail: "/assets/images/gallery/44.jpeg",
    thumbnailWidth: 420,
    thumbnailHeight: 420,
},{
    src: "/assets/images/gallery/45.jpeg",
    thumbnail: "/assets/images/gallery/45.jpeg",
    thumbnailWidth: 420,
    thumbnailHeight: 420,
},{
    src: "/assets/images/gallery/46.jpeg",
    thumbnail: "/assets/images/gallery/46.jpeg",
    thumbnailWidth: 420,
    thumbnailHeight: 420,
},{
    src: "/assets/images/gallery/47.jpeg",
    thumbnail: "/assets/images/gallery/47.jpeg",
    thumbnailWidth: 420,
    thumbnailHeight: 420,
},{
    src: "/assets/images/gallery/48.jpeg",
    thumbnail: "/assets/images/gallery/48.jpeg",
    thumbnailWidth: 420,
    thumbnailHeight: 420,
},{
    src: "/assets/images/gallery/50.jpeg",
    thumbnail: "/assets/images/gallery/50.jpeg",
    thumbnailWidth: 420,
    thumbnailHeight: 420,
},{
    src: "/assets/images/gallery/51.jpeg",
    thumbnail: "/assets/images/gallery/51.jpeg",
    thumbnailWidth: 420,
    thumbnailHeight: 420,
},{
    src: "/assets/images/gallery/52.jpeg",
    thumbnail: "/assets/images/gallery/52.jpeg",
    thumbnailWidth: 420,
    thumbnailHeight: 420,
},{
    src: "/assets/images/gallery/53.jpeg",
    thumbnail: "/assets/images/gallery/53.jpeg",
    thumbnailWidth: 420,
    thumbnailHeight: 420,
},{
    src: "/assets/images/gallery/54.jpeg",
    thumbnail: "/assets/images/gallery/54.jpeg",
    thumbnailWidth: 420,
    thumbnailHeight: 420,
},{
    src: "/assets/images/gallery/55.jpeg",
    thumbnail: "/assets/images/gallery/55.jpeg",
    thumbnailWidth: 420,
    thumbnailHeight: 420,
},{
    src: "/assets/images/gallery/56.jpeg",
    thumbnail: "/assets/images/gallery/56.jpeg",
    thumbnailWidth: 420,
    thumbnailHeight: 420,
},{
    src: "/assets/images/gallery/57.jpeg",
    thumbnail: "/assets/images/gallery/57.jpeg",
    thumbnailWidth: 420,
    thumbnailHeight: 420,
},{
    src: "/assets/images/gallery/58.jpeg",
    thumbnail: "/assets/images/gallery/58.jpeg",
    thumbnailWidth: 420,
    thumbnailHeight: 420,
},{
    src: "/assets/images/gallery/59.jpeg",
    thumbnail: "/assets/images/gallery/59.jpeg",
    thumbnailWidth: 420,
    thumbnailHeight: 420,
},{
    src: "/assets/images/gallery/60.jpeg",
    thumbnail: "/assets/images/gallery/60.jpeg",
    thumbnailWidth: 420,
    thumbnailHeight: 420,
}]
        return (
            <div>
                <Navbar />
                <section id="gallery" className='gallery'>
                    <div className="wrapper">
                    <h1>Gallery / Gallerie</h1>
                    <Gallery images={IMAGES}/>    
                    </div>
                </section>
            </div>
) } } export default PhotoGallery