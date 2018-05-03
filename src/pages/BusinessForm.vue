<template>
    <el-form ref="form" :model="form" label-width="80px" height="300px">
        <el-row :gutter="20">
            <el-col :span="12">
                <el-form-item label="名称">
                    <el-input v-model="form.name" size="mini"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item label="客户">
                    <el-input v-model="form.customer" size="mini"></el-input>
                </el-form-item>
            </el-col>
        </el-row>
        <!-- 业务员由系统根据当前登录人员自动填入 -->
        <el-row :gutter="20">
            <el-col :span="12">
                <el-form-item label="目标单数">
                    <el-input v-model="form.goal_num" size="mini"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item label="目标天数">
                    <el-input v-model="form.goal_days" size="mini"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="8" v-if="false">
                <el-form-item label="完成单数">
                    <el-input v-model="form.complete" :disabled="true" size="mini"></el-input>
                </el-form-item>
            </el-col>
        </el-row>

        <el-row :gutter="20">
            <el-col :span="12">
                <el-form-item label="应付金额">
                    <el-input v-model="form.payment" size="mini"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item label="已付金额">
                    <el-input v-model="form.half_payment" size="mini"></el-input>
                </el-form-item>
            </el-col>
        </el-row>
        <el-form-item label="店铺名">
            <el-input v-model="form.shop" size="mini"></el-input>
        </el-form-item>
        <el-form-item label="关键字">
            <el-input v-model="form.keywords" type="textarea"></el-input>
        </el-form-item>
        <el-form-item label="描述">
            <el-input v-model="form.desc" type="textarea"></el-input>
        </el-form-item>
        <el-form-item label="产品图片">
            <!-- <el-input v-model="form.pic"></el-input> -->
            <Upload></Upload>
        </el-form-item>
<!-- 
        <el-form-item>
            <el-button type="primary">确定</el-button>
            <el-button >取消</el-button>
        </el-form-item> -->
    </el-form>
</template>
<script>
    import Upload from '../components/Upload.vue'
    export default{
        name: 'BusinessForm',
        props: ['form'],
        components: {
            Upload
        }
    }
</script>
<style lang="less">
    .half-width{
        display: inline-block;
        width: 49%;
    }
</style>