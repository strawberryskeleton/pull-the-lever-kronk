function getProducts() {
    const grid = document.getElementById('product_id')

    if (!grid) return

    fetch("resources.json").then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        return res.json()
    })

    .then((products) => {
        products.forEach((product)=> {
            const article = document.createElement('article')
            article.classList.add('product')
        })
    })

}

document.addEventListener('DOMContentLoaded', () => { })