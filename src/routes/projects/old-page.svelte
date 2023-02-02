<script>
    import { fade } from 'svelte/transition'
    import CatagoryCardProject from "$lib/components/CatagoryCardProject.svelte";
    import HeroCard from '$lib/components/HeroCard.svelte';
    import Article from '$lib/components/Article.svelte';
    import { base } from '$app/paths'

    const catagories = [
        {id:'0', path: '', title: 'UMass GreenEats'},
        {id:'1', path: '', title: 'Optimized File Search Application'},
        {id:'2', path: '', title: 'Dynamic Ray Tracer Algorithm'},
        {id:'3', path: '', title: 'SerenityOS Contributions'},


    ]

    let currentCatagory = 0

    const articles = {
        0: [
            {id:'0', path: '/images/projects1-transformed-transformed.png', data: 
                {
                title: "Nikes", 
                artist: "Frank Ocean", 
                album: "Blonde", 
                embed_link: "https://open.spotify.com/embed/track/19YKaevk2bce4odJkP5L22?utm_source=generator",
                desc: "“Nikes” is a critique of the trappings of materialistic hedonism, with a frequent mention of Nike shoes, shiny gold and glitter, and fantasies of pleasure. The video version of this song features two competing voices (the album version does not), adding a sense of tension and conflict to the otherwise dreamy music. The song was the lead single from Frank Ocean’s highly anticipated third album, Blonde. It was released the day after his visual album Endless on Apple Music. The video is highly stylized and features race cars, nudity, immolation, partying and a devil.",
                desc_link: "2841610",
                genius_link: "https://genius.com/Frank-ocean-nikes-lyrics"
                }
            }
        ],
        1: [
            {id:'0', path: '/images/project2-transformed-transformed.png', data: 
                {
                title: "Sleeping Powder", 
                artist: "Gorillaz", 
                album: "Sleeping Powder", 
                embed_link: "https://open.spotify.com/embed/track/5pE9vMyvVNOpZFutt6lyy4?utm_source=generator",
                desc: "“Sleeping Powder” is about 2-D’s drug addiction. In the Gorillaz backstory, 2-D suffered a number of head injuries—in fact, he earned the name 2-D in Phase 1 because of the two dents in his head that formed when Murdoc hit him with his car. 2-D’s head trauma later caused him to become addicted to painkillers. The song was exclusively released through the Gorillaz app as a part of Phase 4 on June 8, 2017, but the music video appeared online the same day. According to Damon Albarn during a Gorillaz concert on June 8th, 2017, “Sleeping Powder” was written as a response to a portion of Gorillaz fans that complained about the lowered emphasis of 2D on their fifth studio album Humanz.",
                desc_link: "",
                genius_link: ""
                }
            }
        ],
        2: [
            {id:'0', path: '/images/project3-transformed-transformed.png', data: 
                {
                title: "Sleeping Powder", 
                artist: "Gorillaz", 
                album: "Sleeping Powder", 
                embed_link: "https://open.spotify.com/embed/track/5pE9vMyvVNOpZFutt6lyy4?utm_source=generator",
                desc: "“Sleeping Powder” is about 2-D’s drug addiction. In the Gorillaz backstory, 2-D suffered a number of head injuries—in fact, he earned the name 2-D in Phase 1 because of the two dents in his head that formed when Murdoc hit him with his car. 2-D’s head trauma later caused him to become addicted to painkillers. The song was exclusively released through the Gorillaz app as a part of Phase 4 on June 8, 2017, but the music video appeared online the same day. According to Damon Albarn during a Gorillaz concert on June 8th, 2017, “Sleeping Powder” was written as a response to a portion of Gorillaz fans that complained about the lowered emphasis of 2D on their fifth studio album Humanz.",
                desc_link: "",
                genius_link: ""
                }
            }
        ],
        3: [
            {id:'0', path: '/images/project4-transformed-transformed.png', data: 
                {
                title: "", 
                artist: "", 
                album: "", 
                embed_link: ""
                }
            }
            
        ]
    }   

    let currentArticle = 0

    function onKeyDown(e){
        switch(e.keyCode){
            
            case 37:
                if(currentCatagory > 0)
                {
                    currentCatagory -= 1
                }
                break
            case 38:
                if(currentCatagory > 0)
                {
                    currentCatagory -= 1
                }
                break
            case 39:
                if(currentCatagory < catagories.length-1)
                {
                    currentCatagory += 1
                }
                break
            case 40:
                if(currentCatagory < catagories.length-1)
                {
                    currentCatagory += 1
                }
                break
                
        }
    }

</script>

<style>

    *{
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
        overflow-x: hidden; /* Hide horizontal scrollbar */
    }

    /* Hide scrollbar for Chrome, Safari and Opera */
    *::-webkit-scrollbar {
        display: none;
    }

    .main-hero-container{
        display: flex; 
        flex-direction: column;
        width: 100vw;
        height: 100vh;
        overflow-x: hidden;
        animation: fallIn 3s;
        
    }

    .main-inner{
        display: grid;
        position: absolute;
        grid-template-columns: repeat(12, 1fr);
        width: 100vw;
        max-width: 100vw;
        height: 100vh;
        max-height: 100vh;
        background-size: cover;
        background-position: center;
        justify-content: center;
        transition: .5s ease-in-out;
        align-items: center;
        
        
    }

    .main-hero{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        background-size: cover;
        grid-column-start: 4;
        grid-column-end: 12;
        grid-row-start: 2;
        grid-row-end: 12;
        animation: ani 3s;
        color: white;
        z-index: 100;
        border: 1px solid transparent;
    }

    .main-catagory-list{
        display: flex;
        flex-direction: column;
        grid-column: span 3;
        grid-row-start: 2;
        grid-row-end: 12;
        z-index: 101;
        animation: fallIn 5s;
    }

    .main-catagory-list-inner{
        display: block;
        height: 80vh;
        overflow-y: scroll;
    }

    .main-inner-layer{
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        max-width: 100vw;
        height: 100vh;
        max-height: 100vh;
        background: none;
        justify-content: center;
        align-content: center;

    }

    .main-inner-mask{
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        max-width: 100vw;
        height: 100vh;
        max-height: 100vh;
        background: none;
        justify-content: center;
        align-content: center;
        background: rgb(0,0,0);
        background: -moz-linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5046219171262255) 50%, rgba(0,0,0,1) 100%);
        background: -webkit-linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5046219171262255) 50%, rgba(0,0,0,1) 100%);
        background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5046219171262255) 50%, rgba(0,0,0,1) 100%);
    }

    .grid{
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        grid-template-rows: repeat(12, 1fr);
    }

    .inner-hero{
        display: flex;
        animation: afterAni2 4s;
        width: 100%;
        height: 100%;
        overflow-x: scroll;
        align-items: center;
        justify-content: center;
        
    }

    @keyframes ani {
        0%{
            border: rgb(212, 212, 212) 1px solid;
            width: 0px;
            height: 0px;
        }
        25%{
            width: 1px;
            height: 100%;
        }
        50%{
            width: 100%;
            height: 100%;
        }
        75%{
            height: 100%;
            width: 100%;
            border: rgb(212, 212, 212) 1px solid;
        }
        100%{
            border: transparent 1px solid;
        }
    }

    @keyframes afterAni{
        0%{
            opacity: 0%;
            height: 0;
        }50%{
            opacity: 0%;
            height: 0;
        }100%{
            height: 100%;
            opacity: 100%;
        }
    }

    @keyframes afterAni2{
        0%{
            opacity: 0%;
        }50%{
            opacity: 0%;
        }100%{
            opacity: 100%;
        }
    }

    @keyframes fallIn{
        0%{
            opacity: 0%;
        }
        50%{
            opacity: 0%;
        }
        100%{
            opacity: 100%;
        }
    }

    @media screen and (max-width: 900px){
        .main-inner-layer{
            display: flex;
            justify-content: center;
            align-content: center;
            position: relative;
            margin-top: 10vh;
        }

        .main-catagory-list{
            width: 100%;
            overflow-x: hidden;
            height: 100%;
        }

        .main-catagory-list-inner{
            overflow-y: visible;
        }

        @keyframes ani {
        0%{
            box-shadow: none;
            border: transparent 1px solid;
            width: 0px;
            height: 0px;
        }
        25%{
            width: 1px;
            height: 100%;
        }
        50%{
            width: 100%;
            height: 100%;
        }
        75%{
            height: 100%;
            width: 100%;
            border: transparent 1px solid;
        }
        100%{
            border: transparent 1px solid;
            box-shadow: none;
        }
    }

        
    }

    @keyframes fade {
        0%{
            opacity: 0%;
            transform: translateY(100%);
        }
        80%{
            opacity: 0%;
            transform: translateY(100%);
        }
        100%{
            opacity: 100%;
            transform: translateY(0%);
        }
    }

    .article-left{
        display: flex;
        flex-direction: column;
        justify-content: top;
        overflow-y: scroll;
        overflow-x: hidden;
        align-items: center;
        width: 45%;
        height: 90%;
        margin: 5px;
    }

    .article-right{
        display: flex;
        flex-direction: column;
        justify-content: top;
        overflow-y: scroll;
        overflow-x: hidden;
        align-items: center;
        text-align: center;
        width: 45%;
        height: 90%;
        margin: 5px;
    }

    .skills-list{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        width: 90%;
        margin: 20px 0px 20px 0px;
        overflow: visible;
    }

    .skills-item{
        overflow: visible;
    }

    .text-1{
        animation: fade 3s;
    }

    .text-2{
        animation: fade 3.5s;
    }

    .text-3{
        animation: fade 4s;
    }

    .text-4{
        animation: fade 4.5s;
    }

    .text-5{
        animation: fade 5s;
    }

    .text-6{
        animation: fade 5.5s;
    }

    .text-late{
        animation: fade 6s;
    }

    .project-title{
        writing-mode: vertical-rl;
        text-orientation: mixed;
        font-size: 7rem;
        font-weight: bold;
        color: rgba(255, 255, 255, 0.5);
        transition: 1s ease;
    }

    .project-date{
        writing-mode: vertical-rl;
        text-orientation: mixed;
        font-size: 4rem;
        font-weight: bold;
        color: rgba(255, 255, 255, 0.25);
    }

    a{
        text-decoration: none; 
        color: whitesmoke; 
        display:flex; 
        overflow: visible; 
        justify-content: center; 
        align-items:center; 
        border: 1px solid gray; 
        width: 80%; 
        padding: 10px 0px 10px 0px; 
        margin: 10px 0 10px 0;
        transition: .25s ease;
    }

    a:hover{
        border: transparent solid 1px;
        transition: .25s ease;
    }





</style>

<div class="main-hero-container" >

    {#key currentCatagory}
        <div class="main-inner" style="background-image: url({base}{currentArticle >= 0 ? articles[currentCatagory][currentArticle].path : catagories[currentCatagory].path});" in:fade|local={ {duration: 1000, delay: 1500}} out:fade|local={ {duration: 1000, delay: 500}}></div>
    {/key}

    <div class="main-inner-mask"></div>

    
    <div class="main-inner-layer grid">
        {#key currentCatagory}
        <div class="main-inner-layer grid" out:fade|local={{duration: 500}}>
            <div class="main-hero" out:fade|local={{duration: 500}}>
                <div class="inner-hero" style="display: flex; flex-direction: column; justify-content: space-evenly; align-items: center; width: 90%; text-align: center; font-size: 3rem;" >
                    {#if currentCatagory == 0}
                    
                        <div style="display: flex; flex-direction: row; justify-content: center; align-items: center; height: 100%">
                            <div class="article-left">
                                <div>
                                    <div class="text-2">
                                        > Mobile application which ingests UMass' daily dining menus and produces healthy and sustainable meal plans based on users bio-metrics (gender, height, weight, allergens), allowing students to reduce individual carbon footprint.<br><br>
                                    </div>
                                    <div class="text-4">
                                        > Built as a team project at UMass' 2022 hackathon<br><br>
                                    </div>
                                    <div class="text-6">
                                        > Personally built out Selenium web scraper using Python for collecting and storing menu data in Firebase.
                                    </div>
                                </div>
                            </div>
                            <div class="project-date text-3" style="overflow: visible; font-weight: bold">
                                November 12-13, 2022
                            </div>
                            <div class="project-title text-1">
                                UMass GreenEats
                            </div>
                            
                            <div class="article-right">
                    
                                <div class="text-3" style="overflow: visible; font-weight: bold">
                                    🏆 Won Best Software hack<br>
                                    🥈 Placed Second Place Overall (out of 65 teams/206 participants)
                                </div>
                                <div class="skills-list text-5" style="overflow: visible; font-style:oblique;">
                                    <div class="skills-item" style="overflow: visible;">
                                        <div>
                                            🐍 Python 🐍
                                        </div>
                                    </div>
                                    <div class="skills-item">
                                        <div>
                                            🕊️ Swift 🕊️
                                        </div>
                                    </div>
                                    <div class="skills-item">
                                        <div>
                                            ☁️ AWS ☁️
                                        </div>
                                    </div>
                                    <div class="skills-item">
                                        <div>
                                            📃 Firebase 📃
                                        </div>
                                    </div>

                                </div>
                                <a class="text-late" href="https://devpost.com/software/umass-greeneats" target="_blank" rel="noreferrer" >
                                    Devpost
                                </a>
                                <a class="text-late" href="https://github.com/vdsingh/UMass-GreenEats" target="_blank" rel="noreferrer" >
                                    Github
                                </a>
                            </div>
                        </div>
                    {:else if currentCatagory == 1}
                        
                        <div style="display: flex; flex-direction: row; justify-content: center; align-items: center; height: 100%">
                            <div class="article-left">
                                <div>
                                    <div class="text-2">
                                        > Allows for enhanced Finder/grep-type capabilities using keywords and specified file/directory attributes.<br><br>
                                    </div>
                                    <div class="text-4">
                                        > Inspired by issues relating to search results of built-in Mac file search function, which return deeply embedded files before top level applications of which were unlikely to be ones I was looking for.<br><br>
                                    </div>
                                    <div class="text-6">
                                        > Incorporates speed-optimized, multithreaded BFS and DFS search algorithms, achieving 7x faster runtimes.<br><br>
                                    </div>
                                    <div class="text-late">
                                        > Designed image search algorithm based on color keywords using approximate image pixel-color composition.
                                    </div>

                                </div>
                            </div>
                            <div class="project-date text-3" style="overflow: visible; font-weight: bold">
                                May-June, 2022
                            </div>
                            <div class="project-title text-1" style="font-size: 5rem;">
                                GiraffeSearch
                            </div>
                            <div class="article-right">
                            
                                <div class="skills-list text-3" style="overflow: visible; font-style:oblique;">
                                    <div class="skills-item" style="overflow: visible;">
                                        <div>
                                            🐹 Golang 🐹
                                        </div>
                                    </div>
                                    <div class="skills-item">
                                        <div>
                                            💿 Git 💿
                                        </div>
                                    </div>

                                </div>
                                <a class="text-5" href="https://github.com/atdykema/giraffeSearch_golang" target="_blank" rel="noreferrer" >
                                    Github
                                </a>
                            </div>
                        </div>
                    {:else if currentCatagory == 2}
                        
                        <div style="display: flex; flex-direction: row; justify-content: center; align-items: center; height: 100%">
                            <div class="article-left">
                                <div>
                                    <div class="text-2">> Uses graphical computation algorithms, like M ̈oller-Trumbore ray-triangle intersection calculations and Phong shading.<br><br></div>
                                    <div class="text-4">> Able to handle both reflection and refraction of light rays according to material composition of objects in scene.<br><br></div>
                                    <div class="text-5">> Calculates individual ray position up to five times after initial light ray activation to achieve high detail render.</div>
                                    
                                </div>
                            </div>
                            <div class="project-date text-3" style="overflow: visible; font-weight: bold">
                                April-May, 2022
                            </div>
                            <div class="project-title text-1" style="font-size: 5rem;">
                                Dynamic Raytracing Algorithm
                            </div>
                            <div class="article-right text-3">
                                
                                <div class="skills-list" style="overflow: visible; font-style:oblique;">
                                    <div class="skills-item" style="overflow: visible;">
                                        <div>
                                            📜 Javascript 📜
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    {:else if currentCatagory == 3}
                        
                        <div style="display: flex; flex-direction: row; justify-content: center; align-items: center; height: 100%">
                            <div class="article-left">
                                <div>
                                    <div class="text-2">> Link 1: Implemented math constant Phi (Golden Ratio) functionality to onboard Calculator application.<br><br></div>
                                    <div class="text-4">> Inspired by onboard calculator's lacks high-level math functionality and user-friendliness for anything above basic calculation.<br><br></div>
                                    <div class="text-6">> Wanted to bring more flexibility to the function of the application.<br><br></div>
                                    <div class="text-late">> Link 2: Implemented ability to adjust time-of-day of events to 'Add Event' functionality of onboard Calender application.<br><br></div>
                                    <div class="text-late">> Event functions in the onboard Calender lacked the ability to denote a specific time of an event, only allowing the specification of a day.<br><br></div>
                                    <div class="text-late">> Worked to bring the calender application to a usable state.<br><br></div>   
                                </div>
                            </div>
                            
                            <div class="project-date text-3" style="overflow: visible; font-weight: bold">
                                June-July, 2022
                            </div>
                            <div class="project-title text-1" style="font-size: 5rem;">
                                SerenityOS Contributions
                            </div>
                            <div class="article-right">
                                
                                <div class="skills-list text-3" style="overflow: visible; font-style:oblique;">
                                    <div class="skills-item" style="overflow: visible;">
                                        <div>
                                            🖥️ C++ 🖥️
                                        </div>
                                    </div>
                                </div>
                                <a class="text-5" href="https://github.com/SerenityOS/serenity/pull/14228/commits/f21dc0fd3582a4e8c96cd530d8f7fb33075b4adf" target="_blank" rel="noreferrer">
                                    Github
                                </a>
                                <a class="text-5" href="https://github.com/SerenityOS/serenity/pull/14244/commits/4e1cd08ff2ceeddce2173aabb9780f5256e5c0b0" target="_blank" rel="noreferrer" >
                                    Github
                                </a>
                            </div>
                        </div>
                    {/if}
                </div>
            </div>
        </div>
        {/key}
    </div>

    <div class="main-inner-layer grid">
        <div class="main-catagory-list" >
            <div class="main-catagory-list-inner" >
                {#each catagories as {id, path, title}}
                    <CatagoryCardProject bind:currentCatagory={currentCatagory} bind:currentArticle={currentArticle} id={id} title={title} path={path}></CatagoryCardProject>
                {/each}
            </div>        
        </div>
    </div>

    
</div>

<svelte:window on:keydown|preventDefault={onKeyDown} />