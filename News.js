
import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import Foote from './Foote';
const News = (props) => {
    const [articles, setArticles] = useState([])
    const [currentpage,setcurrentpage]=useState(1)
    const [loading, setLoading] = useState(true)
    const [pagechange,setpagechange]=useState(false)
   
    
    const updateNews = async (newcategory) => {
        // var url=`https://newsapi.org/v2/top-headlines?category=${props.category}&apiKey=a0507de64f0c463d9dc01d4c13245062`


        var url=`https://flye-news-app.vercel.app/${props.category}`
    //     props.setProgress(3);
    //      if( newcategory==='business'){
    //         url="https://flye-news-app.vercel.app/business"
    //     }
    //     else if(  newcategory==='entertainment'){

    //         url="https://flye-news-app.vercel.app/entertainment"
    //     }
       
    //   else  if(  newcategory==="general" ){
    //         // console.log(" if general")
    //         url=url+"general"
    //     }
       
    //     else if(  newcategory==='health'){
    //         url="https://flye-news-app.vercel.app/health"
    //     }
       
    //     else if(  newcategory==='science' ){
    //         url="https://flye-news-app.vercel.app/science"
    //     }
    //     else if(  newcategory==='sport'){
    //         url="https://flye-news-app.vercel.app/sport"
    //     }
    //     else if(  newcategory==='technology'){
    //         url="https://flye-news-app.vercel.app/technology"
    //     }
        // const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=a0507de64f0c463d9dc01d4c13245062`
        setLoading(true)
        let data = await fetch(url);
        let artifa;
         props.setProgress(30);
       
        let parsedData = await data.json()
        // console.log("this parse data :" ,parsedData)
        if(parsedData.status==="ok"){
            // console.log("parse data is correct ")
             artifa=parsedData.articles;
             // display data output
            //  console.log(artifa);
        }
        
        props.setProgress(70);
        // if(artifa.length < 10){// here new api return 0 response so i display store news
        if(!artifa ){   
            // this data news when request expire or any error 
         let arr= [
            {
            "source": {
            "id": "the-washington-post",
            "name": "The Washington Post"
            },
            "author": "Christian Davenport",
            "title": "Boeing Starliner spacecraft launch scrubbed minutes before liftoff - The Washington Post",
            "description": "Boeing’s Starliner spacecraft is set to make it’s first crewed flight to the International Space Station after multiple delays.",
            "url": "https://www.washingtonpost.com/technology/2024/06/01/boeing-starliner-launch-live-video-nasa/",
            "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/CJRMTH4L326VOHSXQSMNJJQKRI_size-normalized.jpg&w=1440",
            "publishedAt": "2024-06-01T22:24:52Z",
            "content": "Boeings first attempt to fly its Starliner spacecraft with astronauts on board was scrubbed Saturday less than four minutes before it was to lift off. The delay was called by an automated computer sy… [+3178 chars]"
            },
            {
            "source": {
            "id": "nbc-news",
            "name": "NBC News"
            },
            "author": "Chloe Melas",
            "title": "Angelina Jolie and Brad Pitt's daughter Shiloh files to drops 'Pitt' from last name - NBC News",
            "description": "Shiloh Jolie-Pitt, the 18-year-old daughter of Brad Pitt and Angelina Jolie, wants to change her name.",
            "url": "https://www.nbcnews.com/pop-culture/pop-culture-news/angelina-jolie-brad-pitts-daughter-shiloh-files-drops-pitt-last-name-rcna155016",
            "urlToImage": "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2024-06/240601-split-pitt-shioh-jolie-ch-1045-c8f23b.jpg",
            "publishedAt": "2024-06-01T22:17:09Z",
            "content": "Shiloh Jolie-Pitt, the 18-year-old daughter of Brad Pitt and Angelina Jolie, wants to change her name.\r\nAccording to two sources familiar with the matter, the estranged couples daughter filed legal p… [+1537 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "YouTube"
            },
            "author": null,
            "title": "UFC 302: Free Fight Marathon - UFC",
            "description": "Rewatch the full fights of top fighters competing at UFC 302: Makhachev vs Poirier which kicks off with the prelims at 6:30pm ET / 3:30pm PT!Order UFC PPV on...",
            "url": "https://www.youtube.com/watch?v=ado30o97e6E",
            "urlToImage": "https://i.ytimg.com/vi/ado30o97e6E/maxresdefault.jpg",
            "publishedAt": "2024-06-01T22:13:00Z",
            "content": null
            },
            {
            "source": {
            "id": "associated-press",
            "name": "Associated Press"
            },
            "author": "MICHAEL MAROT",
            "title": "Caitlin Clark and Indiana Fever edge Angel Reese and Chicago Sky for first home win, 71-70 - The Associated Press",
            "description": "Kelsey Mitchell scored 18 points, NaLyssa Smith added 17 and Caitlin Clark had 11 points, eight rebounds and six assists to help the Indiana Fever win their first home game of the season, 71-70, over the Chicago Sky. Indiana snapped a three-game losing streak…",
            "url": "https://apnews.com/article/fever-sky-score-caitlin-clark-402aeaf5ec6fece222e86be63d6b9d48",
            "urlToImage": "https://dims.apnews.com/dims4/default/d3d3a01/2147483647/strip/true/crop/3000x1688+0+156/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fea%2F27%2F3cdbc8468b51029fca43a1fb3ae7%2F32afbe229ad64e24b6f04b977b26f9f7",
            "publishedAt": "2024-06-01T22:03:00Z",
            "content": "INDIANAPOLIS (AP) Indiana Fever rookie Caitlin Clark tossed the ball high into the air as time expired Saturday. Veteran guard Kelsey Mitchell just started clapping.\r\nFinally, after four consecutive … [+4642 chars]"
            },
            {
            "source": {
            "id": "usa-today",
            "name": "USA Today"
            },
            "author": "Josh Peter",
            "title": "Deontay Wilder vs Zhilei Zhang live updates: Predictions, how to watch, round by round analysis - USA TODAY",
            "description": "Deontay Wilder heads into a bout with Zhilei Zhang having lost three of his past four fights. Wilder calls it \"a do or die moment.\" Follow for updates.",
            "url": "https://www.usatoday.com/story/sports/boxing/2024/06/01/deontay-wilder-zhilei-zhang-live-updates-analysis-highlights/73895743007/",
            "urlToImage": "https://www.usatoday.com/gcdn/authoring/authoring-images/2024/05/29/USAT/73896454007-deontaywilder-0529.JPG?crop=2888,1625,x0,y198&width=2888&height=1625&format=pjpg&auto=webp",
            "publishedAt": "2024-06-01T21:45:00Z",
            "content": "Deontay Wilder is at a crossroads.\r\nOn Saturday he will fight Zhilei Zhang of China in an intriguing heavyweight bout and with a lot to prove.\r\nWilder, the former WBC heavyweight champion, has lost t… [+15791 chars]"
            },
            {
            "source": {
            "id": "cnn",
            "name": "CNN"
            },
            "author": "Matias Grez",
            "title": "Champions League final: Real Madrid wins 15th European Cup with 2-0 win against Borussia Dortmund - CNN",
            "description": "Few teams have faced down Real Madrid in a Champions League final with as much conviction as Borussia Dortmund displayed at Wembley Stadium on Saturday night.",
            "url": "https://www.cnn.com/2024/06/01/sport/champions-league-final-borussia-dortmund-real-madrid-spt-intl/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/ap24153770161861-20240601212520974.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2024-06-01T21:39:00Z",
            "content": "Few teams have faced down Real Madrid in a Champions League final with as much conviction as Borussia Dortmund displayed at Wembley Stadium on Saturday night.\r\nIn the end, however, the result was the… [+4835 chars]"
            },
            {
            "source": {
            "id": "associated-press",
            "name": "Associated Press"
            },
            "author": "SAM MEDNICK, WAFAA SHURAFA",
            "title": "Israeli leader Netanyahu faces growing pressure at home after Biden's Gaza proposal - The Associated Press",
            "description": "Israel’s prime minister faces growing pressure after U.S. President Joe Biden described a proposed agreement to end the fighting in Gaza. Many Israelis are urging Benjamin Netanyahu to embrace the deal, but far-right allies threaten to collapse his government…",
            "url": "https://apnews.com/article/israel-hamas-war-news-01-06-2024-8c06dda3a8e20491b5a34377c60bb827",
            "urlToImage": "https://dims.apnews.com/dims4/default/598eb69/2147483647/strip/true/crop/5140x2891+0+268/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F1a%2F55%2F1a101ac38cbf8d1a827f4eafa0ba%2Fd1328c1fb3e64620b7b7cb2fafb68284",
            "publishedAt": "2024-06-01T21:38:00Z",
            "content": "TEL AVIV, Israel (AP) Israels prime minister faced growing pressure Saturday after U.S. President Joe Biden announced a proposed agreement to end the fighting in Gaza, with many Israelis urging Benja… [+6093 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "BBC News"
            },
            "author": null,
            "title": "Ukraine war: Can using Western weapons on Russia change the war? - BBC.com",
            "description": "The latest Russian advance in the Kharkiv region has convinced Kyiv’s allies to change their policy.",
            "url": "https://www.bbc.com/news/articles/cjll1r1el5wo",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/7668/live/eb0f9f00-2040-11ef-9b41-f58b08291af8.jpg",
            "publishedAt": "2024-06-01T21:28:13Z",
            "content": "Abdujalil Abdurasulov,BBC News\r\nUkraine is now allowed to use Western weapons to hit targets inside Russia. What will this decision change and how will it affect the front line in Ukraine?\r\nUp until … [+5674 chars]"
            },
            {
            "source": {
            "id": "associated-press",
            "name": "Associated Press"
            },
            "author": null,
            "title": "Chad Daybell sentenced to death for killing wife and girlfriend's 2 children in jury decision - The Associated Press",
            "description": "A jury in Idaho has unanimously agreed that convicted killer Chad Daybell deserves the death penalty for the gruesome murders of his wife and his girlfriend’s two youngest children. The decision ends a grim case that began in 2019 with a search for two missin…",
            "url": "https://apnews.com/article/idaho-murder-trial-daybell-vallow-children-killed-a294ee6efc7ecb814f67d0e5f5daaf98",
            "urlToImage": "https://dims.apnews.com/dims4/default/9adf28c/2147483647/strip/true/crop/5472x3078+0+285/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F50%2F5c%2Fb2d327dc666a4ac9e928c812f020%2Ff09658206eec4e009ff6014be4ebca4d",
            "publishedAt": "2024-06-01T21:20:00Z",
            "content": "BOISE, Idaho (AP) A jury in Idaho unanimously agreed Saturday that convicted killer Chad Daybell deserves the death penalty for the gruesome murders of his wife and his girlfriends two youngest child… [+4732 chars]"
            },
            {
            "source": {
            "id": "msnbc",
            "name": "MSNBC"
            },
            "author": "MSNBC.com",
            "title": "Mexico gears up for first woman as president as 34 candidates killed during election cycle - MSNBC",
            "description": "Mexico will likely see the first woman elected as its president, but the historic first is overshadowed by 34 candidates or aspiring candidates for political office being killed. NBC News' Guad Venegas reports on the political violence and how organized crime…",
            "url": "https://www.msnbc.com/weekends-with-alex-witt/watch/mexico-gears-up-for-first-woman-as-president-as-34-candidates-killed-during-election-cycle-212086341561",
            "urlToImage": "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/mpx/2704722219/2024_06/1717270807057_n_witt_brk_mexico_election_240601_1920x1080-tt21cp.jpg",
            "publishedAt": "2024-06-01T20:03:45Z",
            "content": null
            },
            {
            "source": {
            "id": null,
            "name": "Page Six"
            },
            "author": "Hannah Southwick",
            "title": "How to watch 'The Life and Murder of Nicole Brown Simpson' documentary - Page Six",
            "description": "The buzzy series features home videos and interviews with 50 participants, including Nicole’s sisters.",
            "url": "https://pagesix.com/2024/06/01/entertainment/how-to-watch-the-life-and-murder-of-nicole-brown-simpson-doc/",
            "urlToImage": "https://pagesix.com/wp-content/uploads/sites/3/2024/05/82998837.jpg?quality=75&strip=all&w=1024",
            "publishedAt": "2024-06-01T20:00:00Z",
            "content": "Page Six may be compensated and/or receive an affiliate commission if you buy through our links.\r\nNearly three decades after Nicole Brown Simpson’s death, Lifetime is set to release a two-part docume… [+2288 chars]"
            },
            {
            "source": {
            "id": "the-washington-post",
            "name": "The Washington Post"
            },
            "author": "Samantha Chery",
            "title": "Jennifer Lopez cancels her troubled ‘This is Me’ summer tour - The Washington Post",
            "description": "Jennifer Lopez’s “This Is Me … Live” tour was canceled amid reports of poor ticket sales and rumors about her marriage to Ben Affleck.",
            "url": "https://www.washingtonpost.com/entertainment/2024/06/01/jennifer-lopez-this-is-me-tour-canceled/",
            "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/JPPE7HLSXCKOQPK7ZMNDRC6JKY.JPG&w=1440",
            "publishedAt": "2024-06-01T19:52:21Z",
            "content": "Jennifer Lopezs North American summer tour, This Is Me Live, has been canceled amid reports of the tours underwhelming ticket sales and constant tabloid rumors about the superstars marriage to Ben Af… [+3351 chars]"
            },
            {
            "source": {
            "id": "abc-news",
            "name": "ABC News"
            },
            "author": "SOPHIA TAREEN Associated Press",
            "title": "Disruptions at University of Chicago graduation as school withholds 4 diplomas over protests - ABC News",
            "description": "A crowd of students protesting the war in Gaza have walked out of the University of Chicago’s commencement",
            "url": "https://abcnews.go.com/US/wireStory/disruptions-university-chicago-graduation-school-withholds-4-diplomas-110743138",
            "urlToImage": "https://i.abcnewsfe.com/a/5a0a97fc-0314-4cc1-b17c-b4582e859633/wirestory_4a9b57046e92d9a41cb2f54625950647_16x9.jpg?w=1600",
            "publishedAt": "2024-06-01T19:18:45Z",
            "content": "CHICAGO -- Dozens of students protesting the war in Gaza walked out of the University of Chicagos commencement Saturday as the school withheld the diplomas of four seniors over their involvement with… [+2612 chars]"
            },
            {
            "source": {
            "id": "business-insider",
            "name": "Business Insider"
            },
            "author": "Lauren Edmonds",
            "title": "Japanese billionaire cancels star-studded moon trip Space X - Business Insider",
            "description": "dearMoon and SpaceX made plans to reach the moon in 2023, but that goal became \"unfeasible.\" Yusaku Maezawa said the voyage was now canceled.",
            "url": "https://www.businessinsider.com/japanese-billionaire-cancels-star-studded-moon-trip-space-x-2024-6",
            "urlToImage": "https://i.insider.com/665b6ba7cc442a2f676d0290?width=1200&format=jpeg",
            "publishedAt": "2024-06-01T18:51:00Z",
            "content": null
            },
            {
            "source": {
            "id": null,
            "name": "[Removed]"
            },
            "author": null,
            "title": "[Removed]",
            "description": "[Removed]",
            "url": "https://removed.com",
            "urlToImage": null,
            "publishedAt": "1970-01-01T00:00:00Z",
            "content": "[Removed]"
            },
            {
            "source": {
            "id": "nbc-news",
            "name": "NBC News"
            },
            "author": "Joe Kottke",
            "title": "Police arrest 34 people at the Brooklyn Museum after protesters occupy building - NBC News",
            "description": "The New York Police Department said Saturday it took 34 people into custody after responding to a pro-Palestinian protest in Brooklyn, New York, that led to reports of damaged artwork and staff harassment at the Brooklyn Museum.",
            "url": "https://www.nbcnews.com/news/us-news/police-arrest-34-people-brooklyn-museum-protesters-occupy-building-rcna155032",
            "urlToImage": "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2024-06/240601-Brooklyn-Museum-ch-1349-9863cc.jpg",
            "publishedAt": "2024-06-01T17:59:49Z",
            "content": "The New York Police Department said Saturday it took 34 people into custody after responding to a pro-Palestinian protest in Brooklyn, New York, that led to reports of damaged artwork and staff haras… [+3008 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Hollywood Reporter"
            },
            "author": "Pamela McClintock",
            "title": "Box Office: ‘Garfield’ Beating ‘Furiosa’ With $13M-$14M in Clawless Weekend - Hollywood Reporter",
            "description": "With no new Hollywood event pics, weekend revenue looks to be down 67 percent from this time last year when 'Spider-Man: Across the Spider-Verse' opened domestically to $120.5 million.",
            "url": "http://www.hollywoodreporter.com/movies/movie-news/box-office-garfield-furiosa-1235913297/",
            "urlToImage": "https://www.hollywoodreporter.com/wp-content/uploads/2024/05/O_f1550_0030_comp_still_v003_stillForPaintover.1065-copy.jpg?w=1024",
            "publishedAt": "2024-06-01T17:24:37Z",
            "content": "It’s another bummer of a weekend at the summer of box office, where overall domestic revenue looks to be down 67 percent — no, not a typo — from a year ago as Hollywood and theater owners continue to… [+1855 chars]"
            },
            {
            "source": {
            "id": "nbc-news",
            "name": "NBC News"
            },
            "author": "Mirna Alsharif",
            "title": "Severe storms and heavy rain to hit the South and West - NBC News",
            "description": "Severe storms and heavy rains are expected to affect parts of the South following weeks of inclement weather that killed over two dozen people across the region.",
            "url": "https://www.nbcnews.com/news/weather/severe-storms-heavy-rain-impact-south-west-rcna155030",
            "urlToImage": "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2024-06/240601-storm-ch-1223-d97baf.jpg",
            "publishedAt": "2024-06-01T17:11:33Z",
            "content": "Severe storms and heavy rains are expected to affect parts of the South following weeks of inclement weather that killed over two dozen people across the region.\r\nThis comes after a devastating Memor… [+2243 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "KTLA Los Angeles"
            },
            "author": "Austin Turner",
            "title": "Mosquitos carrying West Nile Virus found in Los Angeles County - KTLA Los Angeles",
            "description": "For the first time this year, some Los Angeles County mosquitos have tested positive for West Nile Virus, the Greater Los Angeles County Vector Control District announced Saturday. The positive mosquitos were recovered from a trap in the San Fernando Valley n…",
            "url": "https://ktla.com/news/local-news/mosquitos-carrying-west-nile-virus-found-in-los-angeles-county/",
            "urlToImage": "https://ktla.com/wp-content/uploads/sites/4/2023/09/AP19276568685776.jpg?w=1280",
            "publishedAt": "2024-06-01T17:11:20Z",
            "content": "For the first time this year, some Los Angeles County mosquitos have tested positive for West Nile Virus, the Greater Los Angeles County Vector Control District announced Saturday.\r\nThe positive mosq… [+1616 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "ABC15 Arizona"
            },
            "author": "abc15.com staff",
            "title": "Gila River officer dead, five others, including another officer, hurt in Santan area shooting - ABC15 Arizona in Phoenix",
            "description": "Officials have identified the officer killed as Joshua Briese",
            "url": "https://www.abc15.com/news/crime/officer-dead-another-hurt-after-six-people-shot-at-home-near-santan-on-gila-river-indian-community",
            "urlToImage": "https://ewscripps.brightspotcdn.com/dims4/default/6168183/2147483647/strip/true/crop/1280x672+0+24/resize/1200x630!/quality/90/?url=http%3A%2F%2Fewscripps-brightspot.s3.amazonaws.com%2Fe7%2F41%2Fc1d92cb248d988ef03f5aa2e3e2f%2Fdo-not-delete-blue-bkg.png",
            "publishedAt": "2024-06-01T16:59:22Z",
            "content": "SANTAN, AZ A Gila River police officer is dead and another is hurt, along with four other individuals after a shooting broke out early Saturday morning in the Gila River Indian Community.\r\nGila River… [+2372 chars]"
            }
            ]
        setArticles(arr);
        }
        else{
            setArticles(artifa);
        }
        setLoading(false)
        props.setProgress(100); 
    }
    useEffect(() => {
        updateNews();
    }, [props.category]) 
   
    const handlePrev=()=>{
        let categoryarr=["business", "entartainment","health","general","science","sport","technology"];
        var randid=Math.random();
        var randomIndex=Math.floor(randid*7);
        setpagechange(true)
        updateNews(categoryarr[randomIndex]);
        console.log(randomIndex)
        setcurrentpage(currentpage-1)
        
    }
    const handleNext=()=>{
        setpagechange(true)
        let categoryarr=["business", "entartainment","health","general","science","sport","technology"];
        var randid=Math.random();
        var randomIndex=Math.floor(randid*7);
        updateNews(categoryarr[randomIndex]);
        console.log(randomIndex)
        setcurrentpage(currentpage+1)
        
        
    }
   
        const reloadPage = () => {
          window.location.reload();
        } 
    

    return (
        <>
            {loading && <Spinner />}
                <div className="container" >
                    <div className="row"> 
                        {articles.map((element) => {
                            if (element.title === '[Removed]') {
                                // Skip rendering this item
                                return null;
                              }
                            return <div className="col-md-4" key={element.url}>
                                <NewsItem title={element.title} description={element.description ? element.description : "No description is provide due to unspecifid news, due to unknow source "} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                            </div>
                        })}
                    </div>
                    <div className='pagination' style={{display:'flex',justifyContent:'center',alignContent:'center',marginTop:'100px'}}>
                        <button disabled={currentpage === 1} className='btn btn-dark' onClick={handlePrev}>PREV</button>
                        <span style={{color:'white', marginLeft:'20px',marginRight:'20px'}}>{currentpage} of {7}</span>
                        <button disabled={currentpage === 7} className='btn btn-dark' onClick={handleNext}>NEXT</button>
                    </div>
                    <div style={{display:'flex',justifyContent:'center' ,marginTop:'52px'}}>
                    <button style={{backgroundColor:'rebeccapurple' ,borderRadius:'10px'}} onClick={reloadPage}>Go To Top</button>
                    </div>
                </div>
                <Foote/>
        </>
    )

}
export default News