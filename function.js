function head(hdata,css)
{
    document.write(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${hdata}</title>
        <link rel="stylesheet" href="${css}">
        <link rel="ico" href="photos/faviconio-logo.zip" >
    </head>
    <body>
    <div class="head">
        <h1>${hdata}
    
        <div class="search">
            <form action="#">
                <input type="text"
                       placeholder=" Search "
                       name="search">
                <button onclick="search">search</button></h1>
            </form>
        </div>
    </div>
    
    <div class="nav">
        <a href="index.html">HOME</a>
        <a href="national.html">National</a>
        <a href="international.html">International</a>
        <a href="bussiness.html">Bussiness</a>
        <a href="sports.html">Sports</a>
    </div>    
    <div class="mid">`);
}

function post(count)
{
    document.write(`<div class="posts">` );
    init=0;

    title=["Can India have a Uniform Civil Code?",
    "Exclusive | World sees India as incubator of innovation: PM Modi on UPI, Aadhaar success",
    'Virat Kohli has been using his feet very well lately, says Sanjay Bangar',
" Chandrayaan-3 moon lander separates from propulsion module",

" The UN must suspend the SDGs to tackle more urgent crises",

"Jio Financial Services to be listed on stock exchanges on August 21",

"As countries boost own space missions, US warns its firms against spying",

"World's Cheapest Home? Why this Michigan house is listed for ‘sale at $1"
,
"Cash in on Facebook's $725M privacy payout File your claim before it's too late!",

"Geekdom takes revamped startup bootcamps on the road with support from Bexar County",

"Texas’ tax-free weekend for school supplies starts Friday",

"With $19B impact, hospitality industry remains key contributor to San Antonio’s economy",

"Chelseas Reece James out for a few weeks with ham.string injury: Mauricio Pochettino",

"Praggnanandhaa overcomes compatriot Arjun Erigaisi in World Cup quarters in blitz after repeated games failed to find a winner",

"India vs Ireland T20 Live Score: Captain Jasprit Bumrah strikes twice in first over on IND comeback, Ireland go two down"
];



    msg=["After India became independent in 1947, the Jawahar Lal Nehru government accelerated the process to reform religious laws through a common code, but only for all Hindus. The idea was to modernise Hindu society and forge national unity. However, the term Hindus was soon to be defined expansively to also include Jains, Buddhists and Sikhs. Staying true to his “secular and pluralistic” credentials, Nehru followed the British who didn’t usually interfere in the religion-based personal laws of other communities, including Muslims, Christians and Parsis, giving them some kind of autonomy and protection because of their minority status. But it’s also no secret how the British thrived in India through their divide-and-rule policy. " , 
    
    "Prime Minister Narendra Modi highlighted India's role as an incubator of innovation, particularly through its successful digital public infrastructure, in an exclusive interview with Business Today.“Today, there is global acknowledgment of India’s success in promoting and using digital public infrastructure towards the socio-economic development of our people,” PM Modi said. “The world today sees India as the incubator of innovation,” he said, highlighting the fact that 46 per cent of global digital payments transactions are now in India, which is “one shining example of the success of our policies”." , 
    
    "Speaking to Star Sports, Bangar said everyone knows that Kohli does not play the sweep shot, which is why he is looking to use the depth of the crease to play his shots. The Indian team has been undergoing a preparatory camp ahead of the 2023 Asia Cup. “From the visuals that I have seen, it is very clear that Virat Kohli is targeting the mid-wicket region. We saw him play some big shots and sweep. Everybody knows that Kohli doesn't play the sweep shot very often, so the field is set accordingly. He also played a lot of backfoot shots, using the depth of the crease,” said Bangar.",

    "After 34 days on board the Chandrayaan-3 spacecraft, the propulsion module and the lander module parted ways on August 17, and have now embarked on their respective journeys. ISRO said that the lander module has successfully separated from the propulsion module. The Chandrayaan-3 consists of a lander module, a propulsion module and a rover. The main function of the propulsion module is to carry the lander module from launch vehicle injection till 100-km orbit around the moon.The propulsion module also has one scientific payload, as a value addition, which will be operated post-separation of the lander module. The payload will be operational for a period ranging from three to six months. The lander and the rover have a mission life of one lunar day (14 earth days). As of now, the propulsion module continues its journey in the current orbit, and will continue to do so possibly for months or years. ",

    "  The Sustainable Development Goals the targets adopted by the UN General Assembly in 2015 are truly extraordinary. When taken together and at face value, they are not so much a programme of 17 targets as a blueprint for a utopian global society. The aim was for a world free from extreme poverty, with no hunger, with universal access to affordable healthcare and education, major diseases eliminated, gender equality, climate change and biodiversity addressed, conflicts resolved through international collaboration. And all this was to be achieved within 15 years. We are now a little more than halfway through that timeframe with seven years left. As forests are felled or burnt at record rates, when global warming is a present crisis rather than a future threat, with nuclear powers rattling their arms and with migrant numbers at historic highs, the goals seem not only naïve, but detached from reality.",

    ` Trading Members of the Exchange are hereby informed that effective from Monday, August 21, 2023, the equity shares of Jio Financial Services Ltd (Formerly known as Reliance Strategic Investments Limited) shall be listed and admitted to dealings on the Exchange in the list of T Group of Securities,"   Trading Members of the Exchange are hereby informed that effective from Monday, August 21, 2023, the equity shares of Jio Financial Services Ltd (Formerly known as Reliance Strategic Investments Limited) shall be listed and admitted to dealings on the Exchange in the list of T Group of Securities,`,

    ` Amid Space Race With China And Russia, A Warning From US Intelligence
    The US is particularly keen to support small and midsize satellite companies.
    The US intelligence community is warning the domestic space industry of the growing risk of espionage and satellite attacks from China, Russia and other adversaries.
    US space-related companies are at risk of "cyberattacks, strategic investment (including joint ventures and acquisitions), the targeting of key supply chain nodes and other techniques to gain access to the space industry," says a bulletin issued jointly by the National Counterintelligence and Security Center, the Federal Bureau of Investigation and the US Air Force on Friday.
    The warning, which says such foreign intelligence operations pose a risk to company secrets as well as "disrupting and degrading US satellite communications, remote sensing and imaging capabilities" comes after several recent attacks on satellites and mounting recognition that both the US economy and national security increasingly rely on space.`,

    `A two-bedroom ranch style house in Michigan has been listed for sale for just one dollar. As per the website of Zillow on which the listing has been made, the house has two bedrooms and one bathroom. The heating features is forced air and natural gas. The total interior livable area has been advertised to be 724 sqft. The year of construction of the house is 1956 and its roof is made of asphalt.Introducing the "World's Cheapest Home!" in the heart of Pontiac, Michigan! ?????," read the overview for the house.
    "Priced at a mind-boggling $1 (yes, you read that right), this home is not just a house—it's a ticket to the real estate adventure of a lifetime," read the overview further.
    "Step inside and experience the thrilling rollercoaster of emotions as you discover every nook and cranny that's begging for your creative touch. The roof might have seen better days, but hey, it's not leaking yet—it's just keeping you on your toes, providing an unexpected shower of excitement when you least expect it," wrote realtor Christopher Hubel in the description`,
    
`If you've been a Facebook user in the United States between May 24, 2007, and December 22, 2022, you have about one week left to file a claim in a data privacy settlement case. Meta, Facebook's parent company, agreed to a $725 million settlement to address privacy-related class action lawsuits. These suits alleged that Facebook allowed third parties to access users' private data without their consent, including data accessed by Cambridge Analytica during the 2016 Trump presidential campaign.  `,

`After learning to code through a traditional coding bootcamp, and later teaching at a couple others, Laura Ruiz-Roehrs thought there might be a better way.   
She took her idea to Geekdom’s Startup Bootcamp in February, and the experience convinced her that her idea was indeed marketable. She eventually quit her day job and enrolled in Geekdom’s incubator program, working to scale Code Flight, which aggregates coding resources in a way that’s less expensive and more self-guided than a coding bootcamp.
Geekdom, which launched as a co-working space and tech incubator downtown in 2011, is now taking its weekend-long startup bootcamp on the road, thanks to support from Bexar County.`,

`Caregivers who haven’t yet purchased school supplies yet, rejoice. Your tardiness will be rewarded this weekend as those supplies, plus most clothing and footwear, can be purchased tax free starting Friday.    
The Texas Comptroller announced that through the annual sales tax holiday – which ends at midnight on Sunday, Aug. 13 – qualifying items under $100 can be purchased tax free from a Texas store or from an online or catalog seller that does business in Texas. (If you’re a Texan ordering online from a retailer, congrats! That means the seller does business in Texas.)
The comptroller’s office has a handy list of what qualifies in each category. The list of qualified school supplies is long, but doesn’t include computers or text books.`,


`The economic impact of San Antonio’s hospitality industry hit a record $19 billion in 2022, even as the sector hasn’t completely recovered pre-pandemic numbers of visitors or jobs.    
Almost 35 million people visited the San Antonio metro area last year, according to a study commissioned by a handful of tourism-focused entities, including Visit San Antonio and the San Antonio Hotel & Lodging Association.
That’s shy of the 41 million visitors who spent time here in 2019, but that smaller pool still managed to generate 10% more revenue than the pre-pandemic peak, and contribute almost $262 million in tax and other revenue to the City of San Antonio.`,


`>Reece James is ruled out of Chelseas game with West Ham United on Sunday and will be sidelined for a few weeks after picking up a hamstring injury in training, manager Mauricio Pochettino said on Friday.  
James, named as Chelsea captain during the summer, left the pitch in the second half of their 1-1 draw with Liverpool on Saturday. The manager said he was suffering from fatigue but the defender has now picked up a muscle injury.
“Its a hamstring. Its not a few days, a few weeks maybe,” Pochettino told reporters.
“I think its a sad moment because hes our captain, he was so excited to be the captain, full of energy. We are going to assess him day by day,” the manager added.`,


`In some ways, it just had to be R Praggnanandhaa. The Chennai-born teenager took the world by storm as a 16-year-old when he became the then-youngest chess player to beat five-time world champion Magnus Carlsen. In a way, that started a wave of chess fandom in India, with even Sachin Tendulkar sending out a congratulatory tweet.
Now 18, hes become the first Indian since Viswanathan Anand in 2002 to reach the semifinals of the FIDE World Cup after beating compatriot Arjun Erigaisi in a frantic sudden-death blitz showdown after eight previous games failed to find a winner in Baku on Thursday.
In round 1 of their quarterfinal clash which began on Tuesday, Erigaisi had come out trumps, winning with black pieces. Praggnanandhaa, this time playing with black, took the all-or-nothing approach the next day and managed to beat his older opponent to take the match to tie-breakers.`,


`India vs Ireland 1st T20 Live Score: Jasprit Bumrah-led India will take on Ireland in the first T20I at The Village in Dublin. It will be a massive opportunity for Sanju Samson, who had a poor outing against West Indies in the T20Is to get back among the runs.  
Indias IPL stars like Ruturaj Gaikwad, Rinku Singh and Jitesh Sharma will also be eager to make an impact. The fringe players like Washington Sundar, Shahbaz Ahmed and Ravi Bishnoi to show their prowess and the comeback man Shivam Dube would be looking for redemption.
Ireland which is led by Andrew Balbirnie with talented players like Harry Tector, Lorcan Tucker, and all-rounder George Dockrell is a quality side in the shortest format even though they are yet to win a match against India till now and they cause an upset`
    
];

    img=["photos/archives_1-sixteen_nine_1-sixteen_nine-_3.avif","photos/Prime-Minister-Narendra-Modi--File-photo-_1692366936293.avif","photos/kohli-says-news-on-social-media-earnings-not-true-after-hopper-hq-releases-list-of-highest-instagram-120559-16x9_1.avif",

    
"photos/WhatsApp Image 2023-08-17 at 1.40.19 PM.jpeg",
"photos/2023-07-26-twt-sustainable-development-goals.jpg",
"photos/image1.avif",

"photos/h_1692365565723_1692365578309.avif",
"photos/Michigan_house_1692356357807_1692356396464.avif",
"photos/META-PLATFORMS-CANADA--0_1692359010755_1692359038299.avif",

"photos/Geekdom_Matthew-Espinoza-startup-bootcamps_8-2023.webp",
"photos/Image-from-iOS-1.webp",
"photos/Brenda-Bazan-san-antonio-cooking-chef-kirk-6.webp",

"photos/James-2.avif",
"photos/Prag-5.avif",
"photos/WhatsApp-Image-2023-08-18-at-12.50.41-PM.avif"
];

    do{
        document.write(`<div class="post">
        
        <h3>${title[init]}</h3> 
         <img src="${img[init]}" alt = "photo">
        <p>${msg[init]}</p>
        </div>`);
        init ++;

    }
    
    while(init<count);
    document.write(`</div>`);
}
