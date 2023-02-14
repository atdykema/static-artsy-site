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


    .nav-links{
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
        font-size: 5rem;
        flex-direction: column;
        z-index: 100;
        
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
        padding: 1px;
        text-indent: 100%;
        white-space: nowrap;
        overflow: hidden;
        border-radius: 100px;
        /**/
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

    @keyframes fade {
        0%{
            opacity: 0%;
            transform: translateY(100%);
        }
        30%{
            opacity: 0%;
            transform: translateY(100%);
        }
        100%{
            opacity: 100%;
            transform: translateY(0%);
        }
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

    video{
        animation: fadeInBg 6s ease;
    }

    @keyframes fadeInBg{
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

</style>

    
    <div class="main-inner-layer" in:fade|local={{duration: 500, delay: 1500}} out:fade|local={{duration: 500}}>
        <div class="main-inner-mask"></div>
        <video class="video" autoplay muted loop style="position: absolute; z-index: -1; top:0; left:0; object-fit:cover; width: 100%; height: 100%;">
            <source src="{base}/images/bg2-t.mp4" type="video/mp4" />
        </video>
        <ul class="nav-links">
            <div class="nav-item text-1">
                <div class="li-overlay">Introduction</div>
                <a href="{base}/blog">Introduction</a>
            </div>
            <div class="nav-item text-2">
                <div class="li-overlay">Projects</div>
                <a href="{base}/projects">Projects</a>
            </div>
            <div class="nav-item text-3">  
                <div class="li-overlay">Music</div>
                <a href="{base}/music">Music</a>
            </div>
            <div class="nav-item text-4">
                <div class="li-overlay">Film</div>
                <a href="{base}/film">Film</a>
            </div>
            <div class="nav-item text-4">
                <div class="li-overlay">Books</div>
                <a href="{base}/books">Books</a>
            </div>
            <div class="nav-item text-5">
                <div class="li-overlay">Blog</div>
                <a href="{base}/blog">Blog</a>
            </div>
        </ul>
    </div>
