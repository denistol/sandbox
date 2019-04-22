<template>
    <div class="item">
        <el-row class="header">
            <el-col :span="8" class="title">Гастроэнтерология</el-col>
            <el-col :span="16" class="info">4 заболевания</el-col>
            <i @click="expanded = !expanded" class="el-icon-arrow-down"></i>

        </el-row>

        <el-row v-show="expanded" class="body">

            <el-col :span="8" class="title">
                Заболевания по данному направлению
            </el-col>

            <el-col :span="16" class="info">
                <el-select size="small" v-model="value" placeholder="Добавить заболевание">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
                <div class="selected-items">
                    <div class="selected-items__item">Васкулит <i class="el-icon-close"></i> </div>
                    <div class="selected-items__item">Дерматомиозит <i class="el-icon-close"></i> </div>
                    <div class="selected-items__item">Васкулит <i class="el-icon-close"></i> </div>
                    <div class="selected-items__item">Дерматомиозит <i class="el-icon-close"></i> </div>
                </div>
            </el-col>
        </el-row>

    </div>
</template>
<script>
export default {
    data() {
      return {
          expanded:false,
        options: [{
          value: 'HTML',
          label: 'HTML'
        }, {
          value: 'CSS',
          label: 'CSS'
        }, {
          value: 'JavaScript',
          label: 'JavaScript'
        }],
        value: []
      }
    }
};
</script>

<style lang="scss" scoped>
/deep/
.el-select{
    width: 100%;
}
.item{
padding: 0 15px;
margin: 10px 5px;
background: #FFFFFF;
box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.18);
border-radius: 2px;

    .header{
        display: flex;
        align-items: center;
        height: 48px;
        border-bottom: 1px solid #eee;
        .title{
            font-family: sans-serif;
            font-style: normal;
            font-weight: bold;
            font-size: 16px;
            line-height: 23px;

            color: rgba(0, 0, 0, 0.87);
        }
        .info{
            font-family: sans-serif;
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 20px;

            color: rgba(0, 0, 0, 0.6);
        }
    }
    .body{
        padding: 15px 0;
        .title{
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 20px;

            color: rgba(0, 0, 0, 0.6);

            mix-blend-mode: normal;
        }
    }
    .selected-items{
        &__item{
            margin: 10px 0;
        }
    }
}
</style>


