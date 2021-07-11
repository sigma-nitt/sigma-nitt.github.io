let articles = [
	{
		title: "US Elections and India's Vote",
		author: "Thivyaa Mohan",
		date: "03-11-2020",
		content: "The India-US relationship has strengthened over the years and the right President for the next four years would play a critical role in defence, economic and political cooperation of both countries. Read on to know why India's vote matters in the 2020 US President Election.",
		link: "https://sigma-nitt.medium.com/us-elections-and-indias-vote-1e6153b6fb5",
		image: "https://miro.medium.com/max/3600/0*hjmqrrpl8wWS1T75.png"
	},
	{
		title: "Monopolies: Bad?",
		author: "Rohith Krishna Kumar",
		date: "30-10-2020",
		content: "What we hear is only the bright side of business. There's a dark side too. Have a go at this breakdown and analysis of a phenomenon that is at the forefront of the nasty side of business, Monopolies.",
		link: "https://sigma-nitt.medium.com/monopolies-bad-b50ffed2d29a",
		image: "https://miro.medium.com/max/936/1*kP4yEe8GnRExTsQoXlmODw.png"
	},
	{
		title: "Cryptocurrency- A Passing Fad?",
		author: "Mayank Monani",
		date: "24-10-2020",
		content: "Today, Satoshi Nakamoto’s white paper on Bitcoin is nearly a decade old. With Bitcoin's market capitalization at a staggering USD 200 billion, Nakamoto’s white paper has dramatically altered the way we perceive money in the modern age.",
		link: "https://sigma-nitt.medium.com/cryptocurrency-a-passing-fad-426a3bea81a2",
		image: "https://g.foolcdn.com/editorial/images/609351/bitcoin-price-chart-cryptocurrency-ethereum-ripple-getty.jpg"
	},
	{
		title: "Amul: The Rise ",
		author: "Sabarni Paul",
		date: "20-10-2020",
		content: "Ever wondered what's the reason behind their massive success and transition from being a small village cooperative to being the founders of white revolution in India. Sigma presents to you the journey of Amul - rise and marketing strategies.",
		link: "https://sigma-nitt.medium.com/amul-the-rise-faba35210998",
		image: "https://m.economictimes.com/thumb/msid-76233259,width-1200,height-900,resizemode-4,imgsize-672052/amul.jpg"
	},
	{
		title: "Captain G.R. Gopinath: The Man With A Plan",
		author: "Nishant Saravanan",
		date: "17-10-2020",
		content: "We all have been eagerly waiting for Surya's \"Soorarai Potru\" but what do we know about it other than the fact that the film is a Biopic on G. R. Gopinath? Read more to know about his businesses and innovations that revolutionised the aviation industry.",
		link: "https://sigma-nitt.medium.com/captain-g-r-gopinath-the-man-with-a-plan-41a5efc0bd5c",
		image: "https://bingeddata.s3.amazonaws.com/uploads/2020/11/Captain-Gopinath-Soorarai-Potru.jpg"
	},
	{
		title: "JIO- The Game Changer in the Digital World",
		author: "R Chandrasekar",
		date: "13-10-2020",
		content: "Jio became a household name within few years of entering the telecommunications industry, taking down giants once believed to be undefeatable. Read on to know more about their strategy, immerse yourself in their numerical figures, and get all caught up with their future plans to dominate and change the very fabric of the Indian Digital Industry!",
		link: "https://sigma-nitt.medium.com/jio-the-game-changer-in-the-digital-world-347ca3b3fd64",
		image: "https://cdn.inc42.com/wp-content/uploads/2020/05/feature-.jpg"
	},
	{
		title: "Jet Airways: Failure of the Giant of the Skies",
		author: "SIGMA",
		date: "13-08-2020",
		content: "Poor management, wrong decisions, and high risks can ground even the giants of the sky. Read more to know about the fascinating story behind the fall of Jet Airways and the lessons it contains for airlines looking to survive the pandemic.",
		link: "https://sigma-nitt.medium.com/jet-airways-failure-of-the-giant-of-the-skies-ad91d843569b",
		image: "https://img.etimg.com/thumb/width-1200,height-900,imgsize-916228,resizemode-1,msid-78939124/prime/transportation/return-of-indias-oldest-private-airline-jet-airways-runway-to-recovery-has-many-rough-patches.jpg"
	},
	{
		title: "Sovereign Wealth Funds",
		author: "Bala Aditya and Sunil S",
		date: "08-12-2019",
		content: "What if, when you were investing in the market, you weren’t competing against another person, or a company, but rather, an entire country? Well, turns out that is a real possibility. Read on to understand the business of a Sovereign Wealth Fund.",
		link: "https://sigma-nitt.medium.com/sovereign-wealth-funds-320892fad102",
		image: "https://www.bajajfinservmarkets.in/discover/wp-content/uploads/2019/08/Review-Mutual-fund-min-3.jpg"
	}
];

let blogpage = document.getElementById("blog-page");
for (let article = 0; article < articles.length; article++) {
    blogpage.innerHTML += `<div class="col-new-lg-6 mb-4 card" data-aos="zoom-in" data-aos-duration="2000" style="margin-bottom: 50px;">
                                <div class="card-body">
                                    <img alt="photo" src="${articles[article].image}" width="100%" height="250px" style="margin: auto"></img>
                                    <br>
                                    <div class="article-details">
                                        <h2 class="article-title">${articles[article].title}</h2>
										<p class="card-text">${articles[article].content}</p>
                                        <div class="article-info"> 
                                            Written by: <span class="article-author">${articles[article].author}</span>
                                        </div>
                                        <div class="article-info"> 
                                            Published on: <span class="article-date">${articles[article].date}</span>
                                        </div>
                                        <a class="btn btn-primary project-btn" href="${articles[article].link}" style="margin: 15px 0 15px 0;" target="_blank">Read more</a>
                                    </div>
                                </div>
                            </div>`;
}