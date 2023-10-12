export default (function(){
    const container = document.querySelector('#content');

    function load(){
        const heading = document.createElement('h1');
        heading.textContent = "Get in Touch with us! 📞";

        const paragraph = document.createElement('p');
        let text = `We're not just about crafting mouthwatering pizzas; we're also all ears when it comes to your feedback, questions, or special requests.
        Connecting with Da Michele Paradise is a breeze through our customer-centric Contact Page. 
        Here's why it's the gateway to a slice of pizza perfection:`
        paragraph.textContent = text;

        const image = new Image();
        const imageUrl = "https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
        image.src = imageUrl;
        image.width = "300";
        image.height = "200";

        container.appendChild(heading);
        container.appendChild(paragraph);
        container.appendChild(image);
        
    }

    return {load};
})();




