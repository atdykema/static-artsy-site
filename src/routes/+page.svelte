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
        overflow: hidden;


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
        opacity: 75%;
    }

    .nav-item:hover{
        opacity: 100%;
    }

    .nav-item:hover > a{
        animation: fadeOut .25s ease-in-out;
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
        margin: 20px;
        opacity: 50%;
        transition: .25s ease;

    }

    .li-overlay{
        position: absolute;
        opacity: 0%;
        height: 0;
        background-color: rgba(255, 255, 255, 20%);
        transition: .5s  cubic-bezier( 0.12, -0.01, 0, 1 );
        transform: translate(-50px);
        color: transparent;
        padding: 15px;
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
            opacity: 50%;
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

    .funky-background{
        display: flex;
        position: absolute;
        top: -175%;
        left: -50%;
        height: 200%;
        width: 200%;
        z-index: 1;
    }

    .funky-background2{
        display: flex;
        position: absolute;
        top: 75%;
        left: -50%;
        height: 200%;
        width: 200%;
        z-index: 1;
        transform: rotate(180deg);
    }

    .stripe{
        flex: 1;
        opacity: 100%;
        border-radius: 25px;
        height:100vh;
        transition: linear;
        animation-name: goToLeft;
        animation-duration: 2s;
        animation-iteration-count: infinite;
    }

    #s1{
        animation-delay: .2s;
    }

    #s2{
        animation-delay: .4s;
    }

    #s3{
        animation-delay: .6s;
    }

    #s4{
        animation-delay: .8s;
    }
    #s5{
        animation-delay: 1s;
    }

    #s6{
        animation-delay: 1.2s;
    }

    #s7{
        animation-delay: 1.4s;
    }

    #s8{
        animation-delay: 1.6s;
    }
    #s9{
        animation-delay: 1.8s;
    }

    #s10{
        animation-delay: 2s;
    }

    #s11{
        animation-delay: 2.2s;
    }

    #s12{
        animation-delay: 2.4s;
    }
    
    #s13{
        animation-delay: 2.6s;
    }

    #s14{
        animation-delay: 2.8s;
    }

    #s15{
        animation-delay: 3s;
    }

    #s16{
        animation-delay: 3.2s;
    }
    #s17{
        animation-delay: 3.4s;
    }

    #s18{
        animation-delay: 3.6s;
    }

    #s19{
        animation-delay: 3.8s;
    }

    #s20{
        animation-delay: 4s;
    }

    #s21{
        animation-delay: 4.2s;
    }
    #s22{
        animation-delay: 4.4s;
    }

    #s23{
        animation-delay: 4.6s;
    }

    #s24{
        animation-delay: 4.8s;
    }

    #s25{
        animation-delay: 5.0s;
    }
    #s26{
        animation-delay: 5.2s;
    }

    #s27{
        animation-delay: 5.4s;
    }

    #s28{
        animation-delay: 5.6s;
    }

    #s29{
        animation-delay: 5.8s;
    }

    #s30{
        animation-delay: 6.2s;
    }

    #s31{
        animation-delay: 6.4s;
    }

    #s32{
        animation-delay: 6.6s;
    }
    #s33{
        animation-delay: 6.8s;
    }

    #s34{
        animation-delay: 7s;
    }

    #s35{
        animation-delay: 7.2s;
    }

    #s36{
        animation-delay: 0s;
    }

    @keyframes goToLeft{
        0%{
            transform: translateX(0);
            transform: translateY(0);
            background-color: rgb(255, 255, 255);
        }
        50%{
            transform: translateX(100vw);
            transform: translateY(100vh);
        }
        100%{
            transform: translateX(0);
            transform: translateY(0);
            background-color: rgb(0, 0, 0);
        }
    }

    @keyframes spin{
        0% { transform: height(200vh)}
        50% { transform: height(50vh);}        
        100% { transform: height(200vh);}
    }

    @keyframes spinBack{
        0% { transform: rotate(360deg); }
        100% { transform: rotate(0deg);}
    }

    @keyframes goToRight{
        0%{
            transform: translateX(100vw);
            transform: translateY(100vh);
        }
        50%{
            transform: translateX(0vw);
            transform: translateY(0vh);
        }
        100%{
            transform: translateX(100vw);
            transform: translateY(100vh);
        }
    }

    .border{
        display: flex;
        position: absolute;
        z-index: 9999;
        color: rgba(0,0,0,1);
    }


</style>

    
    <div class="main-inner-layer" in:fade|local={{duration: 500, delay: 1500}} out:fade|local={{duration: 500}}>
        <div class="main-inner-mask"></div>
        
        <div class="funky-background">
            <div class="stripe sright" id="s36"></div>
            <div class="stripe sleft" id="s1"></div>
            <div class="stripe sright" id="s2"></div>
            <div class="stripe sleft" id="s3"></div>
            <div class="stripe sright" id="s4"></div>
            <div class="stripe sleft" id="s5"></div>
            <div class="stripe sright" id="s6"></div>
            <div class="stripe sleft" id="s7"></div>
            <div class="stripe sright" id="s8"></div>
            <div class="stripe sleft" id="s9"></div>
            <div class="stripe sright" id="s10"></div>
            <div class="stripe sleft" id="s11"></div>
            <div class="stripe sright" id="s12"></div>
            <div class="stripe sright" id="s13"></div>
            <div class="stripe sright" id="s14"></div>
            <div class="stripe sleft" id="s15"></div>
            <div class="stripe sright" id="s16"></div>
            <div class="stripe sleft" id="s17"></div>
            <div class="stripe sright" id="s18"></div>
            <div class="stripe sleft" id="s19"></div>
            <div class="stripe sright" id="s20"></div>
            <div class="stripe sleft" id="s21"></div>
            <div class="stripe sright" id="s22"></div>
            <div class="stripe sleft" id="s23"></div>
            <div class="stripe sright" id="s24"></div>
            <div class="stripe sleft" id="s25"></div>
            <div class="stripe sright" id="s26"></div>
            <div class="stripe sleft" id="s27"></div>
            <div class="stripe sright" id="s28"></div>
            <div class="stripe sleft" id="s29"></div>
            <div class="stripe sright" id="s30"></div>
            <div class="stripe sleft" id="s31"></div>
            <div class="stripe sright" id="s32"></div>
            <div class="stripe sleft" id="s33"></div>
            <div class="stripe sright" id="s34"></div>
            <div class="stripe sleft" id="s35"></div>
            

        </div>

        <div class="funky-background2">
            <div class="stripe sright" id="s36"></div>
            <div class="stripe sleft" id="s1"></div>
            <div class="stripe sright" id="s2"></div>
            <div class="stripe sleft" id="s3"></div>
            <div class="stripe sright" id="s4"></div>
            <div class="stripe sleft" id="s5"></div>
            <div class="stripe sright" id="s6"></div>
            <div class="stripe sleft" id="s7"></div>
            <div class="stripe sright" id="s8"></div>
            <div class="stripe sleft" id="s9"></div>
            <div class="stripe sright" id="s10"></div>
            <div class="stripe sleft" id="s11"></div>
            <div class="stripe sright" id="s12"></div>
            <div class="stripe sright" id="s13"></div>
            <div class="stripe sright" id="s14"></div>
            <div class="stripe sleft" id="s15"></div>
            <div class="stripe sright" id="s16"></div>
            <div class="stripe sleft" id="s17"></div>
            <div class="stripe sright" id="s18"></div>
            <div class="stripe sleft" id="s19"></div>
            <div class="stripe sright" id="s20"></div>
            <div class="stripe sleft" id="s21"></div>
            <div class="stripe sright" id="s22"></div>
            <div class="stripe sleft" id="s23"></div>
            <div class="stripe sright" id="s24"></div>
            <div class="stripe sleft" id="s25"></div>
            <div class="stripe sright" id="s26"></div>
            <div class="stripe sleft" id="s27"></div>
            <div class="stripe sright" id="s28"></div>
            <div class="stripe sleft" id="s29"></div>
            <div class="stripe sright" id="s30"></div>
            <div class="stripe sleft" id="s31"></div>
            <div class="stripe sright" id="s32"></div>
            <div class="stripe sleft" id="s33"></div>
            <div class="stripe sright" id="s34"></div>
            <div class="stripe sleft" id="s35"></div>
            

        </div>

        <div class="border">
            <div> An Andrew Dykema Website</div>
        </div>
        
        <ul class="nav-links">
            <!--
            <div class="nav-item text-1">
                <div class="li-overlay">Introduction</div>
                <a href="{base}/blog">Introduction</a>
            </div>
            -->
            <div class="nav-item text-2">
                <div class="li-overlay">Art</div>
                <a href="{base}/art">Art</a>
            </div>
            <div class="nav-item text-3">  
                <div class="li-overlay">Music</div>
                <a href="{base}/music">Music</a>
            </div>
            <div class="nav-item text-4">
                <div class="li-overlay">Film</div>
                <a href="{base}/film">Film</a>
            </div>
            <!--
            <div class="nav-item text-4">
                <div class="li-overlay">Books</div>
                <a href="{base}/books">Books</a>
            </div>
            <div class="nav-item text-5">
                <div class="li-overlay">Blog</div>
                <a href="{base}/blog">Blog</a>
            </div>
            -->
        </ul>
    </div>
