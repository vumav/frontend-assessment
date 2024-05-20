<template>
  <div class="body">
    <div class="banner">
        <div class="banner__caption">
            <h1 class="banner__title">Hello Developer!</h1>
            <p class="banner__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
    </div>
    <div class="container">
        <div class="posts">
            <div class="post__item">
                <img class="post__image" :src="require('@/components/images/400x300.png')" />
                <p class="post__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <a class="post__read-more" href="#">Read More</a>
            </div>
            <div class="post__item">
                <img class="post__image" :src="require('@/components/images/400x300.png')" />
                <p class="post__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <a class="post__read-more" href="#">Read More</a>
            </div>
            <div class="post__item">
                <img class="post__image" :src="require('@/components/images/400x300.png')" />
                <p class="post__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
                <a class="post__read-more" href="#">Read More</a>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'ExerciseOne'
}
</script>

<style scoped>
.banner{
    background-image: url("images/1920x650.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    padding: 100px 0;
    position: relative;
}
.banner::before{
    top: 0;
    content: "";
    background: rgba(0, 0, 0, 0.4);
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
}
.banner__title{
    text-align: center;
    color: #fff;
    z-index: 1;
    position: relative;
    font-weight: bold;
}
.banner__description{
    text-align: center;
    color: #fff;
    z-index: 1;
    position: relative;
}
.posts{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 40px;
    margin: 40px auto;
    max-width: 800px;
}
.post__item{
    padding: 15px 15px 45px 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
    position: relative;
}
.post__image{
    width: 100%;
    border-radius: 5px;
}
.post__text{
    margin-top: 10px;
    text-align: center;
    font-size: 14px;
}
.post__read-more{
    border: 2px solid #000;
    border-radius: 20px;
    color: #000;
    font-weight: bold;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    height: 35px;
    line-height: 30px;
    width: 120px;
    text-decoration: none;
    transition: all 0.5s ease;
    display: block;
    text-align: center;
    position: absolute;
    bottom: 15px;
    left: 50%;
    transform: translateX(-50%);
}
.post__read-more:hover{
    text-decoration: none;
    background: #000;
    color: #fff;
}
@media only screen and (max-width: 768px) {
    .banner {
        padding: 80px 0;
    }
    .posts{
        grid-template-columns: 1fr;
    }
}
</style>