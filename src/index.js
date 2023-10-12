import Home from "./homeLoad";
import Menu from "./menuLoad";
import Contact from "./contactLoad";

Home.load();

const tabList = document.querySelectorAll('a');

tabList.forEach((tab) => {
    tab.addEventListener('click', (e) => {
        //remove style from all tabs
        styleTabs(getTabs(e));
        //add style to current tab
        e.target.style.color = "orange";
        //unload previous module
        clearContainer();
        //module load
        tabLoader(e.target.textContent);

    });
});

function clearContainer() {
    const container = document.querySelector('#content');
    while (container.childElementCount != 0) {
        container.removeChild(container.firstChild);
    }
}

function styleTabs(tabs) {
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].style.color = "black";
    }
}

function getTabs(e) {
    // for collecting siblings
    let siblings = [];
    // if no parent, return no sibling
    if (!e.target.parentNode) {
        return siblings;
    }
    // first child of the parent node
    let sibling = e.target.parentNode.parentNode.firstElementChild;

    // collecting siblings
    while (sibling) {
        if (sibling.nodeType === 1 && sibling !== e) {
            siblings.push(sibling.firstChild);
        }
        sibling = sibling.nextSibling;
    }

    return siblings;
}

function tabLoader(tabName) {
    switch (tabName) {
        case "Home":
            Home.load();
            break;
        case "Menu":
            Menu.load();
            break;
        case "Contact":
            Contact.load();
            break;
        default:
            break;
    }
}


