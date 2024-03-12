window.onload = () => {
    let data = null;
        fetch("http://localhost:3000/posts")
        .then(response => response.json())
            .then(x => {
                data = x;
                main(data);
            });
}

function main(data) {
    data.forEach(function(item) {
        let element = document.createElement('div');
        element.innerHTML = '' +
            `<h2>${item.title}</h2>` +
            `<h3>${item.content}</h3>`;
        document.body.appendChild(element);
    });
}