// class Example {
//     constructor(ele) {
//         this.ele = ele;
//         this.ele.innerHTML = "<h1>It's Alive</h1>"
//         this.handleClick = this.handleClick.bind(this);
//         this.ele.addEventListener('click', this.handleClick)

//     }
//     handleClick(e) {
//         e.preventDefault();
//         let data = ["type", "price", "seasonal"];
//         let details = document.createElement("ul")
//         data.forEach (el => {
//             let detail = document.createElement("li")
//             detail.innerText = el
//             details.append(detail)
//         }) 
//         // this.ele.children[0].innerText = "Ouch"
//         this.ele.append(details)
//     }
// }

// export default Example;

