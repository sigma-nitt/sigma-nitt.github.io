let Data = [
    {
        headings: "Analog Devices",
        data: "Core",
        data2: "data/Core/logos/Analog_Devices_Logo.svg.png",
        download: "data/Core/Analog%20Devices.docx.pdf",
    },
    {
        headings: "Bajaj Auto",
        data: "Core",
        data2: "data/Core/logos/png-clipart-bajaj-auto-logo-motorcycle-company-company-logo-blue-text.png",
        download: "data/Core/Bajaj%20auto%20(1).PDF",
    },
    {
        headings: "Caterpillar",
        data: "Core",
        data2: "data/Core/logos/download%20(1).png",
        download: "data/Core/Caterpillar.pdf",
    },
    {
        headings: "Dr. Reddys",
        data: "Core",
        data2: "data/Core/logos/1200px-Dr._Reddy_s_Laboratories_logo.svg.png",
        download: "data/Core/Dr.Reddys.pdf",
    },
    {
        headings: "Exxon Mobil",
        data: "Core",
        data2: "data/Core/logos/ExxonMobil.png",
        download: "data/Core/Exxon%20Mobil.docx.pdf",
    }
    ,
    {
        headings: "Jindal Steels",
        data: "Core",
        data2: "data/Core/logos/Jindal%20Steel.png",
        download: "data/Core/Jindal%20Stainless%20Steel.pdf",
    }
    ,
    {
        headings: "Qualcomm",
        data: "Core",
        data2: "data/Core/logos/Qualcomm-Logo.png",
        download: "data/Core/Qualcomm.docx.pdf",
    }
    ,
    {
        headings: "Reliance Industries Ltd.",
        data: "Core",
        data2: "data/Core/logos/RIL.jpg",
        download: "data/Core/Reliance%20Industries%20Ltd.pdf",
    }
    ,
    {
        headings: "Tata Steel",
        data: "Core",
        data2: "data/Core/logos/Tata%20steel.jpg",
        download: "data/Core/Tata%20Steel%20(1).pdf",
    }
    ,
    {
        headings: "Texas Instruments",
        data: "Core",
        data2: "data/Core/logos/TexasInstr.png",
        download: "data/Core/Texas%20Instruments.docx.pdf",
    }
    ,
    {
        headings: "Ab InBev",
        data: "Management/Analytics",
        data2: "data/Management/logos/Abi.png",
        download: "data/Management/Ab%20InBev.pdf",
    }
    ,
    {
        headings: "Axis Bank",
        data: "Management/Analytics",
        data2: "data/Management/logos/axis-bank-logo-vector.png",
        download: "data/Management/Axisgit Bank.pdf",
    }
    ,
    {
        headings: "Deloitte",
        data: "Management/Analytics",
        data2: "data/Management/logos/Deloitte_Logo.png",
        download: "data/Management/Deloitte.pdf",
    }
    ,
    {
        headings: "EXL",
        data: "Management/Analytics",
        data2: "data/Management/logos/png-clipart-logo-exl-brand-product-analytics-financial-institution-blue-angle.png",
        download: "data/Management/EXL%20-%20sigma.pdf",
    }
    ,
    {
        headings: "GEP",
        data: "Management/Analytics",
        data2: "data/Management/logos/download.png",
        download: "data/Management/GEP%20-%20sigma.pdf",
    }
    ,
    {
        headings: "Goldman Sachs",
        data: "Management/Analytics",
        data2: "data/Management/logos/Goldman%20sachs.png",
        download: "data/Management/Goldman%20Sachs.pdf",
    }
    ,
    {
        headings: "Hindustan Uniliver",
        data: "Management/Analytics",
        data2: "data/Management/logos/HUL.png",
        download: "data/Management/Hindustan%20Unilever.pdf",
    }
    ,
    {
        headings: "ITC",
        data: "Management/Analytics",
        data2: "data/Management/logos/ITC_Limited-Logo.wine.png",
        download: "data/Management/ITC.pdf",
    }
    ,
    {
        headings: "Neptunus",
        data: "Management/Analytics",
        data2: "data/Management/logos/Neptunus.png",
        download: "data/Management/Neptunus.pdf",
    }
    ,
    {
        headings: "Novartis",
        data: "Management/Analytics",
        data2: "data/Management/logos/Novartis.png",
        download: "data/Management/Novartis.pdf",
    }
    ,
    {
        headings: "RAAM Group",
        data: "Management/Analytics",
        data2: "data/Management/logos/raam-group-squarelogo-1574235279015.png",
        download: "data/Management/RAAM Group.pdf",
    }
    ,
    {
        headings: "Thorogood",
        data: "Management/Analytics",
        data2: "data/Management/logos/cce39563ecec327b91d84e1702b9459a7952af8627b450e082ece7ddf914d76a.png",
        download: "data/Management/Thorogood.pdf",
    }
    ,
    {
        headings: "Amazon",
        data: "Software",
        data2: "data/Software/logos/amazon-logo-s3f.png",
        download: "data/Software/Amazon.docx%20(1).pdf",
    }
    ,
    {
        headings: "NVidia",
        data: "Software",
        data2: "data/Software/logos/nvidia-logo-png-transparent.png",
        download: "data/Software/Nvidia.docx.pdf",
    }
    ,
    {
        headings: "Oracle",
        data: "Software",
        data2: "data/Software/logos/Oracle-logo.png",
        download: "data/Software/Oracle.docx.pdf",
    }
    ,
    {
        headings: "SAP Labs",
        data: "Software",
        data2: "data/Software/logos/1200px-SAP_2011_logo.svg.png",
        download: "data/Software/SAPlabs.pdf",
    }
    ,
    {
        headings: "Wipro Technologies",
        data: "Software",
        data2: "data/Software/logos/Wipro_Logo_New.png",
        download: "data/Software/Wipro%20Technologies.docx.pdf",
    }];

let container = document.getElementById("cardholder");
let button;
for (let index = 0; index < Data.length; index++) {
    button = `<a class="btn btn-primary project-btn" href=${Data[index].download}>Download Report</a>`;
    container.innerHTML += ` <div class="col-new-lg-6 mb-4 card project-card"  data-aos="zoom-out-left" data-aos-duration="2000" style="margin-bottom: 30px; align-items: center;">
                                <div class="card-body">
                                    <div class="projectimage">
                                        <img alt="photo" src="${Data[index].data2}" width="40%" height="40%" style="margin: 5%"></img>
                                    </div>
                                    <br>
                                    <div class="projecbody">
                                        <p class="card-text">${Data[index].data}</p>` + button +
                                        `<br><br>
                                    </div>
                                </div>
                            </div> </center>`;
}
