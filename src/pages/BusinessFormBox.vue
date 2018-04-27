<template>
    <!-- <div> -->
        <el-dialog title="新增业务订单" :visible="dialogFormVisible2" 
            width="600px"
            :lock-scroll="true"
            :close-on-click-modal="false"
            :modal-append-to-body=false
            :close-on-press-escape=true
            :before-close="test"
            >
            <business-form :form="form"></business-form>
          <!-- <el-form :model="form">
            <el-form-item label="活动名称" :label-width="formLabelWidth">
              <el-input v-model="form.name" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="活动区域" :label-width="formLabelWidth">
              <el-select v-model="form.region" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </el-form> -->
          <div slot="footer" class="dialog-footer">
            <el-button @click="hide">取 消</el-button>
            <el-button type="primary" @click="hide">确 定</el-button>
          </div>
        </el-dialog>
    <!-- </div> -->
</template>
<script>
import BusinessForm from './BusinessForm.vue'
export default{
    name: 'BusinessFormBox',
    components: {
        BusinessForm
    },
    props: ['dialogFormVisible'],
    data(){
        return{
            dialogFormVisible2: this.dialogFormVisible,
            formLabelWidth: '120',
            form: {}
        }
    },
    created: function(){
        // this.show();
    },
    methods: {
        show: function(){
            this.dialogFormVisible2 = true;
        },
        hide: function(){
            this.dialogFormVisible2 = false;
        },
        test: function(){
            this.hide();
        }
    },
    watch: {
        dialogFormVisible(val){
            this.dialogFormVisible2 = val;
        },
        dialogFormVisible2(val){
            this.$emit('update:dialogFormVisible', val);
        }
    }
}
</script>
<style lang="less">
    @blue: #3366ff;
    .el-dialog__body{
        max-height: 400px;
        overflow: auto;
        border: 1px solid @blue;
        border-right-width: 0;
        border-left-width: 0;
    }

    .el-input{
        // width: 80%;
    }
</style>