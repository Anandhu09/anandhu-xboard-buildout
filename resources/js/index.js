//magazqtripines
magazines.forEach(async(element,index) => {
    try
    {
        let rssfeed=await fetch("https://api.rss2json.com/v1/api.json?rss_url="+element)
        let data=await rssfeed.json()
        //console.log(data)
        AddAccordion(data,index)
    }
    catch(e)
    {
        return null;
    }
    
});

function AddAccordion(magazines,index)
{
    const index_val=Math.random().toString(36).slice(2);
    let Element= document.createElement("div");
    Element.className="accordion-item";
    Element.innerHTML=`


    
    <h2 class="accordion-header" id="flush-headingOne${index}">
      <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne${index}" aria-expanded="false" aria-controls="flush-collapseOne">
      <i class="fa-solid fa-angle-down"></i>&nbsp ${magazines.feed.title}
      </button>
    </h2>
    <div id="flush-collapseOne${index}" class="accordion-collapse collapse ${index===0?'show':''} d-block" aria-labelledby="flush-headingOne${index}" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">


      <div id="carouselExampleControls${index_val}" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    ${carouselToDom(magazines.items)}
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls${index_val}" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls${index_val}" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>


      </div>
    </div>
   `
  document.getElementById("accordionFlushExample").append(Element);
}

function carouselToDom(Data)
{
  let carouselInner=`<div class="carousel-inner" id="carousel-inner">`
  Data.forEach((element, index) => {
    let date=new Date(element.pubDate);
    let datestyle={datestyle:"short"};
    let carouselDom=
    `<div class="carousel-item ${index===0?"active":""}">
    <div class="card">
    <a href="${element.link}">
    <img src="${element.enclosure.link}" class="img-wrapper d-block w-100 vh-100" alt="...">
    
    <div class="card-body">
    <h3 class="card-title fw-bolder">${element.title}</h3></a>
    <div class="fw-bold small author">
    ${element.author}&nbsp;&nbsp;&nbsp;<b>&#149;</b></i>&nbsp;&nbsp;&nbsp;${date.toLocaleString("en-GB", datestyle)}
    </div>
    <div class="card-text pt-4 fw-bold"><p>${element.content}</p>
    </div>
    </div>
    
    </div>
    </div>
    `
    carouselInner+=carouselDom
  });
  carouselInner+=`</div>`
  return carouselInner
}




