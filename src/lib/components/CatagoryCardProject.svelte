<script>
    export let id, path, title, currentCatagory, currentArticle
    import { base } from '$app/paths'
</script>

<style>

    .main-container{
        height: 30%;
        max-height: 30%;
        width: 80%;
        display: flex;
        overflow: hidden;
        background-size: cover;
        background-repeat: no-repeat;
        border: 1px solid transparent;
        margin: 5px;
        align-items: center;
        justify-content: center;
        transition: .25s ease-in-out;
        flex-direction: column;
        color: transparent;
        opacity: 25%;
        transform: translate(-25%);
        background-position: center;
        border: solid 1px whitesmoke
        
        
    }

    .main-container:hover{
        border-color: white;
        color: whitesmoke;
        opacity: 100%;
        transform: translate(0%);

    }

    .main-container-inner{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
        transition: .25s ease-in-out;
    }

    .main-container-inner:hover{
        background-color: rgba(0, 0, 0, .5);
    }

    .li-overlay{
        position: absolute;
        opacity: 0%;
        left: 12.5%;
        height: 2rem;
        width: 75%;
        transition: .5s ease;
        transform: translate(-100%);
        color: transparent;
        padding: 1px;
        text-indent: 100%;
        white-space: nowrap;
        overflow: hidden;
        z-index: -1;
        background-position: center;
        /**/
    }

    .title-container{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .main-container-inner:hover > .title-container > .li-overlay{
        opacity: 90%;
        transform: translate(0%);
    }

    @media screen and (max-width: 900px){
        .main-container{
            width: 100%;
        }

        
    }


</style>


<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="main-container" style="background-image: url({base}{path}); {currentCatagory == id ? "opacity: 100%; transform: translate(0%);" : ""}" on:click={()=>{currentCatagory = parseInt(id)}} >
    <div class="main-container-inner">
        <div class="title-container">
            
            <div class="li-overlay" style="background-image: url({base}{path})">{title}</div>
            <h1 >{title}</h1>
        </div>
    </div>
    
</div>