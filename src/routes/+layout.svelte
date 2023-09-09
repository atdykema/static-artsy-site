<script>
    import { fade } from 'svelte/transition'
    import { base } from '$app/paths'

    let playing = false;

</script>

<style>

    @font-face{
        font-family: main-font;
        src:url(/fonts/acid.otf);
    }

    *{
        font-family: main-font;
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
        overflow-x: hidden; /* Hide horizontal scrollbar */
    }

    /* Hide scrollbar for Chrome, Safari and Opera */
    *::-webkit-scrollbar {
        display: none;
    }

    a{
        text-decoration: none;
        color: whitesmoke;
        animation: fadeIn 1s  cubic-bezier( 0.12, -0.01, 0, 1 );
        width: 100%;
        height: 100%;
    }

    .nav-item:hover > a{
        animation: fadeOut 1s  cubic-bezier( 0.12, -0.01, 0, 1 );
        opacity: 50%;
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

    .main-container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 0;
        height: 100%;
        
    }

    .main-nav-container{
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        top: 0;
        left: 0;
        padding: 0;
        width: 100%;
        height: 8vh;
        z-index: 103;
        font-size: 2rem;
    }

    .main-nav-container:hover > .main-nav-body{
        opacity: 75%;
        transition: 1s  cubic-bezier( 0.12, -0.01, 0, 1 );
    }

    .main-nav-body{
        display: flex;
        opacity: 0;
        width: 95%;
        color: whitesmoke;
        height: 5vh;
        transition: .5s ease-in-out;
        justify-content: space-between;
        align-items: center;
    }

    .audio-player{
        display: flex;
        flex-direction: row;
        align-items: center;

        padding: 0;
    }

    .audio-body{
        display: flex;
        justify-content: center;
        align-content: center;
        width: 10%;
        height: 100%;
    }

    .audio-buttons{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 100%;
        
    }

    .nav-links{
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        width: 100%;
        padding: 0;
    }

    .li-overlay{
        position: absolute;
        opacity: 0%;
        height: 0;
        background-color: rgba(100, 100, 100, 50%);
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

    @media screen and (max-width: 900px){

        .main-nav-body{
            opacity: 75%;
        }

        .nav-links{
            grid-column-start: 1;
            grid-column-end: 6;
        }
    }

    @media screen and (max-height: 900px){

        .nav-links{
            font-size: 1rem;
        }
    }

    @keyframes fadeOut{
        0%{
            opacity: 100%;
        }
        100%{
            opacity: 50%;
        }
    }

    @keyframes fadeIn{
        0%{
            opacity: 50%;
        }
        100%{
            opacity: 100%; 
        }
    }

    @keyframes fadeInOut{
        0%{
            opacity: 0%;
        }
        50%{
            opacity: 50%; 
        }
        100%{
            opacity: 0%; 
        }
    }

    .audio-button{
        cursor: pointer;
        border: solid 1px whitesmoke;
        padding: 0 20px 0 20px;
    }

    .now-playing{
        animation: fadeInOut 4s ease infinite;
        display: flex;
        justify-content: start;
    }

</style>

<div class="main-container">
    
    <div class="main-nav-container">
        
        <div class="main-nav-body" transition:fade|local={{duration: 500}}>
            <!--
            <div class="audio-body">
                <audio loop class="audio-player" id="player">
                    <source src="{base}/images/music.mp3" type="audio/mpeg">
                    Your browser does not support the audio element.
                </audio>
                <div class="audio-buttons">
                    {#if playing == false}
                        <div class="audio-button" on:click={()=>{document.getElementById('player').play(); playing = true}}>></div>
                    {:else}
                        <div class="audio-button" on:click={()=>{document.getElementById('player').pause(); playing = false}}>||</div> 
                    {/if}
                    
                    <div class="audio-button" on:click={()=>{document.getElementById('player').volume -= 0.1}}>-</div>
                    <div class="audio-button" on:click={()=>{document.getElementById('player').volume += 0.1}}>+</div>
                    
                     
                </div>
                
                
            </div>
            {#if playing}
                    <div class="now-playing">
                        Palace - ADTurnUp
                    </div>
                {/if}
            -->
            <div class="nav-links">
                
                <div class="nav-item">
                    <div class="li-overlay">Home</div>
                    <a href="{base}/">Home</a>
                </div>
                <!--
                <div class="nav-item">
                    <div class="li-overlay">Introduction</div>
                    <a href="{base}/blog">Introduction</a>
                </div>
                -->
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
                <!--
                <div class="nav-item">
                    <div class="li-overlay">Books</div>
                    <a href="{base}/books">Books</a>
                </div>
                <div class="nav-item">
                    <div class="li-overlay">Blog</div>
                    <a href="{base}/blog">Blog</a>
                </div>
                -->
            </div>
        </div>
        
    </div>
    
    <slot ></slot>

</div>