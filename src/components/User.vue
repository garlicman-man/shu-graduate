<template>
  <div>哈哈哈</div>
</template>

<script>
export default {
  created(){
  //   this.$axios.get('/users/getUserInfo?id=1').then(res=>{
  //   console.log(res)
  // })
    this.$axios.get('/apis/users/getUserInfo?id=1').then(res=>{
      console.log(res.data)
    })

  }
}
</script>


