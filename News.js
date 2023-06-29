import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  // articles=[
  //   {
  //     "source": { "id": null, "name": "NDTV News" },
  //     "author": null,
  //     "title": "\"My Name Is Not Savarkar, Won't Apologise\": Rahul Gandhi On Disqualification - NDTV",
  //     "description": "A combative Rahul Gandhi tore into Prime Minister Narendra Modi a day after the top opposition leader was disqualified from parliament.",
  //     "url": "https://www.ndtv.com/india-news/will-continue-to-ask-questions-rahul-gandhis-first-press-meet-after-disqualification-3892031",
  //     "urlToImage": "https://c.ndtvimg.com/2023-03/l0n3ha2_rahul-gandhi_625x300_25_March_23.jpg",
  //     "publishedAt": "2023-03-25T08:33:00Z",
  //     "content": "Rahul Gandhi said he was disqualified as the PM is scared of his next speech.\r\nNew Delhi: A combative Rahul Gandhi tore into Prime Minister Narendra Modi a day after the top opposition leader was dis… [+2413 chars]"
  //   },
  //   {
  //     "source": { "id": null, "name": "The Weather Channel" },
  //     "author": "The Weather Channel",
  //     "title": "Venus and the Moon Form a Rare Spectacle in Friday's Night Sky | Weather.com - The Weather Channel",
  //     "description": "Referred to as the lunar occultation of Venus, this phenomenon is similar to an Eclipse and occurs when the Moon is orbiting between Earth and Venus.",
  //     "url": "https://weather.com/en-IN/india/space/news/2023-03-25-venus-and-the-moon-form-rare-spectacle-in-friday-night-sky",
  //     "urlToImage": "https://s.w-x.co/in-moon_venus%281%29.jpg",
  //     "publishedAt": "2023-03-25T07:51:57Z",
  //     "content": "The Moon is as lonely as it is beautiful as it reigns the night sky all by itself. But last night, it had a companion. \r\nOn Friday, a rare event involving the conjunction of the Moon and Venus decora… [+1764 chars]"
  //   },
  //   {
  //     "source": { "id": null, "name": "Hindustan Times" },
  //     "author": "Kanishka Singharia",
  //     "title": "Widespread damage as massive tornado hits Punjab village | Video - Hindustan Times",
  //     "description": "Several media reports suggest the freak phenomenon injured over half a dozen people and livestock, damaged more than 50 houses and destroyed crops in the west Punjab.",
  //     "url": "https://www.hindustantimes.com/cities/chandigarh-news/widespread-damage-as-massive-tornado-hits-punjab-village-video-101679727083484.html",
  //     "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/03/25/1600x900/0797f23e-ce1e-11ec-8ffc-07511f5657a1_1651939094981_1679729040774_1679729040774.jpg",
  //     "publishedAt": "2023-03-25T07:32:38Z",
  //     "content": "A powerful tornado tore through Punjab's Fazilka district on Friday, causing injuries, and widespread damage. The tornado rolled through the northern state at around 4pm and moved quickly, damaging b… [+1721 chars]"
  //   },
  //   {
  //     "source": { "id": null, "name": "Livemint" },
  //     "author": "Livemint",
  //     "title": "iQoo 9 SE gets a price cut of ₹3,000: Here’s the new price | Mint - Mint",
  //     "description": "Readers must note that there are two RAM models of iQoo 9 SE. These include 8GB + 128GB and 12GB+ 256GB. Price of the 8GB RAM variant has only been reduced.",
  //     "url": "https://www.livemint.com/technology/gadgets/iqoo-9-se-gets-a-price-cut-of-rs-3-000-here-s-the-new-price-11679727374912.html",
  //     "urlToImage": "https://www.livemint.com/lm-img/img/2023/03/25/600x338/iqoo_9_se_1679727423492_1679727431591_1679727431591.jpg",
  //     "publishedAt": "2023-03-25T06:58:48Z",
  //     "content": "Vivos sub-brand iQoo has slashed the price of iQoo 9 SE in India. The smartphone was launched in February last year with a starting price of 33,990 for the 8GB RAM model. The company has now reduced … [+1436 chars]"
  //   },
  //   {
  //     "source": { "id": null, "name": "NDTV News" },
  //     "author": null,
  //     "title": "\"I Applaud China\": Joe Biden's Gaffe Evokes Laughter At Canadian Parliament - NDTV",
  //     "description": "Gaffe-prone US President Joe Biden on Friday mistakenly praised China while delivering a speech to the Canadian parliament.",
  //     "url": "https://www.ndtv.com/world-news/in-latest-gaffe-us-president-joe-biden-praises-china-instead-of-canada-watch-3891887",
  //     "urlToImage": "https://c.ndtvimg.com/2023-03/cbfh3h7g_joe-biden_625x300_25_March_23.jpg",
  //     "publishedAt": "2023-03-25T06:49:07Z",
  //     "content": "Joe Biden was on a two-day visit to Ottawa for talks with Canadian PM Justin Trudeau.\r\nGaffe-prone US President Joe Biden on Friday mistakenly praised China while delivering a speech to the Canadian … [+1883 chars]"
  //   },
  //   {
  //     "source": { "id": null, "name": "Hindustan Times" },
  //     "author": "HT Tech",
  //     "title": "Asteroid to come closer than the Moon! NASA raises alert about flyby today - HT Tech",
  //     "description": "A gigantic 160-foot asteroid named Asteroid 2023 DZ2 will come worryingly close to Earth today. It will actually get between Earth and Moon! NASA has informed about its speed, distance, and more.",
  //     "url": "https://tech.hindustantimes.com/tech/news/asteroid-to-come-closer-than-the-moon-nasa-raises-alert-about-flyby-today-71679724923760.html",
  //     "urlToImage": "https://images.hindustantimes.com/tech/img/2023/03/25/1600x900/asteroid-4063790_960_720_1670757436603_1679725224870_1679725224870.jpg",
  //     "publishedAt": "2023-03-25T06:29:12Z",
  //     "content": "A scary 160-foot asteroid named Asteroid 2023 DZ2 is rushing towards Planet Earth to make an uncomfortable close approach at a mind numbing speed, warns NASA. NASA tech and calculations have revealed… [+1618 chars]"
  //   },
  //   {
  //     "source": { "id": "the-times-of-india", "name": "The Times of India" },
  //     "author": "The Feed",
  //     "title": "Garena Free Fire Max Redeem Codes March 25; Win items, rewards and more - Economic Times",
  //     "description": "Here are the Garena Free Fire Max redeem codes for March 25, 2023 and how you can use them to win in-game items and rewards.",
  //     "url": "https://economictimes.indiatimes.com/news/new-updates/garena-free-fire-max-redeem-codes-march-25-win-items-rewards-and-more/articleshow/98987933.cms",
  //     "urlToImage": "https://img.etimg.com/thumb/msid-98987908,width-1070,height-580,imgsize-54828,overlay-economictimes/photo.jpg",
  //     "publishedAt": "2023-03-25T06:22:00Z",
  //     "content": "Garena Free Fire Max, a popular game, offers redeem codes that can be used to win in-game items such as weapons, skins, and diamonds. These codes are 12-digit alphanumeric codes consisting of capital… [+2201 chars]"
  //   },
  //   {
  //     "source": { "id": null, "name": "Livemint" },
  //     "author": "Sounak Mukhopadhyay",
  //     "title": "‘US doesn’t seek conflict with Iran, but…’ what Biden said on retaliatory strikes in Syria | Mint - Mint",
  //     "description": "US President Joe Biden sent a message to Iran while addressing the media.",
  //     "url": "https://www.livemint.com/news/world/us-doesn-t-seek-conflict-with-iran-but-what-biden-said-on-retaliatory-strikes-in-syria-11679722768943.html",
  //     "urlToImage": "https://www.livemint.com/lm-img/img/2023/03/25/600x338/AP03-25-2023-000004A-0_1679723673615_1679723673615_1679723701015_1679723701015.jpg",
  //     "publishedAt": "2023-03-25T06:06:07Z",
  //     "content": "A US military base in Northeast Syria was attacked by Iranian proxy forces, with seven rockets targeting the base. This came after US forces conducted retaliatory airstrikes on sites in Syria affilia… [+2430 chars]"
  //   },
  //   {
  //     "source": { "id": null, "name": "Hindustan Times" },
  //     "author": "HT News Desk",
  //     "title": "Who is Srikanth Venkatachari, Reliance's new chief financial officer? - Hindustan Times",
  //     "description": "Venkatachari's appointment will come into effect from June 1, with him taking over from Alok Agarwal, the CFO since 2005.",
  //     "url": "https://www.hindustantimes.com/business/srikanth-venkatachari-chief-financial-officer-reliance-industries-limited-mukesh-ambani-101679721020263.html",
  //     "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/03/25/1600x900/RELIANCE-RESULTS--0_1658510824902_1658510824902_1679721555619_1679721555619.JPG",
  //     "publishedAt": "2023-03-25T05:50:50Z",
  //     "content": "Mukesh Ambani-led Reliance Industries Limited (RIL) has appointed Srikanth Venkatachari as its new chief financial officer (CFO), with the appointment scheduled to come into effect from June 1. Venka… [+906 chars]"
  //   },
  //   {
  //     "source": { "id": null, "name": "The Indian Express" },
  //     "author": "Science Desk",
  //     "title": "Earth hit by severe solar storm much stronger than expected: Report - The Indian Express",
  //     "description": "The US National Ocean and Atmospheric Administration (NOAA) gave the geomagnetic storm a severity grade of G4, which is the second-highest grade possible.",
  //     "url": "https://indianexpress.com/article/technology/science/severe-geomagnetic-solar-storm-8517938/",
  //     "urlToImage": "https://images.indianexpress.com/2023/03/Aurora-geomagnetic-storm-20230325.jpg",
  //     "publishedAt": "2023-03-25T05:10:32Z",
  //     "content": "Our planet was hit by a really powerful solar storm yesterday (March 24), but according to reports, no one saw it coming.The US National Ocean and Atmospheric Administration (NOAA) gave the geomagnet… [+2026 chars]"
  //   },
  //   {
  //     "source": { "id": null, "name": "Hindustan Times" },
  //     "author": "HT Tech",
  //     "title": "Price crash! Buy Samsung Galaxy M53 5G for 3999 against 32999 NOW - HT Tech",
  //     "description": "Amazon has announced amazing offers on the Samsung Galaxy M53 5G leading to a massive price reduction. Grab the phone for just Rs. 3999 today. Know how.",
  //     "url": "https://tech.hindustantimes.com/mobile/news/price-crash-buy-samsung-galaxy-m53-5g-for-3999-against-32999-now-71679719543893.html",
  //     "urlToImage": "https://images.hindustantimes.com/tech/img/2023/03/25/1600x900/Untitled_design_-_2023-03-25T101806426_1679719713557_1679719713684_1679719713684.png",
  //     "publishedAt": "2023-03-25T04:54:25Z",
  //     "content": "Buying a new smartphone and that too by paying a lot less is something that everyone is looking for. If you are also searching for a fantastic deal- you can have a look at the Samsung Galaxy M53 5G o… [+2099 chars]"
  //   },
  //   {
  //     "source": { "id": null, "name": "EastMojo" },
  //     "author": "Press Trust of India",
  //     "title": "50pc of respiratory infection cases in hospitals are of H3N2: Govt - EastMojo",
  //     "description": "An ICMR survey has shown that 50 per cent of the respiratory infection cases admitted to hospitals in over two month are of H3N2 influenza, the government told the Lok Sabha",
  //     "url": "http://www.eastmojo.com/national/2023/03/25/50pc-of-respiratory-infection-cases-in-hospitals-are-of-h3n2-govt/",
  //     "urlToImage": "https://i0.wp.com/www.eastmojo.com/wp-content/uploads/2023/03/H3N2-Virus.png?fit=1920%2C1080&ssl=1",
  //     "publishedAt": "2023-03-25T04:50:00Z",
  //     "content": "New Delhi: An ICMR survey has shown that 50 per cent of the respiratory infection cases admitted to hospitals in over two month are of H3N2 influenza, the government told the Lok Sabha on Friday.\r\nA … [+1525 chars]"
  //   },
  //   {
  //     "source": { "id": null, "name": "Bar & Bench - Indian Legal News" },
  //     "author": "Debayan Roy",
  //     "title": "Plea in Supreme Court challenges Section 8(3) of Representation of People Act providing automatic disqualification of convicted MPs/ MLAs - Bar & Bench - Indian Legal News",
  //     "description": "A plea has been filed before the Supreme Court challenging the constitutional validity of Section 8(3) of the Representation of the People Act, 1951 which lays",
  //     "url": "https://www.barandbench.com/news/litigation/plea-supreme-court-challenges-section-83-representation-of-people-act-automatic-disqualification-convicted-mps-mlas",
  //     "urlToImage": "https://gumlet.assettype.com/barandbench%2F2022-08%2F3430feb1-449f-45c5-949d-a0f40202fa17%2F2.jpg?rect=0%2C0%2C1600%2C840&w=1200&auto=format%2Ccompress&ogImage=true&enlarge=true",
  //     "publishedAt": "2023-03-25T04:43:08Z",
  //     "content": "Section 8(3) of the 1951 Act, reads as follows:\r\n(3) A person convicted of any offence and sentenced to imprisonment for not less than two years [other than any offence referred to in sub-section (1)… [+2270 chars]"
  //   },
  //   {
  //     "source": { "id": null, "name": "Hindustan Times" },
  //     "author": "Mallika Soni",
  //     "title": "India records over 1,500 fresh Covid cases, highest in 146 days - Hindustan Times",
  //     "description": "India Covid Cases: India records over 1,500 fresh Covid cases, highest in 146 days | Latest News India",
  //     "url": "https://www.hindustantimes.com/india-news/india-records-over-1-500-fresh-covid-cases-highest-in-146-days-101679719232321.html",
  //     "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/03/25/1600x900/Covid-19-test-3_1679549609729_1679549609729_1679719372033_1679719372033.jpg",
  //     "publishedAt": "2023-03-25T04:43:05Z",
  //     "content": "India recorded over 1,500 fresh Covid cases, the highest in 146 days, health ministry data showed. New Covid infections logged stood at 1,590 while 910 recoveries were recorded in the past 24 hours, … [+869 chars]"
  //   },
  //   {
  //     "source": { "id": null, "name": "India Today" },
  //     "author": "India Today Entertainment Desk",
  //     "title": "Bheed box office collection day 1: Rajkummar Rao and Bhumi Pednekar’s film fails, earns a mere Rs 15 lakh - India Today",
  //     "description": "Bheed, directed by Anubhav Sinha, is now in theatres. The day 1 box office figures of the film is disappointing.",
  //     "url": "https://www.indiatoday.in/movies/bollywood/story/bheed-box-office-collection-day-1-rajkummar-rao-and-bhumi-pednekars-film-fails-earns-a-mere-rs-15-lakh-2351271-2023-03-25",
  //     "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202303/24e6ff53-76d9-4bde-89f9-20f8073cf9e7-sixteen_nine.png?VersionId=Y8bMDxDdmJMmYIVVB9FrT0FWPnRpSXb.",
  //     "publishedAt": "2023-03-25T04:30:08Z",
  //     "content": "By India Today Entertainment Desk: Bheed features Rajkummar Rao and Bhumi Pednekar in the lead roles. The film was directed by Anubhav Sinha and has been in the face of controversy for a while now. T… [+1668 chars]"
  //   },
  //   {
  //     "source": { "id": null, "name": "Hindustan Times" },
  //     "author": "HT Entertainment Desk",
  //     "title": "Anushka Sharma tells paparazzi to 'relax' as they call her ‘Mrs Kohli’. Watch - Hindustan Times",
  //     "description": "Anushka Sharma attended another event on Friday night in Mumbai and had a fun interaction with the paparazzi, who wouldn't stop chanting her name. | Bollywood",
  //     "url": "https://www.hindustantimes.com/entertainment/bollywood/anushka-sharma-tells-paparazzi-to-relax-as-they-call-her-mrs-kohli-watch-101679716065015.html",
  //     "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/03/25/1600x900/anushka_sharma_1679716261292_1679716261402_1679716261402.jpg",
  //     "publishedAt": "2023-03-25T04:09:25Z",
  //     "content": "After that dazzling appearance at Indian Sports Honours with husband Virat Kohli on Thursday, Anushka Sharma attended another event in Mumbai on Friday, albeit a bit more solo this time. She was seen… [+1804 chars]"
  //   },
  //   {
  //     "source": { "id": "the-hindu", "name": "The Hindu" },
  //     "author": "The Hindu",
  //     "title": "Congress announces candidates in 124 constituencies, Siddaramaiah to contest from Varuna, former Union minister Muniyappa from Devanahalli - The Hindu",
  //     "description": null,
  //     "url": "https://www.thehindu.com/elections/karnataka-assembly/karnataka-assembly-elections-2023-congress-announces-first-list-of-candidates-siddaramaiah-to-contest-from-varuna/article66659985.ece",
  //     "urlToImage": null,
  //     "publishedAt": "2023-03-25T04:02:00Z",
  //     "content": null
  //   },
  //   {
  //     "source": { "id": "the-times-of-india", "name": "The Times of India" },
  //     "author": "TIMESOFINDIA.COM",
  //     "title": "1st T20I: Mohammad Nabi stars as Afghanistan clinch historic win over Pakistan - Indiatimes.com",
  //     "description": "Cricket News: Mohammad Nabi starred as Afghanistan cruised to a six-wicket win over Pakistan in the first Twenty20 international of a three-game series on Friday. T",
  //     "url": "https://timesofindia.indiatimes.com/sports/cricket/news/1st-t20i-mohammad-nabi-stars-as-afghanistan-clinch-historic-win-over-pakistan/articleshow/98984893.cms",
  //     "urlToImage": "https://static.toiimg.com/thumb/msid-98984910,width-1070,height-580,imgsize-69042,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
  //     "publishedAt": "2023-03-25T03:47:00Z",
  //     "content": "Winning Moments - From another angle Watch the winning shot of @MohammadNabi007 from another angle as the big ma https://t.co/Pdsjytthq0\r\n— Afghanistan Cricket Board (@ACBofficials) 1679688905000"
  //   },
  //   {
  //     "source": { "id": null, "name": "NDTV News" },
  //     "author": "NDTV Sports Desk",
  //     "title": "\"Back Surgery For A Batter?\" Ex-India Star Astonished Over Shreyas Iyer's Injury - NDTV Sports",
  //     "description": "India batter Shreyas Iyer is all set to miss the upcoming season of the Indian Premier League (IPL) due to a recurruing lower back issue",
  //     "url": "https://sports.ndtv.com/cricket/back-surgery-for-a-batter-ex-india-star-astonished-over-shreyas-iyers-injury-3890009",
  //     "urlToImage": "https://c.ndtvimg.com/2022-10/lvd04q9_shreyas-iyer-806_625x300_08_October_22.jpg?im=FitAndFill,algorithm=dnn,width=1200,height=675",
  //     "publishedAt": "2023-03-25T03:11:01Z",
  //     "content": "India batter Shreyas Iyer is all set to miss the upcoming season of the Indian Premier League (IPL) due to a recurruing lower back issue, which may require surgery. Reports, however, have suggested t… [+1422 chars]"
  //   },
  //   {
  //     "source": { "id": null, "name": "India Today" },
  //     "author": "India Today News Desk",
  //     "title": "Won’t accept differential security standards: Jaishankar breaks silence on Khalistani attack on Indian mission - India Today",
  //     "description": "Days after a group of Khalistani supporters pulled down a Tricolour on the premises of the Indian High Commission in London, Union External Affairs Minister Dr S Jaishankar accused the UK government of failing to meet security obligations.",
  //     "url": "https://www.indiatoday.in/india/story/uk-failed-to-meet-security-obligations-eam-jaishankar-after-khalistan-attack-on-indian-mission-2351241-2023-03-25",
  //     "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202303/eam_jaishankar-sixteen_nine.jpg?VersionId=ZEi.i4e71EzdMsDtedppI3up3VfzfN3E",
  //     "publishedAt": "2023-03-25T02:48:55Z",
  //     "content": "By India Today News Desk: Union External Affairs Minister Dr S Jaishankar has accused the UK government of failing to meet security obligations days after a group of pro-Khalistani protesters vandali… [+1678 chars]"
  //   }
  // ]


  constructor(){
     super();
     this.state={
      // articles=this.articles we made an array of articles in json and passed it to constructor
      articles: [],//now we are using an empty array so that latest news could be fetched
      page:1,
      
      pagesize:20
     }
  }
  async componentDidMount(){
    let url="https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=01aec23a287c42d49116bd2f55e43dfb&page=1pageSize=20";
    let data= await fetch(url);
    let parsedData= await data.json()
    console.log(parsedData);
    this.setState({articles:parsedData.articles,
      totalresult:parsedData.totalResults
   })

  }
  handlenextbutton=async ()=>{
    if(Math.ceil(this.state.page+1>this.state.totalresult/this.state.pagesize)){
    }
    else{
    let url=`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=01aec23a287c42d49116bd2f55e43dfb&page=${this.state.page+1}&pageSize=20`;
    let data= await fetch(url);
    let parsedData= await data.json()
    console.log(parsedData);
    this.setState({
      page: this.state.page+1,
      articles:parsedData.articles})
    }
    

  }
  handleprevbutton=async ()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=01aec23a287c42d49116bd2f55e43dfb&page=${this.state.page-1}&pageSize=20`;
    let data= await fetch(url);
    let parsedData= await data.json()
    console.log(parsedData);
    this.setState({
      page: this.state.page-1,
      articles:parsedData.articles})
    
    

  }
  render() {

    return (
      
        < div className="container my-3">
          <h2 className="text-center">Top Headlines of India</h2>
          <div className="row" >
            {this.state.articles.map((element)=>{
              return <div className="col-md-4" key={element.url}>
              <NewsItem title={element.title?element.title.slice(0,45):" "} description={element.description?element.description.slice(0,88):" "} imageurl={element.urlToImage?element.urlToImage:"https://images.indianexpress.com/2023/03/travel22.jpg?w=640"} newsurl={element.url} />
              </div>
            })}
            <div className="container d-flex justify-content-between" >
            <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handleprevbutton}> &larr; Prev </button>
            <button  disabled={Math.ceil(this.state.page+1>this.state.totalresult/this.state.pagesize)} type="button" className="btn btn-dark" onClick={this.handlenextbutton}>Next &rarr; </button>
            </div>

            </div>
            
        
      </div>
    )
  }
}

export default News
