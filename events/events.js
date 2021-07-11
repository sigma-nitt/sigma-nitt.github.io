let data = [
  {
    headings: "The D-Street Desafio",
    primaryContent: `<div>
                      <p>
                      The D-Street Desafio was a 3-day event which aims to teach the complex concepts of trading and stock market in a simple way in the form of a game. 
                      </p>
                      <p>
                      The event was conducted in partnership with "D-Street", a startup that visions to build enterprise-grade tailored tech systems for financial markets. 
                      The event registered a participation of over 200 students who definitely learnt few tricks of the trade at the end of this event.
                      </p>
                      </div>`,
    image: "../img/events/DStreet Games.jpeg",
    date: "8-10th, February 2020",
  },
  {
    headings: "Case Closed – An Introduction to Management Consulting",
    image: "../img/events/Inhott.jpg",
    primaryContent: `<div>
                     <p>
                     SIGMA conducted an online interactive session for the students of NIT Trichy.  The session covered the important frameworks for solving case studies, mergers and acquisitions, and important principles for successful marketing strategies.  The session aimed to provide a platform for students to gain exposure to the world of business and consulting.
                     </p>
                    </div>`,
    date: "January 23, 2021",
  },
  {
    headings: "Consulting: Guesstimates and Cracking Case Studies",
    image: "../img/events/Introduction to Consulting.jpg",
    primaryContent: `<div>
                     <p>
                     Ever wanted to know what a career in consulting is all about?  Pratik Ranjan, a Senior Associate at Boston Consulting Group, one of the world's premier Management Consulting firms gave us an insight into the type of work involved in Management Consulting and what such elite companies look for in a candidate.
                     </p>
                     <p>
                      He did is B. Tech from NIT Bhopal and MBA from IIM Lucknow.  He was awarded the title of India's most employable Management Graduate in 2019.  This was an exclusive opportunity to meet and learn from him and ask him questions on a career in Consulting.
                     </p>
                    </div>`,
    date: "December 19, 2020",
  },
  {
    headings: "Stalk the stocks",
    image: "../img/events/stalkthestocks.jpg",
    primaryContent: `<div>
                     <p>
                     Investing in the stock market is a tricky trade given that your money is on the line. Learn the tricks of the trade with Stalk the Stocks, brought to you by SIGMA-The Business Club, in association with Talentine and powered by Alphabeta. This was a unique opportunity to experience the bulls and bears of the stock market as you battled it out on the live Indian stock exchange with 7 lakh INR!
                     </p>
                     <p>
                      Build the best portfolio with live market data and watch it rise and fall with the daily market news. Can you make a portfolio that soars above the rest?
                     </p>
                    </div>`,
    date: "April 2020",
  },
  {
    headings: "CASE CLOSED",
    primaryContent: `<div><p>Case Closed is a workshop-cum-competition organized by the Operations Team of SIGMA-The Business Club. The event is organized annually by SIGMA to facilitate the students with skills for solving a case study and guide them with resources to take a career in operations management.</p><p>Case Closed Workshop is a one-day event and comprises of following</p><p>1. A session on Operations Management</p><p>2. Presentation on tools and framework to solve a case study</p><p>3. Live Case Demonstration</p><p>After the workshop, the competition case is provided to the participating teams and they come up with the best possible solution to the problem. The best three teams are awarded merit certificates and cash prizes</p></div>`,
    image: "../img/events/c9.jpg",
    date: "",
  },
  {
    headings: "ZERODHA GUEST LECTURE",
    primaryContent:
      "<div><p>SIGMA invited Mr. Karthik Rangappa, the Vice President for Equity Research and Educational Services at Zerodha, India's largest stock brokerage to give a guest lecture on the basics of cracking the stock market.</p><p> He elucidated on the present-day scenario of a working individual and his saving strategies to achieve a stable or increasing return on investment. He informed students on the advantages of participating in the stock market and how it helps to have a secondary source of income through investing in stocks. He spoke based on technical and fundamental analysis and gave many real-life examples on analyzing companies and their stock trends, which was an eye-opener to many students.</p><p> The workshop was well-received by the students and students gained a lot from the guest lecture. The guest lecture was followed by a discussion session by the enthusiastic students who had questions on various topics from how to start investing as a beginner to questions on portfolio management</p></div>",
    image: "../img/events/z1.jpg",
    date: "",
  },
];

let container = document.getElementById("card-holder");
let date,height;
for (let index = 0; index < data.length; index++) {
  if (data[index].date != "") {
    date = `<p style="font-size:1.3em;color:#006400;"><span style="font-weight:bold;"> Held on: </span> <span style="color: maroon"> ${data[index].date} </span></p>`;
    height = "550px";
  } else {
    date = "";
    height = "";
  }
  container.innerHTML += `<div class="col-new-lg-6 mb-4 card project-card" data-aos="fade-down" data-aos-duration="2000" style="margin-bottom: 50px;">
                                <div class="card-body">
                                    <div class="events-image">
                                        <img alt="photo" src="${data[index].image}" width="100%" height="100%" style="margin: auto"></img>
                                    </div>
                                    <br>
                                    <div class="events-body" style="padding:12px; height:${height}">
                                        <h2 class="card-title" style="color: darkblue; margin-top: 8px;">${data[index].headings}</h2>
                                        <p class="card-text">${data[index].primaryContent}</p>
                                        ${date}
		                                    <br><br>
                                    </div>
                                </div>
                            </div>`;
}
