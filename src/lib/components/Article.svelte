<script>
    //export let id, path, data, currentArticle
    export let data, currentArticle

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
        opacity: 50%;
        filter: invert(80%);
        -webkit-filter: invert(80%); /* Safari/Chrome */
        transition: .25s ease-in-out;
    }

    .article-back-button:hover > .back-button{
        -webkit-filter: invert(100%); /* Safari/Chrome */
        filter: invert(100%);
        opacity: 100%;
        transition: .25s ease-in-out;

    }

    

</style>

<div class="article-body">
    
    <div class="article-body-inner">
        

        

        <div class="article-right">
            
            {data.desc}
            
        </div>
        
    </div>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="article-back-button" on:click={() => {currentArticle = -1 * Math.random()}}>
        <img class="back-button" alt="back-button" src="src/static/images/arrow.png" width="25" length="200">
    </div>
    
</div>