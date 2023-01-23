<script>
    import { fade } from 'svelte/transition'
    import { base } from '$app/paths'
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
        animation: fadeIn .25s ease-in-out;
        width: 100%;
        height: 100%;
    }

    .nav-item:hover > a{
        animation: fadeOut .25s ease-in-out;
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
        align-items: center;
        justify-content: center;
        top: 0;
        left: 0;
        padding: 0;
        width: 100%;
        height: 10vh;
        z-index: 103;
        font-size: 2rem;
    }

    .main-nav-container:hover > .main-nav-body{
        opacity: 75%;
        transition: .5s ease-in-out;
    }

    .main-nav-body{
        display: grid;
        opacity: 0;
        grid-template-columns: repeat(5, 1fr);
        width: 100%;
        color: whitesmoke;
        height: 10vh;
        transition: .5s ease-in-out;
    }

    .nav-links{
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        grid-column-start: 3;
        grid-column-end: 6;
        padding: 0;
    }

    .li-overlay{
        position: absolute;
        opacity: 0%;
        height: 0;
        background-color: rgb(51, 51, 51);
        transition: .25s ease-in-out;
        transform: translate(-50px);
        color: transparent;
        padding: 1px;
        text-indent: 100%;
        white-space: nowrap;
        overflow: hidden;
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

</style>

<div class="main-container">
    <div class="main-nav-container">
        <div class="main-nav-body" transition:fade|local={{duration: 500}}>
            <ul class="nav-links">
                <div class="nav-item">
                    <div class="li-overlay">Introduction</div>
                    <a href="{base}/">Introduction</a>
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
            </ul>
        </div>
        
    </div>
    
    <slot ></slot>

</div>