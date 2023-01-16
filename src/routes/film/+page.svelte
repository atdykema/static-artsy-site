<script>
    import { fade } from 'svelte/transition'
    import CatagoryCard from "$lib/components/CatagoryCard.svelte";
    import HeroCard from '$lib/components/HeroCard.svelte';
    import Article from '$lib/components/Article.svelte';
    import { base } from '$app/paths'

    const catagories = [
        {id:'0', path: '/images/the-marias.jpg', title: '10s-20s'},
        {id:'1', path: '/images/nirvana.webp', title: '90s-00s'},
        {id:'2', path: '/images/pink-floyd2-transformed.webp', title: '70s-80s'},
        {id:'3', path: '/images/the-beatles-transformed.jpeg', title: '50s-60s'},


    ]

    let currentCatagory = 0

    const articles = {
        0: [
            {id:'0', path: '/images/frank-ocean.jpg', data: 
                {
                title: "Nikes", 
                artist: "Frank Ocean", 
                album: "Blonde", 
                embed_link: "https://open.spotify.com/embed/track/19YKaevk2bce4odJkP5L22?utm_source=generator",
                desc: "“Nikes” is a critique of the trappings of materialistic hedonism, with a frequent mention of Nike shoes, shiny gold and glitter, and fantasies of pleasure. The video version of this song features two competing voices (the album version does not), adding a sense of tension and conflict to the otherwise dreamy music. The song was the lead single from Frank Ocean’s highly anticipated third album, Blonde. It was released the day after his visual album Endless on Apple Music. The video is highly stylized and features race cars, nudity, immolation, partying and a devil.",
                desc_link: "2841610",
                genius_link: "https://genius.com/Frank-ocean-nikes-lyrics"
                }
                
            },
            {id:'1', path: '/images/positions-ariana-grande.png', data: 
                {
                title: "Worst Behavior", 
                artist: "Ariana Grande", 
                album: "Positions", 
                embed_link: "https://open.spotify.com/embed/track/6KIKaWKE9wV6mLjho3w61y?utm_source=generator",
                desc: "",
                desc_link: "6446041",
                genius_link: "https://genius.com/Ariana-grande-worst-behavior-lyrics"
                }
                
            },
            {id:'2', path: '/images/the-marias.jpeg', data: 
                {
                title: "The Mice Inside This Room", 
                artist: "The Marias", 
                album: "CINEMA", 
                embed_link: "https://open.spotify.com/embed/track/3Mqx9OWTEhBEeOEuUDklei?utm_source=generator",
                desc: "",
                desc_link: "",
                genius_link: ""
                }
                
            },
            {id:'3', path: '/images/kirinji-transformed.jpeg', data: 
                {
                title: "Jikanga Nai", 
                artist: "Kirinji", 
                album: "Aiwo Arudake, Subete", 
                embed_link: "https://open.spotify.com/embed/track/4X6jKZPHkKLbrcEZu13VXK?utm_source=generator",
                desc: "",
                desc_link: "",
                genius_link: ""
                }
                
            },
            {id:'4', path: '/images/los-retros-transformed.jpeg', data: 
                {
                title: "Solo Tú", 
                artist: "Los Retros", 
                album: "Solo Tú", 
                embed_link: "https://open.spotify.com/embed/track/6YbMkGhGkadLWnt2lIuHSz?utm_source=generator",
                desc: "",
                desc_link: "",
                genius_link: ""
                }
                
                
            },
            {id:'5', path: '/images/rex-orange-county-transformed.jpeg', data: 
                {
                title: "Happiness", 
                artist: "Rex Orange County", 
                album: "Apricot Princess", 
                embed_link: "https://open.spotify.com/embed/track/7aSyG7cskkG3zhfO2JLxq3?utm_source=generator",
                desc: "",
                desc_link: "",
                genius_link: ""
                }
                
                
            },
            {id:'6', path: '/images/tyler-the-creator-transformed.webp', data: 
                {
                title: "Garden Shed", 
                artist: "Tyler, The Creator", 
                album: "Flower Boy", 
                embed_link: "https://open.spotify.com/embed/track/6ACiYjq5Q7e6BlhZEHz7cd?utm_source=generator",
                desc: "",
                desc_link: "",
                genius_link: ""
                }
                
            }
            
        ],
        1: [
            {id:'0', path: '/images/gorillaz.webp', data: 
                {
                title: "Sleeping Powder", 
                artist: "Gorillaz", 
                album: "Sleeping Powder", 
                embed_link: "https://open.spotify.com/embed/track/5pE9vMyvVNOpZFutt6lyy4?utm_source=generator",
                desc: "“Sleeping Powder” is about 2-D’s drug addiction. In the Gorillaz backstory, 2-D suffered a number of head injuries—in fact, he earned the name 2-D in Phase 1 because of the two dents in his head that formed when Murdoc hit him with his car. 2-D’s head trauma later caused him to become addicted to painkillers. The song was exclusively released through the Gorillaz app as a part of Phase 4 on June 8, 2017, but the music video appeared online the same day. According to Damon Albarn during a Gorillaz concert on June 8th, 2017, “Sleeping Powder” was written as a response to a portion of Gorillaz fans that complained about the lowered emphasis of 2D on their fifth studio album Humanz.",
                desc_link: "",
                genius_link: ""
                }
                
            },
            {id:'1', path: '/images/aphex-twin-transformed.jpeg', data: 
                {
                title: "#3", 
                artist: "Aphex Twin", 
                album: "Selected Ambient Works Volume II", 
                embed_link: "https://open.spotify.com/embed/track/2Bc4llhjJBW77I552RgA3L?utm_source=generator",
                desc: "",
                desc_link: "",
                genius_link: ""
                }
                
                
            },
            {id:'2', path: '/images/amy-winehouse.jpg', data: 
                {
                title: "", 
                artist: "", 
                album: "", 
                embed_link: ""
                }
            },
            {id:'3', path: '/images/kurt-cobain.jpg', data: 
                {
                title: "", 
                artist: "", 
                album: "", 
                embed_link: ""
                }
            },
            {id:'4', path: '/images/nsync.webp', data: 
                {
                title: "", 
                artist: "", 
                album: "", 
                embed_link: ""
                }
            },
            {id:'5', path: '/images/britney-spears.jpg', data: 
                {
                title: "", 
                artist: "", 
                album: "", 
                embed_link: ""
                }
            },
        ],
        2: [
            {id:'0', path: '/images/elo.jpg', data: 
                {
                title: "Sleeping Powder", 
                artist: "Gorillaz", 
                album: "Sleeping Powder", 
                embed_link: "https://open.spotify.com/embed/track/5pE9vMyvVNOpZFutt6lyy4?utm_source=generator",
                desc: "“Sleeping Powder” is about 2-D’s drug addiction. In the Gorillaz backstory, 2-D suffered a number of head injuries—in fact, he earned the name 2-D in Phase 1 because of the two dents in his head that formed when Murdoc hit him with his car. 2-D’s head trauma later caused him to become addicted to painkillers. The song was exclusively released through the Gorillaz app as a part of Phase 4 on June 8, 2017, but the music video appeared online the same day. According to Damon Albarn during a Gorillaz concert on June 8th, 2017, “Sleeping Powder” was written as a response to a portion of Gorillaz fans that complained about the lowered emphasis of 2D on their fifth studio album Humanz.",
                desc_link: "",
                genius_link: ""
                }
                
            },
            {id:'1', path: '/images/pink-floyd.jpg', data: 
                {
                title: "#3", 
                artist: "Aphex Twin", 
                album: "Selected Ambient Works Volume II", 
                embed_link: "https://open.spotify.com/embed/track/2Bc4llhjJBW77I552RgA3L?utm_source=generator",
                desc: "",
                desc_link: "",
                genius_link: ""
                }
                
                
            },
            {id:'3', path: '/images/casiopea.jpg', data: 
                {
                title: "", 
                artist: "", 
                album: "", 
                embed_link: ""
                }
            },
            {id:'4', path: '/images/anri-transformed.webp', data: 
                {
                title: "", 
                artist: "", 
                album: "", 
                embed_link: ""
                }
            },
        ],
        3: [
            {id:'0', path: '/images/jimmy-hendrix.webp', data: 
                {
                title: "", 
                artist: "", 
                album: "", 
                embed_link: ""
                }
            },
            {id:'1', path: '/images/abba-transformed.jpeg', data: 
                {
                title: "", 
                artist: "", 
                album: "", 
                embed_link: ""
                }
            },
            
        ]
    }   

    let currentArticle = -1

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
        -webkit-backdrop-filter: blur(8px);  /* Safari 9+ */
        backdrop-filter: blur(8px); /* Chrome and Opera */
        box-shadow: 0px 10px 15px 10px rgba(0, 0, 0, 0.35);
        background-color: rgba(0, 0, 0, 0.15); 
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
        animation: afterAni 2s;
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



</style>

<div class="main-hero-container">

    {#key currentArticle, currentCatagory}
        <div class="main-inner" style="background-image: url({base}{currentArticle >= 0 ? articles[currentCatagory][currentArticle].path : catagories[currentCatagory].path});" in:fade|local={ {duration: 1000, delay: 1500}} out:fade|local={ {duration: 1000, delay: 500}}></div>
    {/key}

    <div class="main-inner-mask"></div>

    
    <div class="main-inner-layer grid">
        {#key currentCatagory}
        <div class="main-inner-layer grid" out:fade|local={{duration: 500}}>
            {#if currentArticle < 0}
            <div class="main-hero" out:fade|local={{duration: 500}}>
                <div class="inner-hero" >
                    {#each articles[currentCatagory] as {id, path, data}}
                        <HeroCard bind:currentArticle={currentArticle} id={id} path={path} data={data}></HeroCard>
                    {/each}
                </div>
            </div>
            {:else}
            <div class="main-hero" out:fade|local={{duration: 500}}>
                <div class="inner-hero">
                    <Article bind:currentArticle={currentArticle} id={articles[currentCatagory][currentArticle].id} path={articles[currentCatagory][currentArticle].path} data={articles[currentCatagory][currentArticle].data}></Article>
                </div>
            </div>
            {/if}
        </div>
        {/key}
    </div>

    <div class="main-inner-layer grid">
        <div class="main-catagory-list" >
            <div class="main-catagory-list-inner" >
                {#each catagories as {id, path, title}}
                    <CatagoryCard bind:currentCatagory={currentCatagory} bind:currentArticle={currentArticle} id={id} title={title} path={path}></CatagoryCard>
                {/each}
            </div>        
        </div>
    </div>

    
</div>

<svelte:window on:keydown|preventDefault={onKeyDown} />