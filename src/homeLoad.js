export default (function(){
    const container = document.querySelector('#content');

    function load(){
        const heading = document.createElement('h1');
        heading.textContent = "Da Michele";

        const paragraph = document.createElement('p');
        let text = `At Da Michele Paradise, we're not just about pizza; we're about creating memories. 
        Our landing page is your first step towards a world of flavor and fun. 
        With a passion for excellence, we invite you to explore, savor, and indulge in the world of gourmet pizza. 
        So, what are you waiting for? Click, explore, and embark on a culinary adventure like no other! 🌟🍕🌟`
        paragraph.textContent = text;

        const image = new Image();
        const imageUrl = "https://images.pexels.com/photos/3682837/pexels-photo-3682837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
        image.src = imageUrl;
        image.width = "600";
        image.height = "400";

        container.appendChild(heading);
        container.appendChild(paragraph);
        container.appendChild(image);
        
    }

    return {load};
})();




