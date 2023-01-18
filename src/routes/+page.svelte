<script>
    import { fade } from 'svelte/transition'
    import CatagoryCard from "$lib/components/CatagoryCard.svelte";
    import { base } from '$app/paths'

    const catagories = [
        {id:'0', path: '', title: 'Hi there!'},
        {id:'1', path: '', title: 'Hi there'},
        {id:'2', path: '', title: 'Hi there...?'},
        {id:'3', path: '', title: 'Still checking these captions?'},
        {id:'4', path: '/images/mountains.jpg', title: 'Atleast someone is'},

    ]

    let currentCatagory = 0

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
        console.log(currentCatagory)
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
        animation: fallIn 2s;
        
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

    @keyframes fadeColor {
        0%{
            opacity: 0%;
            transform: translateY(100%);
        }
        60%{
            opacity: 0%;
            transform: translateY(100%);
        }
        70%{
            opacity: 100%;
            transform: translateY(0%);
            color: whitesmoke;
            font-size: 5rem;
        }
        75%{
            color: rgb(255, 0, 0);
        }
        78%{
            color: rgb(255, 153, 0);
        }
        81%{
            color: rgb(255, 251, 0);
        }
        84%{
            color: rgb(60, 255, 0);
        }
        87%{
            color: rgb(0, 47, 255);
        }
        90%{
            color: rgb(225, 0, 255);
            font-size: 5rem;
        }
        100%{
            color: whitesmoke;
        }
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

    .intro-div{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 50px;
        font-size: 64px;
    }

    .text-1{
        animation: fade 3s;
    }

    .text-2{
        animation: fade 4s;
    }

    .text-3{
        animation: fade 5s;
    }

    .text-late{
        animation: fade 7s;
    }

    .text-colorful{
        animation: fadeColor 9s;
    }


</style>

<div class="main-hero-container">

    {#key currentCatagory}
        <div class="main-inner" style="background-image: url({base}{catagories[currentCatagory].path});" in:fade|local={ {duration: 1000, delay: 1500}} out:fade|local={ {duration: 1000, delay: 500}}></div>
    {/key}

    <div class="main-inner-mask"></div>

    
    <div class="main-inner-layer grid">
        {#key currentCatagory}
        <div class="main-inner-layer grid" out:fade|local={{duration: 500}}>
            <div class="main-hero" out:fade|local={{duration: 500}}>
                <div class="inner-hero" style="display: flex; flex-direction: column; justify-content: center; align-items: center; width: 90%; text-align: center; font-size: 3rem;" >
                    {#if currentCatagory == 0}
                    <div class="intro-div text-1">
                        Hi there.
                    </div>
                    <div class="intro-div text-2">
                        My name is Drew.
                    </div>
                    <div class="intro-div text-late" style="font-size: 36px;">
                        Psst... you can use the arrow keys to navigate ;)
                    </div>
                    {:else if currentCatagory == 1}
                    <div class="intro-div text-1">
                        I really enjoy listening to music, fine-tuning my audio equipment to get the most of what I comsume.
                    </div>
                    <div class="intro-div text-2">
                        Outer space excites me, I love keeping up to date with all things space tech and exploration.
                    </div>
                    <div class="intro-div text-3">
                        I'm getting better at picking up new books, I know theres so much out there to find.
                    </div>
                    {:else if currentCatagory == 2}
                    <div class="intro-div text-1">
                        More than anything though, I'm passionate about creating new things.
                    </div>
                    <div class="intro-div text-2">
                        Doing so while balancing my emphasis on objective problem solving and creative expression.
                    </div>
                    <div class="intro-div text-3">
                        I like solving problems while making the world a bit more
                    </div>
                    <div class="intro-div text-colorful">colorful.</div>
                    {:else if currentCatagory == 3}
                    <div class="intro-div text-1">
                        But I'd be lying if I said adding my own flair makes everything much more fun.
                    </div>
                    <div class="intro-div text-2">
                        What is life without fun?
                    </div>
                    <div class="intro-div text-3">
                        It would be no life of mine, that's for sure.
                    </div>
                    {:else if currentCatagory == 4}
                    <div class="intro-div text-1">
                        Anyway, thanks for coming to my site!
                    </div>
                    <div class="intro-div text-2">
                        Take a look at the nav bar for some other stuff about me (you need to hover at the top to see it) 
                    </div>
                    <div class="intro-div text-3">
                        And most importantly, enjoy yourself!
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
                    <CatagoryCard bind:currentCatagory={currentCatagory} id={id} title={title} path={path}></CatagoryCard>
                {/each}
            </div>        
        </div>
    </div>

    
</div>

<svelte:window on:keydown|preventDefault={onKeyDown} />