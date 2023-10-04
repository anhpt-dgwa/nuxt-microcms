<template>
  <HeroSlider />
  <Category />
  <section class="products section bg-gray">
    <div class="container">
      <div class="row">
        <div class="title text-center">
          <h2>Trendy Products</h2>
        </div>
      </div>
      <div class="row">
        <Product />
      </div>
    </div>
  </section>
  <div id="wrp"></div>
</template>

<script>
export default {
  mounted() {
    $(document).ready(function(){
      fetch('https://yuzobcsj9a.microcms.io/api/v1/blogs', {
        headers: {
          "X-API-KEY": "q3wOL4p41lveC4pSEBGiMGIbgkf8FCFxltjg"
        }})
        .then(response =>{
            if(response.ok){
                return response.json();
            }else{
                return Promise.reject(new Error('something wrong'));
            }
        })
        .then(json =>{
            var content = json.contents;
            for(var i = 0; i < content.length; i++){
                //console.log(json.contents[i].title);
                var d = new Date(content[i].publishedAt);
                var ds = "<dt>" + d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate() + "</dt>";
                var ts = '<dd>' + content[i].title + "</dd>";
                $("#wrp").append("<dl>" + ds + ts + "</dl");
            }
        })
        .catch(e => {
            console.log(e.message);
        });
    });
  }
}
</script>