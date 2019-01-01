import './main.less';

let h1 = document.createElement('h1');
h1.textContent = 'hello world'
document.body.appendChild(h1);
let h2 = document.createElement('h2');
h2.textContent = 'hello ts';
document.body.appendChild(
    document.createElement('br')
)
document.body.appendChild(h2);

Array.from(document.body.children).forEach(it => console.log(it.tagName));
for (let a of Object.values({ a: 3 })) {
    console.log(a);
}