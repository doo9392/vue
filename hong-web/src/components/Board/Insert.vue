<template>
    <div :class="$style.insert">
        <div :class="$style.postArea">
            <form action="/_BOARD/BOARD_INSERT.php" method="post" enctype="multipart/form-data">
                <textarea name="content" />
                <div :class="$style.insetimg">
                    <div :class="$style.imglist" v-if="false">
                        <img v-for="(c, index) in imgList" :src="c.link">
                    </div>
                    <div :class="$style.imgbtn">
                        <label for="image">
                            <img src="/img/board/insert_img.svg" alt="Insert Image" for="image">
                        </label>
                        <input :class="$style.file" type="file" id="image" name="image" @change="ImgInsert" :value="imgName" />
                    </div>
                </div>
                <input :class="$style.btn" type="submit" value="등록">
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name : 'Insert',
        data() {
            return {
                imgName : ''
            }
        },
        methods : {
            ImgInsert(event) {
                this.imgName = event.target.value;
            }
        }
    }
</script>

<style module>
    .insert {width:800px; margin:0 auto; overflow:hidden; border-bottom:1px solid #dedede; padding-bottom:30px;}
    .insert .postArea {width:100%;}
    .insert .postArea>form {width:100%; overflow:hidden;}
    .insert .postArea>form>textarea {width:100%; height:130px; border-radius:5px; display:block; margin-bottom:15px;}
    .insert .postArea>form {width:100%; overflow:hidden;}
    .insert .postArea>form img {display:block; width:100%;}
    .insert .postArea>form .insetimg {overflow:hidden; width:80%; float:left;}
    .insert .postArea>form .insetimg .imglist {float:left; overflow:hidden;}
    .insert .postArea>form .insetimg .imgbtn {position:relative; float:left; width:5%; overflow:hidden; cursor:pointer; border:1px dotted #222; padding:5px; border-radius:5px;}
    .insert .postArea>form .insetimg .imgbtn label {display:block; cursor:pointer;}
    .insert .postArea>form .insetimg .imgbtn .file {position:absolute; left:0; top:0; width:100%; height:100%; opacity:0; z-index:-1;}
    .insert .postArea>form>.btn {float:right; width:10%; cursor:pointer; border-radius:5px; height:44px;}

    @media screen and (max-width:800px) {
        .insert {width:90%; border-bottom:0; padding-bottom:0; padding:3vw 0;}
        .insert .postArea>form>textarea {height:30vw; border-radius:1vw; margin-bottom:3vw;}
        .insert .postArea>form .insetimg {width:70vw;}
        .insert .postArea>form .insetimg .imgbtn {padding:0.8vw; border-radius:1vw; width:10vw; height:10vw; box-sizing:border-box;}
        .insert .postArea>form>.btn {float:right; width:18vw; border-radius:1vw; height:10vw; font-size:4vw;}
    }
</style>
