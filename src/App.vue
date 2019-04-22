<template>
  <div id="app">
    <Nav></Nav>
    <el-row>

      <el-col :span="12">
        <Item v-for="i in 5" />
      </el-col>

      <el-col :span="12">



          <div class="add-new-item" >
            <el-row class="add-new-item__header" type="flex" align="middle">

              <el-col :span="12">
                <div class="title">
                    <i class="el-icon-edit-outline"></i> Добавить новое направление
                </div>
              </el-col>

                <el-col :span="12" class="add-btn">
                  <el-row justify="end" type="flex">
                    <el-button type="text">Создать</el-button>
                  </el-row>
                </el-col>
              </el-row>

              <el-row class="add-new-item__body">
                <el-col :span="12">some</el-col>
                <el-col :span="12">some</el-col>
              </el-row>

            </div>








      </el-col>

    </el-row>
    
  </div>
</template>

<script>
import Nav from './components/Nav'
import Item from './components/Item'

export default {
  name: 'App',
  components: {
    Nav,
    Item,
  }
}
</script>

<style lang="scss">

body{
  background: #E5E5E5;
}
*{
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.add-new-item{
  &__header{
    border-bottom: 1px solid #eee;
    min-height: 48px;
  }
  &__body{
    padding: 15px 0;  
  }
  // display: flex;
  align-items: center;
  justify-content: center;
 
  padding: 0 15px;
  margin: 10px 5px;
  background: #FFFFFF;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.18);
  border-radius: 2px;
  .title{
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: normal;

    color: rgba(0, 0, 0, 0.87);
  }
}
</style>
