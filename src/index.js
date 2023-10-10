console.log('BEFORE page load');
import pageLoad from "./pageLoad";

pageLoad();

const aList = document.querySelectorAll('a');

aList.forEach((element) => {
    element.addEventListener('click',(e) => {
        console.log(e.target.textContent);
    });
});




