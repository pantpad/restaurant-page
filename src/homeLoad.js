export default (function(){
    const container = document.querySelector('#content');

    function load(){
        const heading = document.createElement('h1');
        heading.textContent = "Da Michele";

        const paragraph = document.createElement('p');
        let text = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam suscipit velit vitae blanditiis tempora
        eveniet at, mollitia incidunt odit eos rem repellendus sed voluptate consectetur voluptates dolorum
        doloribus autem beatae earum quae repellat recusandae. Quod fugiat incidunt error omnis, placeat iste
        quibusdam quaerat ex nostrum inventore esse impedit voluptate! Doloribus!`
        paragraph.textContent = text;

        const image = new Image();
        const imageUrl = "https://images.pexels.com/photos/3682837/pexels-photo-3682837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
        image.src = imageUrl;
        image.width = "300";
        image.height = "200";

        container.appendChild(heading);
        container.appendChild(paragraph);
        container.appendChild(image);
        
    }

    return {load};
})();




