<script>
    export let currentArticle, id, path, data
    import { base } from '$app/paths'
</script>

<style>

    *{
        text-align: center;
    }
    
    .main-container{
        flex: 1;
        height: 100%;
        display: flex;
        overflow: hidden;
        margin: 0;
        align-items: center;
        justify-content: center;
        transition: 1s  cubic-bezier( 0.12, -0.01, 0, 1 );
        flex-direction: column;
        background-position: center;
        background-size:cover;
        background-repeat: no-repeat;
        opacity: 15%;
        filter: grayscale(100%);
    }

    .main-container:hover {
        flex: 5;
        opacity: 75%;
        filter: grayscale(0);
        transition: 1s  cubic-bezier( 0.12, -0.01, 0, 1 );
    }

    .main-container:hover > .main-container-inner{
        opacity: 100%;
    }
    

    .main-container-inner{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
        transition: .25s ease-in-out;
        opacity: 0%;
    }
    
</style>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="main-container" style="background-image: url({base}{path});" on:click={()=>{currentArticle = id}}>
    <div class="main-container-inner">
        
    </div>
    
</div>