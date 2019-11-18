import React from "react";

const images = [
    'https://d.newsweek.com/en/full/1502445/san-francisco-salifornia.webp'
]

class SplashPage extends React.Component {

    renderBackgroundImages() {
        const node = document.getElementbyClassName("splash-wrapper");
        
    }
    cycleImages(images, container, step) {
        images.forEach((image, index) => {
            setTimeout(() => {
                container.style.backgroundImage = `url(${image})`
            }, step * (index + 1))
        })
    }
    render() {
        return (
            <div className="splash-wrapper">
                <h1>What Now?</h1>
            </div>
        );
    }
}

export default SplashPage;
