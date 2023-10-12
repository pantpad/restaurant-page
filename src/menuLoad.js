export default (function () {
    const container = document.querySelector('#content');

    function load() {
        const heading = document.createElement('h1');
        heading.textContent = "Pizza Paradise! 🍕";

        const paragraph = document.createElement('p');
        let text = `At our cozy pizzeria, we believe in the magic of simplicity.
        Our menu features just four outstanding pizzas, each a culinary masterpiece that will transport your taste buds to a world of pure delight. 
        From classic favorites to inventive creations, we've perfected the art of pizza-making. 
        Allow us to introduce our irresistible offerings:`
        paragraph.textContent = text;

        const grid = document.createElement('div');
        grid.style.display = "grid";
        grid.style.gridTemplateColumns = "200px 200px";
        grid.style.gridTemplateRows = "200px 200px";

        grid.appendChild(createPizza("https://images.pexels.com/photos/18542518/pexels-photo-18542518/free-photo-of-pizza-straight-from-oven.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"));
        grid.appendChild(createPizza("https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"));
        grid.appendChild(createPizza("https://images.pexels.com/photos/10790638/pexels-photo-10790638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"));
        grid.appendChild(createPizza("https://images.pexels.com/photos/774487/pexels-photo-774487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"));

        container.appendChild(heading);
        container.appendChild(paragraph);
        container.appendChild(grid);

    }

    function createPizza(url){
        let pizza = document.createElement('div');
        pizza.style.backgroundPosition = "center"
        pizza.style.backgroundSize = "cover";
        pizza.style.backgroundImage = `url(${url})`;
        return pizza;
    }

    return { load };
})();




