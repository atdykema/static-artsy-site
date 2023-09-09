<script>
    //export let id, path, data, currentArticle
    export let data, currentArticle
    import { base } from '$app/paths'

    

</script>

<style>
    *{
        margin: 20px 20px 20px 20px;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        color: whitesmoke;
        font-size: 2rem;
    }

    .article-body{
        display: flex;
        flex-direction: column;
        width: 80%;
        height: 90%;
        justify-content: space-evenly;
        overflow: hidden;
    }

    .article-back-button{
        display: flex;
        width: 100%;
        height: 25px;
    }

    .article-body-inner{
        display: flex;
        flex-direction: column;
        overflow: hidden;
        height: 100%;
        width: 100%;
        
    }
    
    .article-left{
        display: flex;
        height: 40%;
        justify-content: center;
    }

    .article-right{
        display: flex;
        flex-direction: column;
        overflow-y: scroll;
        height: 60%;
        margin: 0;
        justify-content: start;
        text-align: center;

        
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
        overflow-x: hidden; /* Hide horizontal scrollbar */
        
    

    /* Hide scrollbar for Chrome, Safari and Opera */
    }

    *::-webkit-scrollbar {
        display: none;
    }
    
    .back-button{
        opacity: 75%;
        filter: invert(80%);
        -webkit-filter: invert(80%); /* Safari/Chrome */
        transition: .25s ease-in-out;
        animation: fade 5s;
    }

    .article-back-button:hover > .back-button{
        -webkit-filter: invert(100%); /* Safari/Chrome */
        filter: invert(100%);
        opacity: 100%;
        transition: .25s ease-in-out;

    }

    .title{
        opacity: 25%;
        transition: .2s ease-in-out;
        animation: fade 3s;
    }

    .title:hover{
        opacity: 75%;
        transition: .2s ease-in-out;
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
            opacity: 25%;
            transform: translateY(0%);
        }
    }

    

    

</style>

<div class="article-body">
    
    <div class="article-body-inner">
        
        <div class="title" style="display: flex; flex-direction:column; width: 100%; letter-spacing: 2rem; font-size: 7rem; text-align: center">
            <a href="{data.href}" style="width: 100%; letter-spacing: 2rem; font-size: 7rem; text-align: center" target="_blank" rel="noreferrer">
                {data.title}
            </a>
        </div>
        
        
    </div>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="article-back-button" on:click={() => {currentArticle = -1 * Math.random()}}>
        <img class="back-button" alt="back-button" src="{base}/images/arrow.png" width="25" length="200">
    </div>
    
</div>