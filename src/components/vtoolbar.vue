<template>
 <ul class="tools">

   <li>
     <el-tooltip content="Move" placement="bottom">
       <el-button class="tool-button" >
         <vicon name="arrows" scale="1"></vicon>
      </el-button>
    </el-tooltip>
  </li>
   <li>
     <el-tooltip content="Flip horizontally" placement="bottom">
       <el-button class="tool-button" >
         <vicon name="arrows-h" scale="1"></vicon>
      </el-button>
    </el-tooltip>
  </li>
   <li>
     <el-tooltip content="Flip vertically" placement="bottom">
       <el-button class="tool-button" >
         <vicon name="arrows-v" scale="1"></vicon>
      </el-button>
    </el-tooltip>
  </li>
   <li>
     <el-tooltip content="Zoom in" placement="bottom">
       <el-button class="tool-button" >
         <vicon name="search-plus" scale="1"></vicon>
      </el-button>
    </el-tooltip>
  </li>
   <li>
     <el-tooltip content="Zoom out" placement="bottom">
       <el-button class="tool-button" >
         <vicon name="search-minus" scale="1"></vicon>
      </el-button>
    </el-tooltip>
  </li>
   <li>
     <el-tooltip content="Crop" placement="bottom">
       <el-button class="tool-button" >
         <vicon name="crop" scale="1"></vicon>
      </el-button>
    </el-tooltip>
  </li>

</ul> 
</template>

<script>
import Vicon from './vicon';
export default {
  components: {
    Vicon,
  },
};
</script>

<style scoped>

.fa-icon{ 
  width: 15px;
  height: 15px;
}

.tools{
  margin: auto;
  padding: 0;
  background-color: rgba(0, 0, 0, .5);
  color: #fff;
  height: 32px;
  width: 192px;
  z-index: 2015;

}
.tools li{
  list-style: none;
}
.tool-button{
  background-color: transparent;
  border-width: 0;
  color: #fff;
  height: 32px;
  width: 32px;
  padding: 0;
}
.tool-button:hover{
  background-color: #99A9BF;
}
.tool-button:active{
  background-color: #324057;
}
</style>
