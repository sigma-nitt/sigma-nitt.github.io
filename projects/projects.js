let Data = [
    {
        headings: "COVID 19 – An Industrial Report",
        data:
            "The project analyses the Operational, Financial and Market Implications of the global Pandemic on various Industries around the globe. To have a better understanding of how the pandemic hit various industries, we categorized the Industries into Primary, Secondary and Tertiary Sectors. We look at the implications sector-wise and also a few companies as specific examples from each sector. Finally, we attempt to mitigate the issues found and briefly look on how the pandemic could’ve been handled in a better way We also analyzed and defined the pandemic and its characteristic effect on various human machinery, quantified the Pandemic and looked at governance strategies implemented to control the Pandemic. Then, based on the quantification we drew inferences and analyzed them by drawing conclusions and localizing them.",

        data2: "../img/projects/COVID 19 - Industrial Report image.jpg",
        download: "../img/projects/COVID1.pdf",
    },
    {
        headings: "Economic Impact of COVID-19",
        data:
            "The Covid-19 pandemic has been a blow to the economy worldwide. 'But by how much exactly, and how can we fix it?' is a question that has got us all wondering. We at SIGMA, the Business Club of NITT, were intrigued to delve a little deeper, hoping to uncover the unknown We critically analysed the economic damage that the virus has caused, and how it triggered a global financial crisis. We examined measures that governments all over the globe have taken to stimulate the economy and the key factors that must be focused upon to aid in accelerated economic recovery. The project's prime focus was to propose an ideal system to minimise the economic damage from future pandemics. Thus, we identified the prudent measures that countries undertook to tackle the crisis while shedding light on novel ideas we believe can be pivotal in reducing the negative economic impact.",

        data2: "../img/projects/Economic impact of COVID 19 image.jpeg",
        download: "../img/projects/EconomicImpactsofCOVID19.pdf",
    },
    {
        headings: "IMPROVING THE RETAIL LAYOUT OF 2K MARKET",
        data:
            "This project was based on the concept of rearranging the planogram and the layout of a departmental store. The idea was born from the observation of the problem prevalent in the store during September 2019. We started by laying down several problem statements and then started ideating solutions to those problems. We researched various layouts from multinational stores such as Walmart, Target, Reliance Fresh, More, etc. to figure out a pattern in the designs and planogram arrangements. Both the arrangements were compared, and innovative suggestions were provided. We found ways to market the products better strategically. Finally, the ideas were mutually discussed and implemented. Due to confidentiality agreements with the store, the major details of the project are avoided in this description.",
        data2:
            "../img/projects/Improving The Retail Layout of 2K Market image.jpg",
        download: "",
    },
    {
        headings: "ISLAMIC FINANCE",
        data:
            "Our project in Islamic Finance focused on two broad goals; To provide a better understanding of Islamic Finance and to explore possible avenues for growth. In the paper, we first attempt to explain the core concepts behind Islamic Finance and how No Interest Rates, one of its keys features, works in the modern banking Ecosystem. We then observe how Islamic Finance and similar models, works in both Islamic and non-Islamic countries from the Middle East to the United Kingdom. Here we explore the history behind the Islamic financial system in the country and its current market performance. Lastly, we explore future growth avenues for Islamic Finance through the BCG Matrix and see how it can be adjusted to enter new markets.",
        data2: "../img/projects/Islamic Finance image.jpg",
        download: "",
    },
    {
        headings: "BANK OF BARODA MERGER",
        data:
            "The project primarily focused on quantitative and qualitative benefits of the merger between the merger of Bank of Baroda, Dena Bank, and Vijaya Bank. The merger was initiated on 12th January 2019 by the government in lieu of resolving the NPA crisis. It is expected to reduce the government's burden of recapitalizing the public sector banks time and again. Through this project, we tried to anticipate the feasibility of the merger. Under the qualitative aspects, few key advantages discovered were improved customer base, NPA resolution, and better expertise. The massive consolidation will also reduce lending costs. However, job loss, a considerable deviation from anticipated swap ratios, and higher Gross NPA ratio remains an issue. Market share of advances and deposits for the merged entity stands close to 7.5% making it the third-largest bank after SBI and HDFC at the time of analysis. ",
        data2: "../img/projects/Bank of Baroda Merger image.jpg",
        download: "",
    },
];

let container = document.getElementById("cardholder");
let button;
for (let index = 0; index < Data.length; index++) {
    if (Data[index].download === "") {
        button = `<div style="color: firebrick;">* For more details and project report, feel free to reach out to us</div><br><a class="btn btn-primary project-btn" href="../contact-us/" target="blank" >Contact Us</a>`;
    } else {
        button = `<a class="btn btn-primary project-btn" href=${Data[index].download} target="blank">View Project</a>
                    <a class="btn btn-primary project-btn" href=${Data[index].download} target="blank" download>Download Project</a>`;
    }
    container.innerHTML += `<div class="col-new-lg-6 mb-4 card project-card"  data-aos="zoom-out-left" data-aos-duration="2000" style="margin-bottom: 50px;">
                                <div class="card-body">
                                    <div class="project-image">
                                        <img alt="photo" src="${Data[index].data2}" width="100%" height="100%" style="margin: auto"></img>
                                    </div>
                                    <br>
                                    <div class="project-body">
                                        <h2 class="card-title" style="color: darkblue; margin-top: 8px;">${Data[index].headings}</h2>
                                        <p class="card-text">${Data[index].data}</p>` + button + 
                                        `<br><br>
                                    </div>
                                </div>
                            </div>`;
}
