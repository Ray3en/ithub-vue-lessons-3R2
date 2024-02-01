<template>
    <header>
        <div class="logo"></div>
        <ul class="menu_wrapper">
            <li>Home</li>
            <li>About</li>
            <li>Contacts</li>
        </ul>
        <div class="menu_burger">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </header>
</template>


<style>
    header{
        background-color: antiquewhite;
        padding: 50px 40px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .logo {
        width: 50px;
        height: 50px;
        background-color: brown;
        border-radius: 50%;
    }
    .menu_wrapper{
        display: flex;
        list-style-type: none;
        gap: 20px;
        font-size: 30px;
    }

    .menu_burger{
        display: none;
        flex-direction: column;
        justify-content: space-between;
        width: 30px;
        height: 25px;
    }

    .menu_burger > span {
        height: 4px;
        width: 100%;
        background-color: black;
    }

    @media(max-width: 600px){
        .menu_burger{
            display: flex;
        }
        .menu_wrapper{
            display: none;
        }
    }

</style>