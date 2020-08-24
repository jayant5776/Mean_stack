// let pbc1 = document.querySelector("#parentBlockContainer");

// console.log(pbc1);


// Event = > load

// listener = > Call back (Arrow or annonymous)


window.addEventListener("load", () => {
    abstractLogic();

    let xhr = new XMLHttpRequest();
    const url1 = 'https://reqres.in/api/users?page=2';
    xhr.open("GET", url);

    xhr.onreadystatechange = () => {
        console.log(xhr.readyState);
        if (xhr.readyState === 4) {
            console.log(xhr.responseText);
            console.log(xhr.responseXML);

             
        }
    };
    xhr.send();
});

let abstractLogic = function () {

    console.log("I.AM.CALLED.ONCE.THE.PAGE.LOADS");

    let pbc = document.querySelector("#parentBlockContainer");

    console.log(pbc);

    // pbc.children[0]
    // pbc.firstElementChild

    //console.log(pbc.children[0]);


    // lets create

    let postList = [{ id: 1, post: "Hello World" },
    { id: 2, post: "Hello Universe" },
    { id: 3, post: "Hello JS" },
    { id: 4, post: "Hello HTML" },
    { id: 5, post: "Hello CSS" },
    { id: 6, post: "Hello XML" },
    { id: 7, post: "Hello AJAX" },
    { id: 8, post: "Hello DOM" },
    ];



    for (let i = 0; i <= postList.length; i++) {

        let item = postList[i];

        let newElement = pbc.children[0].cloneNode(true);
        newElement.style.display = "flex";

        newElement.children[0].innerHTML = item.post;

        pbc.insertBefore(newElement, pbc.firstChild);
    }


}