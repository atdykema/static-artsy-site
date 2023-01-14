<script>
    import { fade } from 'svelte/transition'
    import CatagoryCard from "$lib/components/CatagoryCard.svelte";

    const catagories = [
        {id:'4', path: 'src/static/images/IMG_2051.jpg', title: 'Hi there'}
    ]

    let currentCatagory = 0


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
        animation: fallIn 3s;
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

    {#key currentCatagory}
        <div class="main-inner" style="background-image: url({catagories[currentCatagory].path});" in:fade|local={ {duration: 1000, delay: 1500}} out:fade|local={ {duration: 1000, delay: 500}}></div>
    {/key}

    <div class="main-inner-mask"></div>

    
    <div class="main-inner-layer grid">
        {#key currentCatagory}
        <div class="main-inner-layer grid" out:fade|local={{duration: 500}}>
            <div class="main-hero" out:fade|local={{duration: 500}}>
                <div class="inner-hero" style="display: flex; flex-direction: column; justify-content: center; align-items: center; width: 90%; text-align: center; font-size: 3rem;" >
                    <div >
                        Welcome to my website!
                    </div>
                    <br>
                    <div >
                        My name is Drew
                    </div>
                    <br>
                    <div >
                        The rest of the site isn't this boring, I promise.
                    </div>
                    <br>
                    <div >
                        This is just the part with the necessary salutory gestures 
                    </div>
                    <br>
                    <div >
                        Up in the nav bar you'll find some links to some of the stuff I've done and things I like 
                    </div>
                    <br>
                    <div >
                        Look around and have fun!
                    </div>
                    <br>
                    <div >
                        Also, this is a work in progress so there's ever more to come!
                    </div>
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