<template>
    <h2>Login page</h2>
    
    <label>
        Enter password
        <input @keydown="login"/>
    </label>
</template>


<script>
    export default{
        methods: {
                login(e){
                    if (e.key === 'Enter'){
                        localStorage.setItem('password', e.target.value)
                    }
                }
            }
    }
</script>