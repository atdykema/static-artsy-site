<script>
    import { fade } from 'svelte/transition'
    import CatagoryCard from "$lib/components/CatagoryCard.svelte";
    import HeroCard from '$lib/components/HeroCard.svelte';
    import Article from '$lib/components/Article.svelte';
    import { base } from '$app/paths'

    const catagories = [
        {id:'0', path: '', title: ''},
    ]

    let currentCatagory = 0

    const articles = {
        0: [
            {id:'0', path: '/images/hitchhikers-transformed.webp', data: 
                {
                title: "The Hitchhiker's Guide to the Galaxy",
                href: "https://www.goodreads.com/book/show/11.The_Hitchhiker_s_Guide_to_the_Galaxy"
                }
                
            },
            {id:'1', path: '/images/brief.jpg', data: 
                {
                title: "A Brief History of Time",
                href: "https://www.goodreads.com/book/show/3869.A_Brief_History_of_Time"
                }
                
            },
            {id:'2', path: '/images/freakanomics-transformed.jpeg', data: 
                {
                title: "Freakonomics",
                href: "https://www.goodreads.com/book/show/1202.Freakonomics"
                }
                
            },
            {id:'3', path: '/images/history-of-philosophy-transformed.jpeg', data: 
                {
                title: "The History of Philosophy",
                href: "https://www.goodreads.com/book/show/41954426-the-history-of-philosophy"
                }
                
            },
            {id:'4', path: '/images/atomic-habits-transformed.jpeg', data: 
                {
                title: "Atomic Habits",
                href: "https://www.goodreads.com/book/show/40121378-atomic-habits"
                }
                
            },
            {id:'5', path: '/images/the-premonition-transformed.jpeg', data: 
                {
                title: "The Premonition",
                href: "https://www.goodreads.com/book/show/56790170-the-premonition"
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
        position: absolute;
        top: 0;
        left: 0;
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
        opacity: 50%;
        
        
    }

    .main-hero{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        background-size: cover;
        grid-column-start: 2;
        grid-column-end: 12;
        grid-row-start: 2;
        grid-row-end: 12;
        animation: ani 3s;
        color: white;
        z-index: 100;
        border: 1px solid transparent;
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

<div class="main-hero-container" out:fade|local={ {duration: 1000, delay: 500}}>

    {#key currentArticle}
        <div class="main-inner" style="background-image: url({base}{currentArticle >= 0 ? articles[currentCatagory][currentArticle].path : catagories[currentCatagory].path});" in:fade|local={ {duration: 1000, delay: 1500}} out:fade|local={ {duration: 1000, delay: 500}}></div>
    {/key}

    <div class="main-inner-mask"></div>

    
    <div class="main-inner-layer grid" >
        <video class="video" autoplay muted loop style="position: absolute; z-index: -1; top:0; left:0; object-fit:cover; width: 100%; height: 100%;">
            <source src="{base}/images/bg2-t.mp4" type="video/mp4" />
        </video>
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

    
</div>

<svelte:window on:keydown|preventDefault={onKeyDown} />