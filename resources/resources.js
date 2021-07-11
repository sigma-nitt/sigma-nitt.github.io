let Data = [
    {
        headings: "Operations",
        data:
            "Operations management is the administration of business practices to create the highest level of efficiency possible within an organization. It is concerned with converting materials and labor into goods and services as efficiently as possible to maximize the profit of an organization. ",
        data2:
            "https://thumbs.dreamstime.com/b/operations-management-mind-map-flowchart-marker-business-concept-presentations-reports-operations-management-mind-map-198579063.jpg",
        link:
            "https://drive.google.com/open?id=1aoT8VAJskM5IEKJl8pYIiBwGUI6utP8F",
    },
    {
        headings: "Finance",
        data:
            "Financial Management is a vital activity in any organization. It is the process of planning, organizing, controlling, and monitoring financial resources with a view to achieve organizational goals and objectives. It is an ideal practice for controlling the financial activities of an organization such as procurement of funds, utilization of funds, accounting, payments, risk assessment and every other thing related to money.",
        data2:
            "https://smesouthafrica.co.za/wp-content/uploads/2019/07/financial-management-feature-image-final-2-1024x640.jpg",
        link:
            "https://drive.google.com/open?id=1BE2_RCddoETiKPfOvh55a5cRXa_E1QNo",
    },
    {
        headings: "Stocks",
        data:
            "Stocks are an equity investment that represents part ownership in a corporation and entitles you to part of that corporation's earnings and assets. Before you buy your first stock, you should master the basics of stock investing. This won't make you a great investor overnight, but only when you understand the fundamentals of investing can you learn how to invest in stocks with confidence.",
        link:
            "https://drive.google.com/open?id=1Fcy2jtviEG5sOrmlBqSD1sWiHtwo8S0u",
        data2:
            "https://www.nasdaq.com/sites/acquia.prod/files/styles/720x400/public/2020/03/16/stocks-iamchamp-adobe.jpg?h=6acbff97&itok=8CjW1T_R",
    },
    {
        headings: "Case Studies",
        data:
            "A case study is a great way to gain concrete, contextual, in-depth knowledge about a specific real-world business problem. Access case studies that analyze and address real-life business challenges, management processes and the defining moments of leading companies",
        link:
            "https://drive.google.com/open?id=1bluGP2_nNTXTjPJFYl_AI3KEQSCuVptO",
        data2:
            "https://www.fuell.agency/wp-content/uploads/2020/06/How-to-write-a-case-study.png",
    },
];

let container = document.getElementById("cardholder");
let button;
for (let index = 0; index < Data.length; index++) {
    if (Data[index].download === "") {
        button = `<a class="btn btn-primary project-btn" href=# target="blank" >Contact Us</a>`;
    } else {
        button = `<a class="btn btn-primary project-btn" href=${Data[index].link} target="blank" >VIEW</a>`;
    }
    container.innerHTML += `<div class="col-new-lg-6 mb-4 card project-card"  data-aos="fade-up" data-aos-duration="2000" style="margin-bottom: 50px;">
                                <div class="card-body">
                                    <div class="resource-image">
                                        <img alt="photo" src="${Data[index].data2}" width="100%" height="100%" style="margin: auto"></img>
                                    </div>
                                    <br>
                                    <div class="resource-body">
                                        <h2 class="card-title" style="color: darkblue;">${Data[index].headings}</h2>
                                        <p class="card-text">${Data[index].data}</p>` + button + 
                                        `<br><br>
                                    </div>
                                </div>
                            </div>`;
}
