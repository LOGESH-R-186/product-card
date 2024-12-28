let main=document.querySelector("body")
async function card() {
       let response= await fetch('https://fakestoreapi.com/products')    
    let finalresponse= await response.json()
    console.log(finalresponse)
    finalresponse.map(value =>
    {
        let section =document.createElement("section")
        let img =document.createElement("img")
        let pname=document.createElement("h4")
        let pdes=document.createElement("p")
        let cat=document.createElement("h3")
        let price=document.createElement("h5")
        let rating=document.createElement("h5")
        let aside=document.createElement("aside")
        let article=document.createElement("article")
        let button=document.createElement("button")
        img.src=value.image
        pname.innerHTML=value.title
        pdes.innerHTML="Description :"+value.description
        cat.innerHTML="Category : "+value.category
        price.innerHTML= "Rs."+value.price
        rating.innerHTML="Rating : "+value.rating.rate
        button.innerHTML="add to cart"
        aside.append(price,rating)
        article.append(aside,button)
        section.append(img,pname,cat,article)
        main.append(section)
      
    }
    )

}
card()