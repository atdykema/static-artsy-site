<script>
    import { fade } from 'svelte/transition'
    import CatagoryCard from "$lib/components/CatagoryCard.svelte";
    import HeroCard from '$lib/components/HeroCard.svelte';
    import Article from '$lib/components/Article.svelte';
    import { base } from '$app/paths'


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
        display: flex;
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

    .main-nav-container{
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
    }

    .main-nav-body{
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
    }

    .nav-links{
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
        font-size: 5rem;
        flex-direction: column;
        
    }

    a{
        text-decoration: none;
        color: whitesmoke;
        animation: fadeIn .25s ease-in-out;
        width: 100%;
        height: 100%;
        transition: .25s ease;
    }

    .nav-item:hover > a{
        animation: fadeOut .25s ease-in-out;
        opacity: 50%;
        transition: .25s ease;
    }

    .nav-item:hover > .li-overlay{
        opacity: 50%;
        transform: translate(0%);
    }

    .nav-item{
        text-decoration: none;
        list-style: none;
        display: flex;
        overflow: hidden;
        justify-content: center;
        align-items: flex-end;
    }

    .li-overlay{
        position: absolute;
        opacity: 0%;
        height: 0;
        background-image: linear-gradient(90deg, #b827fc 0%, #2c90fc 25%, #b8fd33 50%, #fec837 75%, #fd1892 100%);
        transition: .25s ease-in-out;
        transform: translate(-50px);
        color: transparent;
        padding: 5px;
        text-indent: 100%;
        white-space: nowrap;
        overflow: hidden;
        border-radius: 100px;
        /**/
    }

</style>


    <div class="main-inner-layer" in:fade|local={{duration: 500}} out:fade|local={{duration: 500}}>
        <ul class="nav-links">
            <div class="nav-item">
                <div class="li-overlay">Introduction</div>
                <a href="{base}/introduction">Introduction</a>
            </div>
            <div class="nav-item">
                <div class="li-overlay">Projects</div>
                <a href="{base}/projects">Projects</a>
            </div>
            <div class="nav-item">  
                <div class="li-overlay">Music</div>
                <a href="{base}/music">Music</a>
            </div>
            <div class="nav-item">
                <div class="li-overlay">Film</div>
                <a href="{base}/film">Film</a>
            </div>
            <div class="nav-item">
                <div class="li-overlay">Blog</div>
                <a href="{base}/blog">Blog</a>
            </div>
        </ul>
    </div>
